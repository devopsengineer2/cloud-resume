const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://kenzfvp7tdqdear6eer7agjusu0leejh.lambda-url.us-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();