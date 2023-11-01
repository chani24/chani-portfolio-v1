import Link from 'next/link'
import styles from './footer.module.css'

export default function TopNav() {
  return (
    <div className={styles.footer}>
      <div className={styles.nav_links}>
        <div>
          <div className="text-light">Mail</div>
          <div><a href="mailto:achidera20@gmail.com?subject=Hire Chidera Ani" target="_blank">achidera20@gmail.com</a></div>
        </div>
        <div>
          <div className="text-light">Blog</div>
          <div><a href="https://dev.to/anichidera" target="_blank">Dev.to</a></div>
        </div>
        <div>
          <div className="text-light">Resumé</div>
          <div><a href="https://drive.google.com/file/d/1Xh_OZmOz-4YZGx1D5eXxC6NpbXICuyNf/view?usp=sharing" target="_blank">Google drive</a></div>
        </div>
        <div>
          <div className="text-light">Github</div>
          <div><a href="https://github.com/chani24" target="_blank">Chani24</a></div>
        </div>
      </div>
    </div>
  )
}
