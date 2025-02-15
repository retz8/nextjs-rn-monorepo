# Nextjs + ReactNative Monorepo Micro Frontend

## Internal Packages

### `tsconfig.json`

- `extends`: "@repo/typescript-config/base"

  > [NOTE]
  > You can use different extends options provided by "@repo/typescript-config"

## Notes

`rn-web` branch: I will try using "react-native-web" for ui package.

### Starting guides

- need to install pnpm globally first
- I think using rimraf is a good idea for cleaning up the dist folder completely.

### Tool & Dependency Versions

- pnpm: 10.2.1

### To-Do

- turbo generate으로 적절한 셋업을 갖춘 기본 next js application 생성하는 코드 작성
  -> 이때, test-web에 설치된 패키지들 주의 깊게 확인. react-native-web이 있어야함.
- expo app에서 되는지 확인: 다시 시작. nativewind가 복잡한 문제가 있음 (nativewind는 tailwind v3과만 호환됨)
