function avadaUpdateToTopPostion(){var o=avadaToTopVars.totop_position.split("_");o=2===o.length?"to-top-"+o[0]+" to-top-"+o[1]:"to-top-"+o[0],jQuery(".to-top-container").attr("class","to-top-container"),jQuery(".to-top-container").addClass(o)}jQuery(document).ready(function(){var o=0,a=jQuery("html").hasClass("ua-edge")||jQuery("html").hasClass("ua-safari-12")||jQuery("html").hasClass("ua-safari-11")||jQuery("html").hasClass("ua-safari-10")?"body":"html";jQuery(".fusion-top-top-link").on("click",function(o){o.preventDefault(),(cssua.ua.mobile&&-1!==avadaToTopVars.status_totop.indexOf("mobile")||!cssua.ua.mobile)&&jQuery(a).animate({scrollTop:0},1200,"easeInOutExpo")}),jQuery(window).on("scroll",function(){var a=jQuery(this).scrollTop();200<a&&(a>=o||1!==parseInt(avadaToTopVars.totop_scroll_down_only))?jQuery(".fusion-top-top-link").addClass("fusion-to-top-active"):jQuery(".fusion-top-top-link").removeClass("fusion-to-top-active"),o=a}),jQuery(window).on("updateToTopPostion",avadaUpdateToTopPostion)});