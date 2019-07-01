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
// console.log('testset');
// var arr = [];
// for(var i = 0; i < 10; i++) {
//     arr.push(i)
// }
// console.log(arr);
// console.log('length', arr.length);
// console.log('arr[9]', arr[9]);
// var counter = 0;
// var startEl = 0;
// var endEl = 2;
// var step = endEl + 1;
//
// var allowNext = true;
// var allowPrev = true;
//
// function showNextElems() {
//     if(!allowNext)
//         return;
//     allowPrev = true;
//
//     printer(startEl + step, endEl + step);
//
//     if(((startEl + step) < arr.length - 1)) {
//         startEl = startEl + step;
//         // console.log('startEl',startEl);
//     } else {
//         startEl = startEl + step;
//         endEl = endEl + step;
//         allowNext = false;
//     }
//     if(((endEl + step) < arr.length - 1)) {
//         endEl = endEl + step;
//     } else {
//         console.log('its end of array!');
//
//     }
// }
//
// function showPrevlems() {
//     if(!allowPrev)
//         return;
//
//     allowNext = true;
//     printer(startEl - step, endEl - step);
//
//     if(((startEl - step) > 0)) {
//         startEl = startEl - step;
//     } else {
//         startEl = startEl - step;
//         endEl = endEl - step;
//         allowPrev = false;
//     }
//     if(((endEl - step) > 0) && (endEl - step) > step) {
//         endEl = endEl - step;
//     } else {
//         console.log('its start of array!');
//     }
// }
//
// printer(startEl, endEl);
//
// function printer(start, end) {
//     // console.log('startEl:' + start + ' endEl:' + end);
//
//     for(var n = start; n <= end; n++) {
//         // console.log('n', n);
//         if(arr[n] !== undefined) {
//             console.log(arr[n]);
//         }
//     }
//     console.log('________________________');
//
// }

