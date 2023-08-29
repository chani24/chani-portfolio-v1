import Link from 'next/link'
import styles from './footer.module.css'

export default function TopNav() {
  return (
    <div className={styles.footer}>
      <div className={styles.nav_links}>
        <div>
          <div className="text-light">Mail</div>
          <div><a href="mailto:achidera20@gmail.com?subject=Hire Chidera Ani">achidera20@gmail.com</a></div>
        </div>
        <div>
          <div className="text-light">Phone</div>
          <div><a>+234 814 3932 991</a></div>
        </div>
        <div>
          <div className="text-light">Resumé</div>
          <div><a href="https://drive.google.com/file/d/1TAeczHmFWtbHYVHQ3kLJiEY5zs9-lKHH/view?usp=sharing">Google drive</a></div>
        </div>
        <div>
          <div className="text-light">Github</div>
          <div><a href="https://github.com/chani24">Chani24</a></div>
        </div>
      </div>
    </div>
  )
}
