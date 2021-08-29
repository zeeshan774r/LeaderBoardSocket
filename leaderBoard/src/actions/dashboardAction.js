const dashBoardActions = {
  increaseScore: (data) => {
    return (dispatch) => {
      dispatch({
        type: 'SET_INCREASE_SCORE',
        payload: data,
      })
    }
  },
  decreaseScore: (data) => {
    return (dispatch) => {
      dispatch({
        type: 'SET_DECREASE_SCORE',
        payload: data,
      })
    }
  },
}

export default dashBoardActions
