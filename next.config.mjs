/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de Rewrites para crear un proxy en modo de desarrollo.

  async rewrites() {
    return [
      {
        // 1. Source (Origen): La ruta que el frontend llama.
        source: '/api/:path*',
        
        // 2. Destination (Destino): La URL real de tu servidor Express.
        destination: 'http://localhost:3001/api/:path*',
      },
    ];
  },

  // Aquí se mantienen otras opciones de configuración por defecto o futuras.
  /* config options here */
};

export default nextConfig;