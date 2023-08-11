// JavaScript source code
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!thats work only in CRAMPERJS
Author : MTHRHCKR 
TIMESTAMP : 24.01.22
downloader 4 https://bibl.us/
*/

var iterator = 1728870 // <-- inpout your data from html of needed page
var i = 1
var name = "stainless rat" // name 4 download
var label = "book_player_playlist_item" // id of element
var url = "https://a3.akniga.cc/uploads/y/79c5c32d32a09530/mp3/" // grabbed link 
var el
setInterval(()=>{
	if(document.getElementById(label+iterator)){
		el = document.getElementById(label+iterator).firstElementChild.lastElementChild.textContent
		el = el.replaceAll("_","-")

		var element = document.createElement('a');	element.setAttribute('href', 'data:audio/mp3,' + url+el+".mp3");
		element.setAttribute('download', name+"_part_"+i+".mp3");

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();
		console.log(label+iterator)
		document.body.removeChild(element);
		iterator += 1
		i+=1
	}
},5000)
