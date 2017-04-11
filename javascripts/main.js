var dinoArray = [];

$.ajax('./db/dinosaurs.json').done(function(data) {
	dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("You've made a huge mistake", error);
});

function makeDom(myArrayToPrint) {
	var myDomString = "";
	myDomString += `<div class="row">`
	for (var i = 0; i < myArrayToPrint.length; i++) {
		myDomString += `<div class="dinoCard col-md-4">`;
		myDomString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
		myDomString += `<section><img src="${myArrayToPrint[i].img}">`;
		myDomString += `<p class="bio">${myArrayToPrint[i].bio}</p></section>`;
		myDomString += `<footer><h4>${myArrayToPrint[i].info}</h4></footer>`;
		myDomString += `</div>`
	if (((i + 1) % 3) === 0) {
		myDomString += `</div>`
		$('#dinosaurs').append(myDomString);
			myDomString = "";
			myDomString += `<div class="row">`			
		}
	}

}

$('#dinosaurs').on ('click', '.dinoCard', function(e) {
    $('.dinoCard').removeClass("dottedBorder");
    $(this).addClass("dottedBorder");
    $("#textbox").val("").focus(); 
    $("#textbox").val($('.dottedBorder').find('p.bio').text()); 
});

$('#textbox').keyup(mirrorText);

function mirrorText(e) {
	var selectedCard = $('.dottedBorder');
	var bioTyped = $('#textbox').val();
	var bio = $('.dottedBorder').find('p.bio');
	bio.html(bioTyped);

	if (e.keyCode === 13) {
		$('#textbox').val('');
	}
}







