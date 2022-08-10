var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'nAE7VyT4pMjLnqKI55HBOstYqpoVTB1uVHVEfACR',
// 		'X-RapidAPI-Host': 'free-geo-ip.p.rapidapi.com'
// 	}


// };
const ipData = prompt("INGRESA TU IP");
const key  ='nAE7VyT4pMjLnqKI55HBOstYqpoVTB1uVHVEfACR';


fetch(`https://api.ipbase.com/v2/info?ip=${ipData}&apikey=${key}`)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

