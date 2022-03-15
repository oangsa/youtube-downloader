var convertbtn = document.querySelector(".convert-btn");
var URLinput = document.querySelector(".URL-input");

convertbtn.addEventListener("click", function() {
    console.log(`URL input: ${URLinput.value}`);
    sendURL(URLinput.value);
})

function sendURL(URL){
    window.location.href = `https://firstwebsiteyt2mp3.herokuapp.com/download?URL=${URL}`;
}