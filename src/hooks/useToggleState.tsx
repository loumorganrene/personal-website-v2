import { useState } from 'react'

function useToggleState(initialState: boolean = false) {
  const [open, setOpen] = useState(initialState)

  const toggle = () => setOpen(prevState => !prevState)

  return { open, toggle }
}

export default useToggleState