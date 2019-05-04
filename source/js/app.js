// JavaScript
window.sr = ScrollReveal()

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });

function showNav () {
  console.log('this is working')
  var x = document.getElementById('fullscreen-nav')
  if (x.className === 'fullscreen-nav') {
    x.className += ' unfold'
  } else {
    x.className = 'fullscreen-nav'
  }
}

// create a function when you click the nav-link,
// 1. prevent default
// 2. menu close
// 3. soft transition to the new page

// function showNav () {
//   console.log('this is working')
//   // $(this).toggleClass('smart-close');
//   if (!menuOpen) {
//     menuOpen = true
//     $('#sidebar').animate({left: 0}, 300)
//     $('#sidebar').addClass('sidebar-open')
//     $('#content, .site-title').animate({
//       opacity: 0.1
//     }, 300)

//     $('#content').click(function () {
//       menuOpen = false
//       event.preventDefault()
//       $('#menu-smart').removeClass('smart-close')
//       $('#sidebar').removeClass('sidebar-open')
//       $('#content, .site-title').animate({
//         opacity: 1
//       }, 300)
//     })
//   } else {
//     menuOpen = false
//     $('#sidebar').animate({left: '-13.25em'}, 300)
//     $('#sidebar').removeClass('sidebar-open')
//     $('#content, .site-title').animate({
//       opacity: 1
//     }, 300)
//   }
// }
