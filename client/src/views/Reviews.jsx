import ReviewCard from "../components/ReviewCard"

const Reviews = () => {
  const reviews = [
    { name: "John Doe", rating: 5, review: "Amazing program! My child has learned so much and loves going to practice every week." },
    { name: "Jane Smith", rating: 4, review: "Great experience overall. The coaches are very supportive and the environment is excellent." },
    { name: "Alex Johnson", rating: 3, review: "Good program, but there's room for improvement in the scheduling of the events." },
    { name: "Emily Davis", rating: 5, review: "Exceptional coaching and well-organized events. My son looks forward to every practice and game!" },
    { name: "Michael Brown", rating: 4, review: "The Diamond Warriors League has been fantastic for my daughter. The training is top-notch and she has made great friends." },
    { name: "Jessica Wilson", rating: 4, review: "Very pleased with the program. The only issue is that some of the practice sessions run a bit late." },
    { name: "Daniel Martinez", rating: 5, review: "Outstanding program! The coaches are highly experienced and genuinely care about the kids' development." },
    { name: "Sarah Thompson", rating: 3, review: "The league is good, but I wish there were more activities for younger kids who are just starting out." },
    { name: "Chris Lee", rating: 4, review: "Solid program with a focus on fundamentals. My child has improved significantly in both skills and confidence." }
  ];

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-10 text-center text-base-200">Reviews</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-24">
          {reviews.map((review, index) => (
            <ReviewCard key={index} name={review.name} rating={review.rating} review={review.review} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews