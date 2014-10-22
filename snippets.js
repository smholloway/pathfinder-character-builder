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
