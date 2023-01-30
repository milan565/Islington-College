



 $(document).ready(function(){
    $(".click_me").click(function(){
        $(".full_menu").addClass("open");
    });
    $(".menu_closeicon").click(function(){
        $(".full_menu").removeClass("open");
    });

   



    // $(window).scroll(function(){
    //     // console.log($(this).scrollTop());
    //    if($(this).scrollTop()>780)
    //    {
    //     $(".unseen_menu").addClass("scroll");
    //    }
    //    if($(this).scrollTop()<780)
    //    {
    //     $(".unseen_menu").removeClass("scroll");
    //    }
   
    // });
    
    var ani=new Typed('.banner_ani',{
        Strings: ["memories,","stories,","collage."],
        typeSpeed:200,
        backSpeed:200,
        loop:true,

    });
});

$(document).ready(function(){
    $(".bachlor_button").click(function(){
        $(".bachlor").addClass("active_block");
        $(".master").removeClass("active_block");
   
    });
   
});
$(document).ready(function(){
    $(".master_button").click(function(){
        $(".master").addClass("active_block");
        $(".bachlor").removeClass("active_block");
   
    });
   
});
$(document).ready(function(){
    
 $(".loader_section").addClass("load");
    
});
