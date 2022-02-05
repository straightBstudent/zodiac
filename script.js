class Sign {

    constructor(name, color, planet) {
        this.name = name;
        this.color = color;
        this.planet = planet
    }

}

function createSignCard(sign) {

    // create card
    let card = document.createElement('div');
    card.classList.add('card')

    // create img
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.classList.add('sign-img');
    img.src = 'img/' + sign.name + '.png';
    img.alt = sign.name;

    // create body
    let body = document.createElement('div');
    body.classList.add("card-body");

    // create title
    let title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerText = sign.name;

    // create button
    let button = document.createElement('input');
    button.value = 'Select';
    button.type = 'button';
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.addEventListener('click', () => {

        let child = detailedInfo.lastElementChild;
        while (child) {
            detailedInfo.removeChild(child);
            child = detailedInfo.lastElementChild;
        }

        container.hidden = true;
        detailedInfo.hidden = false;

        const backButton = document.createElement('input');
        backButton.value = 'Return';
        backButton.type = 'button';
        backButton.classList.add('btn');
        backButton.classList.add('btn-primary');
        backButton.addEventListener('click', () => {
            container.hidden = false;
            detailedInfo.hidden = true;
        });

        const img = document.createElement('img');
        img.classList.add('selected-sign-img');
        img.src = 'img/' + sign.name + '.png';
        img.alt = sign.name;

        detailedInfo.appendChild(backButton);
        detailedInfo.appendChild(img);
    });

    body.appendChild(title);
    body.appendChild(button);
    card.appendChild(img);
    card.appendChild(body);

    return card;
}

const signs = [];

signs.push(new Sign('Virgo', 'Brown', 'Mercury'));
signs.push(new Sign('Aries', 'Red', 'Mars'));
signs.push(new Sign('Sagittarius', 'Purple', 'Jupiter'));
signs.push(new Sign('Leo', 'Orange', 'Sun'));
signs.push(new Sign('Pisces', 'Light Green', 'Mercury'));
signs.push(new Sign('Scorpio', 'Black', 'Mercury'));
signs.push(new Sign('Cancer', 'Silver', 'Cancer'));
signs.push(new Sign('Capricorn', 'Gray', 'Saturn'));
signs.push(new Sign('Taurus', 'Green', 'Venus'));
signs.push(new Sign('Aquarius', 'Blue', 'Saturn'));
signs.push(new Sign('Gemini', 'Yellow', 'Mercury'));
signs.push(new Sign('Libra', 'Pink', 'Venus'));

const container = document.getElementById('cardContainer');
const detailedInfo = document.getElementById('detailedInfo');

for (const sign of signs) {

    const card = createSignCard(sign);

    container.appendChild(card);
}