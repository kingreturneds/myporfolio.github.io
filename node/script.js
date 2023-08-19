const tabs= document.querySelectorAll('.tab_btn');
const allcontent= document.querySelectorAll('.content_box');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        var linee=document.querySelector('.linee');
    linee.style.width=e.target.offsetWidth + "px"; 
    linee.style.left=e.target.offsetLeft + "px";
    allcontent.forEach(cont=>{cont.classList.remove('active')});
    allcontent[index].classList.add('active');
    })

})