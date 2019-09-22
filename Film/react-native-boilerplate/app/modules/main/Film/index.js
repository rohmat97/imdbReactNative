/* eslint-disable react/require-optimization */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import { connect } from 'react-redux';
import {
  createStackNavigator,
  createAppContainer,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import {
  getFilm,
  getFilmDetail,
  getFilmPopular,
  getFilmUpcoming,
} from '../mainActions';
import Loading from '../../../modals/LoadingModal';
import { GET_FILM_DETAIL_SUCCESS, GET_FILM_DETAIL_FAILED } from '../mainCons';
import { clearAuth } from '../../auth/authActions';

class Film extends Component {
  static propTypes = {
    getFilmDetailFetch: PropTypes.bool.isRequired,
  };
  componentDidMount() {
    const { getFilm, getFilmPopular, getFilmUpcoming } = this.props;
    getFilm();
    getFilmPopular();
    getFilmUpcoming();
  }
  componentDidUpdate(prevProps) {
    const { action, navigation } = this.props;
    if (prevProps.action !== action) {
      switch (action) {
        case GET_FILM_DETAIL_SUCCESS:
          navigation.navigate('DetailFilm');
          break;
        case GET_FILM_DETAIL_FAILED:
          alert('FILM TIDAK DITEMUKAN');
          break;
      }
    }
  }
  renderContentPopular() {
    const { getFilmPopularFetch } = this.props;
    // if (getFilmPopularFetch)
    //   return (
    //     <Content>
    //       <Spinner />
    //     </Content>
    //   );
    return <Content>{this.renderPopular()}</Content>;
  }
  renderContentUpcoming() {
    const { getFilmUpcomingFetch } = this.props;
    // if (getFilmUpcomingFetch)
    //   return (
    //     <Content>
    //       <Spinner />
    //     </Content>
    //   );
    return <Content>{this.renderUpcoming()}</Content>;
  }
  renderContentNowPLaying() {
    const { getListFilmFetch } = this.props;
    // if (getListFilmFetch)
    //   return (
    //     <Content>
    //       <Spinner />
    //     </Content>
    //   );
    return <Content>{this.renderNowPLaying()}</Content>;
  }
  renderUpcoming() {
    const { response3, getFilmDetail } = this.props;
    if (response3.length > 0)
      return response3.map((item, i) => {
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

    return null;
  }
  renderPopular() {
    const { response2, getFilmDetail } = this.props;
    if (response2.length > 0)
      return response2.map((item, i) => {
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

    return null;
  }
  renderNowPLaying() {
    const { response1, getFilmDetail } = this.props;
    if (response1.length > 0)
      return response1.map((item, i) => {
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

    return null;
  }
  onSignOut() {
    const { clearAuth, navigation } = this.props;
    clearAuth();
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName:'Dashboard',
          }),
        ],
      })
    );
  }

  render() {
    const {
      getListFilmFetch,
      getFilmPopularFetch,
      getFilmUpcomingFetch,
    } = this.props;
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>RD MOVIE</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.onSignOut()}>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading="Now Playing">{this.renderContentNowPLaying()}</Tab>
          <Tab heading="Upcoming">{this.renderContentUpcoming()}</Tab>
          <Tab heading="Popular">{this.renderContentPopular()}</Tab>
        </Tabs>
        <Loading
          loading={
            (getListFilmFetch, getFilmPopularFetch, getFilmUpcomingFetch)
          }
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  action: state.main.action,
  deviceId: state.session.deviceId,
  //Fetching
  getListFilmFetch: state.main.getListFilmFetch,
  getFilmPopularFetch: state.main.getFilmPopularFetch,
  getFilmUpcomingFetch: state.main.getFilmUpcomingFetch,
  getFilmDetailFetch: state.main.getFilmDetailFetch,
  //Response
  response1: state.main.getListFilmResponse,
  response2: state.main.getFilmPopularResponse,
  response3: state.main.getFilmUpcomingResponse,
});

const mapDispatchToProps = {
  getFilm: () => getFilm(),
  getFilmPopular: () => getFilmPopular(),
  getFilmUpcoming: () => getFilmUpcoming(),
  getFilmDetail: payload => getFilmDetail(payload),
  clearAuth: payload => clearAuth(payload),
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Film);
