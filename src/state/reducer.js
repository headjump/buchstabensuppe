let __dialogId = 0

const reducer = (state, action) => {
  switch (action.type) {
    case 'startGame':
      return {
        ...state,
        started: true
      }
    case 'showDialog':
      return {
        ...state,
        dialogs: (state.dialogs || []).concat([{id: __dialogId++, content: action.dialog}])
      }
    case 'closeDialog':
      const newDialogs = (state.dialogs || []).filter(dialog => dialog.id !== action.id)
      return {
        ...state,
        dialogs: newDialogs
      }
  }
}

export default reducer
