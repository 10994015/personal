window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
    const upBtn = this.document.getElementsByClassName('scroll-up-btn')[0];
    upBtn.classList.toggle('active', window.scrollY > 500);    
});

