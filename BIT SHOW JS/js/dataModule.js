import Show from './entities.js';

const fetchPopularShows = (doSomething) => {
    console.log("ME ME");

    const request = $.ajax("http://api.tvmaze.com/shows");

    request.done(function (shows) {
        // console.log("podaci ucitani: ", shows);

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

    response.done(function (listItem) {



        const shows = [];
        console.log(listItem);
        for (let i = 0; i < listItem.length; i++) {
            if (listItem[i].show.image == null) {
                continue;
            }
            // console.log("al/o");
            const name = listItem[i].show.name;
            const img = listItem[i].show.image.medium;
            const rating = listItem[i].show.average;
            shows.push(new Show(name, rating, img));
        }

        // console.log(shows);
        onFinish(shows);
    })


}

export {
    fetchPopularShows,
    searchForShows
}