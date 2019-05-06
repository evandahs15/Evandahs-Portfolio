// JavaScript
// window.sr = ScrollReveal()

// sr.reveal('.home-intro', {
//   delay: 0,
//   duration: 1000,
//   origin: 'bottom',
//   distance: '50px'
// })

var menuOpen = false
console.log(menuOpen)

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

// $('#title').mouseover(function () {
//   $('.home-wrapper #projects').addClass('white')
// })

$('#project-wrapper').scroll(function (e) {
  var topDistance = $('#image-1').offset().top
  var hitTop = true
  if (topDistance < -131.421875) {
    hitTop = false
    if (!hitTop) {
      $('#title').addClass('title-fade')
    }
  } else {
    $('#title').removeClass('title-fade')
  }
})

function showSection () {
  $('#mobile-app-section').slideToggle('slow', function () {})
  $('#Line-4-Copy').toggleClass('minus')
  $('.plus-sign').toggleClass('rotate')
  setTimeout(function () {
    $('.project-section-header-container').toggleClass('disable-hover')
  }, 500)
  
}
