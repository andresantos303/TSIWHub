; (function ($) {
    "use strict";

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    const themesflatTheme = {

        // Main init function
        init: function () {
            this.config();
            this.events();
        },

        // Define consts for caching
        config: function () {
            this.config = {
                $window: $(window),
                $document: $(document),
            };
        },

        // Events
        events: function () {
            const self = this;

            // Run on document ready
            self.config.$document.on('ready', function () {


                // Retina Logos
                self.retinaLogo();


            });

            // Run on Window Load
            self.config.$window.on('load', function () {

            });
        },


        // Retina Logos
        retinaLogo: function () {
            const retina = window.devicePixelRatio > 1 ? true : false;
            const $logo = $('#site-logo img');
            const $logo2 = $('#logo-footer img');
            const $logo_retina = $logo.data('retina');

            if (retina && $logo_retina) {
                $logo.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
            if (retina && $logo_retina) {
                $logo2.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
        },
    }; // end themesflatTheme

    // Start things up
    themesflatTheme.init();

    // Header Fixed
    const headerFixed = function () {
        if ($('body').hasClass('header-fixed')) {
            const nav = $('#header_main');
            if (nav.length) {
                const offsetTop = nav.offset().top,
                    injectSpace = $('<div />', {
                    }).insertAfter(nav);
                $(window).on('load scroll', function () {
                    if ($(window).scrollTop() > 200) {
                        nav.addClass('is-fixed');
                        injectSpace.show();
                    } else {
                        nav.removeClass('is-fixed');
                        injectSpace.hide();
                    }

                    if ($(window).scrollTop() > 300) {
                        nav.addClass('is-small');
                    } else {
                        nav.removeClass('is-small');
                    }
                })
            }
        }
    };

    // Mobile Navigation
    const mobileNav = function () {
        const mobile = window.matchMedia("(max-width: 991px)");
        const wrapMenu = $("#site-header-inner");
        const navExtw = $(".nav-extend.active");
        const navExt = $(".nav-extend.active").children();

        responsivemenu(mobile);

        mobile.addListener(responsivemenu);

        function responsivemenu(mobile) {
            if (mobile.matches) {
                $("#main-nav")
                    .attr("id", "main-nav-mobi")
                    .appendTo("#header_main")
                    .hide()
                    .children(".menu")
                    .append(navExt)
                    .find("li:has(ul)")
                    .children("ul")
                    .removeAttr("style")
                    .hide()
                    .before('<span class="arrow"></span>');
            } else {
                $("#main-nav-mobi")
                    .attr("id", "main-nav")
                    .removeAttr("style")
                    .prependTo(wrapMenu)
                    .find(".ext")
                    .appendTo(navExtw)
                    .parent()
                    .siblings("#main-nav")
                    .find(".sub-menu")
                    .removeAttr("style")
                    .prev()
                    .remove();

                $(".mobile-button").removeClass("active");
                $(".sub-menu").css({ display: "block" });
            }
        }
        $(document).on("click", ".mobile-button", function () {
            $(this).toggleClass("active");
            $("#main-nav-mobi").slideToggle();
        });
        $(document).on("click", "#main-nav-mobi .arrow", function () {
            $(this).toggleClass("active").next().slideToggle();
        });
    };


    const alertBox = function () {
        $(document).on('click', '.close', function (e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })

    };

    const flatAccordion = function () {
        const args = { duration: 600 };
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();

        $('.flat-toggle.enable .toggle-title').on('click', function () {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.flat-accordion .toggle-title').on('click', function () {
            $('.flat-accordion .flat-toggle').removeClass('active');
            $(this).closest('.flat-toggle').toggleClass('active');

            if (!$(this).is('.active')) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
                $('.flat-accordion .flat-toggle').removeClass('active');
            }
        }); // accordion
    };

    const goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 200, 'easeInOutExpo');
            return false;
        });
    };


    const loadmore = function () {
        $(".fl-item").slice(0, 8).show();

        $(".loadmore").on("click", function (e) {
            e.preventDefault();

            $(".fl-item:hidden").slice(0, 8).slideDown();
            if ($(".fl-item:hidden").length == 0) {
                $(".loadmore").hide();
            }
        });
    };

    const parallax = function () {
        if ($().parallax && isMobile.any() == null) {
            $(".parallax").parallax("50%", 0.2);
        }
    };

    const flatAccordions2 = function () {
        const args = { easing: 'easeOutExpo', duration: 400 };
        $('.widget.active').find('.content-widget').show();
        $('.widget-title').on('click', function () {
            if (!$(this).parent().is('.active')) {
                $(this).parent().toggleClass('active')
                    .children('.content-widget').slideToggle(args)
                    .children('.content-widget').slideToggle(args);
                this.addClass('show');
            } else {
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    const Preloader = function () {
        setTimeout(function () {
            $(".preload").fadeOut("slow", function () {
                $(this).remove();
            });
        }, 800);
    };

    // Dom Ready
    $(function () {
        headerFixed();
        mobileNav();
        alertBox();
        goTop();
        AOS.init();
        loadmore();
        Preloader();
    });

})(jQuery);