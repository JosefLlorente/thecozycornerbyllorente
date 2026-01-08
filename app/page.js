import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-120px)] items-center justify-center bg-zinc-50 dark:bg-zinc-900 px-4 md:px-6">
      <main className="flex w-full max-w-6xl flex-col md:flex-row items-center gap-3 md:gap-12">
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <Image
            src="/images/book1.png"
            alt="The Cozy Corner"
            width={280}
            height={370}
            priority
            className="md:w-[320px] md:h-[420px] w-[200px] h-[265px]"
          />
        </div>

        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-tight dark:text-white">
            Welcome to The Cozy Corner
          </h1>
          <p className="mt-3 md:mt-8 text-zinc-600 dark:text-zinc-300 text-base md:text-2xl leading-relaxed">
            A cozy online bookstore with hand-picked recommendations for every
            reader.
          </p>

          <div className="flex gap-4 mt-4 md:mt-10 justify-center md:justify-start">
            <Link
              href="/books"
              className="flex h-11 md:h-14 items-center justify-center rounded-full bg-black dark:bg-white px-5 md:px-8 text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium text-sm md:text-lg"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
