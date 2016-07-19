
function akkordeon(titel,inhalt){
	//eine Sicherung, falls die Elemente nicht existieren, wird die Funktion verlassen
	if(!titel.length ||!inhalt.length ) return; //die Reihenfolge ist egal

	inhalt.hide();
	titel.click(function(){
		titel.removeClass("aktuell");
		//das Offene Inhalt-Element wird geschlossen
		inhalt.not(":hidden").slideUp("slow");
		var aktuell=$(this);
		$(this).next().not(":visible").slideDown("slow", function(){
			aktuell.addClass("aktuell");
		});
	});

}

$(document).ready(function(){
	akkordeon($("img") , $(".creditcar1")); // da ist die Reihenfolge wichtig
}); 
