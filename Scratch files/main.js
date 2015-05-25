//let's jQuery this!

var winner = 	[[0,1,2],
				[3,4,5],
				[6,7,8],
				[0,4,8],
				[2,4,6],
				[1,4,7],
				[2,5,8],
				[0,3,6]];

$(function(){
	
	var count = 0;
	var box = $('.box');
	var played = $('.played');
	var gameOver = false;
	
	$('.box').on('click',function(){
	if (gameOver) {
		alert('Game is over, you can restart to play again.');
		return;
	}

	if ($(this).hasClass('played') === false) 
			{
				count++
				$(this).text((count%2==1) ? "X":"O");
				$('.counter').text("It is turn: " + ((count%2==1) ? "O":"X"));
				$(this).addClass('played');
				$(this).css('color',(count%2==1) ? "#FFFF00":"white");
			} else {
				alert("Oops! You've already played here!");
			}
			boss();

	})
	
	//RESETS THE GAME
	$('.btn').on('click',function(){
		$('.box').text("");
		$('.box').removeClass('played');
		count=0
		$('.counter').text("It is turn: X");
		gameOver = false;
		$('body').css('background', '#00FA9A')
	})


	//WHO'S THE BOSS?
	var boss = function() {
		for(var i=0; i < winner.length; i++){
			if (box[winner[i][0]].innerText!="" && box[winner[i][0]].innerText === box[winner[i][1]].innerText && 
				box[winner[i][1]].innerText === box[winner[i][2]].innerText) {
				alert("You Win! You Da Boss!");
				gameOver = true;
				$('body').css('background', '#00BFFF');			
			}
		}
	}

})

