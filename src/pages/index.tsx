import Head from "next/head";
import { useState } from "react";

type kitten = { name: string; age: number };

const Target = () => {
  const [kittens, setKittens] = useState<kitten[]>([]);

  return (
    <>
      <button
        className="border border-gray-200 hover:ring-red-900 bg-slate-500"
        onClick={hitBackend.bind(null, setKittens)}
      >
        fetch
      </button>
      {kittens.map((kitten) => (
        <Kitten name={kitten.name} age={kitten.age} />
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
      <main className={"text-red-900"}>
        <div className="flex flex-col justify-center items-end h-72">
          <div>Hello World!!!</div>
          <Target></Target>
          <div>div 2</div>
        </div>
      </main>
    </>
  );
}

const Kitten = ({ name, age }: { name: string; age: number }) => {
  return (
    <div className="w-36 h-36 bg-zinc-100 flex items-center justify-center m-2">
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
