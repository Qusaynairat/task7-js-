const btn = document.querySelectorAll('.card .btn');
const clear = document.querySelector('.clear');
// console.log(btn);
function click(e) {
    const counter = e.target.closest('div').querySelector('.count');
    const key = e.target.closest('div').querySelector('.title');
    counter.textContent=parseInt(counter.textContent)+1;
    localStorage.setItem(key.textContent,counter.textContent);
}
for (i of btn) {
    i.onclick = click;
}
clear.onclick=()=>{
    localStorage.clear();
    window.location.reload();
}
function getitem(){
    const divs=document.querySelectorAll(".card");
    for(let i of divs)
    {
        const title=i.querySelector(".title").textContent;
        // console.log(title);
        const counter=localStorage.getItem(title);
        const counterr=parseInt(counter);
            i.querySelector(".count").textContent=~~counterr;
    }
}
window.onload=getitem;

// convert nan and undefind to 0 => ~~ +!!counter
// var q=+!!NaN;
// console.log(q);
// console.log(typeof q);
