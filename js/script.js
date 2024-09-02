
/*----Full Page Slider---------------*/

/*<!----$(document).ready(function() {---->*/
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true,
        thumbItem:3
    });
/*});*/
/*-----For Search Bar-----------------------------*/
 /* $(document).on('click','.search',function(){
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click','.search-cancel',function(){
    $('.search-bar').removeClass('search-cancel')
}); 
*/

$(document).ready(function(){
    $("button").click(function(){
        $("#search-cancel").empty();
    });
});
/*------FEATURED SLIDER------*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
/*-----for--fix-menu-when-scroll-------->*/
$(window).sroll(function(){
    if($(document).scrollTop()>50){
        $('.navigation').addClass('fix-nav');
    }
    else{
        $('.navigation').removeClass('fix-nav');
    }
});
/*--for-responsive-menu---------*/
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
})