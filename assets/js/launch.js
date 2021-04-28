jQuery(document).ready(function($){
    $('.grid').imagesLoaded(function(){
        var $grid = $('.grid').masonry({
            itemSelector: '.hentry',
        });

        var msnry = $grid.data('masonry');

        $grid.infiniteScroll({
            path: '.pagination__next',
            append: '.hentry',
            outlayer: msnry,
            status: '.scroller-status',
            hideNav: '.pagination',
        });
    });
});
