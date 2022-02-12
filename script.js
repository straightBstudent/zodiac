class Sign {

    constructor(name, color, planet, info) {
        this.name = name;
        this.color = color;
        this.planet = planet
        this.info = info
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
        const info =document.createElement('h1');
        info.innerText=(sign.info)
        detailedInfo.appendChild(backButton);
        detailedInfo.appendChild(img);
        detailedInfo.appendChild(info);
    });

    body.appendChild(title);
    body.appendChild(button);
    card.appendChild(img);
    card.appendChild(body);

    return card;
}

const signs = [];

signs.push(new Sign('Virgo', 'Brown', 'Mercury', 'house'));
signs.push(new Sign('Aries', 'Red', 'Mars', 'your'));
signs.push(new Sign('Sagittarius', 'Purple', 'Jupiter', 'of'));
signs.push(new Sign('Leo', 'Orange', 'Sun', 'inside'));
signs.push(new Sign('Pisces', 'Light Green', 'Mercury', 'im'));
signs.push(new Sign('Scorpio', 'Black', 'Mercury', 'is unlocked'));
signs.push(new Sign('Cancer', 'Silver', 'Cancer', 'your door'));
signs.push(new Sign('Capricorn', 'Gray', 'Saturn', 'Capricorns are independant '));
signs.push(new Sign('Taurus', 'Green', 'Venus',  'Taureans are patient and reliable. Their color is green and their planet is Venus.'));
signs.push(new Sign('Aquarius', 'Blue', 'Saturn', 'red', 'Aquarians are smart and creative. Their color is blue and their planet is Saturn'));
signs.push(new Sign('Gemini', 'Yellow', 'Mercury', 'Geminis are two-faced and independant. Their color is yellow and their planet is Mercury'));
signs.push(new Sign('Libra', 'Pink', 'Venus', 'Libras are very bright and positive. Their color is pink and their planet is Venus'));

const container = document.getElementById('cardContainer');
const detailedInfo = document.getElementById('detailedInfo');

for (const sign of signs) {

    const card = createSignCard(sign);

    container.appendChild(card);

}