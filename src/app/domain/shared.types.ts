import type { ReactNode } from 'react'

export type WorkUnit = {
  wkucode: string
  wkuname: string
  wkutype: string
  speed: number
  sitname: string
  sitcolor: string
  matcode: string
  matname: string
  wohnumber: string
  woocode: string
  quantityrequired: number
  wooid: string
  quantityproduced: number
  serie: string
  tprod: number
  tprep: number
  tpar: number
  matcodecons: string
  matbatchcons: string
  matqtycons: number
  ioee: number
  ioeeteo: number
  iperformance: number
  iquality: number
  iavailability: number
}

export type PayloadItem = {
  plncode: string
  plnname: string
  sbacode: string
  sbaname: string
  sbatime: number
  workunits: WorkUnit[]
}

export type ApiResponse = {
  Payload: PayloadItem[]
}

export interface InfoItemProps {
  label: string
  value: string | number
  multiline?: boolean
}

export interface SectionProps {
  children: ReactNode
  isFlex?: boolean
  className?: string
}
