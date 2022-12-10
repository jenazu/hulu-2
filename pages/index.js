
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Results from "../components/results/Results";
import requests from "../utils/requests";

const Home = ({results}) => {

  
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />
      {/* results */}
      <Results results={results}/>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json())

return {
  props: {
    results: request
  }
}
}
