import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'
import ActiveTab from 'challenge/src/components/tabs/active/ActiveTabContainer'
import AllTab from 'challenge/src/components/tabs/all/AllTabContainer'
import DeactiveTab from 'challenge/src/components/tabs/deactive/DeactiveTabContainer'
import tapBarConfig from './TabConfig'

const TabNavigator = createMaterialTopTabNavigator({
  Deactive: DeactiveTab,
  Active: ActiveTab,
  All: AllTab
}, {
  defaultNavigationOptions: ({navigation} = {}) => ({
    title: exportTitle(navigation.state)
  }),
  initialRouteName: 'All',
  lazy: true,
  tabBarOptions: tapBarConfig
})

const exportTitle = ({routeName} = String) => {
  switch (routeName) {
    case 'Active':
      return 'فعال'
    case 'All':
      return 'همه'
    case 'Deactive':
      return 'غیرفعال'
    default:
      return 'untitled'
  }
}

export default createAppContainer(TabNavigator)
