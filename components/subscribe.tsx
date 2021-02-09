import { useState } from "react";
import Icon from "./icon";
import addToConvertKit from "lib/convertkit";

export default function Subscribe() {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    const { email, firstName } = fields;
    const formId = 1253732;

    addToConvertKit(formId, email, { firstName })
      .then(() => {
        setSubscribed(true);
        setFields({ firstName: "", email: "" });

        setTimeout(() => {
          setSubscribed(false);
        }, 6000);
      })
      .catch((error) => {
        if (!error.message) {
          // If there is a timeout error, then there is no error message
          // and the error is likely due to content blocking.
          setError(
            "Looks like your browser is blocking this. Try to disable any tracker-blocking feature and resubmit."
          );
          return;
        }
        setError(error.response.data.error);
      })
      .finally(() => setLoading(false));
  }

  return (
    <form
      className="p-4 mx-auto bg-gray-200 rounded-md md:p-8"
      onSubmit={handleSubmit}
    >
      <header className="pb-4">
        <h2 className="mb-2 text-xl font-bold leading-tight md:text-2xl">
          Follow along
        </h2>
        <p className="text-base">
          Drop your name and email below to get updates when I post.
        </p>
      </header>
      <section className="flex flex-col flex-wrap text-sm">
        <div className="flex flex-col mb-4 space-y-2 md:flex-row md:space-y-0">
          <input
            className="flex-1 px-3 py-2 text-sm text-black rounded-lg md:mr-2 md:flex-auto focus:border focus:border-blue-500"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={fields.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="flex-1 px-3 py-2 text-sm text-black rounded-lg md:flex-auto focus:border focus:border-blue-500"
            type="email"
            name="email"
            placeholder="Email"
            value={fields.email}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className={`inline-flex justify-center items-center w-full px-4 py-2 font-semibold text-white transition-colors duration-100 ease-in-out ${
            subscribed ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
          } rounded-lg shadow-xl md:w-auto disabled:cursor-not-allowed`}
          type="submit"
          disabled={subscribed || loading}
        >
          {subscribed ? (
            <>
              <span className="mr-2">
                <Icon name="check-circle" />
              </span>
              <span>Subscribed!</span>
            </>
          ) : loading ? (
            "Submitting"
          ) : (
            "Subscribe"
          )}
        </button>
        {error && (
          <div className="mt-2 text-center">
            <p className="text-xs text-red-500">{error}</p>
          </div>
        )}
      </section>
      <p className="mt-4 text-xs text-center">
        You will never receive spam. Unsubscribe at any time.
      </p>
    </form>
  );
}
