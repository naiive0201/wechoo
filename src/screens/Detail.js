import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import DetailData from '../data/DetailData';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    };
  }

  componentDidMount() {
    this.setState({
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <Text>Detail</Text>
        {/* <Text>{this.state.image}</Text> */}

        <Image source={DetailData.image1} style={{ height: 180, width: this.state.width / 2 }} />
        <Image source={DetailData.image2} style={{ height: 180, width: this.state.width / 2 }} />
      </View>
    );
  }
}

export default Detail;
