
const MenuItems = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="w-full max-w-md px-6 py-4 mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col justify-between h-[200px]">
      {/* Image Section */}
      <div className="flex justify-center -mt-12 md:justify-end">
        <img
          className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
          alt="Menu Item"
          src={image}
        />
      </div>

      {/* Item Name */}
      <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white text-center">
        {name}
      </h2>

      {/* Recipe Description */}
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 font-[roboto] text-center">
        {recipe}
      </p>

      {/* Price Section */}
      <div className="flex justify-end mt-auto">
        <span className="text-lg font-semibold text-blue-600 dark:text-blue-300">
          {price}/-
        </span>
      </div>
    </div>
  );
};

export default MenuItems;

