import { setConnected } from '../actions/app';


/**
 * ******************
 * API
 * ******************
 */
export const login = (email, pwd) => async (dispatch) => {
  // const result = await api.call(PATH.LOGIN, { email, pwd });
  setTimeout(() => {
    dispatch(setConnected(true));
  }, 1000);
};

export const disconnect = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(setConnected(false));
  }, 500);
};
