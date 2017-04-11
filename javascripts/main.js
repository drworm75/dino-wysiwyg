var dinoArray = [];

$.ajax('./db/dinosaurs.json').done(function(data) {
	dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("You've made a huge mistake", error);
});

function makeDom(myArrayToPrint) {
	var myDomString = "";
	for (var i = 0; i < myArrayToPrint.length; i++) {
		myDomString += `<div class="dinoCard">`;
		myDomString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
		myDomString += `<section><img src="${myArrayToPrint[i].img}">`;
		myDomString += `<p class="bio">${myArrayToPrint[i].bio}</p></section>`;
		myDomString += `<footer><h4>${myArrayToPrint[i].info}</h4></footer>`;
		myDomString += `</div>`
	}
	$('#dinosaurs').html(myDomString);

}
