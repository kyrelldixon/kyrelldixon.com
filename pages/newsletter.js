import { useState } from "react";
import PageLayout from "../components/page-layout";

export default function NewsletterPage() {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
  });

  function handleChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(fields);
  }

  return (
    <PageLayout>
      <main className="px-4">
        <h1 className="mt-24 text-4xl font-semibold text-center">Newsletter</h1>
        <form className="max-w-sm mx-auto mt-12" onSubmit={handleSubmit}>
          <section className="flex flex-col space-y-2">
            <input
              className="flex-1 px-4 py-2 border rounded-sm"
              type="text"
              name="firstName"
              placeholder="Kai"
              value={fields.firstName}
              onChange={handleChange}
            />
            <input
              className="flex-1 px-4 py-2 border rounded-sm"
              type="email"
              name="email"
              placeholder="kyrell@kyrelldixon.com"
              value={fields.email}
              onChange={handleChange}
            />
            <button
              className="w-full px-4 py-2 text-white bg-black rounded-sm"
              type="submit"
            >
              Subscribe
            </button>
          </section>
          <p className="mt-2 text-xs text-center">
            You will never receive spam. Unsubscribe at any time.
          </p>
        </form>
      </main>
    </PageLayout>
  );
}
