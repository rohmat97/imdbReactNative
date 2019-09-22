/* eslint-disable react/no-unused-state */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  CardItem,
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Thumbnail,
  Card,
  Accordion,
} from 'native-base';
import { Image } from 'react-native';
import { getFilmDetail, getFilm } from '../mainActions';
import { GET_FILM_DETAIL_SUCCESS, GET_FILM_DETAIL_FAILED } from '../mainCons';
import Loading from '../../../modals/LoadingModal';

class DetailsScreen extends Component {
  render() {
    const { response } = this.props;
    const dataArray = [
      { title: 'Overview', content: response.overview },
      { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
      { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' },
    ];
    return (
      <Container>
        <Header>
          <Title>{response.original_title}</Title>
        </Header>
        <Content padder>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w500/' + response.poster_path,
            }}
            style={{
              width: 400,
              height: 500,
              marginRight: 20,
              marginBottom: 20,
              marginTop: 20,
            }}
          />
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={() => this.props.navigation.goBack()}>
              <Text>BACK</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  action: state.main.action,
  getFilmDetailFetch: state.main.getFilmDetailFetch,
  deviceId: state.session.deviceId,
  response: state.main.getFilmDetailResponse,
  param: state.main.getFilmDetailParam,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsScreen);
