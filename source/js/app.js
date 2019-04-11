// JavaScript
// window.sr = ScrollReveal()

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });

(function () {
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('.fullscreen-nav'),
    content: document.querySelector('#wrapper'),
    title: document.querySelector('#title'),

    doToggle: function (e) {
      e.preventDefault()
      this.navToggle.classList.toggle('expanded')
      this.nav.classList.toggle('expanded')
      this.content.classList.toggle('expanded')
      this.title.classList.toggle('expanded')
    }
  }

  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e) })
}())
