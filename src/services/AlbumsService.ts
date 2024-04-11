import { getToken } from '@/utils/Cookies'
import axios from 'axios'
import { Album } from '@/models/Album'

const BASE_URL = 'https://api.spotify.com'

//TODO unknown
export async function getAlbums(
  artistId: string
): Promise<ReadonlyArray<Album>> {
  const token = getToken()

  if (!token) throw new Error('Token is not exist')

  return axios
    .get(`${BASE_URL}/v1/artists/${artistId}/albums`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data.items
    })
}
