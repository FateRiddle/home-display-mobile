const currentPiece = (state = ['0','0','0','0','0'] , action) => {
  //state一开始无,全用0表示好用于判断，正常的会是类似['11','21','31','41','51']
  switch (action.type) {
    case "CHANGE_PIECE":
      const tabId = action.id.substring(0,1)
      // const [ tabId, _ ] = Array.from(action.id)
      if (['1','2','3','4','5'].indexOf(tabId) > -1) {
        return [
          ...state.slice(0, tabId-1),
          action.id,
          ...state.slice(tabId),
        ]
      } else {
        return state
      }

    default:
      return state
  }
}

export default currentPiece
