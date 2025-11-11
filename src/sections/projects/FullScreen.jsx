export function FullScreenImages({ images, name, scrollRef }) {
  const handleFullscreen = (event) => {
    const img = event.target;
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) {
      img.webkitRequestFullscreen(); // Safari support
    }
  };

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scroll-smooth sm:min-h-60 md:min-h-78 scrollbar-hide"
    >
      {images.map((image, index) => {
        return (
          <img
            key={image}
            className="h-45 sm:h-55 md:h-74 w-auto object-contain rounded-lg shrink-0 cursor-pointer"
            src={image}
            onClick={handleFullscreen}
            alt={`${name} - ${index + 1}`}
          />
        );
      })}
    </div>
  );
}
