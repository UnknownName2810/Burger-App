const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },

  menu: { salad: 10, cheese: 20, beef: 55 },

  total: 85,
};

const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "": {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BurgerReducer;