import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navigation: props.nav, isLoggedIn: false };
    // This binding is necessary to make `this` work in the callback
    this.loginClick = this.loginClick.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.goProfile = this.goProfile.bind(this);
  }

  // runs after the component output has been rendered to the DOM.
  componentDidMount() {}

  // when the component tear down
  componentWillUnmount() {}

  // 로그인 페이지로 이동하기
  loginClick() {
    this.state.navigation.navigate('Login');
  }

  // 프로파일 페이지로 이동하기
  goProfile() {
    this.state.navigation.navigate('Profile');
  }

  // 로그인 여부 체크하기
  checkLogin() {
    if (this.state.isLoggedIn) {
      return (
        <TouchableOpacity onPress={this.goProfile}>
          <Feather name="user" size={24} color="black" />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={this.loginClick}>
        <Ionicons name="ios-log-in-outline" size={24} color="black" />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        {/* 로고 */}
        <View style={styles.logoWrapper}>
          <FontAwesome5 style={styles.logoIcon} name="icons" size={24} color="black" />
          <Text style={styles.logoText}>Wechoo</Text>
        </View>
        {/* 우측 메뉴 */}
        <View style={styles.rightWrapper}>{this.checkLogin()}</View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: Constants.statusBarHeight,
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  logoWrapper: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    alignItems: 'center',
  },
  logoIcon: {
    marginLeft: 20,
  },
  logoText: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: 'bold',
  },

  rightWrapper: {
    justifyContent: 'space-around',
    width: 40,
    margin: 5,
  },
});
