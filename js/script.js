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