
function CreateNewOrder() {
	var createNewOrderPopup = window.prompt("Please enter new order number:", "Number");
	var orderNumberNew;
	var txt;
	
	alert(createNewOrderPopup);
	
	if (createNewOrderPopup !=  "name" || createNewOrderPopup == null || createNewOrderPopup == "") 
	{
		txt = "Error. Order not found";
	}
	else
	{
		document.getElementsByValue("test123").style.backgroundColor = "green";
	}
}

function confirmOrderButton() {
	var confirmOrderClick = prompt("Please enter order number:", "Number");
	if (confirmOrderClick != ){}

}


function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = txt;
}