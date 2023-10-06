const APICALL = `https://api.unsplash.com/search/photos?client_id=FTVBzne1a-huyhiMzGDNTnlGWeVqZ_zB5U7F2jw--Cw&query`

const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-photo-recherche');
const inpRecherche = document.querySelector('.inp-recherche');

// btns
const mada = document.querySelector('.mada')
const music = document.querySelector('.music')
const tech = document.querySelector('.tech')
const wallP = document.querySelector('.wallP')
const landS = document.querySelector('.landS')
const cartoon = document.querySelector('.cartoon')

const dataUnsplash =  async (keyword) => {

    const reponse = await fetch(`${APICALL}=${keyword}`)
    const data = await reponse.json();
    let allData = data.results
    // console.log(data);
    displayData(allData);

}

dataUnsplash('nature');

mada.addEventListener('click', () => {
    dataUnsplash('madagascar');
})
music.addEventListener('click', () => {
    dataUnsplash('music');
})
tech.addEventListener('click', () => {
    dataUnsplash('technology');
})
wallP.addEventListener('click', () => {
    dataUnsplash('wallpaper');
})
landS.addEventListener('click', () => {
    dataUnsplash('landscape');
})
cartoon.addEventListener('click', () => {
    dataUnsplash('cartoon');
})

const displayData = (allData) => {

    const cards = allData
        .map(
            (data) =>
                `
                   <div class="img-container">
                        <img src="${data.urls.small}" alt="" />
                   </div>
                `
        )
        .join('')

        affichage.innerHTML = cards
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inpRecherche.value.length > 0) {

        dataUnsplash(inpRecherche.value);
        inpRecherche.value = '';

    }
})