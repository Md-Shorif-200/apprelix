import Image from "next/image";
import { memo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAosProps } from "@/lib/animations/aos";
import type { BlogCard as BlogCardType } from "./_data/blogsData";

const BLOG_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

type BlogCardProps = {
  card: BlogCardType;
  index: number;
};

const BlogCard = memo(function BlogCard({ card, index }: BlogCardProps) {
  return (
    <article
      {...getAosProps("fade-up", index * 50)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 dark:bg-black/20"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes={BLOG_IMAGE_SIZES}
          quality={75}
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
        />

        {/* Tag Badge */}
        {/* {card.tag && (
          <span className="absolute left-3 top-3 z-20 flex items-center gap-1 rounded-full bg-ds-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <Tag size={9} />
            {card.tag}
          </span>
        )} */}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Meta info */}
        {/* <div className="flex items-center gap-3 text-[11px] text-ds-muted-foreground">
          {card.readTime && (
            <span className="flex items-center gap-1">
              <Clock size={11} className="text-ds-primary" />
              {card.readTime} min read
            </span>
          )}
          {card.date && (
            <>
              <span className="h-1 w-1 rounded-full bg-ds-muted-foreground/40" />
              <span>{card.date}</span>
            </>
          )}
        </div> */}

        {/* Title */}
        <h3 className="line-clamp-2 text-sm font-bold leading-snug tracking-tight text-ds-text transition-colors duration-300 group-hover:text-ds-primary">
          {card.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 flex-1 text-xs leading-relaxed text-ds-muted-foreground">
          {card.description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* See More Link */}
        <Link
          href="/blogs"
          // href={card.href ?? "#"}
          className="group/link flex items-center justify-between"
          aria-label={`Read more about ${card.title}`}
        >
          <span className="relative text-xs font-semibold text-ds-primary">
            See more
            {/* Animated underline */}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ds-primary transition-all duration-300 group-hover/link:w-full" />
          </span>

          {/* Arrow icon with animated circle */}
          <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-ds-primary/30 transition-all duration-300 group-hover/link:border-ds-primary group-hover/link:bg-ds-primary">
            <ArrowUpRight
              size={13}
              className="text-ds-primary transition-all duration-300 group-hover/link:-translate-y-3 group-hover/link:translate-x-3 group-hover/link:text-white"
            />
            <ArrowUpRight
              size={13}
              className="absolute translate-x-[-200%] translate-y-[200%] text-white transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:translate-y-0"
            />
          </span>
        </Link>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-ds-primary via-ds-primary/60 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
    </article>
  );
});

export default BlogCard;
