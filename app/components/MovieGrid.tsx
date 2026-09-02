// interface MovieCardProps {
//   title: string;
//   image: string;
//   year: string;
//   rating?: string;
// }

// export default function MovieCard({ title, image, year, rating }: MovieCardProps) {
//   return (
//     <div className="group relative overflow-hidden rounded-lg bg-gray-800 transition-transform hover:scale-105">
//       <img
//         src={image}
//         alt={title}
//         className="h-64 w-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//         <div className="absolute bottom-0 p-4 text-white">
//           <h3 className="text-lg font-semibold">{title}</h3>
//           <div className="flex items-center gap-2 text-sm">
//             <span>{year}</span>
//             {rating && <span>⭐ {rating}</span>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }