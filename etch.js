var red = 0;
var rDelta = 9;
var blue = 0;
var bDelta = 5;
var green = 0;
var gDelta = 3;

$(document).ready(function(){

	createTable(16);

	hova();

	$("#reset").click(function(){
		$("#wrapper").empty();
		var gridSize = prompt("Enter a grid size (X by X)")
		createTable(gridSize);
		hova();
	});

});

function hova(){
	$(".box").hover(function(){
		if(red + rDelta > 255){
			red = 0;
		}else{
			red+=rDelta;
		}
		if(blue + bDelta > 255){
			blue = 0;
		}else{
			blue+=bDelta;
		}
		if(green + gDelta > 255){
			green = 0;
		}else{
			green+=gDelta;
		}
		$(this).css("background-color","rgb("+red+","+green+","+blue+")");
	});
};


function createTable(numRows){


	for(var i = 0; i<numRows; i++){
		for(var j = 0; j<numRows; j++){
			var $newDiv = $("<div></div>");
			$($newDiv).addClass("box");
			$("#wrapper").append($newDiv);
		}
		
		var $lineBreak = $("<div></div>");
		$($lineBreak).addClass("break");
		$($lineBreak).css("clear","both").appendTo("#wrapper");
	}
	
	var borderWidth = $(".box").css("border-left-width");
	var parsed = parseInt(borderWidth);

	var boxWidth = $("#wrapper").width()/numRows - parsed*2;
	var boxHeight = $("#wrapper").height()/numRows - parsed*2;
	
	$(".box").height(""+boxHeight+"px");
	$(".box").width(""+boxWidth+"px");

};