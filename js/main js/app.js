$("#header .header-box .left-img i").click(function(){
    $("#header .header-box  .right-ul").stop().slideDown()
})
$("#header .header-box  .right-ul .close").click(function(){
    $("#header .header-box  .right-ul").hide("slow")
})





$("#tab-menu #tab-top button").click(function(){

    $("#tab-menu #tab-top button").removeClass("activeBtn")
    $(this).addClass("activeBtn")
    const btnIndex=$(this).index()
    $("#tab-menu #tab-content .content-boxes").stop().slideUp()
    $("#tab-menu #tab-content .content-boxes").eq(btnIndex).stop().slideDown()
})

$("#footer .container .subscribe .input-group .form-control").click(function(){
    $(this).css({
       borderColor:"blue"
    })

    
    
})