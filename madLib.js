// Grab values from the submitted form in the URL
//Similiar to using HTTP protocol, allows the request to a web page for string query
const words = new URLSearchParams(window.location.search)

// Removes whitespace and turns words lowercase
function clean(str) {
    if (!str) return null
    let temp = str.trim()
    return temp.toLowerCase()
}

// Assigning the variables with values used in the story
const answer = words.get('answer')
const verb = clean(words.get('verb'))
const quote = words.get('quote')
const adj = clean(words.get('adj'))
const adj2 = clean(words.get('adj2'))
const num = words.get('num')
const bodyPart = clean(words.get('bodyPart'))
const physObject = clean(words.get('physObject'))
const message = words.get('message');

// The string containing will use words.get to replace story words
const story =
    `
    <p>Tonight is the <span class="word">${answer}</span> office holiday party. 
        I do herby promise that I will not make the same <span class="word">${verb}</span> as last year.
    </p>
    <p>
        When my boss wishes me a Merry <span class="word">${answer}</span>, I will not shout "<span class="word">${quote}</span>"
        I will not sniff near my boss's wife and ask her why she is marinating in such a <span class="word">${adj}</span> perfume.
    </p>
    <p>
        I will not drink <span class="word">${num}</span> glasses of eggnogg and fall on my <span class="word">${bodyPart}</span>.
        I will not make photocopies of my <span class="word">${bodyPart}</span> and dance on the <span class="word">${physObject}</span>.
    </p>
    <p>
        This year I promise I will be on my <span class="word">${adj2}</span> behavior, becuase for the love of Pete, I can't keep looking for a new job every New Year's Day🤣!
    </p>
    `

//get title element from story.html
const title = document.getElementById('title');
//change innerHTML of title to:
title.innerHTML = `The <span class="word" title="id: answer">${verb[0].toUpperCase() + verb.substring(1)}</span> <span class="word" title="id: answer">${answer}</span> Party`;

//get story element from story.html
const storyElement = document.getElementById('story');
//change article id="story" on story.html to:
storyElement.innerHTML = story;

// Grabbing the moral-message element from story.html
const moralMessage = document.getElementById('moral-message');
// changing 
moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;

//Note: does not work if change styles is to the top
let holiday = {
    christmas: {
        image: 'mc.png',
        color: 'green',
        h1Family: 'Miltonian Tattoo',
        h2Family: 'Mountains of Christmas',
    },
    halloween: {
        image: "h.jpg",
        color: 'orange',
        h1Family: 'Creepster',
        h2Family: 'Griffy',
    }
};
let changeStyles = (x) => {
    let newBackground = document.querySelector('body').style.backgroundColor = holiday.x.color;
    let newLogo = document.getElementById('logo').setAttribute("src", holiday.x.image);
    let newBody = document.querySelector('body').style.fontFamily = holiday.x.h2Family;
    let newH1 = document.querySelector('h1').style.fontFamily = holiday.x.h1Family;
    let newH2 = document.querySelector('h2').style.fontFamily = holiday.x.h1Family;
    return newBackground, newLogo, newBody, newH1, newH2
}
changeStyles("christmas")
