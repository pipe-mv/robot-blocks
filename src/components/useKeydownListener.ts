import * as React from 'react'

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
type Position = [number, number]


function useKeydownLister(
  cb: (event: KeyboardEvent) => void,
  currentDirection: Direction,
  currentPos: Position
) {
  React.useEffect(() => {
    document.addEventListener('keydown', cb)
    return () => document.removeEventListener('keydown', cb)
  }, [cb, currentDirection, currentPos])
}

export default useKeydownLister
