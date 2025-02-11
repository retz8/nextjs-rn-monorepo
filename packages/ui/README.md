# **🚀 Dependency Management for `@repo/ui` (Hybrid UI Library)**

This UI library is designed to support **React + React Native (including Web) + TailwindCSS (via NativeWind)** as a hybrid UI solution.  
To ensure optimal dependency management, we follow these rules:

---

## **📌 1. Dependency Structure**

### **✅ `peerDependencies` (Required Dependencies, Managed by Apps)**

- These are required dependencies that should be **installed and managed by the applications (Next.js or React Native) that use this library**.
- This approach prevents version conflicts and allows each application to manage its own `react` and `react-native` versions.

```json
"peerDependencies": {
  "react": "19.0.0",
  "react-native": "0.74.5",
  "tailwindcss": "4.0.6",
  "nativewind": "4.1.23"
}
```

### **✅ `peerDependenciesMeta` (Auto-install for Development)**

- `peerDependencies` are **not installed automatically** in development.
- To avoid issues when developing the UI library, `peerDependenciesMeta` is used to **allow automatic installation in development mode**.

```json
"peerDependenciesMeta": {
  "react": {
    "optional": true
  },
  "react-native": {
    "optional": true
  },
  "tailwindcss": {
    "optional": true
  },
  "nativewind": {
    "optional": true
  }
}
```

---

### **✅ `devDependencies` (Only for UI Library Development)**

- These are dependencies required **only for developing and building the UI library**.
- Includes build tools, type definitions, and linting-related packages.

```json
"devDependencies": {
  "@repo/eslint-config": "workspace:*",
  "@repo/typescript-config": "workspace:*",
  "@types/react": "^18.2.14",
  "@types/react-native": "^0.73.0",
  "tsup": "^8.0.1",
  "typescript": "5.5.4"
}
```

---

## **📌 2. Dependency Management Strategy**

### **✅ Ensuring Dependencies are Installed During Development**

- `peerDependenciesMeta` ensures `react`, `react-native`, etc., are **installed automatically** when developing the UI library.
- This prevents missing dependencies while working inside `@repo/ui`.

### **✅ Using `tsup` for Library Build**

- The library is built using `tsup`, and `noEmit: false` ensures `.d.ts` type definitions are included.

---

## **📌 3. Maintenance & Versioning Guide**

### **1️⃣ When Developing the UI Library**

- Running `pnpm install` will automatically install dependencies thanks to `peerDependenciesMeta`.
- The library can be built using:
  ```sh
  pnpm build
  ```

### **2️⃣ When Using the UI Library in Applications (Next.js / React Native)**

- Applications **must install `react`, `react-native`, `tailwindcss`, and `nativewind` themselves.**
- Thanks to `peerDependencies`, **each app can maintain its own versions without conflicts**.

### **3️⃣ Version Update Policy**

- **Use `^` for minor version updates** (e.g., `"react": "^19.0.0"`)
- **For major breaking changes, update the UI library version accordingly**

---

## **🚀 Final Summary**

✅ **Declare `react`, `react-native`, `tailwindcss`, and `nativewind` in `peerDependencies` so that each application manages its own versions.**  
✅ **Use `peerDependenciesMeta` to allow auto-installation for development.**  
✅ **Keep build tools, type definitions, and linting dependencies inside `devDependencies`.**  
✅ **Use `workspace:*` in Monorepo to enforce consistent versions across projects.**

## **🚀 UI Library Build Configuration (`tsup`)**

This UI library is built using **`tsup`**, a fast and efficient TypeScript bundler. The configuration ensures compatibility across **Next.js (Web) and React Native**, optimizing for performance and maintainability.

---

# **📌 `tsup` Configuration Overview**

```ts
import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: {
    index: "src/index.tsx",
  },
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ["cjs", "esm"],
  external: ["react", "react-native"],
  dts: true,
  splitting: false,
  treeshake: true,
  ...options,
}));
```

---

## **📌 Explanation of Configuration Options**

| Option                                    | Description                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------ |
| **`entry: { index: "src/index.tsx" }`**   | Sets the entry file for the build process.                                                 |
| **`banner: { js: "'use client'" }`**      | Ensures the package is marked as a client component for Next.js.                           |
| **`clean: true`**                         | Deletes the `dist` folder before building to ensure a fresh build.                         |
| **`format: ["cjs", "esm"]`**              | Generates both CommonJS (`.cjs`) and ESModule (`.esm.js`) formats for broad compatibility. |
| **`external: ["react", "react-native"]`** | Marks `react` and `react-native` as external dependencies to prevent bundling issues.      |
| **`dts: true`**                           | Generates TypeScript declaration files (`.d.ts`) to support TypeScript users.              |
| **`splitting: false`**                    | Disables code-splitting to prevent potential issues in React Native.                       |
| **`treeshake: true`**                     | Removes unused code to optimize the final bundle size.                                     |

---

## **📌 `package.json` Configuration**

To ensure the correct module format is used in different environments, the `package.json` includes the following `exports` configuration:

```json
{
  "name": "@repo/ui",
  "version": "0.0.0",
  "main": "./dist/index.cjs",
  "module": "./dist/index.esm.js",
  "types": "./dist/index.d.ts",
  "exports": {
    "import": "./dist/index.esm.js",
    "require": "./dist/index.cjs",
    "react-native": "./dist/index.esm.js",
    "default": "./dist/index.esm.js"
  },
  "sideEffects": false
}
```

### **📌 Explanation of `exports`**

| Key                                         | Usage                                                     |
| ------------------------------------------- | --------------------------------------------------------- |
| **`"import": "./dist/index.esm.js"`**       | Used for modern ESModules (Next.js & Web environments).   |
| **`"require": "./dist/index.cjs"`**         | Used for CommonJS environments (Node.js, older bundlers). |
| **`"react-native": "./dist/index.esm.js"`** | Ensures React Native uses the ESModule version.           |
| **`"default": "./dist/index.esm.js"`**      | Default export behavior for better compatibility.         |
| **`"sideEffects": false`**                  | Enables tree-shaking for optimal bundle size.             |

---

## **📌 Summary**

- **Uses `tsup` for fast and efficient TypeScript bundling** ✅
- **Supports both `cjs` and `esm` for compatibility across different environments** ✅
- **Externalizes `react` and `react-native` to avoid unnecessary bundling issues** ✅
- **Generates TypeScript declaration files (`.d.ts`) for better TypeScript support** ✅
- **Optimized for React Native and Next.js with correct `exports` configuration** ✅

This configuration ensures **maximum compatibility, optimal performance, and seamless integration across web (Next.js) and mobile (React Native).** 🚀🔥

Now, just run:

```sh
pnpm build
```

And your UI library is ready to be used! 🎉

---

This should be **perfect for your README**—let me know if you need any modifications! 😎🔥
