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
            className="rounded-full btn btn-neutral  text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.linkedin.com/in/victor-ribeiroo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre em contato!
          </a>
        </div>

        <div class="flex flex-col md:flex-row gap-8 md:w-full">
          <a class="w-full h-[150px]" target="_blank" href="https://pokedex-react-vert-zeta.vercel.app/">
            <div class="card card-side bg-base-100 shadow-lg w-full h-full gap-2 flex flex-row items-center hover:border-black p-4">
              <div class="max-w-16 h-20">
                <img class="rounded-lg" src="/pokeballD.png" alt="Movie" />
              </div>
              <div class="card-body">
                <h2 class="card-title">Pokedex in React</h2>
                <p>Click the button to try it.</p>
              </div>
            </div>
          </a>

          <a class="w-full h-[150px]" target="_blank" href="">
            <div class="card card-side bg-base-100 shadow-lg w-full h-full gap-2 flex flex-row items-center p-4">
              <div class="max-w-16 h-20">
                <img class="rounded-lg" src="/calcular.png" alt="Movie" />
              </div>
              <div class="card-body">
                <h2 class="card-title">Calculator</h2>
                <p>A mac calculator clone in react native</p>
              </div>
            </div>
          </a>
        </div>
      </main> 
    </div>
  );
}
