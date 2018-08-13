// Navbar
$(".navT").on("click", function(){
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
    $(".content").toggleClass("shift");
  });
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
        $('.navT').css("opacity", 0);
        $('#menu').css("opacity", 0);
    }
    else {
        $('.navT').css("opacity", 1);
        $('#menu').css("opacity", 1);
    }
  });
  
  $(document).ready(function(){
    $('.navT').live("mouseover", function () {
            $(this).css("opacity", 1);
            });
    $('#menu').live("mouseover", function () {
            $(this).css("opacity", 1);
            });
  
    $('.navT').live("mouseleave", function () {
        if($(window).scrollTop() > 75) { 
            $(this).css("opacity", 0);
        }
    });
    $('#menu').live("mouseover", function () {
      $(this).css("opacity", 0);
      });
  
  })

// Contact Us
  $(".form").on('click', function(){
    $(this).addClass('active');
  });
  
  $(".submit").on('click', function() {
    $(this).parent().parent().hide(300);
    $(".ok_message").addClass("active");
  });
  
  $(".ok_message").on('click', function() {
    $(this).removeClass("active");
    $(".form").removeClass("active").show();
  });