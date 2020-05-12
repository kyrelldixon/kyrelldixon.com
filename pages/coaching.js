import { useState } from "react";

import PageLayout from "../components/page-layout";
import reviews from "../data/reviews.json";
import { fontSizeFromText } from "../lib/utils";

export default function CoachingPage() {
  const [currentReview, setCurrentReview] = useState(0);
  const nextReview = () => setCurrentReview(currentReview + 1);
  const prevReview = () => setCurrentReview(currentReview - 1);

  const review = reviews[currentReview];
  const fontSize = fontSizeFromText(review.quote);

  return (
    <PageLayout>
      <main className="px-4">
        <blockquote className="max-w-lg mx-auto mt-24 text-sm h-88 md:text-base">
          <p className="leading-tight" style={{ fontSize }}>
            {review.quote}
          </p>
          <cite>- {review.from}</cite>
        </blockquote>
        <div className="flex justify-center mx-auto space-x-8">
          <button onClick={prevReview} disabled={currentReview === 0}>
            Previous
          </button>
          <button
            onClick={nextReview}
            disabled={currentReview === reviews.length - 1}
          >
            Next
          </button>
        </div>
      </main>
    </PageLayout>
  );
}
