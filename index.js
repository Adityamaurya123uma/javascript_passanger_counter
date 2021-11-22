// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when hte button is clicked
// change the count-el in the html to reflect the new count
let countEl = document.getElementById("count-el");
let count = 0;
function increment(){
    count+=1;
    countEl.innerHTML=count;
    console.log(count);

}

function decrement(){
    count=count-1;
    countEl.innerHTML=count;
    console.log(count);
}

let saveel=document.getElementById('save-el');

function save(){
    saveel.textContent+=count+" - ";
    countEl.innerHTML = 0;
    count=0;
}



