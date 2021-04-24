const generateHeaderOption = (idToken) => {
  return {
    Authorization: `Bearer ${idToken}`,
  };
};

export default generateHeaderOption;
