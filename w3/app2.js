// Displaying on page functions
const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}
// This is a constant battle for me, I check calendar everyday and try to do all my homework but sometimes my mind just turns off unless its due right now.
let doHomework = function  (isDue = 5) {
    if (isDue >= 2 & isDue <= 99) {
     return showOnPage (Days (3));
    } else {
      return showOnPage('Relax and work on it when you can.');
    }
  }
  
  
  
  // With my ADHD I can't focus long periods on homework unless its immediatly due, so I tend to push things off until the end or rush and finish all of it ahead of time.
  // Made something easy similar to our calendars just to show if I have homework due.
  let Days = function (Day) {
    // if else statement determining if I have to rush to do homework or can take my time and spread it out.
    if (Day >= 1 && Day <= 2) {
      let isHomework = 'You need to do homework now.';
      let isDay = 'homework due date is coming up!';
      return `you have homework due, ${isHomework}, because the ${isDay}.`;
    } else if (Day >= 3 && Day <= 4) {
      let isNow = ' it is due soon, hurry and do the homework!';
      return `Looks like you have homework, ${isNow}.`;
    } else if (Day >= 5 && Day <= 10 ) {
      let isOk = 'you have a few more Day';
      let doRelax = 'just relax';
      let isAlright = `do homework, you can but it will be alright...but don't rush it.`;
      return `Nothing is due right now, ${isOk}, to ${doRelax} and if you want to ${isAlright}.`;
    } else {
      return ` ${isHomework} Time to panic, what did you do with your time?!`;
    }
  };
  let result1 = doHomework(5)
 

