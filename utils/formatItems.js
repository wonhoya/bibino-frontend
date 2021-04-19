const formatItems = (items, columns) => {
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
  return copyItems;
};

export default formatItems;
