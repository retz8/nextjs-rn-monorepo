import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import globals from "globals";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use React Native.
 *
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactNative.configs.recommended, // React Native ESLint 설정 추가
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node, // React Native는 Node 환경도 일부 사용
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-native": pluginReactNative, // React Native 플러그인 추가
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginReactNative.configs.recommended.rules, // 기본 React Native 규칙 추가
      "react/react-in-jsx-scope": "off", // New JSX transform 적용
      "react-native/no-inline-styles": "warn", // 인라인 스타일 사용 경고
      "react-native/no-color-literals": "warn", // 색상 리터럴 사용 경고
      "react-native/no-unused-styles": "warn", // 사용되지 않는 스타일 경고
      "react-native/no-single-element-style-arrays": "warn", // 단일 요소 스타일 배열 경고
    },
  },
];
