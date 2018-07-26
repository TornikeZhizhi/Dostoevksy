




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


$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -76
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    }  // End if
  });
});


// active on scroll


  $(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop()+100;

    // Show/hide menu on scroll
    // if (scrollDistance >= 850) {
    //     $('nav').fadeIn("fast");
    // } else {
    //     $('nav').fadeOut("fast");
    // }
  
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav-item a.active').removeClass('active');
            $('.nav-item a').eq(i).addClass('active');
        }
    });
}).scroll();







$(window).on('scroll', check_if_in_view1);
$(window).on('scroll resize', check_if_in_view1);
$(window).trigger('scroll');

function check_if_in_view1() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.book_box'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

  
      
      $(".book_scroll").addClass("bounceInLeft");
      $(".book_scroll2").addClass("bounceInLeft");
      $(".book_scroll3").addClass("bounceInRight");
      $(".book_scroll4").addClass("bounceInRight");
    	
     
    }
  });
}



$(window).on('scroll', check_if_in_view2);
$(window).on('scroll resize', check_if_in_view2);
$(window).trigger('scroll');

function check_if_in_view2() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.bio_img'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

  
      
      $(".bio_img").addClass("bounceInLeft");
      $(".bio").addClass("bounceInRight");
    	
     
    }
  });
}



$(window).on('scroll', check_if_in_view3);
$(window).on('scroll resize', check_if_in_view3);
$(window).trigger('scroll');

function check_if_in_view3() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('#demos'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

  
      
      $("#demos").addClass("zoomInDown");
    
    
    }
  });
}




$(window).on('scroll', check_if_in_view4);
$(window).on('scroll resize', check_if_in_view4);
$(window).trigger('scroll');

function check_if_in_view4() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.scoll_review_left'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

  
      
      $(".scoll_review_left").addClass("bounceInLeft");
      $(".scoll_review_right").addClass("bounceInRight");
    
    	
     
    }
  });
}




$(window).on('scroll', check_if_in_view5);
$(window).on('scroll resize', check_if_in_view5);
$(window).trigger('scroll');

function check_if_in_view5() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.form_box'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

  
      
      $(".form_box").addClass("bounceInLeft");
      $(".info_right").addClass("bounceInRight");
    
    	
     
    }
  });
}




// resp menu 

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

var nav_item = document.getElementsByClassName("nav-item");




function hideNav(){

for (var i = 0; i < nav_item.length; i++) {
	nav_item[i].addEventListener("click",function(){
		document.getElementById("myNav").style.height = "0%";
	})
}
}
hideNav()



// mousemove

function mousemove(){


window.addEventListener("mousemove",function(event){
var x = (event.clientX / window.innerWidth *100)/25;
var y = (event.clientY / window.innerWidth *100)/15;

document.getElementById("penbox").style.top = 2+ y + "%";
document.getElementById("penbox").style.right = 5+x + "%";

document.getElementById("pigeon").style.top = 7+ x + "%";
document.getElementById("pigeon").style.left = 15+y + "%";

})

}

mousemove()


function mousemove2(){


window.addEventListener("mousemove",function(event){
var x = (event.clientX / window.innerWidth *100)/25;
var y = (event.clientY / window.innerWidth *100)/10;

document.getElementById("penbox2").style.top = 5+ x + "%";
document.getElementById("penbox2").style.left = 2+y + "%";

})

}

mousemove2()




function mousemove3(){


window.addEventListener("mousemove",function(event){
var x = (event.clientX / window.innerWidth *100)/25;
var y = (event.clientY / window.innerWidth *100)/10;

document.getElementById("bio_move").style.top = 5+ x + "%";
document.getElementById("bio_move").style.left = 2+y + "%";

})

}

mousemove3()



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