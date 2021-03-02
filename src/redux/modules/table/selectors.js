export const filterData = (state, searchValue) => {
  return state.items.filter((item) => {
    for (let field in item) {
      if (typeof(item.field) === 'object') {
        for ( let subfield in item[field]) {
          if (item[field][subfield].toString().indexOf(searchValue) !== -1) {
            return true;
          }
        }
      } else {
        if (item[field].toString().indexOf(searchValue) !== -1 ) {
          return true;
        }
      }
    }
    return false;
  });
};

export const getData = state => state.items;