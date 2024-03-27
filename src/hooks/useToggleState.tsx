import { useState, useEffect, useRef } from 'react'

function useToggleState(initialState: boolean = false) {
  const [isToggled, setIsToggled] = useState(initialState)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsToggled(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [])

  const toggle = () => setIsToggled(prevState => !prevState)

  return { isToggled, toggle, buttonRef }
}

export default useToggleState