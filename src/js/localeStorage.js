
let watchItemsArray = []
let queueItemsArray = []

function addToWatchedList(film) {
    // let film = event.target.parentElement.previousElementSibling.alt.value
    watchItemsArray = localStorage.getItem("watchedFilms") ? JSON.parse(localStorage.getItem("watchedFilms")) : []
    
    localStorage.removeItem("watchedFilms")
    if (!watchItemsArray.includes(film)) {
        watchItemsArray.push(film)
    }
    
    localStorage.setItem("watchedFilms", JSON.stringify(watchItemsArray))
    console.log(localStorage.getItem("watchedFilms"))
}


 
function addToQueueList(film) {
    queueItemsArray = localStorage.getItem("queueFilms") ? JSON.parse(localStorage.getItem("queueFilms")) : []
    
    localStorage.removeItem("queueFilms")
    if (!queueItemsArray.includes(film)) {
        queueItemsArray.push(film)
    }
    
    localStorage.setItem("queueFilms", JSON.stringify(queueItemsArray))
    console.log(localStorage.getItem("queueFilms"))
}

export { addToWatchedList }
export { addToQueueList }