const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");

const projectRoot = path.resolve(__dirname, "..");
const sourcePath = path.join(projectRoot, "apresentacao.js");
const publicDir = path.join(projectRoot, "public");

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Arquivo nao encontrado: ${sourcePath}`);
}

fs.mkdirSync(publicDir, { recursive: true });
process.chdir(publicDir);

const source = fs.readFileSync(sourcePath, "utf8");
const compiledModule = new Module(sourcePath, module);

compiledModule.filename = sourcePath;
compiledModule.paths = Module._nodeModulePaths(path.dirname(sourcePath));
compiledModule._compile(source, sourcePath);
