




window.onscroll = function() {
  scrollHeader();
}

var header = document.getElementById("header")

function scrollHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('scrol_header');
  } else {
    header.classList.remove('scrol_header');
  }
}



//
            $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 0,
                nav: true,
                loop: true,
                autoplay:true,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                smartSpeed: 850,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 4
                  }
                }
              })
            })

// resp menu 


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}



// scrol top

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});


$(".fa_icons span").eq(0).click(function(){

  window.open("https://www.facebook.com/DostoevskyGeo","_blank")
})


// particle

// scroll animes

  $(document).ready(function(){

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
  
  })
   

// Language

$(document).ready(function(){
  $(".language_box span").on("click",function(){
    $(".language_box span").removeClass("active");
    $(this).addClass("active");
  })
})
