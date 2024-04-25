import React from 'react';
import {rx} from '../utils';
const {StyleSheet, View, Text} = require('react-native');

export default ({progress}) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={[styles.progress, {width: `${progress * 100}%`}]} />
        <View style={styles.textWrap}>
          <Text style={styles.text}>{progress * 100}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 174 * rx,
    height: 11 * rx,
    backgroundColor: '#dff9dd',
    borderRadius: 7 * rx,
    marginTop: 8 * rx,
  },
  progress: {
    height: '100%',
    backgroundColor: '#41E0C6',
    borderRadius: 7 * rx,
  },
  textWrap: {
    height: 21 * rx,
    backgroundColor: '#53DBA2',
    borderRadius: 69 * rx,
    marginLeft: -6 * rx,
  },
  text: {
    fontSize: 13 * rx,
    lineHeight: 18 * rx,
    color: '#FFFFFF',
    paddingLeft: 6 * rx,
    paddingRight: 6 * rx,
  },
});
