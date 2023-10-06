import { SideBar } from '@/components/SideBar';
import data from '../../data.json'

import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Tela inicial"
        description="Essa é a tela inicial."
      />
      <main className={styles.main}>
        <SideBar />
        <div>
          {data.map((project) => {
            return (
              <Link key={project.id} href={`project/${project.id}`}>
                <ProjectImage img={project.imagem} alt={project.titulo} />
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
