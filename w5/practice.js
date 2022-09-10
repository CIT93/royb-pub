  const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
  };

  let isDaysUntilDue;

  isDaysUntilDue = {
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
    _whatToDo: '',
    get whatToDo() {
      return this._whatToDo;
    },
    set whatToDo(value) {
      this._whatToDo = value;
    },

    determineDay: function (isDaysUntilDue) {
      if (isDaysUntilDue <= 1) {
        this.whatToDo = this.day.one;
      } else if (isDaysUntilDue <= 2) {
        this.whatToDo = this.day.two;
      } else {
        if (isDaysUntilDue <= 3) {
          this.whatToDo = this.day.three;
          return;
        }
        if (isDaysUntilDue <= 4) {
          this.whatToDo = this.day.four;
        } else {
          (isDaysUntilDue > 4);
          this.whatToDo = this.day.fiveplus;
        }
      }
    },
  };

  for (count = 0; count < 1; count++) {
    let min = 0;
    let max = 4;
    let x = Math.floor(Math.random() * (max - min + 1)) + min;

    isDaysUntilDue.determineDay(x);
    showOnPage(`<center>Things to do today.  <b>${isDaysUntilDue.whatToDo}</b> </center>`);
  }


