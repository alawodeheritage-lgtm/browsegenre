import type { Movie } from '../data/movies';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="group relative min-w-[180px] flex-1 overflow-hidden rounded-lg bg-[#141414] shadow-lg transition duration-300 hover:z-10 hover:scale-105 md:min-w-[220px]">
      <div className="overflow-hidden rounded-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-[240px] w-full object-cover md:h-[300px]"
        />
      </div>

      <p className="truncate px-1 pt-2 text-sm font-medium text-white md:text-base">
        {movie.title}
      </p>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 p-3 text-white opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-gray-200 md:text-xs">
          <span>{movie.year}</span>
          <span className="h-1 w-1 rounded-full bg-gray-400" />
          <span>{movie.duration}</span>
          <span className="h-1 w-1 rounded-full bg-gray-400" />
          <span>{movie.genre}</span>
        </div>

        <h3 className="mb-2 text-base font-semibold md:text-lg">{movie.title}</h3>

        <div className="flex items-center justify-between text-[10px] text-gray-200 md:text-xs">
          <span>⭐ {movie.rating}</span>
          <button className="rounded-full border border-white/40 px-2 py-1 font-medium text-white transition hover:bg-white hover:text-black">
            Play
          </button>
        </div>
      </div>
    </article>
  );
}