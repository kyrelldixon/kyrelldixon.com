import { useState } from "react";

import PageLayout from "components/page-layout";
import Icon from "components/icon";
import allReviews from "data/reviews.json";

const allSkills = [
  { icon: "node", name: "NodeJs" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "css", name: "CSS" },
  { icon: "html", name: "HTML" },
  { icon: "react", name: "React" },
  { icon: "nextjs", name: "NextJs" },
  { icon: "vue", name: "Vue" },
  { icon: "tailwind", name: "TailwindCSS" },
  { icon: "git", name: "Git" },
  { icon: "aws", name: "AWS" },
  { icon: "graphql", name: "GraphQL" },
  { icon: "postgres", name: "PostgreSQL" },
  { icon: "python", name: "Python" },
  { icon: "java", name: "Java" },
];

export default function CoachingPage() {
  const [reviews] = useState(allReviews);
  const [skills] = useState(allSkills);
  const [visible, setVisible] = useState(5);

  const loadMore = () => {
    setVisible((v) => (v + 5 < reviews.length ? v + 5 : reviews.length));
  };

  return (
    <PageLayout>
      <main className="p-4 md:mx-auto">
        <section className="flex flex-col items-center max-w-4xl py-12 text-center md:mx-auto md:py-12">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            I'm here to help
          </h1>
          <p className="max-w-lg mb-10 text-lg font-semibold md:text-xl">
            Stuck on a project? Want to improve your coding skill? Looking for
            guidance? Let's have a quick chat to see if we're a good fit.
          </p>
          <a
            href="https://app.acuityscheduling.com/schedule.php?owner=19120506#selectedTimes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold bg-green-400 rounded-lg hover:bg-green-500"
          >
            <span className="mr-2">Book Now</span>{" "}
            <span className="text-lg">
              <Icon name="external-link" />
            </span>
          </a>
        </section>
        <section className="py-16 md:py-20">
          <div className="max-w-xl mx-auto">
            <h2 className="mb-10 text-2xl font-extrabold leading-tight md:mb-10 md:text-4xl">
              What to expect
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                On a one-to-one basis I take a flexible teaching approach to
                teaching coding concepts on{" "}
                <span className="font-bold">live video calls</span>.
              </p>
              <p>
                Students also get access to my purpose made Slack community for
                developers, adding another layer of valuable support{" "}
                <span className="font-bold">completely for free</span>.
              </p>
              <p>
                While books and courses offer generic insight, I offer a service
                tailor made for you.
              </p>
              <p>
                Here's a breakdown of the process we'll follow together on the
                programme:
              </p>
            </div>
          </div>
          <div className="grid max-w-3xl grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-2 md:grid-rows-2">
            <div className="p-4 bg-gray-900 rounded-lg shadow md:p-6 lg:p-8">
              <h3 className="mb-4 text-lg font-extrabold md:text-2xl">
                1. Understanding
              </h3>
              <p>
                I'll get to know you; your current situation, what your skills
                are and what you're struggling with right now. This will allow
                me to deliver specific actionable advice for your development.
              </p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg shadow md:p-6 lg:p-8">
              <h3 className="mb-4 text-lg font-extrabold md:text-2xl">
                2. Direction
              </h3>
              <p>
                You'll get clear direction from me on what to do to improve your
                coding skills. I'll teach you exactly what has brought me
                success and provide resources for you to learn from.
              </p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg shadow md:p-6 lg:p-8">
              <h3 className="mb-4 text-xl font-extrabold md:text-2xl">
                3. Support
              </h3>
              <p>
                As you progress on your journey, I will be there to support you
                every step of the way. No problem is too small or too large. You
                can be confident moving forward with me on your team.
              </p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg shadow md:p-6 lg:p-8">
              <h3 className="mb-4 text-xl font-extrabold md:text-2xl">
                4. Success
              </h3>
              <p>
                You will be a better developer. You'll be further ahead faster
                by having the knowledge you need to build projects, work smarter
                and progress in your development career.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <a
                href="https://app.acuityscheduling.com/schedule.php?owner=19120506#selectedTimes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold bg-green-400 rounded-lg hover:bg-green-500"
              >
                <span className="mr-2">Book Now</span>{" "}
                <span className="text-lg">
                  <Icon name="external-link" />
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="max-w-xl mx-auto">
            <h2 className="mb-10 text-2xl font-extrabold leading-tight md:mb-10 md:text-4xl">
              What you will learn
            </h2>
            <p className="mb-8">
              As a full-stack developer, I've gained experience in a variety of
              languages, tools, and frameworks. Here are just a few things I can
              help with:
            </p>
            <SkillsList skills={skills} />
            <p className="mb-8">
              If there is something missing that you want help with, feel free
              to reach out for more info.
            </p>
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=19120506#selectedTimes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold bg-green-400 rounded-lg hover:bg-green-500"
            >
              <span className="mr-2">Book Now</span>{" "}
              <span className="text-lg">
                <Icon name="external-link" />
              </span>
            </a>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="max-w-xl mx-auto">
            <h2 className="mb-10 text-2xl font-extrabold leading-tight md:mb-10 md:text-4xl">
              Who this is for
            </h2>
            <div className="leading-relaxed">
              <p className="mb-8">
                I have worked with college students, bootcamp students,
                designers, entrepreneurs, and developers of all skill levels.
                You should reach out if:
              </p>
              <ul className="mb-8 space-y-3">
                <li>
                  <span className="inline-block pb-1 mr-2 text-lg text-green-400">
                    <Icon name="check-circle" />
                  </span>
                  You are enrolled in a Web Development bootcamp and feel like
                  you are getting behind
                </li>
                <li>
                  <span className="inline-block pb-1 mr-2 text-lg text-green-400">
                    <Icon name="check-circle" />
                  </span>
                  You are taking an online programming class and struggling
                  through assignments alone
                </li>
                <li>
                  <span className="inline-block mr-2 text-lg text-green-400">
                    <Icon name="check-circle" />
                  </span>
                  You are changing careers and trying to pick up some coding
                  skills
                </li>
                <li>
                  <span className="inline-block pb-1 mr-2 text-lg text-green-400">
                    <Icon name="check-circle" />
                  </span>
                  You want to improve your coding skills in a certain area to
                  progress in your career
                </li>
                <li>
                  <span className="inline-block pb-1 mr-2 text-lg text-green-400">
                    <Icon name="check-circle" />
                  </span>
                  You have an idea of an app or website and would like some tips
                  on how to make it
                </li>
                <li>
                  <span className="inline-block pb-1 mr-2 text-lg text-green-400">
                    <Icon name="check-circle" />
                  </span>
                  You want a mentor that you can ask questions and get support
                  from
                </li>
                <li>
                  <span className="inline-block pb-1 mr-2 text-lg text-green-400">
                    <Icon name="check-circle" />
                  </span>
                  You are stuck on a problem and just need some help
                </li>
              </ul>
            </div>
            <p className="mb-8">
              If at least one of these sounds like you, we will be a great fit!
            </p>
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=19120506#selectedTimes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold bg-green-400 rounded-lg hover:bg-green-500"
            >
              <span className="mr-2">Book Now</span>{" "}
              <span className="text-lg">
                <Icon name="external-link" />
              </span>
            </a>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="max-w-xl mx-auto">
            <h2 className="mb-10 text-2xl font-extrabold leading-tight md:mb-10 md:text-4xl">
              What other people say
            </h2>
            <div>
              <p className="mb-8">
                I got my start teaching on Wyzant where I've helped hundreds of
                students complete projects and improve their coding skills.
                Here's what some of them have to say:
              </p>
              <div className="flex flex-col items-center mb-8 space-y-6 md:space-y-8">
                <Reviews reviews={reviews.slice(0, visible)} />
                {visible < reviews.length && (
                  <button
                    className="font-semibold rounded-lg opacity-75 hover:opacity-100"
                    onClick={loadMore}
                  >
                    Load More
                  </button>
                )}
              </div>
              <a
                href="https://app.acuityscheduling.com/schedule.php?owner=19120506#selectedTimes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold bg-green-400 rounded-lg hover:bg-green-500"
              >
                <span className="mr-2">Book Now</span>{" "}
                <span className="text-lg">
                  <Icon name="external-link" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

function SkillsList({ skills }) {
  return (
    <ul className="flex flex-wrap items-center justify-center mb-8">
      {skills.map(({ icon, name }) => (
        <li
          key={icon}
          className="flex flex-col items-center justify-center w-24 h-24 m-2 bg-gray-900 rounded-lg shadow"
        >
          <span className="inline-block mb-2 text-2xl">
            <Icon name={icon} />
          </span>
          <span className="inline-block text-xs font-bold">{name}</span>
        </li>
      ))}
    </ul>
  );
}

function Reviews({ reviews }) {
  return reviews.map((review, i) => (
    <blockquote
      className="p-4 bg-gray-900 rounded-lg shadow md:p-8"
      key={`${review.from}-${i}`}
    >
      <h3 className="text-xl font-extrabold">{review.title}</h3>
      <p className="my-6">{review.quote}</p>
      <cite className="font-bold">{review.from}</cite>
    </blockquote>
  ));
}
