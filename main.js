window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const input = document.querySelector('#search');
    let type = document.getElementsByName('searchInput')
    let button = document.getElementById("buttonSearch");
    console.log(button, input, type);
    myClick();
});

let jackJohnson = fetch("https://itunes-api-proxy.glitch.me/artist/jack-johnson/909253?uo=4")
console.log('got the link')





// Event Listener on the Button and it's logic
function myClick(buttonSearch){
document.getElementById("buttonSearch").addEventListener("click",function(event){
    // alert("button clicked"); - great test - take out once works
    event.stopPropagation();
    });
}