import styles from '@/styles/FindPage.module.css'
import GridOfAlbums from '@/components/gridOfAlbums'

export default function AlbumsList({
  albums,
  artist,
  warning,
}: Record<string, any>) {
  const defaultState = (
    <div className={styles.search_holder}>
      <h1 className={styles.search_text}>No results to show</h1>
      <p className={styles.search_p}>
        Use the search to find the albums by the artists.
      </p>
    </div>
  )

  const searchResultState = (
    <div>
      <h2 className={styles.home_artist}>{artist?.name}</h2>
      <section className={styles.home_cardsGrid}>
        {albums.map((item, index) => (
          <GridOfAlbums
            image={item.images[0].url}
            name={item.name}
            data={item.release_date}
            key={item.id}
          />
        ))}
      </section>
    </div>
  )

  const invalidResultsState = (
    <div className={styles.search_holder}>
      <h1 className={styles.search_text}>
        No results for “invalid value here”
      </h1>
      <p className={styles.search_p}>
        Please make sure your words are spelled correctly or use less or
        different words.
      </p>
    </div>
  )

  if (warning) return invalidResultsState
  if (albums.length < 1) return defaultState
  return searchResultState
}
