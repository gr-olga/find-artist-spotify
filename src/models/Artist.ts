import { SpotifyImage } from '@/models/SpotifyImage'

export interface Artist {
  external_urls: Record<string, string>
  followers: Followers
  genres: ReadonlyArray<string>
  href: string
  id: string
  images: ReadonlyArray<SpotifyImage>
  name: string
  popularity: number
  type: string
  uri: string
}

export interface Followers {
  href: string | null
  total: number
}
