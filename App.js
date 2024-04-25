import 'react-native-gesture-handler';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Screen } from 'react-native-screens';

import TaskContextProvider from './stores/task-context';
import WelcomePageFirst from './screens/WelcomePageFirst';
import WelcomePageSecond from './screens/WelcomePageSecond';
import SignUpPage from './screens/SignUpPage';
import LoginPage from './screens/LoginPage';

import HomeMenuPage from './screens/HomeMenuPage';
import CalendarPage from './screens/CalendarPage';
import TaskMenuPage from './screens/TaskMenuPage';
import ManageTaskPage from './screens/ManageTaskPage';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
function App() {
  function MenuPage() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name='HomePage'
          component={HomeMenuPage}
          options={{
            headerTitleAlign: 'center',
            title: 'Home'
          }}
        />
        <Drawer.Screen
          name="CalendarPage"
          component={CalendarPage}
          options={{
            headerTitleAlign: 'center'
          }}
        />

      </Drawer.Navigator>

    )
  }

  return (
    <TaskContextProvider>
      <NavigationContainer>
        <Stack.Navigator

        >
          <Stack.Screen
            name='WelcomePageFirst'
            component={WelcomePageFirst}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name='WelcomPageSecond'
            component={WelcomePageSecond}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name='SignUpPage'
            component={SignUpPage}
            options={{
              title: '',
              headerTransparent: true

            }}

          />

          <Stack.Screen
            name='LoginPage'
            component={LoginPage}
            options={{
              title: '',
              headerTransparent: true
            }}

          />

          <Stack.Screen
            name='MenuPage'
            component={MenuPage}
            options={{
              title: '',
              headerShown: false,
              headerBackVisible: false
            }}
          />
          <Stack.Screen
            name="TaskMenuPage"
            component={TaskMenuPage}
            options={{
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="ManageTaskPage"
            component={ManageTaskPage}
            options={{
              title:'Manage Task',
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  )
}
export default App;