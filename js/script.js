$(document).ready(function() {
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:3,
        slideMargin:0,
        enableDrag: true,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });


    $('.tooltip').tooltipster({
        theme: 'tooltipster-shadow',
        plugins: ['follower']
    });
    $('.parallax-head').parallax();
    $('.parallax-footer').parallax();

});
