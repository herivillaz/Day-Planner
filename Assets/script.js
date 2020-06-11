    //Create Variable with the Timeblocks/hours.
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

    var currentHour = moment().hours();
    var todaysDate = moment().format("dddd, MMMM Do YYYY");


    //Show Today's date on the DOM
    function printTime() {
        $("#currentDay").text(todaysDate);
    }

    //Show Hours on the DOM
    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            console.log(timeInputs[i].time, timeInputs[i].input);
            var inputGroup = $('<div class="input-group mb-3" >').css("font-size", "20px");
            var inputGroupPrepend = $('<div class="input-group-prepend" >');
            var prependSpan = $('<span class="input-group-text" >' + timeInputs[i].time + ':00' + '</span>').attr({ class: "hour"});
            inputGroupPrepend.append(prependSpan);
            var inputEl = $('<input type="text" class="form-control"  value="' + timeInputs[i].input + '" id="times-'+i+'">');
            var inputGroupAppend = $('<div class="input-group-append" >');
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

    printTime();
    printInputBlocks();
    colorTime();
});