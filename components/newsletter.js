import { useState } from "react";

export default function Newsletter() {
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
    <form className="max-w-sm mx-auto md:max-w-lg " onSubmit={handleSubmit}>
      <header className="pb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold leading-tight md:text-4xl">
          Sign up for the newsletter
        </h2>
        <p className="text-lg md:text-xl">
          Join the newsletter and get resources, curated content, and project
          inspiration delivered straight to your inbox.{" "}
        </p>
      </header>
      <section className="flex flex-col flex-wrap text-sm">
        <div className="flex flex-col mb-2 space-y-2 md:flex-row md:space-y-0">
          <input
            className="flex-1 px-4 py-2 text-black placeholder-black bg-gray-400 rounded-lg md:mr-2 md:flex-auto focus:border focus:border-blue-500 focus:bg-gray-300"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={fields.firstName}
            onChange={handleChange}
          />
          <input
            className="flex-1 px-4 py-2 text-black placeholder-black bg-gray-400 rounded-lg md:flex-auto focus:border focus:border-blue-500 focus:bg-gray-300"
            type="email"
            name="email"
            placeholder="Email"
            value={fields.email}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full px-4 py-2 font-semibold text-white transition-colors duration-100 ease-in-out bg-blue-500 rounded-lg shadow-xl md:w-auto hover:bg-blue-600"
          type="submit"
        >
          Subscribe
        </button>
      </section>
      <p className="mt-3 text-xs text-center">
        You will never receive spam. Unsubscribe at any time.
      </p>
    </form>
  );
}
