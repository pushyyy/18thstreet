if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"1|",
					"1 |",
					"1 8|",
					"1 8 |",
					"1 8 T|",
					"1 8 T |",
					"1 8 T H|",
					"1 8 T H |",
					"1 8 T H S|",
					"1 8 T H S |",
					"1 8 T H S T |",
					"1 8 T H S T R|",
					"1 8 T H S T R |",
					"1 8 T H S T R E|",
					"1 8 T H S T R E |",
					"1 8 T H S T R E E|",
					"1 8 T H S T R E E |",
					"1 8 T H S T R E E T|",
					"1 8 T H S T R E E T |"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}