
const container = document.querySelector('#container');
for(let i = 0; i < 16; i++){
    const subcontainer = document.createElement('div');
    subcontainer.className = "subcontainer";
    for(let j=0;j < 16;j++){
        const gridItem = document.createElement('div');
        gridItem.className = "gridItem"
        subcontainer.appendChild(gridItem);
    }
    container.appendChild(subcontainer);
}
const items = document.querySelector(".gridItem");
function hover(){
    items.style.color ="black";
}
items.addEventListener("mouseover",()=>hover());