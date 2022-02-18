

const fetchSearchGiphys = searchTerm => (
    $.ajax({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=vxLULPWPMMJj6KLVHTzJLMNA2HuvPdAN&limit=2'
    })
);

export default fetchSearchGiphys;