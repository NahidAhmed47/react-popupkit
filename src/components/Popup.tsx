import React, { ReactNode, createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

type TPopupProps = {
  children: ReactNode
  isOpen?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  [x: string]: any
}

type TPopupButtonProps = {
  children: ReactNode | string
  onClick?: (e?: HTMLButtonElement) => void
  toggle?: boolean
  [x: string]: any
}

type TPopupBody = {
  children: ReactNode
  [x: string]: any
}

type TContextValues = {
  popupRef: React.RefObject<HTMLDivElement>
  popupButtonRef: React.RefObject<HTMLButtonElement>
  isPopupOpen: boolean
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type TTriggerCloseProps = {
  children: ReactNode
}

// create context
const PopupContext = createContext<TContextValues | null>(null)

// popup root component
const Popup = ({ children, isOpen, setIsOpen, ...args }: TPopupProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen || false)
  // === REF ===
  const popupRef = useRef<HTMLDivElement>(null)
  const popupButtonRef = useRef<HTMLButtonElement>(null)

  // === HANDLING OUTSIDE CLOSE ===
  const handleOutsideClose = useCallback(
    (e: any) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        popupButtonRef.current &&
        !popupButtonRef.current.contains(e.target as Node)
      ) {
        setIsPopupOpen(false)
        setIsOpen && setIsOpen(false)
      }
    },
    [setIsPopupOpen, setIsOpen],
  )

  useEffect(() => {
    setIsOpen && setIsOpen(isPopupOpen)
  }, [isPopupOpen, setIsOpen])

  // Attach event listener when the component mounts
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClose)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClose)
    }
  }, [handleOutsideClose])
  const contextValue = {
    popupRef,
    popupButtonRef,
    isPopupOpen,
    setIsPopupOpen,
  }
  return (
    <PopupContext.Provider value={contextValue}>
      <div {...args} onClick={handleOutsideClose}>
        {children}
      </div>
    </PopupContext.Provider>
  )
}

// make popup button component
const PopupButton = ({ children, onClick: customOnClick, toggle = true, ...args }: TPopupButtonProps) => {
  const { popupButtonRef, setIsPopupOpen } = usePopupContext()
  return (
    <button
      {...args}
      ref={popupButtonRef}
      onClick={(e: any) => {
        e.stopPropagation()
        setIsPopupOpen((prev: boolean) => (toggle ? !prev : true)), customOnClick && customOnClick(e)
      }}
    >
      {children}
    </button>
  )
}

Popup.Button = PopupButton

// make popup body component
const PopupBody = ({ children, ...args }: TPopupBody) => {
  const { popupRef, isPopupOpen, setIsPopupOpen } = usePopupContext()
  return (
    <>
      {isPopupOpen && (
        <>
          <div {...args} ref={popupRef}>
            {children}
          </div>
          {/* this element for close by hook */}
          <span id='close-container' onClick={() => setIsPopupOpen(false)}></span>
        </>
      )}
    </>
  )
}

Popup.Body = PopupBody

// make a wrapper for close popup when click an item
const TriggerClose = ({ children }: TTriggerCloseProps) => {
  const { setIsPopupOpen } = usePopupContext()
  return (
    <div id='trigger-close' onClick={() => setIsPopupOpen(false)}>
      {children}
    </div>
  )
}

Popup.TriggerClose = TriggerClose

export const useClosePopup = () => {
  return () => document.getElementById('close-container')?.click()
}

// make hooks for checking validity
const usePopupContext = () => {
  const context = useContext(PopupContext)
  if (!context) {
    throw new Error('popup child component must be use inside popup component!')
  }
  return context
}

export default Popup
