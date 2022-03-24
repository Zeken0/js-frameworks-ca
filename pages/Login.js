import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default Login;
