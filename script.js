// write your JS code here
function numb(x){
	document.querySelector(".text > p").innerHTML += x;
}
function send(){
	document.querySelector(".text > p").style.display = "none";
	alert("Your message has been sent!");
	location.reload();
}