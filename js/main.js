jQuery(function($) {

  // Size the intro logo splash to the viewport height on load.
  $('.logo').height($(window).height());

  // Resize the welcome panel on viewport resize.
  $(window).on('resize orientationChanged', function() {
    $('.logo').height($(window).height());
  });

  // Once the page has finished loading, animate the appearance of the logo and navigation.
  $(window).load(function () {
    $('.logo img').addClass('active');
    $('nav').addClass('active');
  });

  // Smooth scrolling for local links.
  $('a').localScroll({offset: -30});

  // Effects on scroll.
  function set_homepage_waypoint(target_container, target, offset) {
    $(target_container).waypoint(function() {
      $(target).addClass('active');
    }, {
      offset: offset
    });
  }

  set_homepage_waypoint('.popcorn_users', '.popcorn_users', 500);

  // Homepage video.
  var video, cues;
  video = new Popcorn('#video');

  // Once the video is playable...
  video.on('canplaythrough', function(){

    // Show it, mute it, and play it.
    $('.video_container').addClass('ready');
    video.mute();
    video.play();

    // Scroll to sections at times.
    cues = {
      1 : { 'time' : '00:04', 'target' : '.intro' },
      2 : { 'time' : '00:08', 'target' : '.popcorn_users' },
      3 : { 'time' : '00:12', 'target' : '.examples' }
    };

    $.each(cues, function(cue, parameters) {
      video.code({
        start:   parameters.time,
        onStart: function() {
          $.scrollTo(parameters.target, 1000, {
            offset: -95
          });
        }
      });
    });
  });

});