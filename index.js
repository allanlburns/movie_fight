const fetchData = async () => {
    // Using base URL in argument and then some Axios functionality to write the rest
    // more neatly
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '9692fe4b',
            i: 'tt0848228'
        }
    });

    console.log(response.data);
};

fetchData();