function getFetch(query) {

    const key = '563492ad6f917000010000018440f741ec6d4f2f820955cbe8aa670b';
    const BASE_URL = 'https://api.pexels.com/';

    // const query = 'moon';
    const imgEl = document.getElementById('images');
    // const query = 'horse';
    const perPage = 10;

    const queryParams = `v1/search?query=${query}&per_page=${perPage}`;
    const options = {
        method: 'GET',
        headers: {
            Authorization:  key,
        },

    }

    fetch(`${BASE_URL}${queryParams}`, options)
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then((data) =>
    {
        console.log(data);
        const images = createGallery(data.photos);
        imgEl.before(...images);

    }

    );

    function createImage(link, name) {
        const item = document.createElement('img');
        item.setAttribute('src', link);
        item.setAttribute('alt', name);
        item.setAttribute('width', '300');
        // console.log(item);
        return item;

    };

    function createGallery(array) {
        return array.map((elem) => {
            console.log(elem);
            const { src, photographer } = elem;
           return createImage(src.tiny, photographer);
        })


    }
}


