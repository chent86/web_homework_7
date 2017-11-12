window.onload = function() {
	for(var i = 0; i < 16; i++)
		document.getElementById("picture").children[i].addEventListener('click', move);
	document.getElementById("button").addEventListener('click', mix);
}

function move() {
	var origin = this.className;
	var top = parseInt(origin[1]);
	var left = parseInt(origin[4]);
	var empty_position = document.getElementById("p").className;
	var empty_top = parseInt(empty_position[1]);
	var empty_left = parseInt(empty_position[4]);
	if(((top-1 == empty_top|| top+1 == empty_top)&& left == empty_left)
		|| (left-1 == empty_left||left+1 == empty_left)&& top == empty_top) {
		this.className = empty_position;
		document.getElementById("p").className = origin;
	}

}

function mix() {
	for(var i = 0; i < 16; i++) {
		var tmp = document.getElementById("picture").children[i].className;
		var tmp_element = document.getElementById("picture").children[Math.round(Math.random()*14)];
		document.getElementById("picture").children[i].className = tmp_element.className;
		tmp_element.className = tmp; 
	}
	for(var i = 0; i < 16; i++)
		if(document.getElementById("picture").children[i].className == "p4 p8"){
			var tmp = document.getElementById("p").className;
			document.getElementById("picture").children[i].className = tmp;
		}
	document.getElementById("p").className = "p4 p8";

}