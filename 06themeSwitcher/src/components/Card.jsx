const Card = () => {
  return (
    <div className="flex flex-col mt-2 p-6 bg-gray-100 dark:bg-gray-950/70   rounded-md">
      <div className="">
        <img
          className="w-full object-cover rounded-md mb-6"
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ff2e824-a8e5-482a-aedf-8a7604c0a401/pegasus-40-eliud-kipchoge-road-running-shoes-cRbXTK.png"
          alt="nike-pegasus-40"
        />
      </div>
      <div className="ml-4">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Nike Pegasus 40 "Eliud Kipchoge".
        </h1>
        <div className="flex justify-between mt-2">
          <h2 className="text-2xl font-semibold text-teal-600 dark:text-white">
            $140
          </h2>
          <button className="ml-4 px-3 py-2 text-white bg-teal-700 rounded-md transition-all duration-300 hover:bg-teal-900 dark:bg-gray-800 dark:hover:bg-teal-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
