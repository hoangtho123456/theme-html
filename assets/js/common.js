//dang_tho
//email:danghoangtho1132@gmail.com
jQuery(document).ready(function($) {
  // function escapeHtml(str) {
  //   return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  // }

  if($(".c-slider1-js").length > 0) {
    var elms = document.getElementsByClassName('c-slider1-js');

    for ( var i = 0; i < elms.length; i++ ) {
      new Splide(elms[i],{
        perPage: 1,
        arrows: false,
        type:"loop",
        pagination: true,
        // lazyLoad: false,
        lazyLoad: 'nearby',
        height: '80vh',
        // cover   : true,
        speed: 1000,
        // autoplay:true,
      }).mount();
    }
  }

  //use in block home-product
  if($(".c-splide1-js").length > 0) {
    var elms = document.getElementsByClassName('c-splide1-js');

    for ( var i = 0; i < elms.length; i++ ) {
      new Splide(elms[i],{
        pagination: false,
        perPage: 3,
        gap: 24,
        // drag: false,
        // arrows: false,
        // type:"loop",
        // pagination: true,
        // lazyLoad: 'nearby',
        // speed: 1000,
        // autoplay:true,
        breakpoints: {
          1199: {
            perPage: 2,
          },
          767: {
            perPage: 2,
            gap: 10,
          },
          575: {
            perPage: 1,
            gap: 10,
          },
        }
      }).mount();
    }
  }
  //use in block home-product
  if($(".c-splide2-js").length > 0) {
    var elms = document.getElementsByClassName('c-splide2-js');

    for ( var i = 0; i < elms.length; i++ ) {
      new Splide(elms[i],{
        pagination: true,
        perPage: 3,
        // gap: 24,
        // drag: false,
        arrows: false,
        // type:"loop",
        // pagination: true,
        // lazyLoad: 'nearby',
        // speed: 1000,
        // autoplay:true,
        breakpoints: {
          1199: {
            perPage: 2,
          },
          767: {
            perPage: 2,
            // gap: 10,
          },
          575: {
            perPage: 1,
            // gap: 10,
          },
        }
      }).mount();
    }
  }

  //use for block about-partner
  if($(".p-about_splide1-js").length > 0) {
    var elms = document.getElementsByClassName('p-about_splide1-js');
    for ( var i = 0; i < elms.length; i++ ) {
      new Splide(elms[i],{
        type: 'loop',
        pagination: false,
        perPage: 4,
        gap: 48,
        autoplay: true,
        speed: 1000,
        interval: 3000,
        perMove: 1,
        breakpoints: {
          1199: {
            perPage: 3,
            gap: 30,
          },
          767: {
            perPage: 2,
            gap: 20,
          },
          575: {
            perPage: 2,
            gap: 10,
          },
          350: {
            perPage: 1,
            gap: 0,
          },
        }
      }).mount();
    }
  }

  /**
    *action: set equal height for all title/content in the list
  */
  const setEqualBoxHeight = (listItem, nameCard='.card1', titleName='.card1_title1') => {
    var listItem = listItem;
    var titleHeight = null;
    var title = null;
    var max = 0;
    var cards = null;
    var that = null; 

    listItem.each(function (i) {
      that = $(this);
      cards = that.find(nameCard);

      cards.each(function (i) {
        titleHeight = cards.eq(i).find(titleName).height();

        if(titleHeight && max < titleHeight) {
          max = titleHeight;
        }
      });

      title = cards.find(titleName);
      title.css({'height': max + 'px'});
      max = 0;
    });
  };
  if($(window).width()>576) {
    if($('.c-splide1-js').length) {
      var listItem = $('.c-splide1-js');
      setEqualBoxHeight(listItem, '.splide__slide', '.splide__text-js');
      setEqualBoxHeight(listItem, '.splide__slide', '.splide__title-js');
    }

    //equal height page product
    if($('.p-product_row-js').length) {
      var listItem = $('.p-product_row-js');
      setEqualBoxHeight(listItem, '.column-js', '.row_text-js');
      setEqualBoxHeight(listItem, '.column-js', '.row_title-js');
    }

    //equal height page product
    if($('.c-equal-height-card-js').length) {
      var listItem = $('.c-equal-height-card-js');
      setEqualBoxHeight(listItem, '.card-js', '.card_text-js');
      setEqualBoxHeight(listItem, '.card-js', '.card_tilte-js');
    }
  }

  /*
    *@tab block about-partner  
    Note: you should use this tab with class css to avoid 
    exception errors which will be occured in blocks 
    contain slider,plugin,...
    Check css/scss in block about-partner for more detail
  */
  if($(".p-about_tab_js").length > 0) {
    $('.p-about_tab_js').each(function(index, element) {
      var $that = $(this);
      // $that.find('.tabs-js .tab-js').hide();
      // $that.find('.tabs-js .tab-js:first').show();
      $that.find('.tabs-js .tab-js').addClass('hidden');
      $that.find('.tabs-js .tab-js:first').addClass('active');

      $that.find('.btns-js .btn-js:first').addClass('active');

      $that.find('.btns-js .btn-js').click(function(event) {
        event.preventDefault();

        $that.find('.btns-js .btn-js').removeClass('active');
        $(this).addClass('active');
        // $that.find('.tabs-js .tab-js').hide();
        $that.find('.tabs-js .tab-js').removeClass('active');
        $that.find('.tabs-js .tab-js').addClass('hidden');

        //store tab's id of a link that was clicked
        var selectedTab = $(this).attr("data-tab");

        //show tab corresponding which the link's href that is clicked 
        // $('.' + selectTab).fadeIn();
        $('.' + selectedTab).addClass('active');
        $('.' + selectedTab).removeClass('hidden');
      });
    });
  }

  if($(".p-list-toggle-js").length > 0) {
    $('.p-list-toggle-js').each(function(index, element) {
      let $that = $(this);
      
      //init list toggle
      //add class [current-js] to check if current card is prev card, if true, no event occur^^
      $that.find('.card-js .content-js').hide();
      $that.find('.card-js').removeClass('current-js');

      $that.find('.card-js:first .content-js').show();
      $that.find('.card-js:first>.icon-js').addClass('up');
      $that.find('.card-js:first').addClass('current-js');

      $that.find('.card-js').click(function(event) {
        event.preventDefault();

        if(!$(this).hasClass('current-js')) {
          $that.find('.card-js .content-js').slideUp();
          $that.find('.card-js>.icon-js').removeClass('up');
          $that.find('.card-js').removeClass('current-js');
  
          $(this).find('.content-js').first().slideDown();
          $(this).addClass('current-js');
          $(this).children('.icon-js').addClass('up');
        }

        // $that.find('.btns-js .btn-js').removeClass('active');
        // $(this).addClass('active');
        // // $that.find('.tabs-js .tab-js').hide();
        // $that.find('.tabs-js .tab-js').removeClass('active');
        // $that.find('.tabs-js .tab-js').addClass('hidden');

        // //store tab's id of a link that was clicked
        // var selectTab = $(this).attr("data-tab");

        // //show tab corresponding which the link's href that is clicked 
        // // $('.' + selectTab).fadeIn();
        // $('.' + selectTab).addClass('active');
        // $('.' + selectTab).removeClass('hidden');
      });
    });
  }
});

