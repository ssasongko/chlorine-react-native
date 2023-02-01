import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormScreen } from './screens/FormScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <StatusBar style="auto" />
      <FormScreen />
    </SafeAreaView>
  );
}