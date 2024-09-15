var imageview = document.getElementById('imgView');
var imagefile = document.getElementById('imgFile');
function createCv() {
    alert("Congratulations! Your Cv has been created successfully");
}
imagefile.addEventListener('change', myImage);
function myImage() {
    if (imagefile.files && imagefile.files[0]) {
        var imgLink = URL.createObjectURL(imagefile.files[0]);
        imageview.style.backgroundImage = "url('".concat(imgLink, "')");
    }
    else {
        console.log("No file selected.");
    }
}
