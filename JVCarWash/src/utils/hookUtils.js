import {ThemeContext} from 'styled-components';
import {useContext} from 'react';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

/**
 *  Gets a size and returns an string to be used on styled components
 * @param size
 * @returns {string}
 */
export function setSize(size) {
  return size.toString() + 'px';
}

export function setTextSize(size) {
  return (size * 5).toString() + 'px';
}

export function useColor() {
  return useContext(ThemeContext);
}

export function getWindowSizes() {
  return {height: height, width: width};
}

/**
 *
 * @param percentage
 * @returns {{width: string, height: string}}
 */
export function getWindowPercentage(percentage) {
  let per = (percentage && percentage > 100 ? 100 : percentage) / 100;
  return {
    height: (height * per).toString() + 'px',
    width: (width * per).toString() + 'px',
  };
}
