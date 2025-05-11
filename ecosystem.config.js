module.exports = {
  apps: [
    {
      name: 'reginaldogomes.dev.br',
      cwd: '/home/ubuntu/apps/reginaldogomes.dev.br',
      script: './node_modules/next/dist/bin/next', // 1️⃣ Caminho direto
      args: 'start', // 2️⃣ Sem porta aqui (usamos no env)
      interpreter: 'node', // 3️⃣ Usa Node.js normalmente
      env: {
        NODE_ENV: 'production',
        PORT: 3000, // 4️⃣ Porta definida aqui
      },
    },
  ],
}
