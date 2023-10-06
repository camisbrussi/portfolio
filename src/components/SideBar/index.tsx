/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";
import { ExternalLink } from "@/components/ExternalLink";
import { Profile } from "@/components/Profile";
import { WorkExperience } from '../WorkExperience';


export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <div className={styles.socialMedia}>
        <ExternalLink
          link="https://www.linkedin.com/in/camisbrussi/"
          title="Linkedin"
        />
        <ExternalLink link="https://github.com/camisbrussi" title="GitHub" />
        <ExternalLink link="#" title="Instagram" />
      </div>
      <div className={styles.workExperience}>
        <span>Experiência</span>
        <WorkExperience rule="Sofware Enginner" year='2023' company='Mercado Livre'/>
      </div>
    </aside>
  );
}
