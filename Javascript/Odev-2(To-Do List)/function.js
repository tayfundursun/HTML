let userInput = document.querySelector("#task");

// Adding Input Function
function newElement(){
    let userEntry = userInput.value;

    // Creating a Li element and putting the input in it.
    let userDOM = document.querySelector("#list");
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${userEntry} <span onclick="removeList()" class="close">&times;</span>`;

    if(userEntry === ""){
        console.log("input empty");
        // Insert Alert function here.
    } else {
        userDOM.append(liDOM);
        document.querySelector(".placeholderValue").value = "";
    }
    
    console.log(userEntry, "getting input works");
}

// Removing Input Function
function removeList(){
    

    console.log("deleting function works.")
}