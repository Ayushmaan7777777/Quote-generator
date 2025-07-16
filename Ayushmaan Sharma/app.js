let url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random") + "&disableCache=true";

let btn = document.getElementById("btn");

btn.addEventListener("click", async() => {
    let quote = await getQuote();
    console.log(quote[0]);
    console.log(quote[1]);

    let qt = document.querySelector("#quote");
    // let ans = quote[0].toUpperCase();
    qt.innerHTML = '"' + quote[0] + '"';

    let ath = document.querySelector("#author");
    ath.innerText = "- " + quote[1];
});

async function getQuote() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        let parsed = JSON.parse(data.contents); // because allorigins wraps the original response in "contents"
        return [parsed[0].q, parsed[0].a];
    } catch (e) {
        console.log("error - ", e);
    }
}
