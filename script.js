var convertbtn = document.querySelector(".convert-btn");
var URLinput = document.querySelector(".URL-input");

convertbtn.addEventListener("click", function() {
    console.log(`URL input: ${URLinput.value}`);
    sendURL(URLinput.value);
})

function sendURL(URL){
    window.location.href = `http://localhost:3000/download?URL=${URL}`;
}