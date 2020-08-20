import flatpickr from "flatpickr";

const dummyTimes = {
  '20-08-20': [
    '11 - 12 pm',
    '11 - 12 pm',
    '12 - 1 pm',
    '11 - 12 pm',
  ],
  '20-08-21': [
    '11 - 12 pm',
    '5 - 6 pm',
  ],
  '20-08-22': [
    '11 - 12 pm',
    '1 - 2 pm',
    '4 - 5 pm',
    '5 - 6 pm',
  ],
  '20-08-23': [
    '11 - 12 pm',
    '12 - 1 pm',
    '2 - 3 pm'
  ],
  '20-08-24': [
    '11 - 12 pm',
    '12 - 1 pm',
    '2 - 3 pm'
  ],
  '20-08-25': [
    '11 - 12 pm',
    '12 - 1 pm',
    '2 - 3 pm'
  ],
  '20-08-26': [
    '11 - 12 pm',
    '12 - 1 pm',
  ],
  '20-08-27': [
    '11 - 12 pm',
    '1 - 2 pm',
    '5 - 6 pm',
    '7 - 8 pm',
  ]
}
// CALENDAR CONFIG
document.querySelector('#calendar').flatpickr({
  minDate: 'today',
  maxDate: new Date().fp_incr(31),
  defaultDate: 'today',
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'y-m-d',
  locale: {
    firstDayOfWeek: 1, // start week on q
  },
  inline: true,
  onChange: (dates, dayPicked, instance) => {
    console.log(dayPicked);

    const availableTimesContainer = document.querySelector('#available-times')
    if (dummyTimes[dayPicked]) {
      availableTimesContainer.innerHTML = ''

      const buttonMarkup = dummyTimes[dayPicked].map((time, index) => {

        const input = document.createElement("INPUT")
        const label = document.createElement("LABEL")

          input.setAttribute("type", "radio")
          input.setAttribute("id", `time-${index + 1}`)
          input.setAttribute("name", "apt-time")
          input.setAttribute("value", time)
          input.setAttribute("required", true)
          input.setAttribute("data-parsley-required-message", "Select a time slot.")

          label.setAttribute("for", `time-${index + 1}`)
          label.classList = "w-75 sm:w-100 p-y-8 p-x-45 bg-blue-dark white text-18 m-b-10 border-radius-4 box-shadow pointer";
          label.innerText = time;

          const errorList = document.querySelector('#available-times + .parsley-errors-list');

          if (errorList) {
            errorList.remove()
          }

          availableTimesContainer.appendChild(input);
          availableTimesContainer.appendChild(label);
      })
    }

  },
});
// maxDate: new Date('April 10 2020'),
// disable: [
//   function(date) {

//     // return true to disable :: DISABLED SUNDAY & 2020 Random Days
//     return (date.getDay() === 0 || date.getDay() === 7 ||
//     date.toDateString() === 'Mon Sep 03 2020' ||
//     date.toDateString() === 'Thu Nov 22 2020' ||
//     date.toDateString() === 'Fri Nov 23 2020' ||
//     date.toDateString() === 'Mon Dec 24 2020' ||
//     date.toDateString() === 'Tue Dec 25 2020' ||
//     date.toDateString() === 'Mon Dec 31 2020' ||
//     date.toDateString() === 'Tue Jan 01 2020');
//   },
// ],
