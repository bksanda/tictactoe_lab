document.addEventListener('DOMContentLoaded', function()
{	

	var boxes = document.querySelectorAll(".box");
	var count = 0;
	var resetGame = document.getElementById("button");
	var gameOver = document.querySelectorAll(".container");

	//each box
	// var box1 = document.getElementById("b1");
	// var box2 = document.getElementById("b2");
	// var box3 = document.getElementById("b3");
	// var box4 = document.getElementById("b4");
	// var box5 = document.getElementById("b5");
	// var box6 = document.getElementById("b6");
	// var box7 = document.getElementById("b7");
	// var box8 = document.getElementById("b8");
	// var box9 = document.getElementById("b9");

	//tics and tacs
	for(var i=0; i<boxes.length; i++) 
	{
		boxes[i].addEventListener('click',function()
		{
			
			if (this.classList.contains('played') === false) 
			{
				count++
				this.innerText = (count%2==1) ? "X":"O";
				this.classList.add('played')
				this.style.color = (count%2==1) ? "blue":"red";
			} else {
				alert("Oops! You've already played here!");
			}
		
		});

	}	

	//refreshes the page to start over
	resetGame.addEventListener('click',function(){
		for (var i = 0; i<boxes.length; i++) {
			window.location.reload();		
		}
	})
	
	//winning
	// ticTac = ["X", "O"]; 

	// for(var i=0; i<boxes.length; i++) {
	// 	boxes[i].addEventListener('click',function() 
	// 	{
	// 		if (b1.innerText == ticTac[0] &&
	// 			b2.innerText == ticTac[0] &&
	// 			boxes[2].innerText == ticTac[0]) {
	// 			alert("X Wins!");
	// 		} 
				
	// 		else if (boxes[3].innerText == ticTac[0] &&
	// 			boxes[4].innerText == ticTac[0] &&
	// 			boxes[5].innerText == ticTac[0]) {
	// 			alert("X Wins!");
	// 		}
				
	// 		else if (boxes[6].innerText == ticTac[0] &&
	// 			boxes[7].innerText == ticTac[0] &&
	// 			boxes[8].innerText == ticTac[0]) {
	// 			alert("X Wins!");
	// 		}
				
	// 		else if (boxes[0].innerText == ticTac[0] &&
	// 			boxes[3].innerText == ticTac[0] &&
	// 			boxes[6].innerText == ticTac[0]) {
	// 			alert("X Wins!");
	// 		}
				
	// 		else if (boxes[1].innerText == ticTac[0] &&
	// 			boxes[4].innerText == ticTac[0] &&
	// 			boxes[7].innerText == ticTac[0]) {
	// 			alert("X Wins!");
	// 		}
				
	// 		else if (boxes[2].innerText == ticTac[0] &&
	// 			boxes[5].innerText == ticTac[0] &&
	// 			boxes[8].innerText == ticTac[0]) {
	// 			alert("X Wins!");
	// 		}
				
	// 		else if (boxes[2].innerText == ticTac[0] &&
	// 			boxes[4].innerText == ticTac[0] &&
	// 			boxes[6].innerText == ticTac[0]) {
	// 			alert("X Wins!");
	// 		}
				
	// 		else if (boxes[0].innerText == ticTac[0] &&
	// 			boxes[4].innerText == ticTac[0] &&
	// 			boxes[8].innerText == ticTac[0]) {
	// 			alert("X Wins!");
	// 		}

	// 		// "O" Wins
			
	// 		else if (boxes[0].innerText == ticTac[1] &&
	// 			boxes[1].innerText == ticTac[1] &&
	// 			boxes[2].innerText == ticTac[1]) {
	// 			alert("O Wins!");
	// 		} 
				
	// 		else if (boxes[3].innerText == ticTac[1] &&
	// 			boxes[4].innerText == ticTac[1] &&
	// 			boxes[5].innerText == ticTac[1]) {
	// 			alert("O Wins!");
	// 		}
				
	// 		else if (boxes[6].innerText == ticTac[1] &&
	// 			boxes[7].innerText == ticTac[1] &&
	// 			boxes[8].innerText == ticTac[1]) {
	// 			alert("O Wins!");
	// 		}
				
	// 		else if (boxes[0].innerText == ticTac[1] &&
	// 			boxes[3].innerText == ticTac[1] &&
	// 			boxes[6].innerText == ticTac[1]) {
	// 			alert("O Wins!");
	// 		}
				
	// 		else if (boxes[1].innerText == ticTac[1] &&
	// 			boxes[4].innerText == ticTac[1] &&
	// 			boxes[7].innerText == ticTac[1]) {
	// 			alert("O Wins!");
	// 		}
				
	// 		else if (boxes[2].innerText == ticTac[1] &&
	// 			boxes[5].innerText == ticTac[1] &&
	// 			boxes[8].innerText == ticTac[1]) {
	// 			alert("O Wins!");
	// 		}
				
	// 		else if (boxes[2].innerText == ticTac[1] &&
	// 			boxes[4].innerText == ticTac[1] &&
	// 			boxes[6].innerText == ticTac[1]) {
	// 			alert("O Wins!");
	// 		}
				
	// 		else if (boxes[0].innerText == ticTac[1] &&
	// 			boxes[4].innerText == ticTac[1] &&
	// 			boxes[8].innerText == ticTac[1]) {
	// 			alert("O Wins!");
	// 		}
			
	// 		else
	// 		{
	// 			alert("It's a TIC-TAC-TIE!"); 
	// 		}

	// 	})
	// }
	
	
	
		
	
	
	
	


});



