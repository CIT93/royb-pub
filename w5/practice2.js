const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

const toDo = [
  `<center><font color="#000000" face="courier" size="3">go to work</center>`,
  `<center><font color="#000000" face="courier" size="3">Check PE HomeWork</center>`,
  `<center><font color="#000000" face="courier" size="3">Check JS Homework</center>`,
  `<center><font color="#000000" face="courier" size="3">Check Health1 Homework</center>`,
  `<center><font color="#000000" face="courier" size="3">Spend time with Rebecca</center>`,
  `<center><font color="#000000" face="courier" size="3">Feed and hangout with Aaliyah, before her bedtime</center>`,
];

showOnPage(
  `<b><center><font color="#000000" face="courier" size="5"> Things left to do are ${toDo.length} today.</font></center></b> <br>`
);

toDo.forEach(function (toDo, index) {
  const num = index + 1;
  showOnPage(`<center><font color="#000000" face="courier" size="3"><br>${num}</br>${toDo}</font></center>`);
});

theTime = function (hour) {
  if (hour >= 5 && hour < 5.5) {
    return `<center><font color="#000000" face="courier" size="5">You need to be on the road it is 5:30am ${toDo[0]}.</font></center>`;
  } else if (hour >= 11 && hour <= 11.5) {
    return `<center><font color="#000000" face="courier" size="5">Lunch time it is 11:30am, check some JS homework ${
      toDo[toDo.length - 4]
    }. quickly eat lunch!</font></center>`;
  } else if (hour > 13 && hour <= 14) {
    return `<center><font color="#000000" face="courier" size="5">Do you have Health1 homework its almost 2pm? ${
      toDo[toDo.length - 3]
    } work more hours</font></center>`;
  } else if (hour > 14 && hour <= 15) {
    return `<center><font color="#000000" face="courier" size="5">It's almost  3pm check PE homework ${
      toDo[toDo.length - 5]
    }.</font></center>`;
  } else if (hour > 15 && hour < 17) {
    return `<center><font color="#000000" face="courier" size="5">It's 3pm do some Homework and then ${toDo[toDo - 5]}`;
  } else if (hour >= 17 && hour < 19) {
    return `<center><font color="#000000" face="courier" size="5">It's 5pm do some Homework and then ${toDo[toDo.length - 2]}`;
  } else if (hour >= 19 && hour < 21) {
    return `<center><font color="#000000" face="courier" size="5">It's 7pm do some Homework and then ${
      toDo[toDo.length - 1]
    }</font></center>`;
  } else {
    return `<center><font color="#000000" face="courier" size="5">It is night time, go to bed.</font></center>`;
  }
};

showOnPage("<hr>");
showOnPage(`<b><center><font color="#000000" face="courier" size="5"> ${theTime(19)}  </font></center><center><b>`);

const randomizeNum = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const plan = function (num) {
  if (num <= 5) {
    return `<b><center><font color="#000000" face="courier" size="5">You're ahead for now, get some rest and relax or get ahead in homework.</font></center></b>`;
  } else if (num > 5) {
    return `<b><center><font color="#000000" face="courier" size="5">You have excessive homework due, get on it!</font></center></b>`;
  }
};

const homeworkCheck = [
  {
    day: "<center>Monday</center>",
    myDue: randomizeNum(1, 10),
    newHomework: randomizeNum(1, 5),
    isAhead: undefined,
  },
  {
    day: "<center>Tuesday</center>",
    myDue: randomizeNum(1, 10),
    newHomework: randomizeNum(1, 3),
    isAhead: undefined,
  },
  {
    day: "<center>Wednesday</center>",
    myDue: randomizeNum(1, 6),
    newHomework: randomizeNum(1, 3),
    isAhead: undefined,
  },
  {
    day: "<center>Thursday</font></center>",
    myDue: randomizeNum(1, 4),
    newHomework: randomizeNum(1, 3),
    isAhead: undefined,
  },
  {
    day: "<center>Friday</center>",
    myDue: randomizeNum(1, 7),
    newHomework: randomizeNum(1, 3),
    isAhead: undefined,
  },
  {
    day: "<center>Saturday</center>",
    myDue: randomizeNum(1, 4),
    newHomework: randomizeNum(1, 3),
    isAhead: undefined,
  },
  {
    day: "<center>Sunday</center>",
    myDue: randomizeNum(1, 14),
    newHomework: randomizeNum(1, 5),
    isAhead: undefined,
  },
  
];

const index = homeworkCheck.forEach(function (heading) {
  showOnPage(`<b><center><font color="#000000" face="courier" size="5">${heading.day}</font></center></b>`);
  showOnPage(
    `<center><font color="#000000" face="courier" size="5">Homework to do: ${heading.myDue}
     <br><br><font color="#000000" face="courier" size="5">New Homework: ${heading.newHomework} <br><br>  ${plan(heading.myDue)}</font></center>`);
  showOnPage(`<center>___________________</center>`);
});

const allDone = function (gradeHomework, finishedHomework) {
  if (gradeHomework === finishedHomework) {
    return `<b><center><font color="#000000" face="courier" size="5">Homework is all done, go relax or get ahead!</font></center></b>`;
  } else {
    return `<b><center><font color="#000000" face="courier" size="5">You have homework due, get on it!</font></center></b>`;
  }
};

showOnPage(
  `<b><center><font color="#000000" face="courier" size="5">Homework Left</b> <br><br>${randomizeNum(1, 5)}</font></center>`
);