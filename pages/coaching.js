import PageLayout from "components/page-layout";

export default function CoachingPage() {
  return (
    <PageLayout>
      <main className="p-4 md:mx-auto">
        <section className="flex flex-col items-center max-w-4xl py-8 text-center md:mx-auto md:py-12">
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
            className="px-6 py-2 text-sm font-semibold bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            Schedule a Session
          </a>
        </section>
        <section className="py-8 md:py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-10 text-3xl font-extrabold leading-tight md:mb-6 md:text-5xl">
              What to expect
            </h2>
            <div className="space-y-6 leading-relaxed">
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
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-2 md:grid-rows-2">
            <div className="p-4 bg-blue-600 rounded-lg md:p-6 lg:p-8">
              <h3 className="mb-4 text-xl font-extrabold md:text-2xl">
                1. Understanding
              </h3>
              <p>
                I'll get to know you; your current situation, what your skills
                are and what you're struggling with right now. This will allow
                me to deliver specific actionable advice for your development.
              </p>
            </div>
            <div className="p-4 bg-blue-600 rounded-lg md:p-6 lg:p-8">
              <h3 className="mb-4 text-xl font-extrabold md:text-2xl">
                2. Direction
              </h3>
              <p>
                You'll get clear direction from me on what to do to improve your
                coding skills. I'll teach you exactly what has brought me
                success and provide resources for you to learn from.
              </p>
            </div>
            <div className="p-4 bg-blue-600 rounded-lg md:p-6 lg:p-8">
              <h3 className="mb-4 text-xl font-extrabold md:text-2xl">
                3. Support
              </h3>
              <p>
                As you progress on your journey, I will be there to support you
                every step of the way. No problem is too small or too large. You
                can be confident moving forward with me on your team.
              </p>
            </div>
            <div className="p-4 bg-blue-600 rounded-lg md:p-6 lg:p-8">
              <h3 className="mb-4 text-xl font-extrabold md:text-2xl">
                4. Success
              </h3>
              <p>
                You will be a better developer. You'll be further ahead faster
                by having the knowledge you need to build projects, work smarter
                and progress in your development career.
              </p>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight md:mb-6 md:text-5xl">
              What you can learn
            </h2>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight md:mb-6 md:text-5xl">
              Who this is for
            </h2>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight md:mb-6 md:text-5xl">
              What other people say
            </h2>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
