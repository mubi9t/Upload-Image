let upload = document.getElementById("upload")
let file = document.getElementById("file")
upload.addEventListener('click', () => {
    file.click();
})
let popup = document.getElementById("popup")
let trash = document.getElementById("trash")
let container = document.getElementById("container")
let cancel = document.getElementById("Cancel")
trash.addEventListener('click', () => {
    popup.style.display = "block"
    container.style.filter = "blur(10px)"
})
cancel.addEventListener("click", () => {
    popup.style.display = "none"
    container.style.filter = "blur(0px)"
})
document.getElementById("delete").addEventListener('click', () => {
    document.querySelector(".two").style.display = "none"
    popup.style.display = "none"
    container.style.filter = "blur(0px)"
})
const fileInput = document.querySelector('input[type="file"]');
const imageElement = document.querySelector('.icon h5');
const sizeElement = document.querySelector('.size p');
const imagePreview = document.querySelector('.icon');
const sizeElement2 = document.querySelector('.five');
const nameElement = document.querySelector('.icon h5');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const fileSize = file.size;
    const fileSizeMB = (fileSize / 1024 / 1024).toFixed(2);
    nameElement.innerHTML = file.name;
    sizeElement2.innerHTML = fileSizeMB + " MB";
    document.querySelector(".content").style.gap = "5px";
    document.querySelector(".content").style.width = "none";
    document.querySelector(".cross").style.gap = "10px";
    document.querySelector(".progressbar").style.display = "flex"
    setTimeout(() => {
        document.querySelector(".cross").style.display = "flex";
        document.querySelector(".size").style.display = "block";
    }, 1000)
});
const fileInput2 = document.querySelector("#file");
const image = document.querySelector("#imagePreview");

fileInput2.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            image.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});


