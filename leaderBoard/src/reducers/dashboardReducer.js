const dashBoardReducerDefaultState = {
  leaderBoardList: [
    { id: '1', name: 'Leader1', score: 70 },
    { id: '2', name: 'Leader2', score: 50 },
    { id: '3', name: 'Leader3', score: 100 },
    { id: '4', name: 'Leader4', score: 90 },
    { id: '5', name: 'Leader5', score: 80 },
    { id: '6', name: 'Leader6', score: 60 },
  ],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = dashBoardReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_LEADER_BOARD_LIST':
      return {
        ...state,
        leaderBoardList: action.payload,
      }
    case 'SET_INCREASE_SCORE':
      let indexIncrease = state.leaderBoardList.map((el) => el.id).indexOf(action.payload.id)
      state.leaderBoardList[indexIncrease].score += action.payload.value
      return {
        ...state,
        leaderBoardList: [...state.leaderBoardList],
      }
    case 'SET_DECREASE_SCORE':
      let indexDecrease = state.leaderBoardList.map((el) => el.id).indexOf(action.payload.id)
      state.leaderBoardList[indexDecrease].score -= action.payload.value
      return {
        ...state,
        leaderBoardList: [...state.leaderBoardList],
      }

    default:
      return state
  }
}
