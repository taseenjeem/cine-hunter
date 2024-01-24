import starIcon from "../assets/star.svg";
import { movies } from "../data/movies";
import { getImageURL } from "../utils/cine-utility";

const MovieList = () => {
  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <figure
              key={movie.id}
              className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
            >
              <img
                className="w-full object-cover"
                src={getImageURL(movie.cover)}
                alt={movie.title}
              />
              <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                <div className="flex items-center space-x-1 mb-5">
                  <img src={starIcon} width={14} height={14} alt="" />
                  <img src={starIcon} width={14} height={14} alt="" />
                  <img src={starIcon} width={14} height={14} alt="" />
                  <img src={starIcon} width={14} height={14} alt="" />
                  <img src={starIcon} width={14} height={14} alt="" />
                </div>
                <a
                  className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                  href="#"
                >
                  <img src="./assets/tag.svg" alt="" />
                  <span>${movie.price} | Add to Cart</span>
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;