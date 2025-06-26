import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app'

describe('Endpoints principales', () => {
  it('GET / debería devolver mensaje de bienvenida', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.text).toContain('Bienvenido')
  })

  it('GET /suma con parámetros válidos', async () => {
    const res = await request(app).get('/suma?a=2&b=3')
    expect(res.status).toBe(200)
    expect(res.body.resultado).toBe(5)
  })

  it('GET /resta con parámetros válidos', async () => {
    const res = await request(app).get('/resta?a=10&b=4')
    expect(res.status).toBe(200)
    expect(res.body.resultado).toBe(6)
  })

  it('GET /ruta-no-existe debe devolver 404', async () => {
    const res = await request(app).get('/ruta-invalida')
    expect(res.status).toBe(404)
  })
})
