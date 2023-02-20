import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RandomColorr from './src/components/RandomColor';

export default function App() {
  return (
     <View>
       <RandomColorr />
     </View>
  );
};