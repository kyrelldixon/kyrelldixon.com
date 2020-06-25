import axios from "axios";

export default async (req, res) => {
  const { email, formId, first_name, tags } = req.body;

  if (!email) {
    return res.status(422).json({ error: "Email is required" });
  }

  if (!formId) {
    return res.status(400).json({
      error: `There was an error subscribing to the newsletter. Shoot me an email at [kyrell@kyrelldixon.com] and I'll add you to the list.`,
    });
  }

  try {
    const apiKey = process.env.CONVERTKIT_API_KEY;

    const URL = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
    console.log(`making another request to ${URL}`);

    const body = {
      email,
      ...(first_name && { first_name }),
      ...(tags && { tags }),
      api_key: apiKey,
    };

    const { data, status } = await axios.post(URL, body);

    if (status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot me an email at [kyrell@kyrelldixon.com] and I'll add you to the list.`,
      });
    }

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({
      error: error.response.data.message || error.message || error.toString(),
    });
  }
};
