$(document).ready(function() {
  console.log("jQuery Ready");
  (document.getElementsByTagName('table')[0]).className = 'notPostContent';
  for (i = 0; i < document.getElementsByTagName('td').length; i++) {
    document.getElementsByTagName('td')[i].className = 'notPostContent';
  }
  for (i = 0; i < document.getElementsByTagName('tr').length; i++) {
    document.getElementsByTagName('tr')[i].className = 'notPostContent';
  }

  if ((document.location.pathname == "/index.html" || document.location.pathname == "/") === false) {
    // This checks that the page is not on the root directory or index.html
    console.log("not on index")
  }

});
