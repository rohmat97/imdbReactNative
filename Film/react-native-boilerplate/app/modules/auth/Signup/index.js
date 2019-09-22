import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import { View, Text, TextInput } from 'react-native';
import {
  Base as BaseContainer,
  Padder as PadderContainer,
} from '../../../components/containers';
import { Colors, Sizes } from '../../../configs';
import { TextM } from '../../../components/derivatives/Text';
import ButtonFull from '../../../components/derivatives/Button/ButtonFull';
import { InputString } from '../../../components/derivatives/Input';
import Styles from './style';
import i18n from '../../../utils/i18n';
import LoadingModal from '../../../modals';
import { SIGNUP_SUCCESS, SIGNUP_FAILED } from '../authConstants';

class Signup extends Component {
  static propTypes = {
    action: PropTypes.string,
    signup: PropTypes.func,
    signupFetch: PropTypes.bool,
    deviceId: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      formData: {
        fullname: '',
        email: '',
        phone: '',
        password: '',
      },
      error: {
        fullname: 'fullname tidak boleh kosong',
        email: 'email tidak boleh kosong',
        phone: 'phone tidak boleh kosong',
        password: 'password harus di isi',
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { action, navigation } = this.props;
    if (prevProps.action !== action) {
      switch (action) {
        case SIGNUP_SUCCESS:
          navigation.dispatch(
            StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Main' })],
            })
          );
          break;
        case SIGNUP_FAILED:
          Toast.show(i18n.t('server_busy'), Toast.LONG);
          break;
        default:
      }
    }
  }

  onSubmit() {
    const { formData, error } = this.state;
    const { signup, deviceId } = this.props;

    if (formData.fullname === '') {
      alert(this.state.error.fullname);
      return false;
    }
    if (formData.email === '') {
      alert(this.state.error.email);
      return false;
    }
    if (formData.phone === '') {
      alert(this.state.error.phone);
      return false;
    }
    if (formData.password === '') {
      alert(this.state.error.password);
      // this.setState({
      //   error: { ...error, },
      // });
      return false;
    }
    alert('berhasil');
    // const sendData = {
    //   fullname: formData.fullname,
    //   email: formData.email,
    //   phone: formData.phone,
    //   password: formData.password,
    //   device_token: deviceId,
    // };

    // signup(sendData);
    return true;
  }

  onChangeText(label, value) {
    const { error, formData } = this.state;
    if (value !== '') {
      this.setState({
        formData: { ...formData, [`${label}`]: value },
        error: { ...error, [`${label}`]: '' },
      });
    } else {
      this.setState({
        formData: { ...formData, [`${label}`]: '' },
        error: { ...error, [`${label}`]: i18n.t('Cannot_be_Empty') },
      });
    }
  }

  renderTitleBody() {
    return (
      <PadderContainer>
        <TextM style={Styles.main.title}>
          {i18n.t('Hi_welcome_Please_fill_your_Detail_profile_signup_')}
        </TextM>
      </PadderContainer>
    );
  }

  renderForm() {
    const { error, formData } = this.state;
    return (
      <PadderContainer style={Styles.main.padder}>
        <InputString
          label={i18n.t('full_name')}
          value={formData.fullname}
          // keyboardType="email-address"
          onChangeText={value => this.onChangeText('fullname', value)}
          style={Styles.input.fullname}
          error={error.fullname}
        />
        <InputString
          label={i18n.t('email')}
          value={formData.email}
          keyboardType="email-address"
          onChangeText={value => this.onChangeText('email', value)}
          style={Styles.input.email}
          error={error.email}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text>Phone Number</Text>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{ alignItems: 'center', marginTop: 10, marginRight: 15 }}
            >
              <Text>+62</Text>
            </View>
            <TextInput
              value={formData.phone}
              // keyboardType="email-address"
              onChangeText={value => this.onChangeText('phone', value)}
              style={Styles.input.email}
              error={error.phone}
            />
          </View>
        </View>

        <InputString
          secureTextEntry
          label={i18n.t('EnterPassword')}
          value={formData.password}
          onChangeText={value => this.onChangeText('password', value)}
          style={Styles.input.password}
          error={error.password}
        />
      </PadderContainer>
    );
  }

  renderButton() {
    return (
      <ButtonFull
        height={59}
        size={Sizes.text.m.size}
        line={Sizes.text.m.line}
        width={Sizes.screen.width}
        onPress={this.onSubmit}
        color={Colors.main.baseBlue}
        borderColor={Colors.main.baseWhite}
      >
        {i18n.t('SIGN_UP')}
      </ButtonFull>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <BaseContainer
        title="Hi, welcome ! Please fill your details profile"
        onBackPress={() => navigation.pop()}
        backgroundColor={Colors.main.baseWhite}
        topColor={Colors.main.baseWhite}
        bottomContent={this.renderButton()}
        persistScrollTitle
      >
        {this.renderTitleBody()}
        {this.renderForm()}
        <LoadingModal loading={false} />
      </BaseContainer>
    );
  }
}

export default Signup;
