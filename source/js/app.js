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
