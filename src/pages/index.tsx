
// Components


// App
export default function Home() {
  return (
    <h1></h1>
  )
}


// SSG
export async function getStaticProps() {

  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8 // de 8 em 8 horas (3 chamadas por dia)
  }
}
