'use client';

import { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import type { Movie } from '../data/movies';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const shiftRight = () => {
    rowRef.current?.scrollBy({ left: 480, behavior: 'smooth' });
  };

  const shiftLeft = () => {
    rowRef.current?.scrollBy({ left: -480, behavior: 'smooth' });
  };

  const updateScrollState = () => {
    if (rowRef.current) {
      setCanScrollLeft(rowRef.current.scrollLeft > 0);
    }
  };

  return (
    <section className="mb-10 px-4 md:px-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white md:text-2xl">{title}</h2>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <button
            type="button"
            aria-label={`Show previous ${title} movies`}
            onClick={shiftLeft}
            className="absolute left-0 top-1/2 z-10 flex h-16 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-500/85 text-3xl text-white transition hover:bg-gray-400"
          >
            <span aria-hidden="true">‹</span>
          </button>
        )}
        <button
          type="button"
          aria-label={`Show more ${title} movies`}
          onClick={shiftRight}
          className="absolute right-0 top-1/2 z-10 flex h-16 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-500/85 text-3xl text-white transition hover:bg-gray-400"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div
          ref={rowRef}
          onScroll={updateScrollState}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
