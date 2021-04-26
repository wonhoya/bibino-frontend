const distributeUserTag = (characterAverage, reviewCount) => {
  const { averageBody, averageAroma, averageSparkling } = characterAverage;
  const tags = [];

  if (reviewCount === 0) {
    return ["newbie", "beerlover", "welcome"];
  }

  if (averageBody > 5) {
    tags.push("heavyLover");
  }

  if (averageBody < 5) {
    tags.push("like a Feather");
  }

  if (averageAroma > 5) {
    tags.push("niche");
  }

  if (averageAroma < 5) {
    tags.push("refresh");
  }

  if (averageSparkling > 5) {
    tags.push("toks");
  }

  if (averageSparkling < 5) {
    tags.push("tender");
  }

  return tags;
};

const distributeBeerTag = (averageBody, averageAroma, averageSparkling) => {
  const tags = [];

  if (averageBody > 5) {
    tags.push("mellow");
  }

  if (averageBody < 5) {
    tags.push("light");
  }

  if (averageAroma > 5) {
    tags.push("bittersweet");
  }

  if (averageAroma < 5) {
    tags.push("mild");
  }

  if (averageSparkling > 5) {
    tags.push("toks");
  }

  if (averageSparkling < 5) {
    tags.push("bland");
  }

  return tags;
};

export { distributeUserTag, distributeBeerTag };
