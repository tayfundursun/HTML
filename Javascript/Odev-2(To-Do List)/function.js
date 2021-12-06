let userInput = document.querySelector("#task");
let userDOM = document.querySelector("#list");

// Adding Input Function
function newElement(){
    let userEntry = userInput.value;

    // Creating a Li element and putting the input in it.
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${userEntry} 
        <span onclick="crossOut()" class="close">&times</span>`;

    if(userEntry === ""){
        // Insert Alert function here.

    } else {
        liDOM.setAttribute("onclick","crossOut()");
        liDOM.setAttribute("class", "myLi");
        userDOM.appendChild(liDOM);
        document.querySelector(".placeholderValue").value = "";
    }

    // Deleting the Li element
    let closeButton = document.getElementsByClassName("close");
    for (let i = 0; i < closeButton.length; i++) {                                        
        closeButton[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none"; 
        }
    }
}

// Crossing Out when the work is done.
function crossOut(){
    let crossDOM = document.getElementsByClassName("myLi");
    
    // find a way to get the correct index number!!
    crossDOM[1].setAttribute("class", "checked");
    
}

