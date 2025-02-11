## **🚀 Dependency Management for `@repo/ui` (Hybrid UI Library)**  

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