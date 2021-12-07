let userInput = document.querySelector("#task");
let userDOM = document.querySelector("#list");

// Adding Input Function
function newElement(){
    let userEntry = userInput.value;

    // Creating a Li element and putting the input in it.
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${userEntry} 
        <span onclick="crossOut()" class="close">&times</span>`;

    // If entry is nothing or just spaces.
    if(userEntry == "" || userEntry.trim().length == 0){
        document.querySelector(".placeholderValue").value = "";
        $('.error').toast("show");
    } else { // If entry is a valid input.
        userDOM.appendChild(liDOM);
        document.querySelector(".placeholderValue").value = "";
        $('.success').toast("show");
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
userDOM.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
});

// Pressing Enter Button works as well while entering value.
let conDOM = document.querySelector(".container")
conDOM.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        newElement();
    }
});