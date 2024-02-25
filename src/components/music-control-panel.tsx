import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {
  PlaybackState,
  State,
  usePlaybackState,
} from 'react-native-track-player';

export const MusicControlPanel = () => {
  const trackPlaybackState = usePlaybackState();

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const togglePlayback = async (
    playback: PlaybackState | {state: undefined},
  ) => {
    if (!playback.state) {
      return;
    }
    const currentTrack = await TrackPlayer.getActiveTrackIndex();
    if (currentTrack === null) {
      return;
    }
    if (playback.state === State.Paused || playback.state === State.Ready) {
      await TrackPlayer.play();
      return;
    }
    await TrackPlayer.pause();
  };

  return (
    <View style={styles.controlContainer}>
      <Pressable onPress={skipToPrevious}>
        <Icon name="skip-previous" style={styles.icon} size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(trackPlaybackState)}>
        <Icon
          name={
            trackPlaybackState.state === State.Playing ? 'pause' : 'play-arrow'
          }
          style={styles.icon}
          size={40}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name="skip-next" style={styles.icon} size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  controlContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    gap: 50
    // height: 100,
    // marginVertical: 50,
    // width: 200,
    // backgroundColor: "#74B9FF"
  },
  icon: {
    color: '#B83227',
    // color: "#ffffff"
  },
});
