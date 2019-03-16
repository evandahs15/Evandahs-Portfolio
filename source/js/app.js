// JavaScript
window.sr = ScrollReveal()

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });

// ShowNav
function showNav () {
  console.log('this is working')
  var x = document.getElementById('fullscreen-nav')
  if (x.className === 'fullscreen-nav') {
    x.className += ' unfold'
  } else {
    x.className = 'fullscreen-nav'
  }
}

// Hover in nav
// Hover for village in nav
document.getElementById('nav-item-1').onmouseover = function () {
  document.getElementById('village-nav-summary').style.display = 'grid'
}
document.getElementById('nav-item-1').onmouseout = function () {
  document.getElementById('village-nav-summary').style.display = 'none'
}
// Hover for summerfest in nav
document.getElementById('nav-item-2').onmouseover = function () {
  document.getElementById('summerFest-nav-summary').style.display = 'grid'
}
document.getElementById('nav-item-2').onmouseout = function () {
  document.getElementById('summerFest-nav-summary').style.display = 'none'
}
// Hover for poolside in nav
document.getElementById('nav-item-3').onmouseover = function () {
  document.getElementById('poolside-nav-summary').style.display = 'grid'
}
document.getElementById('nav-item-3').onmouseout = function () {
  document.getElementById('poolside-nav-summary').style.display = 'none'
}
// Hover for about me in nav
document.getElementById('nav-item-4').onmouseover = function () {
  document.getElementById('about-nav-summary').style.display = 'grid'
}
document.getElementById('nav-item-4').onmouseout = function () {
  document.getElementById('about-nav-summary').style.display = 'none'
}
// create a function when you click the nav-link,
// 1. prevent default
// 2. menu close
// 3. soft transition to the new page

