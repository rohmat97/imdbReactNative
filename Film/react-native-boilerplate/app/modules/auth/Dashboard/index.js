/* eslint-disable react/require-optimization */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import {
  Base as BaseContainer,
  Padder as PadderContainer,
} from '../../../components/containers';
import { Colors } from '../../../configs';
import i18n from '../../../utils/i18n';
import LoadingModal from '../../../modals';
import style from './style';
import logo from '../../../assets/images/png/logo.png';
import background from '../../../assets/images/png/homeScreen.png';

class Dashboard extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      label: 'test',
      showLeft: true,
      showRight: false,
    };

    this.gotoLogin = this.gotoLogin.bind(this);
    this.gotoSignUp = this.gotoSignUp.bind(this);
  }
  // shouldComponentUpdate() {}
  gotoLogin() {
    const { navigation } = this.props;
    navigation.navigate('Login');
  }
  gotoSignUp() {
    const { navigation } = this.props;
    navigation.navigate('Register');
  }
  renderLogo() {
    return (
      <PadderContainer>
        <View style={style.logo}>
          <Image style={style.sizeLogo} source={logo} />
        </View>
      </PadderContainer>
    );
  }
  renderBackground() {
    return (
      <PadderContainer>
        <Image style={style.background} source={background} />
      </PadderContainer>
    );
  }
  renderButton() {
    if (this.state.showLeft) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={this.gotoLogin}
            // onPress={() =>this.setState({showRight:true,showLeft:false})}
            style={{
              height: 50,
              backgroundColor: '#f10',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              marginLeft: 25,
              marginBottom: 25,
              marginRight: 25,
            }}
          >
            <Text style={{ color: 'white' }}>{i18n.t('SIGN_IN')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.gotoSignUp}
            // onPress={() =>this.setState({showRight:false,showLeft:true})}
            style={{
              height: 50,
              // backgroundColor: 'transparent',
              backgroundColor: '#f10',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              marginLeft: 25,
              marginBottom: 25,
              marginRight: 25,
            }}
          >
            <Text style={{ color: 'white' }}>{i18n.t('SIGN_UP')}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={this.gotoLogin}
          style={{
            height: 50,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginLeft: 25,
            marginBottom: 25,
            marginRight: 25,
          }}
        >
          <Text style={{ color: 'white' }}>{i18n.t('SIGN_IN')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.gotoSignUp}
          // onPress={() =>this.setState({showRight:false,showLeft:true})}
          style={{
            height: 50,
            backgroundColor: '#f10',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginLeft: 25,
            marginBottom: 25,
            marginRight: 25,
          }}
        >
          <Text style={{ color: 'white' }}>{i18n.t('SIGN_UP')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <BaseContainer
        title="Dashboard"
        backgroundColor={Colors.main.baseWhite}
        topColor={Colors.main.baseWhite}
        bottomContent={this.renderButton()}
        persistScrollTitle
      >
        <View style={{ justifyContent: 'space-between' }}>
          {this.renderLogo()}
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text>{this.props.counter}</Text>
            </View>
            <TextInput
              style={{ flex: 1, borderWidth: 1, borderColor: '#f23' }}
              value={this.state.label}
              // onChangeText={value => this.setState ({label:value})}
            />
          </View>
          {this.renderBackground()}
        </View>
        <LoadingModal loading={false} />
      </BaseContainer>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

const mapStateToProps = state => ({
  counter: state.main.counter,
  action: state.main.action,
});

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
  };
}

// const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
