import { API_URL } from "@env";

async function callGoogleVisionAsync(image) {
  console.log(API_URL);
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          { type: "LABEL_DETECTION", maxResults: 10 },
          { type: "TEXT_DETECTION", maxResults: 5 },
          { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
          { type: "WEB_DETECTION", maxResults: 5 },
        ],
      },
    ],
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const parsed = await response.json();

  console.log("Result:", parsed);

  return parsed.responses[0].labelAnnotations[0].description;
}

export default callGoogleVisionAsync;
