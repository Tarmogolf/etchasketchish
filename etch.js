$(document).ready(function(){

	createTable(60);
});

function createTable(numRows){


	for(var i = 0; i<numRows; i++){
		for(var j = 0; j<numRows; j++){
			var $newDiv = $("<div>" + i+","+j+"</div>");
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