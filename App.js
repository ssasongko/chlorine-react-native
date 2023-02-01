import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from './screens/Main';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <StatusBar style="auto" />
      <Main />
    </SafeAreaView>
  );
}