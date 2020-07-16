var ul = document.getElementById("ul");

ul.addEventListener("click", function func(event) {
	var li = event.target.closest("li");
	

	if (li) {
		li.innerHTML +="!"; 
	}
});


var but = document.getElementsByTagName("button")[0];

but.addEventListener("click", function() {

var liElem = document.createElement("li");
liElem.innerHTML = "пункт";
ul.appendChild(liElem);
});