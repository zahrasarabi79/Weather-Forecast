const getdata = document.querySelector(".getdata");
function getData(){
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=apparent_temperature")
    .then(response =>console.log(response);
    return response.Jason())};
