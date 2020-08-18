import React, { FunctionComponent, MouseEvent } from 'react'

type ModalProps = {
  title: string,
  show: boolean,
  onAction?: null | ((event: MouseEvent<HTMLButtonElement>) => void),
  onClose: () => void,
}

export const ConfirmModal: FunctionComponent<ModalProps> =
  ({ title, show, onAction, onClose }) => {

    const renderCloseButton = () => (
      <button
        className="button-contact-form button-clear bg-gray-600 hover:bg-gray-400 border-gray-600 hover:border-gray-400 text-md border-4 text-white py-1 px-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
    )

    const renderActionButton = () => {
      if (onAction === null) {
        return 
      }

      return (
        <button
          className="button-contact-form button-submit px-4 bg-blue-500 hover:bg-blue-200 border-blue-500 hover:border-blue-200 text-md border-4 text-white py-1 px-2 rounded mr-4"
          onClick={onAction}
        >
          Send
        </button>
      )
    }

    const isShown = show ? 'opacity-1' : 'opacity-0 pointer-events-none'

    return (
      <div className={isShown + " modal fixed w-full h-full top-0 left-0 flex items-center justify-center"}>
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />

        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">{title}</p>
            </div>

            <div className="flex justify-end pt-2">
              {renderActionButton()}
              {renderCloseButton()}
            </div>
          </div>
        </div>
      </div>
    )
}