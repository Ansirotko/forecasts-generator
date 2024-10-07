const forecastContainer = document.querySelector('.forecasts');
const forecastTitle = document.querySelector('.current-forecast h1');
const forecastProbability = document.querySelector('.current-forecast p');
const button = document.querySelector('.forecast-btn');

const prediction1 = 'Вечером тебя может ждать неожиданная встреча с другом или знакомым';
const prediction2 = 'У тебя появится вдохновение для творчества — попробуй заняться чем-то креативным, будь то рисование, музыка или писательство!';
const prediction3 = 'Устрой себе уютный просмотр фильма или почитай интересную книгу с чашкой чая.';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateForecast() {
    let prediction;
    const randomIndex = getRandomInt(1, 3);
    const probability = getRandomInt(0, 100);
    switch (randomIndex) {
        case 1:
            prediction = prediction1;
            break;
        case 2:
            prediction = prediction2;
            break;
        case 3:
            prediction = prediction3;
            break;
    }
    forecastTitle.textContent = prediction;
    forecastProbability.textContent = `Вероятность исполнения ${probability}%`;

    const card = makeCard(prediction, probability);
    forecastContainer.prepend(card);

}
const cardTemplate = document.querySelector('#forecast-item');

function makeCard(title, probability) {
    const myCard = cardTemplate.content.cloneNode(true);

    myCard.querySelector('h3').textContent = title;
    myCard.querySelector('p').textContent = `Вероятность ${probability}%`;

    return myCard;
}
button.addEventListener('click', generateForecast);