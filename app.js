TweenMax.defaultEase = Linear.easeOut;
const tl = new TimelineMax({ paused: true });


$('#pagepiling').pagepiling({
  menu: null,
  direction: 'vertical',
  anchors: [],
  loopBottom: false,
  loopTop: false,
  css3: true,
  onLeave: (index, nextIndex, direction) => {
    const Select = $('#'+index + ' span');
    // tl.staggerTo(Select, 0.5, { y: "60", opacity: 0 });
  }
});


$('#pp-nav').hide();