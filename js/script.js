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