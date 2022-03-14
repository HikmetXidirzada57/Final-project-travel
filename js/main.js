$(".slick-box").slick({
    dots: true,
    infinite: true,
    autoplay: "true",
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

//  form control/////



$("#.sidebar-item .item-title i").click(function () {
   var iconIndex=$(this).index();
    $("#.sidebar-item .item-content2").slideUp();
    $("#.sidebar-item .item-content2").eq(iconIndex).slideDown();

})


window.onload=function(){
    setTimeout(()=>{
      document.querySelector(".loader").classList.add("d-none")
  
      document.body.style="overflow-y:scroll"
    },500)
   
  }