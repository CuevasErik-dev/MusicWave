// src/helpers/musicMetadata.js
import MusicInfo from 'expo-music-info-2';

export const obtenerMetadatos = async (cancionUri) => {
    try {
        const metadata = await MusicInfo.getMusicInfoAsync(cancionUri, {
            title: true,
            artist: true,
            album: true,
            picture: false 
        });
        return  metadata
        
    } catch (error) {
        return { artist: "Artista Desconocido", title: "Título Desconocido" };
    }
};
