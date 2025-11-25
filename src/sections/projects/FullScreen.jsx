export function FullScreenImages({ images, name, lightbox }) {
  return (
    <>
      <div className="flex shrink-0 gap-2 overflow-x-auto scroll-smooth pb-1 sm:min-h-60 md:min-h-78 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
        {images.map((image, index) => {
          return (
            <img
              key={image}
              className="max-w-[95%] shrink-0 cursor-pointer rounded-lg object-contain sm:h-58 md:h-76"
              src={image}
              loading="lazy"
              alt={`${name} - ${index + 1}`}
              onClick={() => lightbox(index, images)}
            />
          );
        })}
      </div>
    </>
  );
}
