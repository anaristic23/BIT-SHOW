import Show from './entities.js';

const fetchPopularShows = (doSomething) => {
    console.log("ME ME");

    const request = $.ajax("http://api.tvmaze.com/shows");

    request.done(function (shows) {
        console.log("podaci ucitani: ", shows);

        // const listOfShows = [];
        // for (let index = 0; index < shows.length; index++) {
        //     const { name, rating, image } = shows[index];

        //     listOfShows.push(new Show(name, rating.average, image.medium));
        // }

        const listOfShows = shows.map(show => {
            const { name, rating, image } = show;

            return new Show(name, rating.average, image.medium);
        })

        listOfShows.sort((current, next) => next.rating - current.rating);

        doSomething(listOfShows.slice(0, 50));
    });

    console.log("Gotovo");
}

const searchForShows = (name, onFinish) => {
    const response = $.ajax("http://api.tvmaze.com/search/shows?q=" + name);

    response.done(function (shortList) {

        const shortListOfShows = shortList.map(listItem => {
            const { name } = listItem;

            return new Show(name);
        })

        onFinish(shortListOfShows.slice(0, 10));
    })

}
export {
    fetchPopularShows,
    searchForShows
}