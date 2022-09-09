const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
};

// Created an array of what to say to myself depending on the days due
const due = [
  {
      whatToDo: `you need to do homework now it is due tomorrow!`,
    },
    {
      whatToDo: `homework due date is coming up!`,
    },
    {
      whatToDo: `get started on your homework.`,
    },
    {
      whatToDo: `do homework if you have time, you will be alright...but dont rush it.`,
    },
    {
      whatToDo: `try to get ahead more, you have time.`,
    },
  ];

  const myDue = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const myHomework = [
      {
        due: myDue(1, 10),
      },
      {
        due: myDue(1, 10),
      },
      {
        due: myDue(1, 10),
      },
      {
        due: myDue(1, 10),
      },
      {
        due: myDue(1, 10),
      },
    ];
  
  const until = [
      `<b>ONE DAY</b> until Homework is due, `,
      `<b>TWO DAYS</b> until Homework is due, `,
      `<b>THREE DAYS</b> until Homework is due, `,
      `<b>FOUR DAYS</b> until Homework is due, `,
      `<b>FIVE or more days</b> until Homework is due, `,

    ];

  let oddDay = []
  oddDay = [0] `<center>Hey ${due[count].whatToDo}... you have ${until[count]} use your time wisely! You have ${myHomework[count].myDue} assignments due between your classes.</center>`
  oddDay = [1] `<center>Hey ${due[count].whatToDo}... you have ${until[count]} use your time wisely! You have ${myHomework[count].myDue} assignments due between your classes.</center>`
  oddDay = [2] `<center>Hey ${due[count].whatToDo}... you have ${until[count]} use your time wisely! You have ${myHomework[count].myDue} assignments due between your classes.</center>`
  oddDay = [3] `<center>Hey ${due[count].whatToDo}... you have ${until[count]} use your time wisely! You have ${myHomework[count].myDue} assignments due between your classes.</center>`
  oddDay = [4] `<center>Hey ${due[count].whatToDo}... you have ${until[count]} use your time wisely! You have ${myHomework[count].myDue} assignments due between your classes.</center>`
  
  function oddDay () {
    let randomDay = Math.floor(math.random()*(oddDay.length))
    document.getElementById(`pday`).innerHTML = oddDay[randomDay];
  }
  showOnPage(oddDay)