function tampil(){
	alert("Halo");
}

 let warna = document.getElementById('warna');

 warna.addEventLisetener('change', (event) =>{
 	document.body.style.backgroundColor = warna.value;
})