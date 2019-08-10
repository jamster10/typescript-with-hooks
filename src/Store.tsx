import React from 'react';
import { jsxAttribute } from '@babel/types';


interface IState {
  episodes: [], 
  favourites: []
}

 const initialState:IState = {
   episodes: [],
   favourites: [] 
 }
 
 export const Store = React.createContext<IState>(initialState);

function reducer(){

}


export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value ={initialState}>{props.children}</Store.Provider>


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