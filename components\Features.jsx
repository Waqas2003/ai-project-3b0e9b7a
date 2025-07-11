function Features() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">Experience Pakistan</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <i className="fas fa-map-marker-alt text-4xl text-orange-500" />
          <h3 className="text-2xl font-bold">Natural Beauty</h3>
          <p>From the majestic mountains to the serene lakes, Pakistan is home to breathtaking natural beauty.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <i className="fas fa-utensils text-4xl text-orange-500" />
          <h3 className="text-2xl font-bold">Cuisine</h3>
          <p>Indulge in the flavors of Pakistan, from spicy curries to sweet desserts.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <i className="fas fa-mosque text-4xl text-orange-500" />
          <h3 className="text-2xl font-bold">Cultural Heritage</h3>
          <p>Explore the rich cultural heritage of Pakistan, from ancient ruins to modern cities.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;