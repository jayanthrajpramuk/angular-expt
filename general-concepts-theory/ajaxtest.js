/**
	* Created by a028515 on 29-06-2018.
	*/
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
}