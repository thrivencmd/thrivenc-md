import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export default function TestimonialCard({ quote, author, location, rating = 5 }) {
  return (
    <div className="card overflow-hidden h-full flex flex-col">
      <div className="p-6 sm:p-8 flex-grow">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            i < rating ? (
              <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
            ) : (
              <StarIconOutline key={i} className="h-5 w-5 text-gray-400" />
            )
          ))}
        </div>
        <blockquote className="text-gray-300 italic mb-6">"{quote}"</blockquote>
        <div className="mt-auto">
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  );
}