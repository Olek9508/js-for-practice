
// let addToWatchedButton = document.querySelector(".modal-window__button-watched")
// let addToQueueButton = document.querySelector(".modal-window__button-queue")

let watchItemsArray = []
let queueItemsArray = []


function addToWatchedList(film,addToWatchedButtonText,addToWatchedButton,checkedAddToWathedBtnClass) {
    watchItemsArray = localStorage.getItem("watchedFilms") ? JSON.parse(localStorage.getItem("watchedFilms")) : []
    
    localStorage.removeItem("watchedFilms")
    if (watchItemsArray.includes(film)) {
        for (let i = 0; i < watchItemsArray.length; i += 1){
            if (watchItemsArray[i] === film) {
                watchItemsArray.splice(i, 1);
            }
        }
        addToWatchedButton.textContent = "add to wathed"
        addToWatchedButtonText = "add to wathed"
        addToWatchedButton.classList.remove("modal-window__button-watched-chacked")
    }
    else if (!watchItemsArray.includes(film)) {
        watchItemsArray.push(film)
        addToWatchedButton.textContent = "remove from wathed"
        addToWatchedButtonText = "remove from wathed"
        addToWatchedButton.classList.add("modal-window__button-watched-chacked")
    }
    
    localStorage.setItem("watchedFilms", JSON.stringify(watchItemsArray))
    console.log(localStorage.getItem("watchedFilms"))
}
 
function addToQueueList(film,addToQueueButtonText,addToQueueButton,checkedAddToQueueBtnClass) {
    queueItemsArray = localStorage.getItem("queueFilms") ? JSON.parse(localStorage.getItem("queueFilms")) : []
    
    localStorage.removeItem("queueFilms")
    if (queueItemsArray.includes(film)) {
        for (let i = 0; i < queueItemsArray.length; i += 1){
            if (queueItemsArray[i] === film) {
                queueItemsArray.splice(i, 1);
            }
        }
        addToQueueButton.textContent = "add to queue"
        addToQueueButtonText = "add to queue"
        addToQueueButton.classList.remove("modal-window__button-queue-chacked")
    }
    else if (!queueItemsArray.includes(film)) {
        queueItemsArray.push(film)
        addToQueueButton.textContent = "remove from queue"
        addToQueueButtonText = "remove from queue"
        addToQueueButton.classList.add("modal-window__button-queue-chacked")
    }
    
    localStorage.setItem("queueFilms", JSON.stringify(queueItemsArray))
    console.log(localStorage.getItem("queueFilms"))
}

export { addToWatchedList }
export { addToQueueList }