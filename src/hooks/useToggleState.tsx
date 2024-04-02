import { useState } from 'react'

function useToggleState(initialState: boolean = false) {
  const [isToggled, setIsToggled] = useState(initialState)

  const toggle = () => setIsToggled(prevState => !prevState)

  return { isToggled, toggle }
}

export default useToggleState