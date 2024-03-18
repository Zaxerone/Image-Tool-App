const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const sharp = require("sharp");
const fs = require("node:fs");
const path = require("node:path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("./assets/index.html");
}

app.whenReady().then(createWindow);

ipcMain.handle(
  "convertImage",
  async (event, { inputFilePath, outputFormat, outputDirectory }) => {
    const supportedFormats = [
      "jpeg",
      "png",
      "webp",
      "gif",
      "avif",
      "tiff",
      "jpg",
      "svg",
    ];
    if (!supportedFormats.includes(outputFormat.toLowerCase())) {
      throw new Error(`Unsupported output format: ${outputFormat}`);
    }

    const name = path.basename(inputFilePath, path.extname(inputFilePath));
    const outputFilePath = path.join(
      outputDirectory,
      `${name}.${outputFormat}`
    );

    try {
      const imageBuffer = await fs.promises.readFile(inputFilePath);
      const convertedBuffer = await sharp(imageBuffer)
        .toFormat(outputFormat.toLowerCase())
        .toBuffer();
      await fs.promises.writeFile(outputFilePath, convertedBuffer);
      return outputFilePath;
    } catch (err) {
      throw err;
    }
  }
);

ipcMain.handle("chooseDirectory", async (event) => {
  try {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ["openDirectory"],
    });
    if (!result.canceled) {
      return result.filePaths[0];
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
});
