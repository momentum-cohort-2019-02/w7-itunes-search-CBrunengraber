window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const input = document.querySelector('#search');
    let type = document.getElementsByName('searchInput')
    let button = document.getElementById("buttonSearch");
    console.log(button, input, type);
    myClick();
});

// Event Listener on the Button and it's logic
function myClick(buttonSearch){
document.getElementById("buttonSearch").addEventListener("click",function(event){
    // alert("button clicked"); - great test - take out once works
    event.stopPropagation();
    });
    //first get dang file
    fetch("https://itunes-api-proxy.glitch.me/search?term=jack+johnson&limit=25")
  .then(function(response) {
    return response.json();
  })
  //how to parse data from json file
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}






