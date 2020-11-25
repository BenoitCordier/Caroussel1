var diapo = new Array("img/caroussel1.png", "img/caroussel2.jpg", "img/caroussel3.jpg", "img/caroussel4.jpg", "img/caroussel5.jpg");
var numero = 0;

function changeDiapo(sens) {
	numero = numero + sens;
	if (numero < 0) {
		numero = diapo.length - 1;
	}
	if (numero > diapo.length - 1) {
		numero = 0;
	}
	document.getElementById("diapo").src = diapo[numero];
}