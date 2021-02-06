const CommonReducer = (...reducers) => (storeData, action) => {
  for (let i = 0; i < reducers.length; i += 1) {
    const newStore = reducers[i](storeData, action);
    if (newStore !== storeData) return newStore;
  }

  return storeData;
};

export default CommonReducer;
