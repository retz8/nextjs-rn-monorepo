import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export default function generator(plop) {
  plop.setActionType("runCommand", function (answers, config) {
    try {
      console.log(`Running command: ${config.command}`);
      const output = execSync(config.command, { stdio: "inherit" }); // Sync execution
      return null;
    } catch (error) {
      throw new Error(`Command failed: ${error.message}`);
    }
  });

  // create a generator
  plop.setGenerator("next", {
    description: "Generate a new Next.js app with monorepo support",
    // gather information from the user
    prompts: [
      {
        type: "input",
        name: "appName",
        message: "What should we call this app?",
      },
    ],
    // perform actions based on the prompts
    actions(answers) {
      const actions = [];
      if (!answers) return actions;

      const { appName } = answers;
      const appPath = `./apps/web/${appName}`;

      // 0. check if the web folder exists
      if (!fs.existsSync("apps/web")) {
        fs.mkdirSync("apps/web");
      }

      // 0. check if the app already exists
      if (fs.existsSync(appPath)) {
        throw new Error("App already exists");
      }

      // 1. run `pnpm create next-app`
      actions.push({
        type: "runCommand",
        command: `pnpm create next-app@14 ${appPath} --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --skip-install --use-pnpm `,
      });

      actions.push(() => {
        const filesToDelete = [
          "package.json",
          "tsconfig.json",
          "next.config.mjs",
          "tailwind.config.ts",
        ];
        filesToDelete.forEach((file) => {
          const filePath = path.join(appPath, file);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        });
      });

      const data = {
        appName: appName,
      };

      // 2. add the template files
      actions.push({
        type: "addMany",
        templateFiles: `templates/next/**`,
        destination: `./apps/web/{{appName}}`,
        base: `templates/next`,
        data,
        abortOnFail: true,
      });

      // 4. run `pnpm install`
      console.log("appPath", appPath);
      actions.push({
        type: "runCommand",
        command: `cd ${appPath} && pnpm install`, // Pass appName as an argument
        description: `Running install to install dependencies for ${appName}...`,
      });

      return actions;
    },
  });
}
