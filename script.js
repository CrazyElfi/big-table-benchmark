function newRow(){
    console.log("newRow");
    // for (var j=0; j < 10000; j++) {
    //
    //     var row = document.createElement("TR");
    //     row.setAttribute("class", "row");
    //     row.id = "row_" + j;
    //
    //     for (var i = 0; i < 5; i++) {
    //         var data = document.createElement("TD")
    //         data.className = "myTd";
    //         data.innerHTML = "text" + i + j;
    //         row.appendChild(data);
    //     }
    //     document.getElementById("myTable").appendChild(row);
    // }
}
var arr = [1,2,3,4,5,6,7,8,9,10,11];

var startIndex = 0;
var endIndex = 3;
var range = endIndex - startIndex;
var canShowNext = true;
var canShowPrev = true;

function print(startIndex, endIndex) {
    var printArr = [];
    for(var i = startIndex; i < endIndex; i++) {
        if(arr[i] !== undefined) {
            newRow();
            printArr.push(arr[i]);
        }

    }
    if(printArr.length)
        console.log(printArr);
}

function showNext() {

    canShowPrev = true;

    if(!canShowNext)
        return;

    startIndex = endIndex;
    endIndex = endIndex + range;
    print(startIndex, endIndex);

    if((startIndex + range) > arr.length){
        canShowNext = false;
        console.log('end of array!:');
    }
}

function showPrev() {
    canShowNext = true;
    if(!canShowPrev)
        return;

    endIndex = startIndex;
    startIndex = endIndex - range;
    print(startIndex, endIndex);

    if((startIndex - range) < 0){
        canShowPrev = false;
        console.log('start of array!:');
    }
}

console.log(arr);
print(startIndex, endIndex);
