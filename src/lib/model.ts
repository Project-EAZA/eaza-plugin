import type { Grades } from './types'

export class Grade implements Grades {
  A: number
  AB: number
  B: number
  BC: number
  C: number
  Cr: number
  D: number
  Nw: number
  I: number
  Other: number
  S: number
  N: number
  Nr: number
  U: number
  F: number
  P: number

  constructor() {
    this.A = 0
    this.AB = 0
    this.B = 0
    this.BC = 0
    this.C = 0
    this.Cr = 0
    this.D = 0
    this.Nw = 0
    this.I = 0
    this.Other = 0
    this.S = 0
    this.N = 0
    this.Nr = 0
    this.U = 0
    this.F = 0
    this.P = 0
  }

  public add(other: Grade) {
    if (other) {
      this.A = other.A
      this.AB = other.AB
      this.B = other.B
      this.BC = other.BC
      this.C = other.C
      this.Cr = other.Cr
      this.D = other.D
      this.Nw = other.Nw
      this.I = other.I
      this.Other = other.Other
      this.S = other.S
      this.N = other.N
      this.Nr = other.Nr
      this.U = other.U
      this.F = other.F
      this.P = other.P
    }
  }
}
