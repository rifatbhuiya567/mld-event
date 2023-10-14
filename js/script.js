const fns = () => {
    let headerAndBtt = () => {
        let mainHeader = document.querySelector('.main-header'),
            btt = document.querySelector('.btt i');

        window.onload = () => {
            btt.style.display = 'none';
        }

        window.onscroll = () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                mainHeader.classList.add('nav-animation');
            }else {
                mainHeader.classList.remove('nav-animation');
            }

            if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                btt.style.display = 'block';
            }else {
                btt.style.display = 'none';
            }
        }

        btt.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
    headerAndBtt();

    let navigation = () => {
        let navItems = document.querySelectorAll('.main-navigation li');
    
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                document.querySelector('.main-navigation li.active').classList.remove('active');
                item.classList.add('active');
            })
        });
    }
    navigation();
    
    let slider = () => {
        var myBannerSlider = $('.banner-slide');
            myBannerSlider.on('init', function (e, slick) {
                  var $firstAnimatingElements = $('.banner-content:first-child').find('[data-animation]');
                  doAnimations($firstAnimatingElements);
            });
        
            myBannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.banner-content[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);
            });
        
            myBannerSlider.slick({
                autoplay: true,
                autoplaySpeed: 9000,
                speed: 500,
                dots: true,
                fade: true,
                arrows: false,
                cssEase: 'linear'
            });
        
            function doAnimations(elements) {
              var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function () {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                      });
                    $this.addClass($animationType).one(animationEndEvents, function () {
                        $this.removeClass($animationType);
                    });
                });
            }
    }
    slider();

    let testimonialSlide = () => {
        let slider = $('.testimonial-slide');

        slider.slick({
            autoplay: true,
            autoplaySpeed: 9000,
            speed: 500,
            dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    }
    testimonialSlide();

    let eventSlide = () => {
        let slide = $('.event-slide');

        slide.slick({
            autoplay: true,
            autoplaySpeed: 9000,
            speed: 500,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '.next',
            prevArrow: '.prev',
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }
    eventSlide();

    let teamSlide = () => {
        let slide = $('.team-slide');

        slide.slick({
            autoplay: true,
            autoplaySpeed: 9000,
            speed: 500,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '.nex',
            prevArrow: '.pre',
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }
    teamSlide();
}
fns();



