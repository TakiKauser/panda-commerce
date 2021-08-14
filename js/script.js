// h2 texts color changed
const sectionTitles = document.getElementsByClassName("section-title");

for (const title of sectionTitles){
    // console.log(title);
    title.style.color = "white";
}

// items section bg color changed
const itemsContainer = document.getElementsByClassName("item-container");

for (const itemContainer of itemsContainer){
    // console.log(itemContainer);
    itemContainer.style.backgroundColor = "grey";
}

// card items borderradius changed to 30px
const cards = document.getElementsByClassName("card");

for (const card of cards){
    // console.log(card);
    card.style.borderRadius = "30px";
}

// button click event handler
document.getElementById("confirmation-btn").addEventListener("click", function(){
    document.body.style.backgroundColor = "tomato";
});

// confirmation button and text

// after typing "Email" in textarea, SUBMIT button is enabled and change the bg when it is clicked as button click event handler set-up

// keyup
document.getElementById("confirmation-text").addEventListener("keyup", function(event){
    // const confirmationText = document.getElementById("confirmation-text");
    // console.log(confirmationText.value);

    // console.log(event.target.value);
    const confirmationButton = document.getElementById("confirmation-btn");
    if((event.target.value) == "Email"){
        confirmationButton.removeAttribute("disabled");
    }
    else{
        confirmationButton.setAttribute("disabled", true);
    }
});

// change
document.getElementById("confirmation-text").addEventListener("change", function(){
    const confirmationText = document.getElementById("confirmation-text");
    console.log(confirmationText.value);
});

// subscribe double click bg change
document.getElementById("subscribe").addEventListener("dblclick", function(){
    document.getElementById("subscribe").style.backgroundColor = "tomato";
});

// buy now buttons onclick removal
const removableButtons = document.getElementsByClassName("panda-btn-buy-now");
for (const button of removableButtons){
    button.addEventListener("click", function(event){
        // console.log(event.target);
        
        event.target.parentNode.removeChild(event.target);
        // event.target.style.display = "none";
    });
}