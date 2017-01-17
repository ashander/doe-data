
	
<!-- change the size of the div behind the stars in order to color the stars -->
function recolor(rating,tabNum)
{
  <!-- w is the width of the star image -->
	var w = 25;
	document.getElementById("rate" + tabNum).style.width = w * rating;
}


function rate(rating, state,tabNum)
{	
	var clicked = document.getElementById("clicked" + tabNum).value
	
	document.getElementById("rate" + tabNum).style.backgroundColor = "#FC0";


  <!-- if the user hasn't rated the page yet -->
	if (clicked != "cl")
	{	
	  <!-- color the stars based on the rating -->
		recolor(rating,tabNum);
		
		
	  <!-- if the user just clicked a star, change the hidden form fields record the rating -->
		if(state == "cl")
		{
			document.getElementById("clicked" + tabNum).value = "cl";
			document.getElementById("chosenrate" + tabNum).value = rating;
			
			
		  <!-- if the user gave a 1 or 2 star rating, show the feedback form-->
			if(rating <= 2)
			{
				document.getElementById("fdback" + tabNum).style.display = "block";
			}
		}
		
	  <!-- since the user hasn't rated the page yet, change the div width back to show the average page rating on mouseout -->
		if(state == "ou")
		{
			document.getElementById("rate" + tabNum).style.backgroundColor = "#2487ed";
			recolor(document.getElementById("average" + tabNum).value,tabNum);
		}

	}
	
  <!-- if the user has already rated the page -->
	else
	{
	  <!-- when clicked, color the stars based on the rating -->
		if (state == "cl")
		{
			recolor(rating,tabNum);
			document.getElementById("chosenrate" + tabNum).value = rating;
			
		  <!-- if the user gave a 1 or 2 star rating, show the feedback form-->
			if(rating <= 2)
			{
				document.getElementById("fdback" + tabNum).style.display = "block";
			}
			
		  <!-- if the user changes the rating, hide the feedback form-->
			else
			{
				document.getElementById("fdback" + tabNum).style.display = "none";
			}
		}
		
	  <!-- color the stars based on the star moused over -->
		else if (state == "ov")
		{
			recolor(rating,tabNum);
		}
		
	  <!-- if the user previously gave a rating, recolor the stars back to the given rating on mouseout -->
		else
		{
			recolor(document.getElementById("chosenrate" + tabNum).value,tabNum);
		}
	}
	
//	document.getElementById("rs").innerHTML = document.getElementById("chosenrate").value + "&amp;" + clicked + "&amp; " + state;
}