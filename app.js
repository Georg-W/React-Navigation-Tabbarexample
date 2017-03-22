import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import { StackNavigator, TabNavigator, TabView } from 'react-navigation';


class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBar: {
            label: 'Home',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        },
    }

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBar: {
            label: 'Notifications',
        },
    }

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const tabBarConfiguration = {

    tabBarComponent: TabView.TabBarBottom,

    tabBarPosition: 'bottom',

    tabBarOptions: {
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'blue',
        },

    },
};
const routeConfiguration = {
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
};

const MyApp = TabNavigator(routeConfiguration, tabBarConfiguration);


AppRegistry.registerComponent('nav_test', () => MyApp);