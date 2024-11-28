const form = document.getElementById('form');
const template = document.getElementById('temp');
const main = document.getElementById('main-wrapper');

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const rating = new FormData(e.target).get("rating")
    if(rating){
        main.innerHTML = template.innerHTML.replace(/xxx/, rating)
    }
})