"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const books = [
  {
    id: 1,
    title: "Modern CSS with Tailwind",
    image: "/images/book1.png",
    description: "Learn modern CSS practices with Tailwind CSS framework",
  },
  {
    id: 2,
    title: "The Next.js Handbook",
    image: "/images/book2.png",
    description: "Master Next.js and build amazing React applications",
  },
  {
    id: 3,
    title: "Mindset",
    image: "/images/book3.jpg",
    description: "Change your mindset, change your life",
  },
];

export default function BooksPage() {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-120px)] md:h-auto md:pt-12 md:pb-4 px-4 md:min-h-0">
      <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-12">Book Recommendations</h2>

      <Carousel className="w-full max-w-sm md:max-w-4xl">
        <CarouselContent>
          {books.map((book) => (
            <CarouselItem key={book.id}>
              <div className="flex flex-col items-center justify-center px-2 h-full">
                <div className="bg-white dark:bg-zinc-800 p-3 md:p-8 rounded-lg shadow-lg">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={180}
                    height={264}
                    className="md:w-[320px] md:h-[470px] w-[180px] h-[265px]"
                    priority={false}
                  />
                </div>
                <h3 className="mt-2 md:mt-6 text-sm md:text-2xl font-semibold text-center max-w-[160px] md:max-w-md">
                  {book.title}
                </h3>
                <p className="mt-1 md:mt-2 text-center text-zinc-600 dark:text-zinc-400 text-xs md:text-lg max-w-[160px] md:max-w-md">
                  {book.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
