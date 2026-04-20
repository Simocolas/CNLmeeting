// Node positions as percentages of the Hero viewport.
// Coordinates are tuned to place nodes along the perimeter of the
// Chalk River Laboratories main campus as visible in chalk-river-map.jpg.
//
// TODO: Adjust x, y after visual inspection in the browser.
// x = percent from left (0–100), y = percent from top (0–100)
//
// All nodes share the same coverage radius (illustrative only).
// Do not give different nodes different radii.

export interface HeroNode {
  id: string
  x: number
  y: number
  ringRadiusPx: number
}

export const HERO_NODES: HeroNode[] = [
  { id: "N01", x: 58, y: 28, ringRadiusPx: 130 },
  { id: "N02", x: 72, y: 22, ringRadiusPx: 130 },
  { id: "N03", x: 80, y: 48, ringRadiusPx: 130 },
  { id: "N04", x: 72, y: 72, ringRadiusPx: 130 },
  { id: "N05", x: 55, y: 78, ringRadiusPx: 130 },
  { id: "N06", x: 45, y: 52, ringRadiusPx: 130 },
]
