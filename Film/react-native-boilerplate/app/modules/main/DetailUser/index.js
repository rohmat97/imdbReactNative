/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/require-optimization */
import React, { Component } from 'react';
import {
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
} from 'native-base';
import { connect } from 'react-redux';
import { getUser } from '../mainActions';

class DetailUser extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <Thumbnail
            style={{ width: 200, height: 200, margin: 30 }}
            source={{
              uri:
                'https://wdcolledge.com/wp-content/uploads/2018/04/placeholder.png',
            }}
          />
        </Content>
        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Content contentContainerStyle={{ flexDirection: 'row',justifyContent:'space-between' }}>
            <Text> Name </Text>
            <Text></Text>
          </Content>
          <Content contentContainerStyle={{ flexDirection: 'row' ,justifyContent:'space-between' }}>
            <Text> Salary </Text>
            <Text></Text>
          </Content>
          <Content contentContainerStyle={{ flexDirection: 'row',justifyContent:'space-between'  }}>
            <Text> Age </Text>
            <Text></Text>
          </Content>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Back</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  action: state.main.action,
  getListUserFetch: state.main.getListUserFetch,
  deviceId: state.session.deviceId,
  response: state.main.getListUserResponse,
});

const mapDispatchToProps = {
  getUser: () => getUser(),
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailUser);
