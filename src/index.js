import Coord from "./js/coord.js";
import Map from "./js/map.js";

const myModalEl = document.querySelector('#exampleModal')
const modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
modal.show();
const inputIP = document.querySelector("#inputIP");
const sendIP = document.querySelector("#buttonIP");

sendIP.addEventListener('click',async()=>{
	const reg = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g
	if(reg.test(inputIP.value)){
		const coord = new Coord(inputIP.value);
		const {origin,destiny} = await coord.getCoord();
		const map = new Map('map',origin);
		map.generateMap();
		map.createMarker('<h4>Mi Ubicación</h4>',origin);
		map.createRouting(origin,destiny);
	}else{
		alert('IP NO VALIDA!');
		window.location.reload();
	}
	
})



