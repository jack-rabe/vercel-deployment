import Head from "next/head";
import { FormEvent, useState } from "react";

const Target = () => {
  const [text, setText] = useState("empty");

  return (
    <form action="/api/hello">
      <label>
        Name:
        <input type="text" name="name" className="m-3 p-2"></input>
      </label>
      <label>
        Age:
        <input type="number" name="age" className="m-3 p-2"></input>
      </label>
      <button type="submit" className="btn m-4">
        post
      </button>
      <div className="bg-primary border border-white text-black m-4 p-4">
        {text}
      </div>
    </form>
  );
};

export default function Hello() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col justify-center items-end h-72">
          <Target></Target>
        </div>
      </main>
    </>
  );
}

function hitBackend(setText: any, e: FormEvent) {
  console.log("hi");
  fetch("/api/hello").then((res) =>
    res
      .json()
      .then((data) => setText(JSON.stringify(data)))
      .catch((e) => console.error(e))
  );
  e.preventDefault();
}
