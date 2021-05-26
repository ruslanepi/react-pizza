import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  let categoryValue = category !== null ? `category=${category}` : '';

  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${categoryValue}&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
