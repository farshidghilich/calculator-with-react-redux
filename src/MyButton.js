import React, { useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const MyButton = ({ variant, children, onClick, status }) => {
  const buttonRef = useRef()
  useEffect(() => {
    if (status) {
      buttonRef.current.focus()
    }
    return () => buttonRef.current.blur()
  }, [status])

  return (
    <Button
      onKeyPress={(e) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          e.preventDefault()
        }
      }}
      ref={buttonRef}
      variant={variant}
      onClick={onClick}
      style={{ width: '100%', borderRadius: '50%' }}
    >
      {children}
    </Button>
  )
}

export default MyButton
