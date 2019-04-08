$(window).on('hashchange', function() {
  var hash = window.location.hash.substring(1);
  console.log(hash);

  if (hash == 'hello') {
    changeBackground('#91B5E5');
  } else if (hash == 'goodbye') {
    changeBackground('#FFFEC8');
  }

});



function changeBackground(color) {
  let main = document.getElementsByClassName('main')[0];
  main.style.background = color;
}
