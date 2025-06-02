import fs from "fs";
import path from "path";

// Получаем массив путей
const extractPathsFromExports = (content) => {
  // поиска путей в строках вида:
  // export { Name } from './path/to/file.js';
  const regex = /from\s+['"]([^'"]+)['"]/g;
  const matches = [...content.matchAll(regex)];
  return matches.map((match) => match[1]);
};

const indexPath = path.resolve(".", "dist", "index.js");
const componentsPath = extractPathsFromExports(
  fs.readFileSync(indexPath, "utf8"),
);

const exportsMap = {
  ".": {
    import: "./dist/index.js",
    types: "./dist/index.d.ts",
  },
};

componentsPath.forEach((componentPath) => {
  const name = path.basename(componentPath, ".js");
  exportsMap[`./components/${name}`] = {
    import: componentPath.replace("./", "./dist/"),
    types: "./dist/index.d.ts",
  };
});

const packageJsonPath = path.resolve(".", "package.json");
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
packageJson.exports = exportsMap;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");

console.log("Exports updated in package.json");
