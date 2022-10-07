document.querySelector("button").addEventListener(
    "click",
    function (s) {
      s.target.textContent = "Get started!";
  
      const header = document.createElement("h1");
      header.textContent = `Weekly Homework`;
      document.querySelector("#output").appendChild(header);
  
      const toDo = [
        `go to work`,
        `check PE HomeWork`,
        `check JS Homework`,
        `check Health1 Homework`,
        `spend time with Rebecca`,
        `feed and hangout with Aaliyah, before her bedtime`,
      ];
  
      toDo.splice(0, 6, "Have you eaten?");
      toDo.push("Focus on studying");
  
      toDo.forEach(function (hmm) {
        const li = document.createElement("li");
        li.textContent = hmm;
        document.querySelector("#output").appendChild(li);
      });
  
      const thingsToDo = document.createElement("h4");
      thingsToDo.textContent = `You have ${toDo.length} things left!`;
      document.querySelector("#output").appendChild(thingsToDo);
  
      theTime = function (hour) {
        if (hour >= 5  && hour < 5.5) {
          return `You need to be on the road it is 5:30am ${toDo[0]}.`;
        } else if (hour >= 11 && hour <= 11.5) {
          return `Lunch time it is 11:30am, check some JS homework ${
            toDo[toDo.length - 4]
          }. quickly eat lunch!`;
        } else if (hour > 13 && hour <= 14) {
          return `Do you have Health1 homework its almost 2pm? ${toDo[toDo.length - 3]} work more hours`;
        } else if (hour > 14 && hour <= 15) {
          return `It's almost  3pm check PE homework ${
            toDo[toDo.length - 5]
          }.`;
        } else if (hour > 15 && hour < 17) {
          return `It's 3pm do some Homework and then ${toDo[toDo - 5]}`;
        } else if (hour >= 17 && hour < 19) {
          return `It's 5pm do some Homework and then ${toDo[toDo.length - 2]}`;
        } else if (hour >= 19 && hour < 21) {
          return `It's 7pm do some Homework and then ${
            toDo[toDo.length - 1]
          }`;
        } else {
          return `It is night time, go to bed.`;
        }
      };
  
      const isTime = document.createElement("h4");
      isTime.textContent = ` ${theTime(
        14)} `;
      document.querySelector("#output").appendChild(isTime);
  
      const randomizeNum = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
  
      const plan = function (num) {
        if (num <= 5) {
          return `get some rest and relax or get ahead in homework.`;
        } else if (num > 5) {
          return `get started! You have excessive homework due, get on it!`;
        }
      };
  
      const homeworkCheck = [
        {
          day: "Monday",
          myDue: randomizeNum(1, 10),
          newHomework: 5,
          homeworkDoneToday: 1,
          timeLeft: undefined,
        },
        {
          day: "Tuesday",
          myDue: randomizeNum(1, 10),
          newHomework: 0,
          homeworkDoneToday: 2,
          timeLeft: undefined,
        },
        {
          day: "Wednesday",
          myDue: randomizeNum(1, 6),
          newHomework: 0,
          homeworkDoneToday: 0,
          timeLeft: undefined,
        },
        {
          day: "Thursday",
          myDue: randomizeNum(1, 4),
          newHomework: 5,
          homeworkDoneToday: 4,
          timeLeft: undefined,
        },
        {
          day: "Friday",
          myDue: randomizeNum(1, 7),
          newHomework: 0,
          homeworkDoneToday: 0,
          timeLeft: undefined,
        },
        {
          day: "Saturday",
          myDue: randomizeNum(1, 4),
          newHomework: 0,
          homeworkDoneToday: 0,
          timeLeft: undefined,
        },
        {
          day: "Sunday",
          myDue: randomizeNum(1, 4),
          newHomework: 2,
          homeworkDoneToday: 2,
          timeLeft: undefined,
        },
      ];
  
  
      homeworkCheck.forEach(function (heading) {
        const div = document.createElement("div");
        div.innerText = `${
          heading.day
        } \n _____________________________________________________________________________________________ \n\nDue Homework: ${
          heading.myDue
        } \n\n New Homework: ${
          heading.newHomework
        } \n\n Homework Done: ${
          heading.homeworkDoneToday
        }\n\n You should: ${plan(heading.myDue)} \n\n
         \n\n \n _____________________________________________________________________________________________ \n\n `;
        document.querySelector("#output").appendChild(div);
      });
  
      const finished = function (tasks, haveFun) {
        if (tasks === haveFun) {
          return `You are ahead, catch some fun time!`;
        } else {
          return `Get back to work you need to hurry up!`;
        }
      };
  
      const summary = document.createElement("h4");
      summary.innerText = `${finished (7, 7)}`;
      document.querySelector("#output").appendChild(summary);
    },
    { once: true }
  );
  
  // create a function that gets current date
  function getCurrentDate() {
    let date = new Date().toDateString();
    document.querySelector('.output').textContent = date;
  }





  document.querySelector("#search-text").addEventListener("input", function (e) {
    filters.searchText = e.target.value;
    renderTodos(homeworkCheck, filters);
  });
  
  document
    .querySelector("#add-todo-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      dailyDecisions.push({
        text: e.target.elements.newTodo.value,
        completed: false,
      });
      renderTodos(dailyDecisions, filters);
      e.target.elements.newTodo.value = "";
    });
  
  document
    .querySelector("#hide-completed")
    .addEventListener("change", function (e) {
      filters.hideCompleted = e.target.checked;
      renderTodos(dailyDecisions, filters);
    });