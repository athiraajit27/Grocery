const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    var a = response.shopping;
    var tb1 = document.getElementById("item_id");
    for (i = 0; i < a.length; i++) {
      item_id.innerHTML +=
        "<td>" +
        a[i].Serialno +
        "</td>" +
        "<td>" +
        a[i].Name +
        "</td>" +
        "<td>" +
        a[i].Quantity +
        "</td>" +
        "<td>" +
        a[i].Unit +
        "</td>" +
        "<td>" +
        a[i].Department +
        "</td>" +
        "<td>" +
        a[i].Notes +
        "</td>";
    }
  }
};
xhttp.open("GET", "ajax.json", true);
xhttp.send();
