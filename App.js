import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {name as appName } from "./app.json"
import { ExpoRoot, Redirect } from 'expo-router';

export default function App() {
  const ctx = require.context("./app/_tabs");
  return (
   <ExpoRoot context={ctx}/>
  );
}
AppRegistry.registerComponent(appName, () => App);
