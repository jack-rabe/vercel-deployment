import Head from "next/head";
import { useState } from "react";

const Target = () => {
  const [text, setText] = useState("empty");

  return (
    <>
      <button
        className="border border-gray-200 hover:ring-red-900"
        onClick={hitBackend.bind(null, setText)}
      >
        fetch
      </button>
      <div>{text}</div>
    </>
  );
};

export default function Hello() {
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

function hitBackend(setText: any) {
  fetch("/api/hello").then((res) =>
    res.json().then((data) => setText(JSON.stringify(data)))
  );
}
