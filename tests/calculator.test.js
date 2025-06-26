import { describe, it, expect } from 'vitest'
import { sumar, restar } from '../src/calculator'

describe('Funciones de cálculo', () => {
  it('debería sumar correctamente', () => {
    expect(sumar(2, 3)).toBe(5)
  })

  it('debería restar correctamente', () => {
    expect(restar(5, 3)).toBe(2)
  })

  it('debería manejar números negativos', () => {
    expect(sumar(-2, -3)).toBe(-5)
  })

  it('debería manejar decimales', () => {
    expect(sumar(1.5, 2.2)).toBeCloseTo(3.7)
  })

  it('debería devolver NaN si un valor no es número', () => {
    expect(sumar("a", 2)).toBeNaN()
  })
})
