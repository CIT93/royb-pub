//store and collect toys
const lists = loadLists();
// tracks what ive bought
let giftHistory = loadGiftHistory();
// Ideas for christmas gifts
const idea = [];
addToy(`Barbie`, 10.99, `👩🏼`);
addToy(`Switch`, 299.99, `🎮`);
addToy(`Switch Games`, 59.99, `📼`);
addToy(`Dresses`, 22.99, `👗`);
addToy(`Toy Makeup`, 23.88, `💄`);
addToy(`Dolls`, 15.99, `🪆`);
addToy(`Shoes`, 24.99, `👠`);
addToy(`Movies`, 10.99, `🎥`);
//using eventlistener and queryselector to put it into site
const seeSite = function () {
  // collects input with submit and refreshes the webpage to keep up to date data
  document
    .querySelector(`#Santa-form`)
    .addEventListener(`submit`, function (e) {
      lists.price = parseFloat(e.target.elements.priceAmount.value);
      lists.savings = 0;
      lists.timesBought = 0;
      giftHistory = [];
      e.target.elements.priceAmount.value = ``;
      saveLists();
      saveGiftHistory();
      renderLists();
      renderideaOptions();
      renderGiftHistory();
      e.preventDefault();
    });
  // lets me know when items are out of budget
  document
    .querySelector("#show-options")
    .addEventListener("change", function (e) {
      lists.showOptions = e.target.checked;
      saveLists();
      renderideaOptions();
    });
  // rendering of the site at start
  renderLists();
  renderIdeaOptions();
  renderGiftHistory();
};
// runs the site function
seeSite();
// gathers current date of pc and date until christmas and keeps a constant steady countdown
today = new Date();
xmas = new Date("December 25, 2022");
msPerDay = 24 * 60 * 60 * 1000 ;
timeLeft = (xmas.getTime() - today.getTime());
e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft)*24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);
document.write("<h4> There are only</h4><br> <h1>" + daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left </h1><h4> Until Christmas!<h4><P>");



