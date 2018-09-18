
document.getElementsByTagName('table').className = ('notPostContent');
document.getElementsByTagName('td').className = ('notPostContent');
document.getElementsByTagName('tr').className = ('notPostContent');
if ((document.location.pathname == "/index.html" || document.location.pathname == "/") === false) {
    // This checks that the page is not on the root directory or index.html
  console.log("not on index")
  document.getElementById("shorthand").className = ('notPostContent');
}
