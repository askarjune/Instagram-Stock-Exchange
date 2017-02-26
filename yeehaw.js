function updateMarketTable(){
  file = getUserQuantities();
  i = 1;

  for (var key in file) {

      memecol = [key];
      var value = file[key]["current"];
      var growth = file[key]["growth"]
      //name
      var a = document.getElementById("marketTable").rows[i].cells;
      a[1].innerHTML = memecol;
      //market value
      a[2].innerHTML = value;
      //growth
      a[3].innerHTML = growth;
      i++;
  }
}


updateMarketTable(file);