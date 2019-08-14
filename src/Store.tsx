import React from "react";
import { jsxAttribute } from "@babel/types";
import { IState, IAction } from './interfaces/interfaces'


const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState | any> (initialState);

function reducer(state: IState, action: IAction ) {
  console.log('here')

  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":      
      return {...state, favourites:[...state.favourites, action.payload]}
    case "REMOVE_FAV":      
      return {...state, favourites: action.payload}
    default: 
    return state
  }
}

export function StoreProvider(props: any): JSX.Element {

  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
}
// interface IState{
//   episodes: [],
//   favourites:[]
// }

// const initialState: IState = {
//   episodes: [],
//   favourites: []
// };

// export const Store = React.createContext<IState>(initialState);

// function reducer() {

// }
// export function StoreProvider(props: any):JSX.Element{
//   return <Store.Provider value={initialState}>{props.children}</Store.Provider>
// }
