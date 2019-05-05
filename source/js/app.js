// JavaScript
window.sr = ScrollReveal()

sr.reveal('.home-intro', {
  delay: 0,
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
})

var menuOpen = false

function showNav () {
  $('.close-nav').toggleClass('smart-close')
  if (!menuOpen) {
    menuOpen = true
    $('#sidebar').addClass('sidebar-open')
    $('#wrapper').animate({opacity: 0.1}, 300)

    $('#content, .nav-item').click(function () {
      $('#side-menu-button').removeClass('smart-close')
      $('#sidebar').removeClass('sidebar-open')
      $('#wrapper').animate({opacity: 1}, 300)
      menuOpen = false
    })
  } else {
    $('#sidebar').removeClass('sidebar-open')
    $('#wrapper').animate({opacity: 1}, 300)
    menuOpen = false
  }
}

$('#wrapper').scroll(function (e) {
  var topDistance = $('#projects').offset().top
  var hitTop = true
  console.log(topDistance)
  if (topDistance < 400.1875) {
    hitTop = false
    if (!hitTop) {
      $('#page-header').replaceWith('<h1 id="page-header" class="huge"> Projects </h1>')
    }
  } else {
    hitTop = true
  }
})

$('#wrapper').scroll(function (e) {
  var topDistance = $('#about').offset().top
  var hitTop = true
  if (topDistance < 300.1875) {
    hitTop = false
    if (!hitTop) {
      $('#page-header').replaceWith('<h1 id="page-header" class="huge">About Me</h1>')
    }
  } else {
    hitTop = true
  }
})

$('#wrapper').scroll(function (e) {
  var topDistance = $('.download-resume').offset().top
  var hitTop = true

  if (topDistance < 80.1875) {
    hitTop = false
    if (!hitTop) {
      $('#page-header').replaceWith('<h1 id="page-header" class="huge">Contact</h1>')
    }
  } else {
    hitTop = true
  }
})

$('#wrapper').scroll(function (e) {
  var topDistance = $('#home-intro').offset().top
  var hitTop = true
  if (topDistance > -400.1875) {
    hitTop = false
    if (!hitTop) {
      $('#page-header').replaceWith('<h1 id="page-header" class="huge">Evandah Steadman</h1>')
    }
  } else {
    hitTop = true
  }
})
