import React, { useState,useEffect } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Content,
  List,
  ListItem,
  Text,
  Thumbnail,
  Spinner,
  Tab,
  Tabs,
} from 'native-base';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Film from '../Redux/FilmRedux';
// Styles
import styles from './Styles/FilmScreenStyle'
import { bindActionCreators } from 'redux';

function FilmScreen  (props)  {
  const [film, setFilm] = useState([{"popularity":432.363,"vote_count":189,"video":false,"poster_path":"\/l4iknLOenijaB85Zyb5SxH1gGz8.jpg","id":512200,"adult":false,"backdrop_path":"\/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg","original_language":"en","original_title":"Jumanji: The Next Level","genre_ids":[28,12,35,14],"title":"Jumanji: The Next Level","vote_average":6.8,"overview":"In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.","release_date":"2019-12-04"}]);
  const { filmRequest,filmPayload } = props
  useEffect(() => {
    filmRequest(null)
  },[])

    console.log('MASUPP',film)
      return film.map((item, i) => {
        return (
          <List key={i}>
            <ListItem avatar onPress={() => getFilmDetail({ id: item.id })}>
              <Left>
                <Thumbnail
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text>{item.release_date}</Text>
                <Text>{item.vote_average}</Text>
              </Body>
            </ListItem>
          </List>
        );
      });
}

const mapStateToProps = (state) => ({
    filmPayload: state.film.payload
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Film, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen)
