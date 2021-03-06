const formatItems = (items, columns, phrase) => {
  const copyItems = items.slice();
  const fullRowsNumber = Math.floor(copyItems.length / columns);
  let lastRowElementsNumber = copyItems.length - fullRowsNumber * columns;

  while (lastRowElementsNumber !== columns && lastRowElementsNumber !== 0) {
    copyItems.push({
      _id: Date.now(),
      empty: true,
    });
    lastRowElementsNumber = lastRowElementsNumber + 1;
  }

  return copyItems;
};

export default formatItems;
