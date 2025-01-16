import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <Image
          className="dark rounded-full"
          src="/perfil2.jpg"
          alt="Perfil foto"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-center font-bold font-[family-name:var(--font-geist-mono)]">
          João Victor Ribeiro
        </h1>

        <p>
          Eu crio produtos que os clientes amam.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full btn btn-neutral text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.linkedin.com/in/victor-ribeiroo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre em contato!
          </a>
        </div>
      </main>
      
      

    </div>
  );
}
