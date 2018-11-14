
const $div = $(".showList");
const $input = $("input");



const renderShows = (shows) => {
    shows.forEach(show => {
        $div.append($('<p>').text(show.name));
    });
}

const searchShow = (listItems) => {
    listItems.forEach(listItem => {
        $input.append($("<ul>").text(listItem.name))
    })
}

export {
    renderShows,
    searchShow
}