const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };
  
  function getDays(start, last) {
    //initialize dates with Date object
    const date1 = new Date(start);
    const date2 = new Date(last);
    // calculation for converting a day into milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
    // calculation for the time difference between start and last
    const diffTime = date2.getTime() - date1.getTime();
    // calculation for the days between start and last
    const diffDays = Math.round(diffTime / oneDay);
    // return number of days
    return diffDays;
  }
  const myDate = new Date(); // current date
  //Grab day of the week from local computer
  let date = new Date();
  let myTime = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
  let dayOfWeekNumber = date.getDay();
  let nameOfDay;
  let quote;
  
  switch(dayOfWeekNumber){
      case 0: 
          nameOfDay = 'It is Sunday';
          quote = ', check your homework';
          break;
      case 1:
          nameOfDay = 'It is Monday';
          quote = ', do your homework!';
          break;
      case 2:
          nameOfDay = 'It is Tuesday';
          quote = 'Taco Time!';
          break;
      case 3:
          nameOfDay = 'It is Wednesday';
          quote = ', homework is due tomrrow!';
          break;
      case 4:
          nameOfDay = 'It is Thursday';
          quote = ', dont forget to turn it in!';
          break;
      case 5:
          nameOfDay = 'It is Friday';
          quote = ', Weekend is here!';
          break;
      case 6:
          nameOfDay = 'It is Saturday';
          quote = ', nap city time';
          break;
  
  }

  //Display the day of the week
  let weekdayDiv = document.getElementById('weekday');
  weekdayDiv = `${nameOfDay}`;
  
  //Display quote
  let quoteDiv = document.getElementById('phrase');
  quoteDiv = `${quote}`
  showOnPage(`<b><center><font color="#000000" face="courier" size="5"> ${myTime}  </font></center><center><b>`);
  showOnPage(`<b><font color="#000000" face="courier" size="5"> ${nameOfDay} ${quote}</font><b>`)
  showOnPage("<hr>");
  showOnPage(`<b><font color="#000000" face="courier" size="5"> DAYS UNTIL HOMEWORK IS DUE  </font><b>`);
  showOnPage (getDays(myDate, "09/15/2022"));
  
  
  
  