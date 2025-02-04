import { NVLabel3D } from './nvlabel.js'

export type NiftiHeader = {
  littleEndian: boolean
  dim_info: number
  dims: number[]
  pixDims: number[]
  intent_p1: number
  intent_p2: number
  intent_p3: number
  intent_code: number
  datatypeCode: number
  numBitsPerVoxel: number
  slice_start: number
  vox_offset: number
  scl_slope: number
  scl_inter: number
  slice_end: number
  slice_code: number
  xyzt_units: number
  cal_max: number
  cal_min: number
  slice_duration: number
  toffset: number
  description: string
  aux_file: string
  qform_code: number
  sform_code: number

  quatern_b: number
  quatern_c: number
  quatern_d: number
  qoffset_x: number
  qoffset_y: number
  qoffset_z: number
  affine: number[][]
  intent_name: string
  magic: string
}

// TODO: add volume type
// TODO: this seems to be simply NVImage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Volume = Record<string, any>

export type Point = {
  comments: Array<{
    text: string
    prefilled?: string
  }>
  coordinates: {
    x: number
    y: number
    z: number
  }
}

/**
 * Representes the vertices of a connectome
 */
export type NVConnectomeNode = {
  // name of node
  name: string
  x: number
  y: number
  z: number
  // color value of node (actual color determined by colormap)
  colorValue: number
  // size value of node (actual size determined by node scale times this value in mms)
  sizeValue: number
  label?: NVLabel3D
}

/**
 * Represents edges between connectome nodes
 */
export type NVConnectomeEdge = {
  // index of first node
  first: number
  // index of second node
  second: number
  // color value to determine color of edge based on color map
  colorValue: number
}

export type ConnectomeOptions = {
  name: string
  nodeColormap: string
  nodeColormapNegative: string
  nodeMinColor: number
  nodeMaxColor: number
  // scale factor for node, e.g. if 2 and a node has size 3, a 6mm ball is drawn
  nodeScale: number
  edgeColormap: string
  edgeColormapNegative: string
  edgeMin: number
  edgeMax: number
  edgeScale: number
}

export type Connectome = ConnectomeOptions & {
  nodes: NVConnectomeNode[]
  edges: NVConnectomeEdge[]
}

export type LegacyNodes = {
  names: string[]
  prefilled: unknown[]
  X: number[]
  Y: number[]
  Z: number[]
  Color: number[]
  Size: number[]
}

export type LegacyConnectome = Partial<ConnectomeOptions> & {
  nodes: LegacyNodes
  edges: number[]
}
