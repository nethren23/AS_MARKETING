import Image from "next/image";
import styles from "./page.module.css";
import InteractiveFrame from "./interactive-frame";

const CONTACT_EMAIL = "info@allocatespace.co";
const CONTACT_PHONE = "+65 6270 0991";
const CONTACT_PHONE_HREF = "+6562700991";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.main}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.frame}>
            <div className={styles.glow} aria-hidden="true" />
            <InteractiveFrame />

            <header className={styles.brand}>
              <Image
                src="/logo.png"
                alt="Allocate Space"
                width={486}
                height={210}
                className={styles.logo}
                priority
              />
            </header>

            <div className={styles.hero}>
              <h1 className={styles.headline}>
                Build <span className={styles.accent}>client workflows</span> without touching
                <span className={styles.accent}> code</span>
              </h1>
 
              <p className={styles.subhead}>
                Allocate is a no-code platform for consultants. Build
                workflows with forms, approvals, IoT data and AI, then push
                the same solution to every client site. No engineering
                needed.
              </p>

              <p className={styles.note}>
                We&rsquo;re finishing up. Full details coming soon.
              </p>

              <div className={styles.actions}>
                <a className={styles.primary} href={`mailto:${CONTACT_EMAIL}`}>
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerCol}>
              <span className={styles.footerBrand}>Allocate Space</span>
              <span>&copy; {year} Allocate Space Pte. Ltd.</span>
            </div>

            <div className={styles.footerCol}>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/company/allocate-space/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Allocate Space on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </a>
              <a className={styles.footerLink} href="#">
                Privacy Policy
              </a>
            </div>

            <div className={styles.footerCol}>
              <a className={styles.footerLink} href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              <a
                className={styles.footerLink}
                href={`tel:${CONTACT_PHONE_HREF}`}
              >
                {CONTACT_PHONE}
              </a>
              <address className={styles.footerAddress}>
                21 Keppel Rd, #A2-07
                <br />
                Singapore 089067
              </address>
            </div>
          </div>

          <div className={styles.certRow}>
            <span className={styles.certBadge}>
              ISO/IEC 27001:2022 — Cert No. 110222
            </span>
            <span className={styles.certBadge}>
              SAC Accredited Certification Body
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
