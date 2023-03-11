const dataUrl = "https://thesimpsonsquoteapi.glitch.me/quotes?count=25"

let simpsonsdate = []

function showSimpsons() {
    let container = document.getElementById("container")
    let body = `<div class="row">`

    simpsonsdate.forEach(simpson => {
        body +=
            `  
            <div class="col">
        <div class="card  border-dark">
        <div class="card-header   border-dark"> 
            <img class="card-img-top" src="${simpson.image}" alt="simpsonImg">
            </div>
            <div class="card-body scrollable-card" style="overflow-y: auto; height: 200px;">
                <h5 class="card-title" id="character">${simpson.character}</h5>
                <p class="card-text" id="quote">${simpson.quote}</p>
            </div>
        </div>
    </div>   
      `
    })
    container.innerHTML += body + "</div>";
}

document.addEventListener("DOMContentLoaded", function (e) {
    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            simpsonsdate = data
            return showSimpsons();
        })
        .catch(error => console.log(error))
})