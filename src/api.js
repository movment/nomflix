import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
const params = {
  api_key: 'a34f5eb62d345ac1d9eabe58f41c7b32',
  language: 'ko-KR',
};

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing', { params }),
  upcoming: () => api.get('movie/upcoming', { params }),
  popular: () => api.get('movie/popular', { params }),
  movieDetail: (id) => api.get(`movie/${id}`, { params, append_to_response: 'videos' }),
  search: (term) => api.get('search/movie', { params: { ...params, query: term } }),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated', { params }),
  popular: () => api.get('tv/popular', { params }),
  airingToday: () => api.get('tv/airing_today', { params }),
  showDetail: (id) => api.get(`tv/${id}`, { params, append_to_response: 'videos' }),
  search: (term) => {
    return api.get('search/tv', { params: { ...params, query: term } });
  },
};
