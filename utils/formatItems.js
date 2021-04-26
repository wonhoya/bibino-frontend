const formatItems = (items, columns, phrase) => {
  const copyItems = items.slice();
  const fullRowsNumber = Math.floor(copyItems.length / columns);
  let lastRowElementsNumber = copyItems.length - fullRowsNumber * columns;

  while (lastRowElementsNumber !== columns && lastRowElementsNumber !== 0) {
    copyItems.push({
      id: `blank-${lastRowElementsNumber}`,
      empty: true,
    });
    lastRowElementsNumber = lastRowElementsNumber + 1;
  }

  if (!copyItems.length) {
    return [{ id: "information-phrase", phrase }];
  }
  return copyItems;
};

export default formatItems;
