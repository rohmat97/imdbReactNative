import { filmApi } from '../../bootstrap/bootstrapApi';

// export const registerOtpApi = payload => api.post('/api/register-otp', payload);

// export const loginApi = payload => api.post('/api/login', payload);
const ApiKey = '?api_key=bbb287c1995530da7b6879f3e42dc48d';

export const getListFilmApi = () => {
  return filmApi.get('3/movie/now_playing' + ApiKey);
};
export const getFilmDetailApi = payload => {
  return filmApi.get(`3/movie/${payload.id}${ApiKey}`);
};
export const getListFilmUpcoming = () => {
  return filmApi.get('3/movie/upcoming' + ApiKey + '&language=en-US&page=1');
};
export const getListFilmPopular = () => {
  return filmApi.get(`3/movie/popular${ApiKey}&language=en-US&page=1`);
};
