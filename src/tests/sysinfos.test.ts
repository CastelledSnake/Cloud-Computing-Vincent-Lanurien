const request = require('supertest');
const appli = require('../getsysinfos');

describe('GET /api/v1/sysinfo', () => {
  it('Réponse avec toutes les informations système', async () => {
    const response = await request(appli).get('/api/v1/sysinfo');
    expect(response.status).toBe(200);
    
  });
});

describe('GET /api/v1/sysinfo/cpu', () => {
  it('Réponse avec des informations sur le CPU', async () => {
    const response = await request(appli).get('/api/v1/sysinfo/cpu');
    expect(response.status).toBe(200);
    
  });
});

describe('GET /api/v1/sysinfo/system', () => {
  it('Réponse avec des informations sur le système', async () => {
    const response = await request(appli).get('/api/v1/sysinfo/system');
    expect(response.status).toBe(200);
    
  });
});

describe('GET /api/v1/sysinfo/mem', () => {
  it('Réponse avec des informations sur la mémoire', async () => {
    const response = await request(appli).get('/api/v1/sysinfo/mem');
    expect(response.status).toBe(200);
    
  });
});

describe('GET /api/v1/sysinfo/osInfo', () => {
  it('Réponse avec des informations sur le SE', async () => {
    const response = await request(appli).get('/api/v1/sysinfo/osInfo');
    expect(response.status).toBe(200);
    
  });
});

describe('GET /api/v1/sysinfo/currentLoad', () => {
  it('Réponse avec des informations sur le charge actuelle', async () => {
    const response = await request(appli).get('/api/v1/sysinfo/currentLoad');
    expect(response.status).toBe(200);
    
  });
});

describe('GET /api/v1/sysinfo/processes', () => {
  it('Réponse avec des informations sur les processus', async () => {
    const response = await request(appli).get('/api/v1/sysinfo/processes');
    expect(response.status).toBe(200);
    
  });
});

describe('GET /api/v1/sysinfo/diskLayout', () => {
  it('Réponse avec des informations disques', async () => {
    const response = await request(appli).get('/api/v1/sysinfo/diskLayout');
    expect(response.status).toBe(200);
    
  });
});

describe('GET /api/v1/sysinfo/networkInterfaces', () => {
  it('Réponse avec des informations interfaces réseaux', async () => {
    const response = await request(appli).get('/api/v1/sysinfo/networkInterfaces');
    expect(response.status).toBe(200);
    
  });
});
