const fetchData = async searchTerm => {
    // Using base URL in argument and then some Axios functionality to write the rest
    // more neatly
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '9692fe4b',
            s: searchTerm
        }
    });

    console.log(response.data);
};

const input = document.querySelector('input');

let timeoutId;
const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 500);
};

input.addEventListener('input', onInput);
