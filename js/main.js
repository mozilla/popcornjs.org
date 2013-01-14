jQuery(function($) {

  // Size the intro logo splash to the viewport height on load.
  $('.intro').height($(window).height());

  // Resize the welcome panel on viewport resize.
  $(window).on('resize orientationChanged', function() {
    $('.intro').height($(window).height());
  });

  // Smooth scrolling for local links.
  $('a').smoothScroll({offset: -30});

  // Effects on scroll.
  function set_homepage_waypoint(target_container, target, offset) {
    $(target_container).waypoint(function(event, direction) {
      if (direction === 'down') {
        $(target).addClass('active');  
      } else {
        $(target).removeClass('active');
      }
    }, {
      offset: offset
    });
  }

  set_homepage_waypoint('#intro', '.image_grid', 200);
  set_homepage_waypoint('#new_frontier', '#new_frontier img', 200);
  set_homepage_waypoint('#diagram-1', '#diagram-1 img', 300);
  set_homepage_waypoint('#diagram-2', '#diagram-2 img', 300);
  set_homepage_waypoint('#profiles', 'ul.team', 300);

});