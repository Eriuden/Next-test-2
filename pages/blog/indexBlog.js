
//IMPORT GETSESSION

export default function indexBlog({data}) {
  const [session] = useSession()
  return (
    <div>blog - { data }</div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context)

  if(!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http:localhost:3000/blog",
        permanent: false,
      },
    }
  }
  return {
    props: {
      data: session ? "liste de 100 blogs": "liste de blogs"
    }
  }
}
