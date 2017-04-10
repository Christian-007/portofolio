// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require ajax_setup
//= require bootstrap
//= require modal
//= require select2
//= require select2_init
//= require turbolinks
//= require_tree .

$(function() {
	$("a.page-scroll").on("click", function(event) {
        var $anchors = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $($anchors).offset().top - 30
        }, 1500);
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
	$(".navbar-collapse ul li a.page-scroll").on("click", function(){
	    $(".navbar-toggle:visible").click();
	});
});