let windWidth = window.innerWidth;

const INITIAL_STATE = {
  screen: windWidth,
};

const screenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default screenReducer;
