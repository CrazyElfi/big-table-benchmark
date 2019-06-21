
function newRow(){

    for (var j=0; j < 10000; j++) {

        var row = document.createElement("TR");
        row.setAttribute("class", "row");
        row.id = "row_" + j;

        for (var i = 0; i < 5; i++) {
            var data = document.createElement("TD")
            data.className = "myTd";
            data.innerHTML = "text" + i + j;
            row.appendChild(data);

        }
        document.getElementById("myTable").appendChild(row);

    }
}


console.log(data)
