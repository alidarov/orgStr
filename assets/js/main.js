import $ from 'jquery'

$(function () {
  $('.draggableArea').draggable({
    axis: 'x',
    containment: '.overflow',
    scroll: false,
  })
})
