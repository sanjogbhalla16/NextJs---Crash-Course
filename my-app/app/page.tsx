import Image from "next/image";

export default function Home() {
  console.log("what am i doing here");

  return (
    <div>
      <h1>Welcome to NextJs</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
    </div>
  );
}
