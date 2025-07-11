import Image from 'next/image';

function Cards() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">Explore Pakistan</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <div className="bg-white shadow-md rounded p-4">
            <Image src="/naran.jpg" alt="Naran" width={300} height={200} />
            <h3 className="text-2xl font-bold">Naran</h3>
            <p>A beautiful valley in the Kaghan Valley.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <div className="bg-white shadow-md rounded p-4">
            <Image src="/hunza.jpg" alt="Hunza" width={300} height={200} />
            <h3 className="text-2xl font-bold">Hunza</h3>
            <p>A breathtakingly beautiful valley in Gilgit-Baltistan.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <div className="bg-white shadow-md rounded p-4">
            <Image src="/lahore.jpg" alt="Lahore" width={300} height={200} />
            <h3 className="text-2xl font-bold">Lahore</h3>
            <p>The cultural hub of Pakistan, known for its rich history and food.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;