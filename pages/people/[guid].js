import Head from "next/head";
import peopleJson from "../../libs/people-data";
import styles from "../../styles/Home.module.css";

export default function Person({ name, about }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{name}</h1>

        <div>
          <p>{about}</p>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = peopleJson.map((person) => {
    return {
      params: {
        guid: person.guid,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const foundPerson = peopleJson.find((person) => person.guid === params.guid);

  return {
    props: foundPerson,
  };
}
