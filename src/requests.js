const API_KEY = 'a3741e121ebaabda83a407fe08de4946'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests