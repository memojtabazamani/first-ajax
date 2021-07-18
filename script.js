// varibles
const url        = "data.txt";
const typeAction = "GET";
const wrapperEle = document.getElementsByClassName('wrapper')[0];

// ajax 
var request = new XMLHttpRequest();

request.open(typeAction, url ); // use asynchronous

request.onreadystatechange = function() {
	if(request.readyState === 4 && request.status === 200) {
		wrapperEle.innerHTML = request.responseText;
	}
}

request.send();