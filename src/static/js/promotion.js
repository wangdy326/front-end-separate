$(function(){
    $(".promotion-btn-more").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).parents(".promotion-item").find(".promotion-detail").slideUp(200);
        }else{
            $(this).addClass("active");
            $(this).parents(".promotion-item").find(".promotion-detail").slideDown(200);
        }
    })
})