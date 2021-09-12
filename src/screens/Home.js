import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../components/Header';
import MainListImages from '../data/SampleData';
import { FontAwesome } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    //handler to get device Height
    setHeight(Dimensions.get('window').height);
    //handler to get device Width
    setWidth(Dimensions.get('window').width);
  }, []);
  //const deviceWidth = Dimensions.get('window').width;

  return (
    <ScrollView styles={styles.container}>
      {/* <StatusBar styles={{ backgroundColor: 'black' }} /> */}
      <Header nav={navigation} />
      {/* <View style={styles.searchArea}>
            <View style={styles.searchBox}>
              <TextInput />
            </View>
            <View styles={styles.searchBtn}>
              <Ionicons name="search" size={24} color="black" />
            </View>
          </View> */}
      {MainListImages.map((image, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Detail', { data: image })}
          >
            <View style={styles.listContainer}>
              {/* 이미지 영역 */}
              <View style={styles.listItem}>
                <Image
                  source={image.image1}
                  resizeMode={'cover'}
                  style={{ height: 180, width: width / 2 }}
                />
                <Image
                  source={image.image2}
                  resizeMode={'cover'}
                  style={{ height: 180, width: width / 2 }}
                />
              </View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                {/* image area */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {/* 
                  TODO have to repace user's profile image
                  <Image src={require()} style={{height: 24, width: 24}}/> */}
                  <View style={{ margin: 10 }}>
                    <FontAwesome name="user-circle-o" size={32} color="black" />
                  </View>
                </View>
                {/* text area */}
                <View style={{ paddingTop: 7 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15, flexShrink: 1 }}>{image.title}</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 11, color: 'gray' }}>
                      {image.writer}&nbsp;&middot;&nbsp;
                    </Text>
                    <Text style={{ fontSize: 11, color: 'gray' }}>
                      {image.hits}&nbsp;&middot;&nbsp;
                    </Text>
                    <Text style={{ fontSize: 11, color: 'gray' }}>{image.createdAt}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      {/* <Text>Home</Text>
  <Button title="Go to Details... again" onPress={() => navigation.navigate('Detail')} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
    marginVertical: 5,
    padding: 5,
    height: 40,
    width: '80%',
  },
  searchBox: {
    borderWidth: 1,
    borderRadius: 5,
    //width: '80%',
  },
  searchBtn: {
    marginHorizontal: 10,
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
  },
  listImage: {
    width: 190,
    height: 190,
  },
});

export default Home;
