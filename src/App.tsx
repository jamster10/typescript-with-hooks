import React from 'react'
import { Store } from './Store'
import { IEpisode, IAction, } from './interfaces/interfaces'
 

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);


  React.useEffect( () => {
    state.episodes.length === 0 && fetchDataAction();
  })
  
  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

    const data = await fetch(URL)
    const dataJSON = await data.json();
    console.log(dataJSON._embedded.episodes)

    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  }
  
  const toggleFavAction = (episode: IEpisode): IAction => {

    const episodeInFav = state.favourites.find((episodeSelected: IEpisode) => episodeSelected.id === episode.id );

    let dispatchObj = {
      type:'ADD_FAV',
      payload: episode 
    }

    if (episodeInFav) {

      const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav !== episodeInFav)
      dispatchObj = {
        type:'REMOVE_FAV',
        payload: favWithoutEpisode 
      }
    }
    return dispatch(dispatchObj)
}



  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick Your favourite episode!</p>
        </div>
        <div>Favourite(s) {state.favourites.length}</div>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: any) => {
          return (
            <section key={episode.id} className="episode-box">
              <img src={episode.image.medium} alt = {`Rick and Morty: ${episode.name}`}/>
              <div>{episode.name}</div>
              <section>
                <div>Season: {episode.season} Number: {episode.number}</div>
                <button type="button" onClick ={() => toggleFavAction(episode)}>{state.favourites.find((fav:IEpisode) => fav.id === episode.id) ? 'UnFav' : 'Fav'}</button>
              </section>  
            </section>
          )
        })}
      </section>
    </>
  )
}
