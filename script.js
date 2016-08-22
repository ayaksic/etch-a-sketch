var newGrid = 16;

function drawGrid() {
	for (i=1;i<=newGrid**2;i++) {
		$(".container").append("<div class='square0'></div>")
	}
	var squareWidth = 640/newGrid;
	$("div div").css("width",squareWidth).css("height",squareWidth);
};

function etchSketch() {
	$("div div").mouseenter(function(){
		var newClass = parseInt($(this).attr("class").substring(6),10)+1;
		if(newClass<11){
			$(this).removeClass().addClass("square" + newClass);
		};
	});
};

$(document).ready(function(){
	drawGrid();
	etchSketch();
	$(".reset").click(function(){
		$("div div").remove();
		newGrid = parseInt(prompt("How many squares per side?"),10);
		drawGrid();
		etchSketch();
	});
});