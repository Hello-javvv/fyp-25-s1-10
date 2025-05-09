const goTopper= document.getElementById("topper");

window.onscroll = function() {
	scrollFunction();
};

function scrollFunction(){
	if(document.body.scrollTop > 200 || 
		document.documentElement.scrollTop > 200)
	{
		goTopper.style.display = "block"; // show button
	}
	else
	{
		goTopper.style.display = "none"; // hide button
	}
}

goTopper.onclick = function() {
	window.scroll({
		top: 0,
		behavior: "smooth"
	});
};