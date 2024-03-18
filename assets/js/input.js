function handleFileInputChange(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];
  const fileLabelText = document.getElementById("fileLabelText");
  const convertButton = document.querySelector(".button");

  if (file) {
    fileLabelText.innerHTML =
      "<i class='fa-solid fa-circle-check'></i> Success";
    convertButton.innerHTML = "Convert";
    convertButton.classList.remove("is-success");
    convertButton.classList.add("is-primary");
  } else {
    fileLabelText.innerHTML = "<i class='fa-solid fa-upload'></i> Import Image";
    convertButton.classList.remove("is-primary");
    convertButton.classList.add("is-success");
  }
}
