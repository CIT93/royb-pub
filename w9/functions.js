// toys are added into the idea array
const addToy = function (fType, fPrice, fEmoji) {
    idea.push({
        type: fType, // toy name saved as type
        price: fPrice, // toys prices as listed
        emoji: fEmoji, // toy emojis https://emojipedia.org/
        id: uuidv4() // uuidv4 given to us in code along to keep track of ideas and buttons
    })
}

const addText = function (text, tag = `p`) {
    const newText = document.createElement(tag)
    newText.innerHTML = text
    return newText
}

const addButton = function (text, id, className) {
    const newButton = document.createElement(`button`)
    newButton.setAttribute(`id`, id)
    newButton.setAttribute(`class`, className)
    newButton.innerHTML = text
    return newButton
}


const renderLists = function () {
    const listsTitle = addText(`Lists: 🎅`, `h3`)
    const lists1 = addText(`Idea Price: <b><span style="color:black">$${lists.price.toLocaleString('en-US', {minimumFractionDigits:2})}</span></b>`)
    const lists2 = addText(`Spent so far: <b><span style="color:black">$${lists.savings.toLocaleString('en-US', {minimumFractionDigits:2})}</span></b>`)
    const lists3 = addText(`Things bought: <b><span style="color:black">${lists.timesBought}</span></b>`)
    
    document.querySelector(`#lists`).innerHTML = `` 
    document.querySelector(`#lists`).append(listsTitle, lists1, lists2, lists3) 

    document.querySelector('#show-options').checked = lists.showOptions
}

const renderIdeaOptions = function () {
    let noIdeaOptions = true 
    const ideaOptionTitle = addText(`<b>toys available for <span style="color:black">$${lists.price.toLocaleString('en-US', {minimumFractionDigits:2})}</span> or less:</b>`) // Updated idea option title

    document.querySelector(`#idea-title`).innerHTML = ``
    document.querySelector(`#idea-buttons`).innerHTML = ``
    document.querySelector(`#idea-title`).append(ideaOptionTitle)

    idea.forEach(function (e) {
        const ideaType = e.type
        const ideaPrice = e.price
        const ideaEmoji = e.emoji
        const ideaID = e.id

        if (ideaPrice <= lists.price){ 
            const newIdeaButton = addButton(`${ideaEmoji} <b><span style="color:black">${ideaType}</span></b> ($<i>${ideaPrice.toLocaleString('en-US', {minimumFractionDigits:2})}</i>)`, `${ideaID}`, `ideas`)
            noIdeaOptions = false
            document.querySelector(`#idea-buttons`).append(newIdeaButton)
        } else {
            if (lists.showOptions) { 
                const newIdeaButton = addButton(`${ideaEmoji} <b><span style="color:firebrick">${ideaType}</span></b> ($<i>${ideaPrice.toLocaleString('en-US', {minimumFractionDigits:2})}</i>)`, `${ideaID}`, `ideas`)
                newIdeaButton.disabled = true 
                document.querySelector(`#idea-buttons`).append(newIdeaButton)
            }
        }
    })
    if (noIdeaOptions) {
        const newIdeaButton = addText(`<span style="color:black">Keep saving you'll make her Christmas special.</span>`, `h4`)
        document.querySelector(`#idea-buttons`).append(newIdeaButton)
    }
    document.querySelectorAll(`.ideas`).forEach(function (button) {
        button.addEventListener(`click`, function () {
            const ideaObj = idea.find(function (e) {
                return e.id === button.id
            })
            lists.price -= ideaObj.price
            lists.savings += ideaObj.price
            lists.timesBought++
            const gift = `[${lists.timesBought}] You purchased: ${ideaObj.emoji} <span style="color:firebrick">${ideaObj.type}</span> ($${ideaObj.price.toLocaleString('en-US', {minimumFractionDigits:2})})`
            giftHistory.push(gift)
            saveLists()
            saveGiftHistory()
            renderLists()
            renderIdeaOptions()
            renderGiftHistory()
        })
    })
}
const renderGiftHistory = function () {
    document.querySelector(`#gift-history`).innerHTML = ``
    if (giftHistory.length !== 0) {
        document.querySelector(`#history-title`).innerHTML = `Your Purchase History:`
        giftHistory.forEach(function (e) {
            const gift = addText(e)
            document.querySelector(`#gift-history`).prepend(gift)
        })
    } else {
        document.querySelector(`#history-title`).innerHTML = ``
    }
}
const loadLists = function () {
    const listsJSON = localStorage.getItem('lists')
    
    if (listsJSON !== null) {
        return JSON.parse(listsJSON)
    } else {
        return {
            price: 0, 
            savings: 0, 
            timesBought: 0, 
            showOptions: false 
        }
    }
}
const loadGiftHistory = function () {
    const purchastHistoryJSON = localStorage.getItem('gift-history')
    if (purchastHistoryJSON !== null) {
        return JSON.parse(purchastHistoryJSON)
    } else {
        return []
    }
}
const saveLists = function () {
    localStorage.setItem('lists', JSON.stringify(lists))
}
const saveGiftHistory = function () {
    localStorage.setItem('gift-history', JSON.stringify(giftHistory))
}