// Write your code here!
//Delete the <main> using its id selector
const deleteMain = document.querySelector('#main');
deleteMain.remove();

//Create a new element 
const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.textContent = "is the champion";