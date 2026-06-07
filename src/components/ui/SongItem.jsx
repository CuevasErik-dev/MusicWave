import { View, Image } from "react-native";
import MusicText from "../../components/ui/MusicText";
import { duration } from "../../helpers/duration";
import React from "react";

const SongItem = ({ item }) => {

    const albumArtUri = `content://media/external/audio/media/${item.id}/albumart`;

    return (
        <View style={{ flexDirection: 'row', padding: 12, alignItems: 'center', gap: 12, }}>
            <Image
                source={{ uri: albumArtUri }}
                style={{ width: 55, height: 55, borderRadius: 8, backgroundColor: '#0c0b0b' }}
            />

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <MusicText
                    numberOfLines={1}
                    ellipsizeMode="tail"

                >
                    {item.title}
                </MusicText>
                <MusicText
                    numberOfLines={1}
                    ellipsizeMode="tail"

                >
                    {item.artist}
                </MusicText>
            </View>

            <MusicText>
                {duration(item.duration)}
            </MusicText>
        </View>
    );
};


export default SongItem;
