import React from "react";
import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  name: string;
  country: string;
  imageSrc: StaticImageData;
  feedback: string;
  rating: number;
  flagSrc: string;
  videoSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  country,
  imageSrc,
  feedback,
  rating,
  flagSrc,
  videoSrc,
}) => {
  return (
    <div className="border-2 bg-gradient-to-b from-[#d7c8fd] to-transparent w-full max-w-sm dark:bg-neutral-800 p-4 rounded-lg shadow-2xl relative">
      <div className="relative w-full h-48">
        {videoSrc ? (
          <iframe
            className="w-full h-full rounded-lg"
            src={videoSrc}
            title={`${name}'s testimonial`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            src={imageSrc}
            alt={name}
            className="w-full h-full rounded-lg object-cover"
            width={380}
            height={260}
          />
        )}
        {videoSrc && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-2 rounded-full">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 22V2l18 10-18 10z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-white text-black p-1 rounded">{name}</span>
      </div>
      <div className="absolute bottom-20 flex justify-center rounded-sm items-center bg-white h-6 w-16 right-4">
        <Image
          src={flagSrc}
          alt={country}
          width={32}
          height={32}
          className="rounded-sm"
        />
      </div>
      <p className="mt-4 text-sm text-neutral-500 flex justify-center dark:text-neutral-300">
        {feedback}
      </p>
      <div className="flex justify-center mt-2">
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927C9.233 2.37 9.767 2.37 9.951 2.927L12 9H18C18.347 9 18.663 9.216 18.77 9.553C18.878 9.89 18.736 10.244 18.463 10.414L14 13L15.518 19.332C15.644 19.875 15.123 20.284 14.621 20.075L10 18L5.379 20.075C4.877 20.284 4.356 19.875 4.482 19.332L6 13L1.537 10.414C1.264 10.244 1.122 9.89 1.23 9.553C1.337 9.216 1.653 9 2 9H8L10.049 2.927Z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
