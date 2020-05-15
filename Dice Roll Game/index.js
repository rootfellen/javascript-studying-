
		// Dice 1


	 var randomNumber1 = Math.floor(Math.random()*6)+1;
	 var randomImageSource = "./img/dice" + randomNumber1 + ".png";
	 document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);



	  //  Dice 2
	  

	 var randomNumber2 = Math.floor(Math.random()* 6) + 1; 
	 var randomImageSource2 = "./img/dice" + randomNumber2 + ".png";
	 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



	  if (randomNumber1 > randomNumber2) {

	  		document.querySelector("h1").innerHTML = "Player 1 Wins!😎";

	  }	else if (randomNumber1 < randomNumber2) {

	  		document.querySelector("h1").innerHTML = "Player 2 Wins!🤑";


	  }	else {

	  		document.querySelector("h1").innerHTML = "Draw!😶";
	  }


