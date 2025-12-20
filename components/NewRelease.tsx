import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import BookCover from "./BookCover";

const NewRelease = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="w-full h-full pt-12 font-ibm-plex-sans ">
      <div className="flex w-full gap-5 justify-between  items-center mx-auto max-sm:flex-col-reverse">
        <div className="flex flex-2 flex-col place-items-start gap-6">
          <p className="book-title lg:text-5xl">{title}</p>
          <div className="flex gap-7">
            <p className="text-light-100">
              By <span className="text-light-200">{author}</span>
            </p>
            <p className="book-genre">
              Category: <span className="text-light-200">{genre}</span>
            </p>
            <div className="flex gap-1">
              <img src="/icons/star.svg" alt="star" width={16} height={16} />
              <p className="text-light-100">
                <span className="text-light-200">{rating}</span>/5
              </p>
            </div>
          </div>
          <div className="text-light-100 flex gap-7">
            <p>
              Total Books :{" "}
              <span className="text-light-200 font-semibold">
                {total_copies}
              </span>
            </p>
            <p>
              Available Books :{" "}
              <span className="text-light-200 font-semibold">
                {available_copies}
              </span>
            </p>
          </div>
          <p className="text-light-100 text-wrap max-w-lg font-ibm-plex-sans">
            {description}{" "}
          </p>
          <Button className="bg-light-200 flex py-6 ">
            <Image src="/icons/book.svg" alt="\|/" height={18} width={18} />
            <p className="font-bebas-neue text-[#16191E] text-sm font-semibold">
              BORROW REQUEST
            </p>
          </Button>
        </div>
        <div className="flex flex-1 items-end relative">
          <div className="relative w-full h-full">
            <BookCover
              className="z-10"
              variant="wide"
              coverColor={color}
              coverImage={cover}
            />
            <div className="absolute rotate-15 top-10 left-16 max-sm:hidden opacity-40">
              <BookCover variant="wide" coverColor={color} coverImage={cover} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRelease;
