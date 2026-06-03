import { Star } from "lucide-react";
import Image from "next/image";
import { Testimonial } from "../main/home/_data/testimonials";

const ClientReviewsCard = ({
  item,
  cardIndex,
}: {
  item: Testimonial;
  cardIndex: number;
}) => {
  return (
    <div
      className={`group ds-card rounded-[26px] p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl ${
        cardIndex === 0
          ? "motion-safe:hover:-rotate-2"
          : "motion-safe:hover:rotate-1"
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
            <Image
              src={item.image}
              alt={item.name}
              fill
              quality={75}
              sizes="56px"
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-ds-text">{item.name}</h3>

            <p className="text-xs text-ds-muted-foreground">{item.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-ds-primary/10 px-2.5 py-1">
          <span className="text-sm font-semibold text-ds-text">
            {item.rating}
          </span>

          <Star size={14} fill="currentColor" className="text-ds-primary" />
        </div>
      </div>

      <p className="text-sm leading-7 text-ds-muted-foreground">
        “The sourcing workflow became faster and more professional after using
        this platform. Highly recommended for apparel businesses.”
      </p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-ds-primary">
          {item.company}
        </p>
      </div>
    </div>
  );
};

export default ClientReviewsCard;
