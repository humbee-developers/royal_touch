import styles from "@/components/navbar/nav/Footer/footer.module.css"

export default function index() {
  return (
    <div className={styles.footer}>
        <a  href="https://www.instagram.com/royale_touche/?utm_source=Royale-Touche&utm_medium=store_locator&utm_content=footer"              rel="noopener noreferrer"   target="_blank" className={styles.social_names}>Instagram</a>
        <a href="https://www.facebook.com/RoyaleToucheOfficial?utm_source=Royale-Touche&utm_medium=store_locator&utm_content=footer"         target="_blank"      rel="noopener noreferrer"  className={styles.social_names}>Facebook</a>
        <a href="https://www.linkedin.com/company/31261499/admin/feed/posts/?utm_source=Royale-Touche&utm_medium=store_locator&utm_content=footer"          target="_blank"     rel="noopener noreferrer"  className={styles.social_names}>LinkedIn</a>
    </div>
  )
}
