const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const sharp = require("sharp");
const path = require("node:path");
const fs = require("node:fs");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    backgroundColor: "#ffffff",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("assets/index.html");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
ipcMain.handle(
  "convertImage",
  async (event, { inputFilePath, outputFormat, outputDirectory }) => {
    const supportedFormats = require("./formats.js");
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

app.whenReady().then(createWindow);

ipcMain.on("minimize-window", () => {
  if (mainWindow) {
    mainWindow.minimize();
  }
});

ipcMain.on("maximize-window", () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on("close-window", () => {
  if (mainWindow) {
    mainWindow.close();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
