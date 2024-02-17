
// Cannot be a reserved Keyword
//should be meaningful
//cannot start with a number
//cannot contain a space or huphen (-)
//are case-sensitive

// we can not reessigne a const
// Primitive / value Type :
/*let name = "Mahdi"; // String
let age = 33; // Number
let isApproved = true; //Boolean
let lastName = null; //null (to clear the value of variable)
*/
// Reference type : 
    //object
let myForm = document.getElementById("myForm");
let myField = document.getElementById("myField");
let myList = document.getElementById("myList");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createItem(myField.value);
})

function createItem(x){
    let myHTML = `<li>${x} <button onclick="DeleteItem(this)">Delete</button></li>`;
    myList.insertAdjacentHTML("beforeend", myHTML)
    myField.value="";
    myField.focus();
}

function DeleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
}