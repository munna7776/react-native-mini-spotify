import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {trackLists} from '../const';
import {MusicInfo} from '../components/music-info';
import {MusicDurationSlider} from '../components/music-duration-slider';
import {MusicControlPanel} from '../components/music-control-panel';

const width = Dimensions.get('screen').width;

export const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  // useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async(event) => {
  //     switch(event.type) {
  //         case Event.PlaybackActiveTrackChanged:
  //             const playingTrcak = await TrackPlayer.getTrack(event?.index + 1)
  //             break;
  //     }
  // })

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={trackLists}
        keyExtractor={song => song.id.toString()}
        renderItem={song => {
          return (
            <View style={styles.artWorkListsWrapper}>
              <View style={styles.artAlbumContainer}>
                <Image
                  source={{uri: song.item.artwork}}
                  style={styles.artAlbum}
                />
              </View>
            </View>
          );
        }}
        contentContainerStyle={styles.contentContainer}
        style={styles.flatList}
      />
      <View
        style={styles.panelAndInfoContainer}>
        {currentTrack && <MusicInfo track={currentTrack} />}
        <MusicDurationSlider />
        <MusicControlPanel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F363F',
    gap: 20,
  },
  contentContainer: {
    alignItems: "flex-end",
  },
  flatList: {
    flex: 1,
    paddingVertical: 15,
  },
  artWorkListsWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artAlbumContainer: {
    width: 300,
    height: 300,
  },
  artAlbum: {
    height: '100%',
    borderRadius: 10,
  },
  panelAndInfoContainer: {
    flex: 1,
    width: '100%',
    alignItems: "center"
  }
});
