jQuery(document).ready(function () {
  $('#wrapper, #project-wrapper').scroll(function () {
    var content = $(this).height()
    var primary = $('#primary').height()
    var onScroll = $(this).scrollTop()
    var scrollbarPosition = onScroll / (primary - content)
    var contentScroll = Math.floor(scrollbarPosition * 100)
    $('#scrollbar').height(contentScroll + '%')
  })
})
