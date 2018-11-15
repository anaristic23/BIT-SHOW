import * as data from './dataModule.js'
import * as ui from './uiModule.js'

const $searchField = $('input')

const init = () => {
    data.fetchPopularShows(doSomething);

    // input za search --> keyup, keypressed

    setupEventListener();

}
const setupEventListener = () => {
    // $('button').on('click', () => {
    //     data.searchForShows($searchField.val(), onFinish);
    // })
    $searchField.on("click", function () {
        $(".search-ul").css("display", "block");
    });
    $searchField.on("blur", function () {
        $(".search-ul").css("display", "none");
    })
    $searchField.on("input", fetchSearch)
}

const doSomething = (shows) => {
    ui.renderShows(shows);

}
const fetchSearch = () => {
    const input = ui.collectInput();
    data.searchForShows(input, onFinish);
}
const onFinish = (listItems) => {
    ui.searchShow(listItems);
}

export {
    init
}