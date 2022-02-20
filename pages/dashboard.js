export default function Page({ user }) {
  return (
    <div>
      <div>user is logged in: <strong>{user.name}</strong></div>
      <hr />
      <div>
        <a href="/api/logout">logout</a>
      </div>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const firebaseAdmin = (await import("lib/firebaseAdmin")).default

  if (!req.cookies.session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  const user = await firebaseAdmin.auth().verifySessionCookie(req.cookies.session);

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { user },
  }
}