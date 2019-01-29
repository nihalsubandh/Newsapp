import Home from './components/Home'
import Favourites from './components/Favourites'
import { createStackNavigator,createMaterialTopTabNavigator, createAppContainer } from "react-navigation"

const AppNavigator = createMaterialTopTabNavigator({
  Feed: {
    screen: Home
  },
  Favourites:{
    screen:Favourites
  }
});


export default createAppContainer(AppNavigator);