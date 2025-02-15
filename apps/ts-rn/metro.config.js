const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const workspaceRoot = path.resolve(__dirname, "../.."); // Your monorepo root
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// 2. Let Metro know where to resolve packages
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

// 4. Ensure Metro can resolve TypeScript files and ESM from @repo/ui
// config.resolver.sourceExts = [...config.resolver.sourceExts, "ts", "tsx"];
// config.transformer = {
//   ...config.transformer,
//   babelTransformerPath: require.resolve("react-native-babel-transformer"),
// };

module.exports = config;
