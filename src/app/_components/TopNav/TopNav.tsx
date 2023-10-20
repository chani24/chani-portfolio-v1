import Link from "next/link";
import styles from "./topnav.module.css";

export default function TopNav() {
  return (
    <div className={styles.top_nav}>
      <div>
        <Link href="/" className="font-medium">
          CHIDERA ANI
        </Link>
      </div>
      <div className={styles.nav_links}>
        <a href="mailto:achidera20@gmail.com?subject=Hire Chidera Ani">
          Contact
        </a>
      </div>
    </div>
  );
}
