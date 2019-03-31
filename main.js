window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const input = document.querySelector('#search');
    let type = document.getElementsByName('searchInput')
    let button = document.getElementById("buttonSearch");
    console.log(button, input, type);
    myClick();
});

// let jackJohnson = fetch("https://itunes-api-proxy.glitch.me/artist/jack-johnson/909253?uo=4")
// console.log('got the link')

// Event Listener on the Button and it's logic
function myClick(buttonSearch){
document.getElementById("buttonSearch").addEventListener("click",function(event){
    // alert("button clicked"); - great test - take out once works
    event.stopPropagation();
    });
}

// get text from input field to construct url - check chins hint

//first get dang file
//how to parse data from json file


function dataParse(notSureWhatThisShouldBe){
    return fetch("https://itunes-api-proxy.glitch.me/artist/jack-johnson/909253?uo=4")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json();
    })
}