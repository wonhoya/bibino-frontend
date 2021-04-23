const getHeadersIncludedIdToken = (idToken) => {
  return {
    Authorization: `Bearer ${idToken}`,
  };
};

export default getHeadersIncludedIdToken;
