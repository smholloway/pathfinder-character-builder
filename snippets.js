var myRows = [];
var $headers = $("th");
var $rows = $("tbody tr").each(function(index) {
  $cells = $(this).find("td");
  myRows[index] = {};
  $cells.each(function(cellIndex) {
    myRows[index][$($headers[cellIndex]).html()] = $(this).html();
  });
});

var myObj = {};
myObj.myrows = myRows;
console.table(myRows)

copy(myRows);



var myRows = [];
var $headers = document.querySelectorAll("#sites-canvas-main-content > div > table > tbody > tr > td.sites-layout-tile.sites-tile-name-content-1 > div > div:nth-child(2) > table th");
var $rows = document.querySelectorAll("#sites-canvas-main-content > div > table > tbody > tr > td.sites-layout-tile.sites-tile-name-content-1 > div > div:nth-child(2) > table tbody tr");
for (var i = 3, l = $rows.length, index = 0; i < l; i++, index++) {
  $cells = $rows[i].cells;
  myRows[index] = {};
  for (var j = 0; j < $cells.length; j++) {
    myRows[index][$headers[j].innerText] = $cells[j].innerText;
  }
}

var myObj = {};
myObj.myrows = myRows;
console.table(myRows)

copy(myRows);
