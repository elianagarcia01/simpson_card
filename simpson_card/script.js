const dataUrl = "https://thesimpsonsquoteapi.glitch.me/quotes?count=6"

let simpsonsdate = []

function showSimpsons() {
    let container = document.getElementById("container")
    let body = ""

    simpsonsdate.forEach(simpson => {
        //let  [{ character, quote,image }]  = simpsonsdate
        body += `
            <h4>${simpson.character} </h4>
            <p>${simpson.quote}</p>
            <img src="${simpson.image}" width="90px">
        `
    })

    container.innerHTML += body;
}

/*let btn = document.getElementById("btn")
function prueba() {

    let [{ character, quote, image }] = simpsonsdate
    body = ""

    for (let i = 0; i < simpsonsdate.length; i++) {
        body += simpsonsdate[i]

            `
            <h4>${character} </h4>
            <p>${quote}</p>
            <img src="${image}" width="90px">
        `
    }

btn.addEventListener("click", prueba)
}*/

document.addEventListener("DOMContentLoaded", function (e) {
    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            simpsonsdate = data
            return showSimpsons();
        })
        .catch(error => console.log(error))
})