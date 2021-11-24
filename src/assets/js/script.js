window.addEventListener("scroll",function(){
    var header=this.document.querySelector(".header-menu");
    header.classList.toggle("sticky",this.scrollY>0)
})