import { Dimensions } from 'react-native';


export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;
export const relativeWidth = (x) => x * (width / 750);
export const isSmallDevice = width < 375 ? true : false;



