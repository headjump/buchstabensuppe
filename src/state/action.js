export const startGame = () => { return { type: 'startGame' } }
export const showDialog = (dialog) => { return { type: 'showDialog', dialog: dialog } }
export const closeDialog = (id) => { return { type: 'closeDialog', id: id } }
