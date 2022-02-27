const fetchData = async searchTerm => {
    // Using base URL in argument and then some Axios functionality to write the rest
    // more neatly
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '9692fe4b',
            s: searchTerm
        }
    });

    return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async event => {
    const movies = await fetchData(event.target.value);
    console.log(movies);
};

input.addEventListener('input', debounce(onInput, 500));
