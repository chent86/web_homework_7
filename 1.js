var start = 0;
window.onload = function() {
	for(var i = 0; i < 16; i++)
		document.getElementById("picture").children[i].addEventListener('click', move);
	document.getElementById("button").addEventListener('click', mix);
	document.getElementById("commit").addEventListener('click', check);
	document.onkeydown=function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		    if(e && e.keyCode == 37)  //left
		    	key_push("left");
		    if(e && e.keyCode == 39)  //right
		    	key_push("right");
		    if(e && e.keyCode == 38)  //up
		    	key_push("up");
		    if(e && e.keyCode == 40)  //down
		    	key_push("down");		    
	}; 
}

function move() {
	if(!start)
		return;
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
	start = 1;
	document.getElementById("win").className = "win";
	document.getElementById("lose").className = "lose";
	document.getElementById("button").className = "restart";
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

function key_push(c) {
	if(!start)
		return;
	var empty_position = document.getElementById("p").className;
	var empty_top = parseInt(empty_position[1]);
	var empty_left = parseInt(empty_position[4]);	
	if(c == "left") {
		if(empty_left != 8) {
			var tmp = "p"+empty_top+" p"+(empty_left+1);
			document.getElementsByClassName(tmp)[0].className = empty_position;
			document.getElementById("p").className = tmp;
		}		
	}
	else if(c == "right") {
		if(empty_left != 5) {
			var tmp = "p"+empty_top+" p"+(empty_left-1);
			document.getElementsByClassName(tmp)[0].className = empty_position;
			document.getElementById("p").className = tmp;
		}			
	}
	else if(c == "down") {
		if(empty_top != 1) {
			var tmp = "p"+(empty_top-1)+" p"+empty_left;
			document.getElementsByClassName(tmp)[0].className = empty_position;
			document.getElementById("p").className = tmp;
		}			
	}
	else if(c == "up") {
		if(empty_top != 4) {
			var tmp = "p"+(empty_top+1)+" p"+empty_left;
			document.getElementsByClassName(tmp)[0].className = empty_position;
			document.getElementById("p").className = tmp;
		}			
	}
}

function check() {
	if(!start)
		return;
	if(document.getElementById("a").className == "p1 p5" &&
		document.getElementById("b").className == "p1 p6" &&
		document.getElementById("c").className == "p1 p7" &&
		document.getElementById("d").className == "p1 p8" &&
		document.getElementById("e").className == "p2 p5" &&
		document.getElementById("f").className == "p2 p6" &&
		document.getElementById("g").className == "p2 p7" &&
		document.getElementById("h").className == "p2 p8" &&
		document.getElementById("i").className == "p3 p5" &&
		document.getElementById("j").className == "p3 p6" &&
		document.getElementById("k").className == "p3 p7" &&
		document.getElementById("l").className == "p3 p8" &&
		document.getElementById("m").className == "p4 p5" &&
		document.getElementById("n").className == "p4 p6" &&
		document.getElementById("o").className == "p4 p7" &&
		document.getElementById("p").className == "p4 p8") {
			document.getElementById("win").className = "show_win";
	}
	else
		document.getElementById("lose").className = "show_lose";
	start = 0;
}