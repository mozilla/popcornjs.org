jQuery(function($) {

  // Size the intro logo splash to the viewport height on load.
  $('.intro').height($(window).height());

  // Resize the welcome panel on viewport resize.
  $(window).on('resize orientationChanged', function() {
    $('.intro').height($(window).height());
  });

  // Once the page has finished loading, animate the appearance of the logo and navigation.
  $(window).load(function () {
    $('.logo').addClass('active');
    $('nav').addClass('active');
  });

  // Smooth scrolling for local links.
  $('a').smoothScroll({offset: -30});

  // Effects on scroll.
  function set_homepage_waypoint(target_container, target, offset) {
    $(target_container).waypoint(function() {
      $(target).addClass('active');
    }, {
      offset: offset
    });
  }

  set_homepage_waypoint('.popcorn_users', '.popcorn_users', 500);

});