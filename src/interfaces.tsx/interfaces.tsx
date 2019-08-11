/*

All App Interfaces

*/


export interface IState {
  episodes: Array<any>
  favourites: Array<any>
}

export interface IAction {
  type: String;
  payload: any;
}