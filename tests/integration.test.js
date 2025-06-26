import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app'

describe('Integración: flujo completo', () => {
  it('flujo suma y respuesta de resultado', async () => {
    const res = await request(app).get('/suma?a=7&b=8')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ resultado: 15 })
  })

  it('flujo con parámetros no válidos debe fallar', async () => {
    const res = await request(app).get('/suma?a=x&b=8')
    expect(res.status).toBe(400)
    expect(res.body.error).toBe('Parámetros inválidos')
  })
})
