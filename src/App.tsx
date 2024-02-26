/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {addTrack, musicPlayerSetup} from '../musicService';
import {MusicControlPanel} from './components/music-control-panel';
import {MusicDurationSlider} from './components/music-duration-slider';
import {MusicPlayer} from './screens/MusicPlayer';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    (async function setup() {
      const isSetup = await musicPlayerSetup();
      if (isSetup) {
        await addTrack();
      }
      setIsPlayerReady(isSetup);
    })();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.activityIndicatorContainer}>
        <ActivityIndicator size={48} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
