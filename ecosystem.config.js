module.exports = {
  apps: [
    {
      name: 'reginaldogomes.dev.br',
      cwd: '/home/ubuntu/apps/reginaldogomes.dev.br',
      script: 'node_modules/next/dist/bin/next', // Caminho direto para o binário Next.js
      args: 'start -p 3003', // Porta atualizada
      interpreter: 'node',
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3003,
        NEXT_TELEMETRY_DISABLED: '1',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
