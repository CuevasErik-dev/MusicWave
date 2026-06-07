import { useState, useEffect } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { useLocalMusic } from '../hooks/useLocalMusic';
import { duration } from '../helpers/duration';
import SongItem from '../components/ui/SongItem';
import theme from '../themes/theme';


const MusicScreen = () => {

  const { songs, loading } = useLocalMusic();

  if (loading) {

    <View style={{ flex: 1, backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SongItem item={item} />}
      />
    </View>
  )
}

export default MusicScreen