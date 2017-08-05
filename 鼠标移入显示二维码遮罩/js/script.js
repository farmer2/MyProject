
$(function(){
		   
   /*B2B/B2C切换 */
   $("#companyUl li").bind("click",function(){
       $(this).addClass("selected").siblings().removeClass("selected");
       $('#companyList div').eq($(this).index()).show().siblings().hide();
   });

    /*二维码鼠标经过*/
    $(".company_b2b dl").hover(function(){
        $(this).children('dt').eq(1).css({"display":"block","background":"#000","position":"absolute","filter":"alpha(opacity=50)","opacity":"0.5","z-index":"2","top":"0","left":"0"});
        $(this).children('dt').eq(2).css({"display":"block","background":"none","z-index":"3"});
        $(this).children('dd').addClass("mouse_effi");
    },function(){
        $(this).children('dt:gt(0)').css({"display":"none"});
        $(this).children('dd').removeClass("mouse_effi");
        }
    );

})