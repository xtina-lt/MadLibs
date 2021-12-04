let holiday = {
    christmas: {
        image: 'mc.png',
        color: 'green',
        h1Family: 'Miltonian Tattoo',
        h2Family: 'Mountains of Christmas',
        radOneValue: "Christmas Eve",
        radTwoValue: "New Year's"
    },
    halloween: {
        image: "h.jpg",
        color: 'orange',
        h1Family: 'Creepster',
        h2Family: 'Griffy',
        radOneValue: "Hallows' Eve",
        radTwoValue: 'Halloween'
    }
};


let changeHTML = (x) => {
    document.querySelector('label[for=radOne]').innerHTML = x.radOneValue;
    document.getElementById('radOne').setAttribute("value", x.radOneValue);
    document.querySelector('label[for=radTwo]').innerHTML = x.radTwoValue;
    document.getElementById('radTwo').setAttribute("value", x.radTwoValue);
}
changeHTML(holiday.christmas)


let changeStyles = (x) => {
    let newBackground = document.querySelector('body').style.backgroundColor = holiday.x.color;
    let newLogo = document.getElementById('logo').setAttribute("src", holiday.x.image);
    let newBody = document.querySelector('body').style.fontFamily = holiday.x.h2Family;
    let newH1 = document.querySelector('h1').style.fontFamily = holiday.x.h1Family;
    let newH2 = document.querySelector('h2').style.fontFamily = holiday.x.h1Family;
    return newBackground, newLogo, newBody, newH1, newH2
}
changeStyles("christmas")

