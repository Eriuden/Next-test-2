

export const indexNews = ({articles}) => {
  return (
    <div>
      {
        articles.map(article => {
          return ( 
            <div key={article.id}>
              <h2>
                {article.title} | {article.category}
              </h2>
            </div>
          )
      })}
    </div>
  )
}

//note, ca ne fonctionne que côté server

export async function getServerSideProps() {
  const response = await fetch("https://localhost:4000/news")
  const data = response.json()

  return {
    props: {
      articles: data,
    },
  }
}
