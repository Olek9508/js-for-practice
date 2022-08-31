let watchItemsArray = []
let queueItemsArray = []

class localeStorageItem {
     constructor(poster_path,
          original_title,
          original_name,
          genres,
          release_date,
          first_air_date,
          vote_average,
          id) {
         this.poster_path = poster_path;
         this.original_title = original_title;
         this.original_name = original_name;
         this.genres = genres;
         this.release_date = release_date;
         this.first_air_date = first_air_date;
         this.vote_average = vote_average;
         this.id = id;
  }
}

function addToWatchedList({ poster_path,
    original_title,
    original_name,
    genres,
    release_date,
    first_air_date,
    vote_average,
    id }, addToWatchedButtonText, addToWatchedButton) {
    watchItemsArray = localStorage.getItem("watchedFilms") ? JSON.parse(localStorage.getItem("watchedFilms")) : []
    localStorage.removeItem("watchedFilms")
    const watchedFilmsItem = new localeStorageItem(poster_path,
        original_title,
        original_name,
        genres,
        release_date,
        first_air_date,
        vote_average,
        id)
    
    if (watchItemsArray.length !== 0){
        if (checkLocaleStorage(watchItemsArray, id)) {
            addToWatchedButton.textContent = "add to wathed"
            addToWatchedButtonText = "add to wathed"
            addToWatchedButton.classList.remove("modal-window__button-watched-checked")
        }else {
            watchItemsArray.push(watchedFilmsItem)
            addToWatchedButton.textContent = "remove from wathed"
            addToWatchedButtonText = "remove from wathed"
            addToWatchedButton.classList.add("modal-window__button-watched-checked")
        }
    } else {
        watchItemsArray.push(watchedFilmsItem)
        addToWatchedButton.textContent = "remove from wathed"
        addToWatchedButtonText = "remove from wathed"
        addToWatchedButton.classList.add("modal-window__button-watched-checked")
    }

    localStorage.setItem("watchedFilms", JSON.stringify(watchItemsArray))
}


function checkLocaleStorage(array, id) {
    let flag = false
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].id === id) {
            array.splice(i, 1);
            return flag = true;
        } else {
            flag = false
        }
    }
    return flag
}

function checkLocaleStorageModalWindow(array, id) {
    let flag = false
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].id === Number(id)) {
            return flag = true;
        } else {
            flag = false
        }
    }
    return flag
}

function addToQueueList({ poster_path,
    original_title,
    original_name,
    genres,
    release_date,
    first_air_date,
    vote_average,
    id },addToQueueButtonText,addToQueueButton) {
    queueItemsArray = localStorage.getItem("queueFilms") ? JSON.parse(localStorage.getItem("queueFilms")) : []
    localStorage.removeItem("queueFilms")

    const queueFilmsItem = new localeStorageItem(poster_path,
        original_title,
        original_name,
        genres,
        release_date,
        first_air_date,
        vote_average,
        id)
    
    if (queueItemsArray.length !== 0){
        if (checkLocaleStorage(queueItemsArray, id)) {
            addToQueueButton.textContent = "add to queue"
            addToQueueButtonText = "add to queue"
            addToQueueButton.classList.remove("modal-window__button-queue-checked")
        }else {
            queueItemsArray.push(queueFilmsItem)
            addToQueueButton.textContent = "remove from queue"
            addToQueueButtonText = "remove from queue"
            addToQueueButton.classList.add("modal-window__button-queue-checked")
        }
    } else {
        queueItemsArray.push(queueFilmsItem)
        addToQueueButton.textContent = "remove from queue"
        addToQueueButtonText = "remove from queue"
        addToQueueButton.classList.add("modal-window__button-queue-checked")
    }
    
    localStorage.setItem("queueFilms", JSON.stringify(queueItemsArray))
}

export { addToWatchedList, addToQueueList, checkLocaleStorageModalWindow}