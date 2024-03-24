const fs = require("fs-extra");
const path = require("path");

const destinationPath = path.join(
  __dirname,
  "builds",
  "image-tool-app-win32-x64",
  "resources",
  "app",
  "node_modules"
);

const sourcePath = path.join(__dirname, "node_modules");

fs.copy(sourcePath, destinationPath)
  .then(() => console.log("Modules moved !"))
  .catch((err) => console.error("Error while moving modules ! :", err));
