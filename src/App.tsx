/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { addTrack, musicPlayerSetup } from '../musicService';
import { MusicControlPanel } from './components/music-control-panel';
import { MusicDurationSlider } from './components/music-duration-slider';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  useEffect(() => {
    (async function setup() {
      const isSetup = await musicPlayerSetup()
      if(isSetup) {
        await addTrack()
      }
      setIsPlayerReady(isSetup)
    })()
  },[])

  if(!isPlayerReady) {
    return (
      <SafeAreaView style={styles.activityIndicatorContainer} >
      <ActivityIndicator size={48} />
    </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <Text>Music player is ready to hit the stage.</Text>
      <View>
      <MusicControlPanel />
      <MusicDurationSlider />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
