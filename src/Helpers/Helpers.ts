
export const getUniqueObjects = (array:any[]) => {
    return array.reduce((acc, currentItem) => acc.concat(acc.find((newItem: { id: string; }) => newItem.id === currentItem.id) ? [] : [currentItem]), []);
  }