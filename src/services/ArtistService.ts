import axios from 'axios'
import {getToken} from '@/utils/Cookies'
import {Artist} from '@/models/Artist'

export function findArtists(
    artistName: string
): Promise<ReadonlyArray<Artist>> {
    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        artistName
    )}&type=artist`

    return (
        axios
            .get(searchUrl, {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.data.artists.items)
            .catch((error) => {
                console.error(error)
            })
    )
}
