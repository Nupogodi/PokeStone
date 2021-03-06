import React, { useReducer, useEffect, useContext, createContext } from 'react';
import useRouter from 'hooks/useRouter';
import { pokemonApi } from 'utils/api';
import { API_ROUTES } from 'constants/index';

const initialState = {
  isAuthenticated: null,
  user: null,
};

// constants
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const reducer = (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOG_OUT:
      localStorage.removeItem('AlbumKeeperUser');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <authContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const { state, dispatch } = useAuth();
  const router = useRouter();

  const signin = async (username, password) => {
    try {
      const response = await pokemonApi.post(API_ROUTES.auth.signIn, {
        username,
        password,
      });
      localStorage.setItem('PokeStoneUser', JSON.stringify(response.data));
      dispatch({
        type: LOG_IN,
        payload: response.data,
      });
      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      if (error.response) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    }
  };

  const signup = async (username, password) => {
    try {
      await pokemonApi.post(API_ROUTES.auth.register, {
        username,
        password,
      });
      return await signin(username, password);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      if (error.response) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    }
  };

  const signout = () => {
    dispatch({
      type: LOG_OUT,
    });
    router.push('/');
  };

  const getCurrentUser = () =>
    JSON.parse(localStorage.getItem('PokeStoneUser'));

  useEffect(() => {
    const savedUser =
      JSON.parse(localStorage.getItem('PokeStoneUser')) || false;
    if (savedUser) {
      dispatch({
        type: LOG_IN,
        payload: savedUser,
      });
    } else {
      dispatch({
        type: LOG_OUT,
      });
    }
  }, [dispatch]);

  // Return the user object and auth methods
  return {
    state,
    getCurrentUser,
    signin,
    signup,
    signout,
  };
}
