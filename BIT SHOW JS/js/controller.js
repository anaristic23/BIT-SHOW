import * as data from './dataModule.js'
import * as ui from './uiModule.js'

const $searchField = $('input')

const init = () => {
    data.fetchPopularShows(doSomething);

    $('button').on('click', () => {
        data.searchForShows($searchField.val(), onFinish);
    })
}

const doSomething = (shows) => {
    ui.renderShows(shows);
}

const onFinish = (listItems) => {
    ui.searchShow(listItems);
}

export {
    init
}