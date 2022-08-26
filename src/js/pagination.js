import { getTrendingMovies } from './js/fetchFilms'

const paginationButtons = document.querySelector(".pagination-nav")
let currentPage = 1

function renderButtonsOfPagination({total_pages}) {
    let markup = ""
    switch (total_pages) {
        case "1":
            paginationButtons.style.display = "none"
            paginationButtons.removeEventListener("click", selectPage)
            break
        case "2":
            markup = `<button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number current-page">1</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">2</button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            break
        case "3":
            markup = `<button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number current-page">1</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">2</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">3</button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            break
        case "4":
            markup = `<button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number current-page">1</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">2</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">3</button>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">4</button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            break
        case "5":
            markup = `<button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number current-page">1</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number">2</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">3</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">4</button>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">5</button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            break
        case "6":
            markup = `<button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number current-page">1</button>
                <button type="button" id="prev-one-page" class="pagination-nav_button pagination-nav_button--number">2</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number">3</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">4</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">5</button>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">6</button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            break
        case "7":
            markup = `<button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number current-page">1</button>
                <button type="button" id="prev-two-page" class="pagination-nav_button pagination-nav_button--number">2</button>
                <button type="button" id="prev-one-page" class="pagination-nav_button pagination-nav_button--number">3</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number">4</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">5</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">6</button>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">7</button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            break
        default: if (currentPage <= 4) {
            markup = `<button type="button" id="prev-page" class="pagination-nav_button"><</button>
                <button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number current-page">1</button>
                <button type="button" id="prev-two-page" class="pagination-nav_button pagination-nav_button--number">2</button>
                <button type="button" id="prev-one-page" class="pagination-nav_button pagination-nav_button--number">3</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number">4</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">5</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">6</button>
                <span class="dots">...</span>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">${total_pages}</button>
                <button type="button" id="next-page" class="pagination-nav_button">></button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            disableArrow(total_pages)
        } else if (currentPage >= total_pages - 3) {
            markup = `<button type="button" id="prev-page" class="pagination-nav_button"><</button>
                <button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number">1</button>
                <span class="dots">...</span>
                <button type="button" id="prev-two-page" class="pagination-nav_button pagination-nav_button--number">${total_pages - 5}</button>
                <button type="button" id="prev-one-page" class="pagination-nav_button pagination-nav_button--number">${total_pages - 4}</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number current-page">${total_pages - 3}</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">${total_pages - 2}</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">${total_pages - 1}</button>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">${total_pages}</button>
                <button type="button" id="next-page" class="pagination-nav_button">></button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            disableArrow(total_pages)
        } else {
            markup = `<button type="button" id="prev-page" class="pagination-nav_button"><</button>
                <button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number">1</button>
                <span class="dots">...</span>
                <button type="button" id="prev-two-page" class="pagination-nav_button pagination-nav_button--number">${currentPage - 2}</button>
                <button type="button" id="prev-one-page" class="pagination-nav_button pagination-nav_button--number">${currentPage - 1}</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number current-page">${currentPage}</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">${currentPage + 1}</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">${currentPage + 2}</button>
                <span class="dots">...</span>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">${total_pages}</button>
                <button type="button" id="next-page" class="pagination-nav_button">></button>`
            paginationButtons.innerHTML = markup
        }
    }
}

function selectPage({target}) {
    if (target.nodeName !== "BUTTON") {
        return;
      }

    if (target.id === "prev-page") {
        getTrendingMovies(currentPage - 1)
        .then(({data}) => {
            console.log(data.results)
            currentPage-=1
            renderButtonsOfPagination(data)
        })
        
        return
    }
    if (target.id === "next-page") {
        getTrendingMovies(currentPage + 1)
        .then(({data}) => {
            console.log(data.results)
            currentPage+=1
            renderButtonsOfPagination(data)
        })
        return
    }
    
    currentPage = Number(target.textContent)
    getTrendingMovies(currentPage)
        .then(({data}) => {
            console.log(data.results)
            renderButtonsOfPagination(data)      
        })
}

function addCurrentPageClass() {
    const numberButtons = document.querySelectorAll(".pagination-nav_button--number")
    numberButtons.forEach(button => {
        if (Number(button.textContent) === currentPage) {
            button.classList.add("current-page")
            return
        }
        button.classList.remove("current-page")
    })
}

function disableArrow(total_pages) {
    if (currentPage === 1) {
        const prevButton = document.querySelector("#prev-page")
        prevButton.setAttribute("disabled", "true")
    }
    if (currentPage === total_pages) {
        const nextButton = document.querySelector("#next-page")
        nextButton.setAttribute("disabled", "true")
    }
}

// getTrendingMovies(currentPage)
// .then(({data}) => {
//     console.log(data.results)
//     paginationButtons.addEventListener("click", selectPage)
//     renderButtonsOfPagination(data)
// })