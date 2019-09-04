import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { closeDialog } from '../state/action'

const Dialog = ({ dialogs, dispatch }) => {
  const dialog = dialogs[0] || null
  const visible = !!dialog

  return (
    <React.Fragment>
      <CSSTransition in={visible} unmountOnExit timeout={500} classNames='--ani'>
        <div className='dialog__backdrop' />
      </CSSTransition>
      <CSSTransition in={visible} unmountOnExit timeout={500} classNames='--ani'>
        <div className='dialog__holder'>
          <div className='dialog'>
            {dialog &&
              <React.Fragment>
                {dialog.content}
                <a onClick={() => { visible && dispatch(closeDialog(dialog.id)) }}>CLOSE</a>
              </React.Fragment>
            }
          </div>
        </div>
      </CSSTransition>
    </React.Fragment>
  )
}

export default Dialog
