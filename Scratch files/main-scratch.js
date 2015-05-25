document.addEventListener('DOMContentLoaded', function()
{	

	var boxes = document.querySelectorAll(".box");
	var count = 0;
	var resetGame = document.getElementById("button");
	
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
	function winners(boxes, )
	
	
	


});



