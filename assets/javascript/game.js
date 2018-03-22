$(document).ready(function() {
	$("body").on("click", function() {
        //alert("I've been clicked!");
     }
    );
	$("#crystals").on("click", function(ev) {
		var updatedTotal = 0
		if (ev.target.id === "pinkcrystal") {
			console.log("clicked on " + ev.target.id)
			updatedTotal = totalScore(crystalSecrets[0])
		}
		else if (ev.target.id === "yellowcrystal") {
			console.log("clicked on " + ev.target.id)
			updatedTotal = totalScore(crystalSecrets[1])
			
			
			
			
		}
		else if (ev.target.id === "purplecrystal") {
			console.log("clicked on " + ev.target.id)
			updatedTotal = totalScore(crystalSecrets[2])
			
		}
		else if (ev.target.id === "bluecrystal") {
			console.log("clicked on " + ev.target.id)
			updatedTotal = totalScore(crystalSecrets[3])
			
		}
		
		else{
			ev.stopPropagation()
		}
		if (updatedTotal === secret){
			alert("Congrats You have won!")
			incrementWins()
			reset()
			
		
		}
		else if (updatedTotal > secret){
			alert("Sorry You have lost! You suck.")
			incrementLosses()
			reset()
		}
		
		
	});
	function randomNumber(lower, upper){
		let rn = Math.floor(Math.random() * Math.floor(upper)) + lower
		return rn  
		

	}
	
	function totalScore(add){
		console.log(add)
		let cs = Number($("#total").html())
		let total = cs + add 
		$("#total").html(total) 
		return total 
		
		
	}
	
	function reset(){
		$("#total").html("0")
		secret = randomNumber(19,120)
		$("#secret").html(secret)
		console.log("secret is" + secret)
		
	}
	
	var secret = -1
	reset()
	
	
	var crystalSecrets = []
	
	crystalSecrets[0] = randomNumber(1,12)
	
	crystalSecrets[1] = randomNumber(1,12)
	
	crystalSecrets[2] = randomNumber(1,12)
	
	crystalSecrets[3] = randomNumber(1,12)
	
	
	
	
	
	
	
	
	
	
	
});
 


function incrementWins(){
	var Wtotal = $("#wins") 
	var increment = Number(Wtotal.html()) + 1 
	Wtotal.html(increment)

}

function incrementLosses(){
	var Ltotal = $("#losses") 
	var increment = Number(Ltotal.html()) + 1 
	Ltotal.html(increment)

	
}






