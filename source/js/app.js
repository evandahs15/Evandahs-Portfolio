// preloader animation
$(function () {
  $('.about-title').animate({right: '0px'}, 1000, 'easeInOutSine')
  $('.border-line').delay(200).animate({right: '0px'}, 1000, 'easeInOutSine')
  $('.about-title').delay(2000).animate({opacity: '0'}, 1600, 'easeInOutSine')
  $('.border-line').delay(2000).animate({opacity: '0'}, 1600, 'easeInOutSine')
  $('.animation-container').animate({display: 'none'}, 100)
})



// button to toggle navigation screen
function showNav () {
  $('.nav-wrapper').css('display', 'block')
  $('.fullscreen-nav').animate({width: '100%'}, 600, 'easeInOutSine')
  $('.fullscreen-nav').css('padding', '25px 25px 25px 25px')
}

function closeNav () {
  $('.fullscreen-nav').animate({width: '3vw'}, 600, 'easeInOutSine')
  $('.fullscreen-nav').css('padding', '0')
  $('.nav-wrapper').css('display', 'none')
}

// create a function that animates everything then place it in
// function showNav () {
//   var nav = document.getElementById('fullscreen-nav')
//   if (nav.className === 'fullscreen-nav') {
//     $('.fullscreen-nav').animate({width: '100%'}, 1000, 'easeInOutSine')
//     nav.className += ' unfold'
//   } else {
//     nav.className = 'fullscreen-nav'
//     $('.fullscreen-nav').animate({width: '3vw'}, 1000, 'easeInOutSine')
//   }
// }

// Display interaction and animation in Navigation
// $(document).ready(
//   function () {
//     if ($('.fullscreen-nav').css({width: '3vw'})) {
//       $('.animation-container').css({display: 'none'})
//       $('.nav-col-2').css({display: 'none'})
//     } else {
//       $('.animation-container').css({width: '100%'})
//       $('.nav-col-2').css({display: 'flex'})
//     }
//   })

// Hover states for navigation
// Hover for about in nav

$('#nav-item-1').hover(function () {
  $('#about-nav-summary').css('opacity', '1')
}, function () {
  $('#about-nav-summary').css('opacity', '0')
})

// Hover for village in nav
$('#nav-item-2').hover(function () {
  $('#village-nav-summary').css('opacity', '1')
}, function () {
  $('#village-nav-summary').css('opacity', '0')
})

// Hover for summerfest in nav
$('#nav-item-3').hover(function () {
  $('#summerFest-nav-summary').css('opacity', '1')
}, function () {
  $('#summerFest-nav-summary').css('opacity', '0')
})

// Hover for about me in nav
$('#nav-item-4').hover(function () {
  $('#poolside-nav-summary').css('opacity', '1')
}, function () {
  $('#poolside-nav-summary').css('opacity', '0')
})

// create a function when you click the nav-link,
// 1. prevent default
// 2. menu close
// 3. soft transition to the new page

$(document).ready(function () {
  function screen990 () {
    if ($(document).width() > 991) {
      $('#nav-item-1').unbind('hover')
      $('#nav-item-2').unbind('hover')
      $('#nav-item-3').unbind('hover')
      $('#nav-item-4').unbind('hover')
    } else {
      $('#nav-item-1').bind('hover')
      $('#nav-item-2').bind('hover')
      $('#nav-item-3').bind('hover')
      $('#nav-item-4').bind('hover')
    }
  }

  screen990()

  $(document).resize(function () {
    screen990()
  })
})
