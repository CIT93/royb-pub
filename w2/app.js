// <b> bold writing
const showOnPage = function (text) {
    let newParagraph = document.createElement('p')
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output')
    outputDiv.append(newParagraph)
  }

// Daily morning planning + Decisions
// Determining if I have time to prepare breakfast or grab something on the way to work

//Global Variables

let isTired = true
let isUpEarly = true
let isHaveMilk = true;
let isHungry = true;

showOnPage('<b>Global Variables</b>')

showOnPage('Am I tired,')
if (isTired = true) { 
    showOnPage('yes, but am I up early')

} else { 
    showOnPage('no, I should eat')
}

// if and if else statements
// determing if I have time to eat or not before work
if (isUpEarly = true) {
    showOnPage('Yes....')
} else {
    showOnPage('No better just find food quick and head to work...')
}
// if im up early then I have time to make food or else i can grab something on the way to work
if (isHungry = true) {

    showOnPage(' Do I have milk?')
 } else {
        showOnPage(' Grab a snack for later for work')
    
}
// if i have milk i can just do cereal else i can just grab a snack
if (isHaveMilk = true) {
    showOnPage('Yes....Grab some ceral and eat before work!')
} else {
    showOnPage('No...just head to work and grab a snack')
}

