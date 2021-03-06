import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
//screens
import Dashboard from '../screens/Dashboard'
import PickAllergens from '../screens/PickAllergens'
import Scan from '../screens/Scan'
import Favourite from '../screens/Favourite'
import History from '../screens/History'
import Results from '../screens/Results'
import Details from '../screens/Details'
import EditProfile from '../screens/EditProfile'
import Details2 from '../screens/Details2'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: route.params?.title,
          headerStyle: { backgroundColor: '#344955' },
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}

const FavouriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourite"
        component={Favourite}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details1"
        component={Details2}
        options={({ route }) => ({
          title: route.params?.title,
          headerStyle: { backgroundColor: '#344955' },
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit"
        component={EditProfile}
        options={({ route }) => ({
          title: route.params?.title,
          headerStyle: { backgroundColor: '#344955' },
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}

const ScanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Results"
        component={Results}
        options={({ route }) => ({
          title: route.params?.title,
          headerStyle: { backgroundColor: '#344955' },
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#344955',
        },
        headerShown: false,
        tabBarStyle: { backgroundColor: '#344955' },
        tabBarLabelStyle: {
          fontSize: 12,
          textAlign: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Allergens',
          tabBarActiveTintColor: '#ffff99',
          tabBarInactiveTintColor: '#fff',
          tabBarIcon: () => (
            <Icon name="no-meals" type="material" color="#C9DFEC" size={30} />
          ),
        }}
        component={PickAllergens}
      ></Tab.Screen>
      <Tab.Screen
        name="Favourite2"
        options={{
          tabBarLabel: 'Favourite',
          tabBarActiveTintColor: '#ffff99',
          tabBarInactiveTintColor: '#fff',
          tabBarIcon: () => (
            <Icon name="favorite" type="material" color="#C9DFEC" size={30} />
          ),
        }}
        component={FavouriteStack}
      ></Tab.Screen>
      <Tab.Screen
        name="Scan2"
        options={{
          tabBarLabel: 'Scan',
          headerShown: false,
          tabBarActiveTintColor: '#ffff99',
          tabBarInactiveTintColor: '#fff',
          tabBarIcon: () => (
            <Icon
              name="barcode-scan"
              type="material-community"
              color="#C9DFEC"
              size={30}
            />
          ),
        }}
        component={ScanStack}
      ></Tab.Screen>
      <Tab.Screen
        name="History2"
        options={{
          tabBarLabel: 'History',
          headerShown: false,
          tabBarActiveTintColor: '#ffff99',
          tabBarInactiveTintColor: '#fff',
          tabBarIcon: () => (
            <Icon name="history" type="material" color="#C9DFEC" size={30} />
          ),
        }}
        component={HistoryStack}
      ></Tab.Screen>
      <Tab.Screen
        name="Dashboard1"
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: '#ffff99',
          tabBarInactiveTintColor: '#fff',
          tabBarIcon: () => (
            <Icon
              name="account-circle"
              type="material"
              color="#C9DFEC"
              size={30}
            />
          ),
        }}
        component={ProfileStack}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabNavigator
