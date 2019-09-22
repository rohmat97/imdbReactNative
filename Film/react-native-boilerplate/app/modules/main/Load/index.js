import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Load extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    userData: PropTypes.object,
  };

  componentDidMount() {
    const { navigation, userData } = this.props;
    console.log(userData);
    if (userData.token === '') {
      navigation.replace('Dashboard');
    } else {
      navigation.replace('Film');
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  userData: state.session.userData,
});

export default connect(
  mapStateToProps,
  null
)(Load);
