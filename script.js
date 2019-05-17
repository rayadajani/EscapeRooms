a = document.getElementById("space");
b = document.getElementById("sports");
c = document.getElementById("makeup");
d = document.getElementById("toonz");
e = document.getElementById("zombie");
f = document.getElementById("communism");
function goCom(el){
	document.location.href="https://macielegaspi.github.io/gulagescape/gulagescape/";
}
function goMakeup(el){
	document.location.href="https://kobywu.github.io/makeuproom/caitlyn.html";
}
function goSports(el){
	document.location.href="https://zoraizhashmi.github.io/sportsescape/";
}
function goZombie(el){
	document.location.href="https://andresvilla1.github.io/AndresVP8/ ";
}
function goToonz(el){
	document.location.href="https://sambiner.github.io/escaperoom/esc_rm.html";
}
function goSpace(el){
	document.location.href="https://leahtorres.github.io/phase9/index1.html";
}
function escapeSpace(el){
	if (el.src.match("images/escape_space4.PNG")){
		el.src = "images/escape_space1.PNG";
	} else if (el.src.match ("images/escape_space1.PNG")){
		el.src = "images/escape_space2.PNG";
	} else if (el.src.match ("images/escape_space2.PNG")){
		el.src = "images/escape_space4.PNG";
	} else if (el.src.match ("images/escape_space4.PNG")){
		el.src = "images/escape_space1.PNG";
	} else {
		// do nothing
	}
}
function escapeSports(el){
	if (el.src.match("images/sports_escape4.PNG")){
		el.src = "images/sports_escape1.PNG";
	} else if (el.src.match ("images/sports_escape1.PNG")){
		el.src = "images/sports_escape2.PNG";
	} else if (el.src.match ("images/sports_escape2.PNG")){
		el.src = "images/sports_escape3.PNG";
	} else if (el.src.match ("images/sports_escape3.PNG")){
		el.src = "images/sports_escape4.PNG";
	} else {
		// do nothing
	}
}
function escapeMakeup(el){
	if (el.src.match("images/makeup_room3.PNG")){
		el.src = "images/makeup_room1.PNG";
	} else if (el.src.match ("images/makeup_room1.PNG")){
		el.src = "images/makeup_room2.PNG";
	} else if (el.src.match ("images/makeup_room2.PNG")){
		el.src = "images/makeup_room3.PNG";
	} else if (el.src.match ("images/makeup_room3.PNG")){
		el.src = "images/makeup_room1.PNG";
	} else {
		// do nothing
	}
}
function escapeToonz(el){
	if (el.src.match("images/toonz6.PNG")){
		el.src = "images/toonz3.PNG";
	} else if (el.src.match ("images/toonz3.PNG")){
		el.src = "images/toonz4.PNG";
	} else if (el.src.match ("images/toonz4.PNG")){
		el.src = "images/toonz5.PNG";
	} else if (el.src.match ("images/toonz5.PNG")){
		el.src = "images/toonz6.PNG";
	} else {
		// do nothing
	}
}
function escapeZombies(el){
	if (el.src.match("images/zombie_escape3.PNG")){
		el.src = "images/zombie_escape1.PNG";
	} else if (el.src.match ("images/zombie_escape1.PNG")){
		el.src = "images/zombie_escape2.PNG";
	} else if (el.src.match ("images/zombie_escape2.PNG")){
		el.src = "images/zombie_escape3.PNG";
	} else if (el.src.match ("images/zombie_escape3.PNG")){
		el.src = "images/zombie_escape1.PNG";
	} else {
		// do nothing
	}
}
function escapeCommunism(el){
	if (el.src.match("images/escape_c5.PNG")){
		el.src = "images/escape_c2.PNG";
	} else if (el.src.match ("images/escape_c2.PNG")){
		el.src = "images/escape_c3.PNG";
	} else if (el.src.match ("images/escape_c3.PNG")){
		el.src = "images/escape_c4.PNG";
	} else if (el.src.match ("images/escape_c4.PNG")){
		el.src = "images/escape_c5.PNG";
	} else {
		// do nothing
	}
}
 