const accessKey = 'FTVBzne1a-huyhiMzGDNTnlGWeVqZ_zB5U7F2jw--Cw'
const APICALL = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=`

const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');

// btns
const mada = document.querySelector('.mada')
const music = document.querySelector('.music')
const tech = document.querySelector('.tech')
const wallP = document.querySelector('.wallP')
const landS = document.querySelector('.landS')
const cartoon = document.querySelector('.cartoon')

const dataGitHub =  async (keyword) => {

    const reponse = await fetch(`${APICALL}=${keyword}`)
    const data = await reponse.json();
    let allData = data.results
    // console.log(data);
    displayData(allData);

}

dataGitHub('nature');

mada.addEventListener('click', () => {
    dataGitHub('madagascar');
})
music.addEventListener('click', () => {
    dataGitHub('music');
})
tech.addEventListener('click', () => {
    dataGitHub('technology');
})
wallP.addEventListener('click', () => {
    dataGitHub('wallpaper');
})
landS.addEventListener('click', () => {
    dataGitHub('landscape');
})
cartoon.addEventListener('click', () => {
    dataGitHub('cartoon');
})

const displayData = (allData) => {

    const cards = allData
        .map(
            (data) =>
                `
                   <div>
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

        dataGitHub(inpRecherche.value);
        inpRecherche.value = '';

    }
})