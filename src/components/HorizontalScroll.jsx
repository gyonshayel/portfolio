import { Button } from "./ui/button";

export function HorizontalScroll({ children, scrollRef }) {
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth * 0.5;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="group relative">
      {/* Left scroll button */}
      <Button
        aria-label="Scroll left"
        onClick={() => scroll("left")}
        variant="ghost"
        size="icon"
        className="pointer-events-none absolute top-1/2 -left-1.5 -translate-y-1/2 rounded-full border-none opacity-0 ring-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4 rounded-md bg-(--color-bottom)/50 sm:size-5"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      {/* Scroll container */}
      {children}

      {/* Right scroll button */}
      <Button
        aria-label="Scroll right"
        onClick={() => scroll("right")}
        variant="ghost"
        size="icon"
        className="pointer-events-none absolute top-1/2 right-1 z-50 flex -translate-y-1/2 items-center justify-end rounded-full border-none opacity-0 ring-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4 rounded-md bg-(--color-bottom)/50 sm:size-5"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </div>
  );
}
