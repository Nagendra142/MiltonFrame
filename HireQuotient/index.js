var btn=document.getElementById('btn');
let a=document.getElementById('changecode');
function leftClick(){
    btn.style.left='0';
}
function rightClick(){
    btn.style.left='110px';
    let b=a.textContent;
    b.textContent="$40";
}