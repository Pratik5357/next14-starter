import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/27034673/pexels-photo-27034673/free-photo-of-a-fox-sitting-behind-the-grass-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur officiis a. Blanditiis, vel numquam ex, optio atque voluptates obcaecati ipsa facere repellendus delectus rem nemo eum quam animi? Nemo?</p>
                <Link href="/blog/post" className={styles.link}>READ MORE</Link>
            </div>
        </div>
    );
}

export default PostCard