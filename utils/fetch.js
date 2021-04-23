const handleFetch = async (url, methodType, headers, payload) => {
  const fetchResult = await fetch(url, {
    method: methodType,
    headers: headers,
    body: JSON.stringify(payload),
  });

  return fetchResult;
};

export default handleFetch;
