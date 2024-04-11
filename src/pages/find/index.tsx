import logOut from '@/image/logOut.png'
import spotifyLogo from '@/image/spotifyLogo.png'
import styles from '@/styles/FindPage.module.css'
import Image from 'next/image'
import { getAlbums } from '@/services/AlbumsService'
import { useState } from 'react'
import { findArtists } from '@/services/ArtistService'
import { Album } from '@/models/Album'
import magnifier from '@/image/Vector.svg'
import { Artist } from '@/models/Artist'
import { removeToken } from '@/utils/Cookies'
import { useRouter } from 'next/router'
import AlbumsList from '@/components/AlbumsList'

export default function Find() {
  const [search, setSearch] = useState<string>('')
  const [artist, setArtist] = useState<Artist | undefined>(undefined)
  const [albums, setAlbums] = useState<ReadonlyArray<Album>>([])
  const [warning, setWarning] = useState<string | undefined>(undefined)

  const router = useRouter()

  async function searchAlbums(e: { preventDefault: () => void }) {
    e.preventDefault()
    setWarning(undefined)
    if (!search) return
    const artistList = await findArtists(search)
    const artist = artistList[0]
    setArtist(artist)

    if (!artist) {
      setWarning('No artist')
      return
    }

    const albums = await getAlbums(artist.id)

    if (!albums || albums.length === 0) {
      setWarning('No albums')
      return
    }

    setAlbums(albums)
  }

  function logout() {
    removeToken()
    router.push('/')
  }

  return (
    <div className={styles.home_mainBox}>
      <div className={styles.home_leftModule}>
        <button
          type="button"
          className={styles.home_LogOutLink}
          onClick={logout}
        >
          <Image className={styles.home_logOut} src={logOut} alt="logout" />
          <h4>Logout</h4>
        </button>
        <Image className={styles.home_logo} src={spotifyLogo} alt="logo" />
        <h3 className={styles.home_text}>
          Find all the albums by the artists you love to listen to.
        </h3>
        <form className={styles.home_form} onSubmit={searchAlbums}>
          <label htmlFor="artistName"></label>
          <input
            className={styles.home_search}
            type="search"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={styles.home_btn} type="submit">
            <Image src={magnifier} alt="search" />
          </button>
        </form>
      </div>
      <div className={styles.home_rightModule}>
        <AlbumsList albums={albums} artist={artist} warning={warning} />
      </div>
    </div>
  )
}
