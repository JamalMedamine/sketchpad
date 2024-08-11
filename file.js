
const container = document.querySelector('#container');
const createGrid = document.getElementById("createGrid");

function createNewGrid(size){
for(let i = 0; i < size*size; i++){
    const gridItem = document.createElement('div');
    gridItem.className = "gridItem";
    gridItem.style.width = `${100 / size}%`;
    gridItem.style.height = `${100 / size}%`;
    container.appendChild(gridItem);
}}
function removeCurrentGrid(item){
    item.forEach(div =>{
        div.remove();
    })

}
    createNewGrid(16);
    function newSetup(){
        let items = document.querySelectorAll(".gridItem");
        let s = prompt("enter number of squares per side");
        while(s > 100){
            s =prompt("number invalid , the number should be less than 100");
        }
        removeCurrentGrid(items);
        createNewGrid(s);
        items = document.querySelectorAll(".gridItem");
        items.forEach(div =>{
            div.addEventListener('mouseover',function(){
                div.style.backgroundColor= "black";
            })
            })
        

    }
    createGrid.addEventListener("click",()=>newSetup());
    const items = document.querySelectorAll(".gridItem");
    items.forEach(div =>{
    div.addEventListener('mouseover',function(){
        div.style.backgroundColor= "black";
    })
    })
    function clear(){
        const items = document.querySelectorAll(".gridItem");
        items.forEach(div =>{
            div.style.backgroundColor="white";
            div.addEventListener('mouseover',function(){
                div.style.backgroundColor="black";
            })
        })
    }
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click",()=>clear());
