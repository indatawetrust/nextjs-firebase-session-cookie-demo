import Link from 'next/link'

export default function Page({ user }) {
  return (
    <div>
      <div>user is logged in: <strong>{user.name}</strong></div>
      <hr />
      <div>
        <Link href="/api/logout">logout</Link>
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