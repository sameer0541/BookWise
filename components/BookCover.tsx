import BookCoverSvg from "./BookCoverSvg";
import { sampleBooks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant: BookCoverVariant;
  coverColor?: string;
  coverImage?: string;
}

const BookCover = ({
  className,
  variant,
  coverColor = sampleBooks[0].color,
  coverImage = sampleBooks[0].cover,
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300 ",
        variantStyles[variant],
        className
      )}>
      <BookCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}>
        <Image
          src={coverImage}
          alt="Book cover"
          fill
          className="rounded-sm object-fill"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default BookCover;
