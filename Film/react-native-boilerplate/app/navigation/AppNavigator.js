import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import Landing from '../modules/main/Landing';
import Home from '../modules/main/Home';
import Login from '../modules/auth/Login';
import Signup from '../modules/auth/Signup';
import Dashboard from '../modules/auth/Dashboard';
import Redux from '../modules/main/Redux';
import Fetching from '../modules/main/Fetching';
import Register from '../modules/auth/Register';
import SelectCountry from '../modules/auth/SelectCountry';
import Film from '../modules/main/Film';
import DetailUser from '../modules/main/DetailUser';
import DetailFilm from '../modules/main/DetailFilm';
import Load from '../modules/main/Load';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Main: { screen: Landing },
    Home: { screen: Home },
    Signup: { screen: Signup },
    Dashboard: { screen: Dashboard },
    Redux: { screen: Redux },
    Fetching: { screen: Fetching },
    Register: { screen: Register },
    SelectCountry: { screen: SelectCountry },
    Film: { screen: Film },
    DetailUser: { screen: DetailUser },
    DetailFilm: { screen: DetailFilm },
    Load: { screen: Load },
  },
  {
    initialRouteName: 'Film',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
