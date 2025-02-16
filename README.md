# Nextjs + ReactNative Monorepo Micro Frontend

## Generate Nextjs Application

```bash
pnpm create:next
```

This command will generate a new nextjs application in the `apps/web` folder.

Example usage of internal packages:

```ts
"use client";

import { Button } from "@repo/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button text="Click me" onClick={() => console.log("Hello")} />
      </main>
    </div>
  );
}
```

## Internal Packages

#### `tsconfig.json`

- `extends`: "@repo/typescript-config/base"

  > [NOTE]
  > You can use different extends options provided by "@repo/typescript-config"

- `compilerOptions`

  - `strict`: if it's true, it will enable all the strict type checking options
    > [NOTE]
    > most of the `tsconfig.json` in this repo are using `strict: true` option.
  - `paths`: defines the paths to the packages
  - `plugins`: defines the plugins to be used in the project

  check out more options [here](https://www.typescriptlang.org/tsconfig/#compilerOptions)

- `include`: defines the files that should be compiled in TS

- `exclude`: defines the files that should not be compiled in TS

  > ex) `node_modules` - packages are compiled in their own packages, no need to compile them again with TS

  > **[IMPORTANT]** > `include` and `exclude` are not inherited from the base config,
  > you must define them in each package's `tsconfig.json`.

## Useful Commands

#### `pnpm turbo ls`

list all the packages and apps in the monorepo. Also shows where they are located.

#### `pnpm turbo ls --filter ...<package-name>`

List all the package and apps that depends on (or itself) the given filter package

#### `pnpm turbo run`

List all the tasks that can be run in the monorepo. Each task also includes app and package names that it can be run on.

## Dev Notes

`rn-web` branch: I will try using "react-native-web" for ui package.

### 02.14.25

I learned an important lesson.
Nativewind is not working well with Expo. It's not compatible with Tailwind V4 and recent Expo versions.
It crashes too much when using Nativewind with Expo.

So I decided to adopt "React-Native-Web".

Until now, I separate UI library component into "native.tsx", "web.tsx", and "styles.css".
So the "styles.css" contains single tailwind css code for both native and web.

But from now on, I will combine "native.tsx" and "web.tsx" into a single component file.
And apply StyleSheet.create() for native styles on "styles.ts" file.
Web app with transpile Native code to JS with react-native-web.

### Starting guides

- need to install pnpm globally first
- I think using rimraf is a good idea for cleaning up the dist folder completely.

### Tool & Dependency Versions

- pnpm: 10.2.1

### To-Do

- turbo generate으로 적절한 셋업을 갖춘 기본 next js application 생성하는 코드 작성
  -> 이때, test-web에 설치된 패키지들 주의 깊게 확인. react-native-web이 있어야함.
- expo app에서 되는지 확인: 다시 시작. nativewind가 복잡한 문제가 있음 (nativewind는 tailwind v3과만 호환됨)
