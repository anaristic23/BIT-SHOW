
const $div = $(".showList");
const $input = $("input");
const $header = $("header")
const $divSearch = $(".form-results");

const renderShows = (shows) => {
    shows.forEach(show => {
        const $card = $("<div>");
        const $p = $('<p>');
        const $image = $('<img>').attr("src", show.image);
        const $link = $('<a>').text(show.name);
        $link.attr("href", "#");
        $p.append($link);
        $card.append($image, $p);
        $div.append($card);
        $image.addClass("showImage");
        $p.addClass("showTitle");
        $card.css({
            "display": "inline-block",
            "width": "25%",
            "padding": "10px"
        });
    });
}

const searchShow = (listItems) => {

    // $header.append($divSearch);
    // $divSearch.addClass("searchList");
    // $divSearch.innerHTML = "";
    const $ul = $(".search-ul");
    $ul.empty();

    console.log('List items', listItems);
    // $divSearch.on("click", function () {
    for (let i = 0; i < listItems.length; i++) {
        const $li = $("<li class='nice-text'>");
        //lli element
        const listItem = listItems[i];

        $li.text(listItem.name)
        $li.on("click", function () {
            //id 
            //href za link
        });

        $ul.append($li);

    }

    // });

    $divSearch.append($ul);
}
const collectInput = () => $input.val();

export {
    renderShows,
    searchShow,
    collectInput
}