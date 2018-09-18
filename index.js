var table = document.getElementsByTagName('table')
var td = document.getElementsByTagName('td')
var tr = document.getElementsByTagName('tr')
table.classList.add('notPostContent');
td.classList.add('notPostContent');
tr.classList.add('notPostContent');
if ((document.location.pathname == "/index.html" || document.location.pathname == "/") === false) {
    // This checks that the page is not on the root directory or index.html
  console.log("not on index")
  document.getElementById("shorthand").classList.add('notPostConten');
}
