// var currentTime = Moment.currentTime()
$(document).ready(function () {
    // var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || {};
    var currentHour = moment().hours();
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    console.log(currentHour);
    //Create Variable with the hours.
    var timeInputs = [
        { time: 7, input: "" },
        { time: 8, input: "" },
        { time: 9, input: "Wake up" },
        { time: 10, input: "" },
        { time: 11, input: "Go to work" },
        { time: 12, input: "" },
        { time: 13, input: "" },
        { time: 14, input: "" },
        { time: 15, input: "" },
        { time: 16, input: "" },
        { time: 17, input: "" },
        { time: 13, input: "" },
        { time: 18, input: "" },
        { time: 19, input: "" },
        { time: 20, input: "" },
        { time: 21, input: "" },
        { time: 22, input: "" },
        { time: 23, input: "" },
    ]
    //Show Today's date on the DOM
    function printTime() {
        $("#currentDay").text(todaysDate);
    }

    //Show Hours on the DOM
    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            console.log(timeInputs[i].time, timeInputs[i].input);
            var inputGroup = $('<div class="input-group mb-3">');
            var inputGroupPrepend = $('<div class="input-group-prepend">');
            var prependSpan = $('<span class="input-group-text">' + timeInputs[i].time + ':00' + '</span>');
            inputGroupPrepend.append(prependSpan);
            var inputEl = $('<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value="' + timeInputs[i].input + '">');
            var inputGroupAppend = $('<div class="input-group-append">');
            var appendSpan = $('<span data-time="" class="input-group-text"><button>Save</button></span>');
            inputGroupAppend.append(appendSpan);
            inputGroup.append(inputGroupPrepend).append(inputEl).append(inputGroupAppend);
            $(".container").append(inputGroup);
        }
    }
    printTime();
    printInputBlocks();
})