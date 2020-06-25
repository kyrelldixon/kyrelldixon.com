import axios from "axios";
/**
 * Submit form data to a Serverless ConvertKit function
 *
 * @param {number} formId Convertkit Form ID
 * @param {string} email Subscriber email address
 * @param {object} options A set of optional fields accepted by the ConvertKit API
 *
 * @example
 *    addToConvertkit(289382, 'name@email.com') Subscribe to a form with just email
 *    addToConvertkit(289382, 'name@email.com', { firstName: 'name' }) Subscribe to a form with name and email
 *    addToConvertkit(289382, 'name@email.com', { firstName: 'name', tags: [1234, 2348], fields: {last_name: "ross", age: 25} }) Subscribe to a form with all params filled
 */
export default function addToConvertkit(formId, email, options) {
  const url = `/api/convertkit`;
  const { firstName, fields, tags } = options;

  // optionally add keys if they are found
  const body = {
    email,
    formId,
    ...(firstName && { first_name: firstName }),
    ...(fields && { fields }),
    ...(tags && { tags }),
  };

  return axios.post(url, body);
}
