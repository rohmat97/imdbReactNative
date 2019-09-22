import * as MAIN from './mainCons';

export const increaseCounter = () => ({ type: MAIN.INCREASE_COUNTER });
export const decreaseCounter = () => ({ type: MAIN.DECREASE_COUNTER });

export const getFilm = () => ({ type: MAIN.GET_FILM });
export const getFilmSuccess = payload => ({
  type: MAIN.GET_FILM_SUCCESS,
  payload,
});
export const getFilmFailed = payload => ({
  type: MAIN.GET_FILM_FAILED,
  payload,
});

export const getFilmDetail = payload => ({
  type: MAIN.GET_FILM_DETAIL,
  payload,
});
export const getFilmDetailSuccess = payload => ({
  type: MAIN.GET_FILM_DETAIL_SUCCESS,
  payload,
});
export const getFilmDetailFailed = payload => ({
  type: MAIN.GET_FILM_DETAIL_FAILED,
  payload,
});
//UPCOMING
export const getFilmUpcoming = () => ({ type: MAIN.GET_FILM_UPCOMING });
export const getFilmUpcomingSuccess = payload => ({
  type: MAIN.GET_FILM_UPCOMING_SUCCESS,
  payload,
});
export const getFilmUpcomingFailed = payload => ({
  type: MAIN.GET_FILM_UPCOMING_FAILED,
  payload,
});
//POPULAR
export const getFilmPopular = () => ({ type: MAIN.GET_FILM_POPULAR });
export const getFilmPopularSuccess = payload => ({
  type: MAIN.GET_FILM_POPULAR_SUCCESS,
  payload,
});
export const getFilmPopularFailed = payload => ({
  type: MAIN.GET_FILM_POPULAR_FAILED,
  payload,
});
