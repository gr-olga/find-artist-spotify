import { SpotifyImage } from '@/models/SpotifyImage'

export interface Album {
  album_group: string
  album_type: string
  artists: ReadonlyArray<AlbumArtist>
  available_markets: ReadonlyArray<string>
  external_urls: Record<string, string>
  href: string
  id: string
  images: ReadonlyArray<SpotifyImage>
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface AlbumArtist {
  external_urls: Record<string, string>
  href: string
  id: string
  name: string
  type: string
  uri: string
}
