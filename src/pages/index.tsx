import Head from "next/head";
import { useState } from "react";

type kitten = { name: string; age: number };

const Target = () => {
  const [kittens, setKittens] = useState<kitten[]>([]);
  let key = 0;

  return (
    <>
      <button className="btn" onClick={hitBackend.bind(null, setKittens)}>
        fetch
      </button>
      {kittens.map((kitten) => (
        <Kitten key={key} name={kitten.name} age={kitten.age} />
      ))}
    </>
  );
};

export default function Kittens() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col justify-center items-center h-72 mt-16">
          <Target></Target>
        </div>
      </main>
    </>
  );
}

const Kitten = ({ name, age }: { name: string; age: number }) => {
  return (
    <div className="w-36 h-36 bg-primary flex items-center justify-center m-2">
      {name} is {age}
    </div>
  );
};

function hitBackend(setKittens: any) {
  fetch("/api/kittens").then((res) =>
    res.json().then((data) => {
      setKittens(data);
    })
  );
}
