import { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library/legacy";
import { obtenerMetadatos } from '../helpers/GetMetadata';

export  const useLocalMusic = () => {

    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [permission, requestPermission] = MediaLibrary.usePermissions();

    useEffect(() => {
        if (permission?.granted) loadMusic();
        else requestPermission();
    }, [permission]);

    const loadMusic = async () => {
        try {
            const { assets } = await MediaLibrary.getAssetsAsync({
                mediaType: 'audio',
                first: 1
            });

            if (assets && assets.length > 0) {
                const cancionOriginal = assets[0];

                const metadatos = await obtenerMetadatos(cancionOriginal.uri);
                const cancionConMetadatos = {
                    ...cancionOriginal,
                    artist: metadatos?.artist || "Artista Desconocido",
                    title: metadatos?.title || cancionOriginal.filename // Respaldo si no hay título interno
                };
                console.log("Canción con metadatos:", cancionConMetadatos);
                setSongs([cancionConMetadatos]);
            }
        } catch (error) {
            console.log("Error cargando la música:", error);
        } finally {
            setLoading(false);
        }
    };
    return { songs, loading };
}
