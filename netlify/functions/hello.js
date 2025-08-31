/**
 * A simple Netlify serverless function.
 * * To deploy this function, save the file as:
 * /netlify/functions/hello.js
 * * When deployed, it will be available at:
 * your-site-name.netlify.app/.netlify/functions/hello
 *
 * You can also pass a name as a query parameter, like:
 * your-site-name.netlify.app/.netlify/functions/hello?name=Astro
 */
const handler = async (event) => {
  try {
    // Get the name from the query string parameters, defaulting to "World"
    const name = event.queryStringParameters.name || "World";

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello, ${name}!`,
        timestamp: new Date().toISOString(),
      }),
    };
  } catch (error) {
    // Handle any potential errors during the function execution
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred.",
        error: error.toString(),
      }),
    };
  }
};

exports.handler = handler;
