/* initialize jsPsych */
var jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.displayData();
  },
});

/* create timeline */
var timeline = [];
