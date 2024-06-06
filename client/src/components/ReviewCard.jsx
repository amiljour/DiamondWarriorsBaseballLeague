

// eslint-disable-next-line react/prop-types
const ReviewCard = ({ name, rating, review }) => {
  // Generate stars based on the rating
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // filled star
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>); // empty star
      }
    }
    return stars;
  };

  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center">
        <div className="text-lg font-semibold text-gray-900 dark:text-white">{name}</div>
      </div>
      <div className="flex items-center text-3xl">
        {renderStars()}
      </div>
      <p className="text-gray-600 dark:text-gray-400">{review}</p>
    </div>
  );
};

export default ReviewCard;