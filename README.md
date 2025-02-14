# Nextjs + ReactNative Monorepo Micro Frontend

## Notes

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

### Tool & Dependency Versions

- pnpm: 10.2.1
