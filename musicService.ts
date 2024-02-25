import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { trackLists } from "./src/const";

export async function musicPlaybackService() {
    TrackPlayer.addEventListener(Event.RemotePause,() => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay,() => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext,() => {
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}

export async function musicPlayerSetup() {
    let isSetup = false;
    try {
        await TrackPlayer.getActiveTrackIndex()
        isSetup = true
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true
    } finally {
        return isSetup
    }
}

export async function addTrack() {
    await TrackPlayer.add(trackLists)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}