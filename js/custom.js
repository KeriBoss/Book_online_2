/**
   * Initiate glightbox
   */
const glightbox = GLightbox({
    selector: '.glightbox'
    });

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        window.addEventListener('load', togglescrollTop);
        document.addEventListener('scroll', togglescrollTop);
        scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
        }));
    }

window.addEventListener('DOMContentLoaded', function(){
    const imgLap = this.document.getElementById('img-laptop');
    const imgMobile = this.document.getElementById('img-mobile');

    if(imgLap && imgMobile){
        if(this.window.innerWidth <= 414.98){
            imgLap.style.display = "none";
            imgMobile.style.display = "block";
        }else{
            imgMobile.style.display = "none";
            imgLap.style.display = "block";
        }
    }
})

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

if(imgBtns){
    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });
    
    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase .img:first-child').clientWidth;
        if(displayWidth){
            document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    
        }
    }
}

window.addEventListener('resize', slideImage);

