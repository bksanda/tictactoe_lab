document.addEventListener('DOMContentLoaded', function()
{	

	var boxes = document.querySelectorAll(".box");
	var count = 0;
	var resetGame = document.getElementById("button");

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
				this.style.color = (count%2==1) ? "#FFFF00":"white";
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

});



