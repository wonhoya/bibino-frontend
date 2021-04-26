const distributeUserTag = (totalBody, totalAroma, totalSparkling) => {
  const tags = [];

  if (totalBody > 5) {
    tags.push("heavyLover");
  }

  if (totalBody < 5) {
    tags.push("like a Feather");
  }

  if (totalAroma > 5) {
    tags.push("niche");
  }

  if (totalAroma < 5) {
    tags.push("refresh");
  }

  if (totalSparkling > 5) {
    tags.push("toks");
  }

  if (totalSparkling < 5) {
    tags.push("tender");
  }

  return tags;
};

const distributeBeerTag = (totalBody, totalAroma, totalSparkling) => {
  const tags = [];

  if (totalBody > 5) {
    tags.push("mellow");
  }

  if (totalBody < 5) {
    tags.push("ligth");
  }

  if (totalAroma > 5) {
    tags.push("bittersweet");
  }

  if (totalAroma < 5) {
    tags.push("mild");
  }

  if (totalSparkling > 5) {
    tags.push("toks");
  }

  if (totalSparkling < 5) {
    tags.push("bland");
  }

  return tags;
};

export { distributeUserTag, distributeBeerTag };
