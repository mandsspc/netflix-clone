import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png'

const List = styled.ul `
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-left: 14rem;
  margin-top: 10px;
`;

const ItemList = styled(NavLink) `
  color: ghostwhite;
  font-family: "Playfair Display", serif;
  font-size: 22px;
  text-shadow: 0.1em 0.1em 0.1em black;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
`;


class Shows extends Component {
    state = {
      listShows: [],
    };

    async componentDidMount() {
        const response1 = await axios.get(`${process.env.REACT_APP_API}/shows`);
    
        this.setState({
          listShows: response1.data
        });
      }
    
    render(){
        const { listShows } = this.state

        return(
            <div>
              <div className="box-init">
              <img src={logo} className="logo" />
                <List>
                  <ItemList
                    to={{
                      pathname: '/'
                    }}
                  >
                    Inicio
                  </ItemList>
                  {/* <ItemList
                    to={{
                      pathname: '/'
                    }}
                  >
                    Minha Lista
                  </ItemList> */}
                  <ItemList
                  to={{
                    pathname: '/movie'
                  }}
                  >
                    Filmes
                  </ItemList>
                  <ItemList
                  to={{
                    pathname: '/show'
                  }}
                  >
                    Séries
                  </ItemList>
                </List>
              </div>
                <div className="box-movie-and-shows">
                    {listShows.map((item, index) => (
                <div key={index} className="box-title-movie-and-shows">
                    <h2 className="title-movie-and-shows">{item.name}</h2>
                <div className="box-item-movie-and-shows">
                    <img className="netflixImages" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/> 
                    <p className="description-movie-and-shows">{item.overview}</p>
                    {/* <div className="box-button">
                      <button className="button-adc">+</button>
                    </div> */}
                </div>
                    <p className="date-movie-and-shows">{item.popularity}</p>
              </div>   
                    ))}
                </div>
            </div>
        )
    }
}

export default Shows;