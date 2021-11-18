const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    var Jshopping = response.shopping;
    var tb1 = document.getElementById("tbl");
    for (i = 0; i < Jshopping.length; i++) {
      tbl.innerHTML +=
        "<td>" +
        Jshopping[i].Serialno +
        "</td>" +
        "<td>" +
        Jshopping[i].Name +
        "</td>" +
        "<td>" +
        Jshopping[i].Quantity +
        "</td>" +
        "<td>" +
        Jshopping[i].Unit +
        "</td>" +
        "<td>" +
        Jshopping[i].Department +
        "</td>" +
        "<td>" +
        Jshopping[i].Notes +
        "</td>";
    }
  }
};
xhttp.open("GET", "ajax.json", true);
xhttp.send();
