import { useRouter }  from 'next/router'
import data from '../../data.json'
import { NextSeo } from 'next-seo'


export default function Project() {
  const { query } = useRouter()

  const project = data.find((project => project.id === Number(query.id)))

  console.log(project)

  return (
    <>
      <NextSeo title={`Projeto ${project?.id}`}/>
      <h1>{project?.descricao}</h1>
    </>
  );
}
