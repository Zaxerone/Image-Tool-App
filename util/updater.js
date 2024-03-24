const { app, dialog } = require("electron");
const axios = require("axios");
const fs = require("fs-extra");
const path = require("node:path");
const extract = require("extract-zip");

const serverBaseUrl =
  "https://api.github.com/repos/Zaxerone/image-tool-app/releases/latest";

function downloadUpdate(assetUrl, fileName) {
  const downloadPath = path.join(app.getPath("temp"), fileName);
  const writer = fs.createWriteStream(downloadPath);

  return axios({
    url: assetUrl,
    method: "GET",
    responseType: "stream",
  }).then((response) => {
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  });
}

function extractAndReplaceExecutable(zipFilePath) {
  const extractPath = app.getPath("temp");
  return extract(zipFilePath, { dir: extractPath })
    .then(() => {
      const newExecutablePath = path.join(
        extractPath,
        "image-tool-app",
        "image-tool-app.exe"
      );
      const oldExecutablePath = path.join(
        app.getAppPath(),
        "image-tool-app.exe"
      );

      fs.copySync(newExecutablePath, oldExecutablePath);
      return fs.removeSync(zipFilePath);
    })
    .catch((error) => {
      console.error("Error while extracting :", error);
    });
}

function checkForUpdates() {
  axios
    .get(serverBaseUrl)
    .then((response) => {
      const latestRelease = response.data;
      const latestVersion = latestRelease.tag_name;
      const asset = latestRelease.assets[0];

      if (latestVersion !== app.getVersion() && asset) {
        dialog
          .showMessageBox({
            type: "info",
            message: "A new update is available. Would you install it ?",
            buttons: ["Download", "Cancel"],
          })
          .then((response) => {
            if (response.response === 0) {
              downloadUpdate(asset.browser_download_url, asset.name)
                .then(() => {
                  console.log("Download finished.");
                  const zipFilePath = path.join(
                    app.getPath("temp"),
                    asset.name
                  );
                  extractAndReplaceExecutable(zipFilePath);
                })
                .catch((error) => {
                  console.error("Error while downloading update :", error);
                });
            }
          });
      } else {
        console.log("The app is up-to-date !");
      }
    })
    .catch((error) => {
      console.error("Error while getting details about the version", error);
    });
}

module.exports = {
  checkForUpdates,
};
