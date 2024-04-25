import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {formatTime, rx} from '../utils';
import ProgressBar from '../components/ProgressBar';
const {width, height} = Dimensions.get('window');

export default function Home({navigation}) {
  const [time, setTime] = React.useState(null);
  // 展示当前时间并格式化
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  // AsyncStorage.setItem('my-key', 'I like to save it.');
  // onPress={() => navigation.navigate('Details')}>
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <ImageBackground
        style={styles.container}
        source={require('../assets/images/home-unFull.png')}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
          <Text style={[styles.title, styles.time]}>{time}</Text>
        </View>
        <View style={{...styles.header, marginTop: 108 * rx}}>
          <Text style={{...styles.title, fontSize: 36 * rx}}>
            欢迎使用小口袋回收
          </Text>
          <Text style={{...styles.title, fontSize: 25 * rx}}>50.00kg</Text>
        </View>
        <ProgressBar progress={0.7} />
        <View style={styles.tip}>
          <Text style={{...styles.title, fontSize: 25 * rx}}>
            爱护环境 让生活更美好！
          </Text>
          <Text style={styles.tipTime}>最近清运时间：{formatTime()}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#424242',
  },
  container: {
    width,
    height,
    paddingTop: 33 * rx,
    paddingLeft: 62 * rx,
    paddingRight: 33 * rx,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 63 * rx,
    height: 63 * rx,
  },
  time: {
    fontSize: 17 * rx,
  },
  tip: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 4,
    fontSize: 13 * rx,
  },
});
