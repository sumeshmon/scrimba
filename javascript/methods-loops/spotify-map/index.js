import { playlistArr } from './playlist.js'

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

// const playlistHtml = []


// function playListSection() {
//     return playlistArr.map(function (playList) {        
//         playlistHtml.push(
//             `<section class="card">
//                 <div class="card-start">
//                     <img src="./images/${playList.albumArt}">
//                 </div>
//                     <div class="card-mid">
//                         <h4 class="card-title">${playList.title}</h4>
//                         <p class="card-artist">${playList.artist}</p>
//                     </div>
//                 <div class="card-end">
//                     <p class="card-menu">...</p>
//                 </div>
//             </section>`
//         )

//     })
// }
// playListSection()

const playlistHtml = playlistArr.map(function (playList) {
    return `
        <section class="card">
            <div class="card-start">
                <img src="./images/${playList.albumArt}">
            </div>
                <div class="card-mid">
                    <h4 class="card-title">${playList.title}</h4>
                    <p class="card-artist">${playList.artist}</p>
                </div>
            <div class="card-end">
                <p class="card-menu">...</p>
            </div>
        </section>
        `
})

// for (let i = 0; i < playlistArr.length; i++) {
//     playlistHtml.push(
//         `<section class="card">
//     <div class="card-start">
//         <img src="./images/${playlistArr[i].albumArt}">
//     </div>
//         <div class="card-mid">
//             <h4 class="card-title">${playlistArr[i].title}</h4>
//             <p class="card-artist">${playlistArr[i].artist}</p>
//         </div>
//     <div class="card-end">
//         <p class="card-menu">...</p>
//     </div>
// </section>
//     `
//     )
// }

document.getElementById('container').innerHTML = playlistHtml
