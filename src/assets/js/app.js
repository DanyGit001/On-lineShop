$(document).foundation();

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
 if(newSize ==='small' && oldSize ==='medium' ) {
     $('#menu-principal').removeClass('expanded');
 }
 if(newSize ==='medium' && oldSize ==='small' ) {
     $('#menu-principal').addClass('expanded');
 }

});

var size = Foundation.MediaQuery.current;
if(size == "small") {
  $('#menu-principal').removeClass('expanded');
}