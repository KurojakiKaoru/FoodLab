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

  //contact form
  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            school_name: {
              validators: {
                   stringLength: {
                      min: 2,
                  },
                  notEmpty: {
                      message: 'Please supply your School Name. If u dont want to continue, just go'
                  }
              }
          },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            website: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your School Website'
                  }
                }        
          },
          state: {
            validators: {
                notEmpty: {
                    message: 'Please select which planet you live on it. If you are an alien, you can skip that'
                }
            }
        },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply your messgae'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // 
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

