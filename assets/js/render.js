const { ipcRenderer } = require("electron");

function convertImage() {
  const inputFilePath = document.getElementById("fileInput").files[0].path;
  const outputFormat = document.getElementById("formatSelect").value;

  ipcRenderer
    .invoke("chooseDirectory")
    .then((directory) => {
      if (directory) {
        ipcRenderer
          .invoke("convertImage", {
            inputFilePath,
            outputFormat,
            outputDirectory: directory,
          })
          .then((outputFilePath) => {
            alert(
              `Image converted successfully. Output file: ${outputFilePath}`
            );
          })
          .catch((error) => {
            alert(`Error converting image: ${error.message}`);
          });
      }
    })
    .catch((error) => {
      alert(`Error choosing directory: ${error.message}`);
    });
}

document.getElementById("minimize-btn").addEventListener("click", () => {
  ipcRenderer.send("minimize-window");
});

document.getElementById("maximize-btn").addEventListener("click", () => {
  ipcRenderer.send("maximize-window");
});

document.getElementById("close-btn").addEventListener("click", () => {
  ipcRenderer.send("close-window");
});
