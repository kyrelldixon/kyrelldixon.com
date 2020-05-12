import { useState } from "react";

import PageLayout from "../components/page-layout";
import reviews from "../data/reviews.json";
import { fontSizeFromText } from "../lib/utils";
import Icon from "../components/icon";

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
        <div className="flex justify-center mx-auto space-x-8 text-3xl">
          <button onClick={prevReview} disabled={currentReview === 0}>
            <Icon name="left-arrow" />
          </button>
          <button
            onClick={nextReview}
            disabled={currentReview === reviews.length - 1}
          >
            <Icon name="right-arrow" />
          </button>
        </div>
      </main>
    </PageLayout>
  );
}
