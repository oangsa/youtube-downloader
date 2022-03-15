var convertbtn = document.querySelector(".convert-btn");
var URLinput = document.querySelector(".URL-input");

convertbtn.addEventListener("click", function() {
    console.log(`URL input: ${URLinput.value}`);
    sendURL(URLinput.value);
})

function sendURL(URL){
    window.location.href = `https://a7fd-101-51-8-95.ngrok.io/download?URL=${URL}`;
}