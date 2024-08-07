export * from './createGrid'
export * from './genKey'
export * from './isCurrentPos'
export * from './moveTo'

export type Direction = 'UP' | 'RIGHT' | 'DOWN' | 'LEFT'

export const rotationMapper = {
  UP: 0,
  RIGHT: 90,
  DOWN: 180,
  LEFT: 270
}

export const keyMapper: { [key: string]: Direction } = {
  ArrowUp: 'UP',
  ArrowRight: 'RIGHT',
  ArrowDown: 'DOWN',
  ArrowLeft: 'LEFT'
}
