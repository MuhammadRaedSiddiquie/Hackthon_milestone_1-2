let imageview = document.getElementById('imgView') as HTMLDivElement;
let imagefile = document.getElementById('imgFile') as HTMLInputElement;

function createCv(){
    alert("Congratulations! Your Cv has been created successfully")
}
imagefile.addEventListener('change', myImage);

function myImage() {
    if (imagefile.files && imagefile.files[0]) {
        const imgLink = URL.createObjectURL(imagefile.files[0]);
        imageview.style.backgroundImage = `url('${imgLink}')`;
    } else {
        console.log("No file selected.");
    }
}