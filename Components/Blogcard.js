import Link from 'next/link'

export default function BlogPost({title, author, coverimage, date, slug }){
    return(
        <div className={styles.card}>
            <Link>
            <div className={styles.imgContainer}>
                 <img src={coverimage.url} alt=" " />
            </div>
            </Link>
        </div>
    )
}