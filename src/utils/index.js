import {Dimensions} from 'react-native';
export const formatTime = (time, needWeek) => {
  const weekMap = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  };
  const date = time || new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const week = date.getDay();
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  return `${year}年${month}月${day}日  ${hour}:${minute}:${second}  ${
    needWeek ? `星期${weekMap[week]}` : ''
  }`;
};

const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;
export const rx = width / 750;
