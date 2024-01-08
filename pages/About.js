import Header from '@/components/Header'
import Link from 'next/link'
import Footer from '@/components/Footer'
import styles from '@/styles/About.module.css'
import Counter from '@/components/Counter'

export default function About() {
    return(
        <>
            <Header/>
            <div className={styles.main}>
                <Counter/>
            </div>
            <Footer/>
        </>
    )
}