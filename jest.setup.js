// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
import {jest} from '@jest/globals';

jest.mock('@react-navigation/native-stack');

global.jest = jest;
