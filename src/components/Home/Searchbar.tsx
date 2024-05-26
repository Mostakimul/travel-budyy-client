const Searchbar = () => {
  return (
    <section className="flex items-center justify-center py-2 my-2 rounded-md glass-bg">
      <div className="w-full max-w-3xl px-4">
        <input
          type="text"
          placeholder="Search travels..."
          className="input input-bordered input-info w-full h-16 text-lg rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Searchbar;

/**
 * Search Bar: Below the hero section, allowing users to search for trips by:
 * TODO: Destination
 * TODO: Travel dates
 * TODO: Travel type (e.g., adventure, leisure, business)
 */
