import styles from '@/styles/gridOfAlboms.module.css'

export default function GridOfAlbums({
  image,
  name,
  data,
}: Record<string, any>): JSX.Element {
  return (
    <div className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element  */}
      <img className={styles.card_image} src={image} alt="album cover" />
      <h3 className={styles.card_title}>{name}</h3>
      <h4 className={styles.card_data}>{data}</h4>
    </div>
  )
}
