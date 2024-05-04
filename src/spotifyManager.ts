import { SpotifyApi } from '@spotify/web-api-ts-sdk';

//===AUTH===
const redirectUrl = "https://localhost:3000"
const clientId = "c5400bc4f9f64ff988743946e332e501"

export const getApi = () => {
    return SpotifyApi.withUserAuthorization(clientId, redirectUrl)
}

//===SONG OBJECT STUFF===
export interface ISong {
    name: string,
    artists: string[],
    popularity: number,
    duration: number
}

//===API STUFF===
export const getPlaylistItems = async (api: SpotifyApi, id: string) => {
    const songs = await api.playlists.getPlaylistItems(id)
    console.log(songs)
}
