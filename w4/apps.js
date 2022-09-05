const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
  };

//Creating an object called isDaysUntilDue that contains the different types of Days that can be worn.
//Trying to use functions and using a method to determine the isDaysUntil and select what to do based on the isDaysUntilDue for my homework.
// Creating a method and function that tells me what to do and how many days until its due.

const isDaysUntilDue = {
  day: { 
    one: ' You need to do homework now it is due tomorrow!',
    two: 'You have 2 days until homework due date is coming up!',
    three: ' You have a three more Days, get started on your homework',
    four: ' Do homework if you have time, you will be alright...but dont rush it, you have 4 days.',
    fiveplus: 'Try to get ahead more, you have 6 days until homeworks due.',
  },
  getDay: function (isDaysUntilDue) {
    this.due = isDaysUntilDue;
  },
  whatToDo: '',

  determineDay: function (isDaysUntilDue) {
    if (isDaysUntilDue <= 1) {
      this.whatToDo = this.day.one;
    } else if ((isDaysUntilDue <= 2)) {
      this.whatToDo = this.day.two;
    } else if ((isDaysUntilDue <= 3)) {
      this.whatToDo = this.day.three;
    } else if ((isDaysUntilDue <= 4)) {
      this.whatToDo = this.day.four;
    } else { (isDaysUntilDue > 4) 
      this.whatToDo = this.day.fiveplus;
    }
  },
};

isDaysUntilDue.determineDay(1);
showOnPage(`Things to do today.  ${isDaysUntilDue.whatToDo} `);
isDaysUntilDue.determineDay(2);
showOnPage(`Things to do today.  ${isDaysUntilDue.whatToDo} `);
isDaysUntilDue.determineDay(3);
showOnPage(`Things to do today.  ${isDaysUntilDue.whatToDo} `);
isDaysUntilDue.determineDay(4);
showOnPage(`Things to do today.  ${isDaysUntilDue.whatToDo} `);
isDaysUntilDue.determineDay(5);
showOnPage(`Things to do today.  ${isDaysUntilDue.whatToDo} `);
