// var currentTime = Moment.currentTime()
$(document).ready(function () {
    var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || [
        { time: 7, input: "" },
        { time: 8, input: "" },
        { time: 9, input: "" },
        { time: 10, input: "" },
        { time: 11, input: "" },
        { time: 12, input: "" },
        { time: 13, input: "" },
        { time: 14, input: "" },
        { time: 15, input: "" },
        { time: 16, input: "" },
        { time: 17, input: "" },
        { time: 18, input: "" },
        { time: 19, input: "" },
    ];
    console.log(timeInputs);
    var currentHour = moment().hours();
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    console.log(currentHour);
    //Create Variable with the hours.

    //Show Today's date on the DOM
    function printTime() {
        $("#currentDay").text(todaysDate);
    }

    //Show Hours on the DOM
    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            console.log(timeInputs[i].time, timeInputs[i].input);
            var inputGroup = $('<div class="input-group mb-3" id="times">').css("font-size", "20px");
            var inputGroupPrepend = $('<div class="input-group-prepend" id="times">');
            var prependSpan = $('<span class="input-group-text" id="times">' + timeInputs[i].time + ':00' + '</span>').attr({ class: "hour"});
            inputGroupPrepend.append(prependSpan);
            var inputEl = $('<input type="text" class="form-control"  value="' + timeInputs[i].input + '" id="times-'+i+'">');
            var inputGroupAppend = $('<div class="input-group-append" id="times">');
            var appendSpan = $('<span data-time="" class="input-group-text"><button id="saveB-' + i + '">Save</button></span>').attr({ class: "saveBtn"});
            inputGroupAppend.append(appendSpan);
            inputGroup.append(inputGroupPrepend).append(inputEl).append(inputGroupAppend);
            $(".container").append(inputGroup);
        }

        //Button Save
        ////Add Calendar Events to local storage
        $("button").click(function () {

            event.preventDefault();
            var currentID = $(this).attr('id');
            currentID = currentID.split('-') // [saveB, 2]
            currentID = currentID[1];
            console.log(currentID);
            var toStore = $("#times-" + currentID).val();
            console.log(toStore);
            for (var i = 0; i < timeInputs.length; i++) {
                if (timeInputs[i].time === parseInt(currentID) + 7) {
                    timeInputs[i].input = toStore;
                }
            }
            console.log(timeInputs);
            
            localStorage.setItem("timeInputs",JSON.stringify(timeInputs));

        });
    }
    //Check relative time
  function colorTime() {
    for (let i = 0; i < timeInputs.length; i++) {
        var currHour = moment().hour(7 + i);
        if (moment().isBefore(currHour)) {
            $("#times-"+i).addClass("future");
        } else if (moment().isAfter(currHour)) {
            $("#times-"+i).addClass("past");
        } else {
            $("#times-"+i).addClass("present");
        }
    };
  };


  //Add Calendar Events to local storage
// $("#saveB").click(function () {
//     console.log("button.click")
//     event.preventDefault();
//     var currentID = $(this).attr('id');
//     var toStore = $(("#times-" + currentID)).val();
//     localStorage.setItem(("myEvent" + currentID), toStore);
// });










//     function printInputBlocks() {
//         for (let i = 0; i < timeInputs.length; i++) {
//             console.log(timeInputs[i].time, timeInputs[i].input);
//             var inputGroup = $('<div class="input-group mb-3" id="times">');
//             var inputGroupPrepend = $('<div class="input-group-prepend" id="times">');
//             var prependSpan = $('<span class="input-group-text" id="times">' + timeInputs[i].time + ':00' + '</span>');
//             inputGroupPrepend.append(prependSpan);
//             var inputEl = $('<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value="' + timeInputs[i].input + '" id="times">');
//             var inputGroupAppend = $('<div class="input-group-append" id="times">');
//             var appendSpan = $('<span data-time="" class="input-group-text" id="times"><button>Save</button></span>');
//             inputGroupAppend.append(appendSpan);
//             inputGroup.append(inputGroupPrepend).append(inputEl).append(inputGroupAppend);
//             $(".container").append(inputGroup);
//         }
//     }


//     //Check relative time
// function colorTime() {
//     for (let i = 0; i < timeInputs.length; i++) {
//         var calTime = moment().hour(7 + i);
//         if (moment().isBefore(calTime)) {
//             $("#times").addClass("future");
//         } else if (moment().isAfter(calTime)) {
//             $("#times").addClass("past");
//         } else {
//             $("#times").addClass("present");
//         }
//     };
// };



    // function compareTime() {
    //     var currentHour = parseInt(moment().format('HH'));
    //     for (let i = 0; i < timeInputs.length; i++) {
    //          console.log(currentHour);
    //     if (currentHour < timeInputs[i].time) {
    //         $(timeInputs).addClass("past");
    //     }
    //     else if (currentHour == timeInputs[i].time) {
    //         $(timeInputs).css("background", "pink");
    //     }
        
    //     }
    // }
    
    // compareTime();



    // function compareTime() {
    //     var nowTime = parseInt(moment().format('HH'));

    //     //Start from 9AM, till 5PM
    //     for (var i = 0; i >= 23; i++) {
    //         var timeBlock = parseInt($("#" + nowTime + "hr").attr(".container"));
    //         console.log(timeBlock);

    //         if (timeBlock < nowTime) {
    //             $("#" + nowTime + "hr").addClass("past");
    //         } else if (timeBlock == nowTime) {
    //             $("#" + nowTime + "hr").addClass("present");
    //         } else if (timeBlock > nowTime) {
    //             $("#" + nowTime + "hr").addClass("future");
    //         }
    //     }
    // }
    //     compareTime();



    // // Function to compare current time vs timeblock time
    // // Set color of time block to be past(grey), present (salmon), future(aqua)
    // function compareTime() {
    //     var currentTime = parseInt(moment().format('HH'));

    //     //Start from 8AM, til 8PM
    //     for (time = 8; time < 21; time++) {
    //         var timeblock = parseInt($("#" + time + "hr").attr("data-index"));

    //         if (timeblock < currentTime) {
    //             $("#" + time + "hr").css("background", "lightgrey");
    //         }
    //         else if (timeblock == currentTime) {
    //             $("#" + time + "hr").css("background", "salmon");
    //         }
    //         else if (timeblock > currentTime) {
    //             $("#" + time + "hr").css("background", "aqua");
    //         }
    //     } // End For 
    // } // End compareTimesss

    // compareTime();
    printTime();
    printInputBlocks();
    colorTime();
});