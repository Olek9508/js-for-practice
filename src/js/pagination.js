import { getTrendingMovies } from './fetchFilms'
import { getMovieByKeyword } from './fetchFilms'
import { renderTrendingMovies } from './renderTrendingMovies'

const paginationButtons = document.querySelector(".pagination-nav")
let currentPage = 1

function renderButtonsOfPagination({total_pages}, page) {
    currentPage = page || currentPage
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
            markup = `<button type="button" id="prev-page" class="pagination-nav_button"><svg class="pagination-nav_arrow" id="icon-arrow-left2" viewBox="0 0 32 32">
            <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg></button>
                <button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number current-page">1</button>
                <button type="button" id="prev-two-page" class="pagination-nav_button pagination-nav_button--number">2</button>
                <button type="button" id="prev-one-page" class="pagination-nav_button pagination-nav_button--number">3</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number">4</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">5</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">6</button>
                <span class="dots">...</span>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">${total_pages}</button>
                <button type="button" id="next-page" class="pagination-nav_button"><svg class="pagination-nav_arrow" id="icon-arrow-right2" viewBox="0 0 32 32">
                <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                </svg></button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            disableArrow(total_pages)
        } else if (currentPage >= total_pages - 3) {
            markup = `<button type="button" id="prev-page" class="pagination-nav_button"><svg class="pagination-nav_arrow" id="icon-arrow-left2" viewBox="0 0 32 32">
            <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg></button>
                <button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number">1</button>
                <span class="dots">...</span>
                <button type="button" id="prev-two-page" class="pagination-nav_button pagination-nav_button--number">${total_pages - 5}</button>
                <button type="button" id="prev-one-page" class="pagination-nav_button pagination-nav_button--number">${total_pages - 4}</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number current-page">${total_pages - 3}</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">${total_pages - 2}</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">${total_pages - 1}</button>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">${total_pages}</button>
                <button type="button" id="next-page" class="pagination-nav_button"><svg class="pagination-nav_arrow" id="icon-arrow-right2" viewBox="0 0 32 32">
                <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                </svg></button>`
            paginationButtons.innerHTML = markup
            addCurrentPageClass()
            disableArrow(total_pages)
        } else {
            markup = `<button type="button" id="prev-page" class="pagination-nav_button"><svg class="pagination-nav_arrow" id="icon-arrow-left2" viewBox="0 0 32 32">
            <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg></button>
                <button type="button" id="first-page" class="pagination-nav_button pagination-nav_button--number">1</button>
                <span class="dots">...</span>
                <button type="button" id="prev-two-page" class="pagination-nav_button pagination-nav_button--number">${currentPage - 2}</button>
                <button type="button" id="prev-one-page" class="pagination-nav_button pagination-nav_button--number">${currentPage - 1}</button>
                <button type="button" id="current-page" class="pagination-nav_button pagination-nav_button--number current-page">${currentPage}</button>
                <button type="button" id="next-one-page" class="pagination-nav_button pagination-nav_button--number">${currentPage + 1}</button>
                <button type="button" id="next-two-page" class="pagination-nav_button pagination-nav_button--number">${currentPage + 2}</button>
                <span class="dots">...</span>
                <button type="button" id="last-page" class="pagination-nav_button pagination-nav_button--number">${total_pages}</button>
                <button type="button" id="next-page" class="pagination-nav_button"><svg class="pagination-nav_arrow" id="icon-arrow-right2" viewBox="0 0 32 32">
                <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                </svg></button>`
            paginationButtons.innerHTML = markup
        }
    }
}

function selectPage({target}, mod) {
    if (target.nodeName !== "BUTTON") {
        return;
      }

    if (target.id === "prev-page") {
        switch (mod) {
            case "local":
                break
            case "keyword":
                getMovieByKeyword(keyword, currentPage - 1).then(({data}) => {
                    renderTrendingMovies(data.results)
                    currentPage-=1
                    renderButtonsOfPagination(data)
                })
                break
            default:
                getTrendingMovies(currentPage - 1).then(({data}) => {
                    renderTrendingMovies(data.results)
                    currentPage-=1
                    renderButtonsOfPagination(data)
                })
        }
        return
    }
    if (target.id === "next-page") {
        switch (mod) {
            case "local":
                break
            case "keyword":
                getMovieByKeyword(keyword, currentPage+=1).then(({data}) => {
                    renderTrendingMovies(data.results)
                    currentPage+=1
                    renderButtonsOfPagination(data)      
                })
                break
            default:
                getTrendingMovies(currentPage + 1).then(({data}) => {
                    renderTrendingMovies(data.results)
                    currentPage+=1
                    renderButtonsOfPagination(data)
                })
        }
        return
    }
    
    currentPage = Number(target.textContent)
    switch (mod) {
        case "local":
            break
        case "keyword":
            getMovieByKeyword(keyword, currentPage).then(({data}) => {
                renderTrendingMovies(data.results)
                renderButtonsOfPagination(data)      
            })
            break
        default:
            getTrendingMovies(currentPage)
            .then(({data}) => {
                renderTrendingMovies(data.results)
                renderButtonsOfPagination(data)      
            })
    }
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

export { selectPage }
export { renderButtonsOfPagination }