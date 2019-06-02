import React from 'react'

import { closeDialog } from '../state/action'

const Dialog = ({ dialogs, dispatch }) => {
  if (dialogs.length === 0) { return null }

  const dialog = dialogs[0]

  return (
    <div className='dialog__overlay'>
      <div className='dialog'>
        {dialog.content}
        <a onClick={() => { dispatch(closeDialog(dialog.id)) }}>CLOSE</a>
      </div>
    </div>
  )
}

export default Dialog
