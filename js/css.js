$(window).on('load',function(){
    function end(){
        $('.load').fadeOut();
    }
    setTimeout(end,1000);
})

$(function(){
    
    function css(){
        if($(".main").height() >= $(".main").width()){
            $(".cw").height($(".main").width() * 0.9)
            $(".cw").width($(".main").width() * 0.9)
        }else{
            $(".cw").height($(".main").height() * 0.9)
            $(".cw").width($(".main").height() * 0.9)
        }
    }

    css()

    $(window).resize(function(){
        css()
    })
});