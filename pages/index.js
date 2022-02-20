import { signInWithGoogle } from "lib/firebase";

async function login() {
  let result = await signInWithGoogle();

  await fetch("/api/login", {
    method: "POST",
    headers: {
      token: await result.user.getIdToken(),
    },
  });

  window.location = "/dashboard";
}

export default function Page() {
  return (
    <div>
      <button onClick={login}>login with google</button>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const firebaseAdmin = (await import("lib/firebaseAdmin")).default

  if (!req.cookies.session) {
    return {
      props: {}
    }
  }

  const user = await firebaseAdmin.auth().verifySessionCookie(req.cookies.session);

  if (user) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    }
  }

  return {
    props: { user },
  }
}