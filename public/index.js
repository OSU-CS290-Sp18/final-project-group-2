
var dreamButton = document.getElementsByClassName('modal-accept-button');
dreamButton[0].addEventListener('click', checkInput);

var clearButton = document.getElementsByClassName('modal-cancel-button');
clearButton[0].addEventListener('click', clearModal);
var dreamText = document.getElementById('dream-text-input');
var dreamAuthor = document.getElementById('dreamer-input');
var dreamContainer = document.getElementsByClassName('dream-container');



/*
when user clicks on log dream button and doesn't have required fields, alert
message displayed, otherwise posts dream
*/

function checkInput(event){
  console.log("Text: ", dreamText.value);
  console.log("Author: ", dreamAuthor.value);
 if(dreamText.value == "" || dreamAuthor.value ==""){
   alert("All fields must contain content to post!");
 }
 else {
   console.log("All fields present and ready to post!");
   logDream();
 }
}


/*
clears text boxes for author and dream content when clear button clicked
*/

function clearModal (event){
 console.log("in clearModal function");
 dreamText.value = "";
 dreamAuthor.value = "";
}

function logDream(event){
  console.log("In log dream function");
  console.log("Text: ", dreamText.value);
  console.log("Author: ", dreamAuthor.value);


  clearModal();
}



var searchBar = document.getElementById('navbar-search-input');
var searchButton = document.getElementById('navbar-search-button');
var dreams = document.getElementsByClassName('dream');
console.log("length:", dreams.length);
var allDreams = [];


for (var i = 0; i < dreams.length; i++){
  allDreams.push(dreams[i]);
}

var title = document.getElementsByClassName('dream-title');
var text = document.getElementsByClassName('dream-text');
var author =  document.getElementsByClassName('dreamer');

console.log("==allDreams[0]", allDreams[0]);

searchButton.addEventListener('click', searchDreams);




/*
  Function checks to see if searched text is found in any twits.
  If found, removed from DOM
*/



function searchDreams(event){

  console.log("==in searchDreams function");
  console.log("length:", dreams.length);

  console.log("==title for first dream:", title[0]);
  console.log("==text for first dream:", text[0]);
  console.log("==author for first dream:", author[0]);

  var searchThis = searchBar.value;
  console.log("==searchThis", searchThis);

  for (var i = 0; i < allDreams.length; i++){
      if (text[i].textContent.indexOf(searchThis) >= 0){
        /*removeTwit(i);
        i--;*/
      }
      else if (author[i].textContent.indexOf(searchThis) >= 0){
        /*removeTwit(i);
        i--;*/
      }
      else if (title[i].textContent.indexOf(searchThis) >= 0){
        /*removeTwit(i);
        i--;*/
      }
      else{
        removeDream(i);
        i--;
      }
  }
}





/*
  Removes twits sub index value where searched text was found.
*/


function removeDream(index){
  console.log("in removeDream function!!!!!!!!!!!!!!!!!!!");
  console.log("index to be removed:", index);
  dreams[index].remove();
}