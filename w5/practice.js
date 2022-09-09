const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
};

// Created an array of what to say to myself depending on thes due
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
    
    const isDaysUntilDue = {
      day: { 
        one: ' You need to do homework now it is due tomorrow!',
        two: 'You have 2 days until homework due date is coming up!',
        three: ' You have a three more Days, get started on your homework',
        four: ' Do homework if you have time, you will be alright...but dont rush it, you have 4 days.',
        fiveplus: 'Try to get ahead more, you have 6 days until homeworks due.',
      },

   
       getWork: function (work) {
        this.hw = work;
      },
      toDo: '',
    
      determineDay: function (work) {
        if (work <= 1) {
          this.toDo = this.determine.one;
        } if ((work  <= 2)) {
          this.toDo = this.determine.two;
        } if ((work  <= 3)) {
          this.toDo = this.determine.three;
        } if ((work  <= 4)) {
          this.toDo = this.determine.four;
        } else { (work  > 4) 
          this.toDo = this.determine.fiveplus;
        }
      },
    };

    window.onclick = myFunction;
    function myFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "pink";
  
      for (count = 0; count < 1; count++) {
        let min = 0;
        let max = 4;
        let x = Math.floor(Math.random() * (max - min)) + min;
      
      work.determineDay(x);
      showOnPage(`<center>Hey  ${due[count].whatToDo}... you have ${until[count]} use your time wisely! You have ${myHomework[count].myDue} assignments due between your classes.</center>` );
      }
    }
// cant figure out how to make it work for randomizing the days but keeping the functions together without creaing one big function.... will need to practice this more