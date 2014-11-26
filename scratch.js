
			count++;
			$(this).text((count%2==1) ? "X":"O") ;
			if ($(this).text("X")) {
				this.disabled = true;
		if ($(this).hasClass('played') === false) 
			{
				count++
				$(this).text((count%2==1) ? "X":"O");
				//turn.innerText = "It is turn: " + ((count%2==1) ? "O":"X");
				$(this).add('played')
				$(this).css('.color') = (count%2==1) ? "#FFFF00":"white";
			} else {
				alert("Oops! You've already played here!");
			}

		}


			$('.counter').text("It is turn: " + ((count%2==1) ? "O":"X"));
			$(this).add('played');
			$(this).css.color((count%2==1) ? "#FFFF00":"white");
		} else {
			alert("Oops! You've already played here!");
	 	
		
	});


			


		$(this)
			.click

	}

	var boxes = document.querySelectorAll(".box");
	var count = 0;
	var resetGame = document.getElementById("button");
	var turn = document.querySelector(".counter");

	//tics and tacs
	{
		boxes[i].addEventListener('click',function()
		{
			
			if (this.classList.contains('played') === false) 
			{
				count++
				this.innerText = (count%2==1) ? "X":"O";
				turn.innerText = "It is turn: " + ((count%2==1) ? "O":"X");
				this.classList.add('played')
				this.style.color = (count%2==1) ? "#FFFF00":"white";
			} else {
				alert("Oops! You've already played here!");
			}
		
		});

	}	


	resetGame.addEventListener('click',function(){
		for (var i = 0; i<boxes.length; i++) {
				boxes[i].innerText="";
				boxes[i].classList.remove('played')
				count = 0;
				turn.innerText = "It is turn: " + "X";// } 
		}
	})


	

	