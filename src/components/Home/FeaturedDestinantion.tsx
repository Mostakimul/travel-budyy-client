const FeaturedDestinantion = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Destinations</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-white shadow-lg">
            <figure>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Destination 1"
                className="rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Destination 1</h3>
              <p>Description of Destination 1.</p>
            </div>
          </div>
          <div className="card bg-white shadow-lg">
            <figure>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Destination 2"
                className="rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Destination 2</h3>
              <p>Description of Destination 2.</p>
            </div>
          </div>
          <div className="card bg-white shadow-lg">
            <figure>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Destination 3"
                className="rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Destination 3</h3>
              <p>Description of Destination 3.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinantion;
