$(function(){
$("#formulaire").hide()
$('#map').hide()
$("#Accueil").addClass('active')
$('#Accueil').click(function(){

	if($('#inscrire').hasClass('active')){
	$('#inscrire').removeClass('active')	
	}
	if($('#Carte').hasClass('active')){
	$('#Carte').removeClass('active')	
	}
	$("#formulaire").hide()
$('#map').hide()
$("#Accueil").addClass('active')
$('#contenu').slideToggle(1000)

})

$('#inscrire').click(function(){
	$('#formulaire').slideToggle(1000); 
	if($('#Carte').hasClass('active')){
	$('#Carte').removeClass('active')	
	}
	if($('#Accueil').hasClass('active')){
	$('#Accueil').removeClass('active')	
	}
	$('#Carte').removeClass('active')
	$('#map').hide()
	
	$('#Accueil').removeClass('active')
	$('#inscrire').addClass('active')
	$('#contenu').hide(300)
	$('#formulaire').show()
})
$('#Carte').click(function(){
			$('#contenu').hide()
			$('#Accueil').removeClass('active')
			$('#formulaire').hide();
			$('#inscrire').removeClass('active')
			$('#Carte').addClass('active')
			$('#map').slideDown(1000); 
})




var data=[
            {"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7},
            {"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
            {"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
            {"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
            {"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
            {"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}
          ]; 

// Remplissage du Tableu
function fill() { 
  $('tr:not(:first-of-type)').remove(); // Empêcher le fonctionnement de la fonction en une seule exécution
  data.forEach(function(item){
     $('#notRemove').show(); // la première balise 'tr' de la table (contenant les en-têtes) renommée id = #notRemove
     $('table').append("<tr><td>" + item.order + "</td><td>" + item.manager +  "</td><td>" + item.activity + "</td><td>"+ item.numofsub + "</td></tr>");
  });
}
$('#remplir').click(function(){
	fill();
})
//Fonction pour effacer le tableau
function removeTable() { 
  // selectionner toutes les balises 'tr' sauf la première balise 'tr' de la table (contenant les en-têtes) 
     $('tr:not(:first-of-type)').remove(); 
     $('#notRemove').hide();
} 
$('#effacer').click(function(){
	removeTable();
})

// Fonction de Tri nombre d'inscrit
function TrierNumofsub(){
  data.sort(function(a,b){
    return a.numofsub - b.numofsub;}
  );
  $('tr:not(:first-of-type)').remove();
    fill();
}

// Fonction de Tri Order
function Trier_order(){
  data.sort(function(a,b){
    return a.order - b.order;
  });
  $('tr:not(:first-of-type)').remove();
  fill();
}

// Function de Tri_Activity
function Trier_Activity(){
  data.sort(function(a,b){
    var x = a.activity.toLowerCase();
    var y = b.activity.toLowerCase();
    if(x<y){return -1;}
    if(x>y){return 1;}
    return 0;
  });
  $('tr:not(:first-of-type)').remove();
  fill();
}

// Function de Tri_Manager
function Trier_Manager(){
  data.sort(function(a,b){
    var x = a.manager.toLowerCase();
    var y = b.manager.toLowerCase();
    if(x<y){return -1;}
    if(x>y){return 1;}
    return 0;
  });
  fill();
}
  $('#number').click(function(){
  		Trier_order();	
  })
  $('#acti').click(function(){
  	Trier_Manager()
  })
  $('#respo').click(function(){
  	Trier_Activity()
  })
$('#activity').click(function(){
		TrierNumofsub()
  })

$('#Valider').click(function(){
	if($('#text').val()==""){
		$('#text').css("background-color", "red")
		$('#text').attr('placeholder','Entrez une valeur')
	}
	if($('#prenom').val()==""){
	$('#prenom').css("background-color", "red")
		$('#prenom').attr('placeholder','Entrez une valeur')	
	}
	if($('#mention').val()==""){
	$('#mention').css("background-color", "red")
		$('#mention').attr('placeholder','Entrez une valeur')	
	}
})
$('#Reset').click(function(){
	if($('#text').val()==""){
		$('#text').css("background-color", "white")
		$('#text').attr('placeholder','')
	}

	if($('#prenom').val()==""){
	$('#prenom').css("background-color", "white")
		$('#prenom').attr('placeholder','')	
	}
	if($('#mention').val()==""){
	$('#mention').css("background-color", 'white')
		$('#mention').attr('placeholder','')	
	}

})



})