module.exports = {
  apps: [
    {
      name: 'reginaldogomes.dev.br',
      cwd: '/home/ubuntu/apps/reginaldogomes.dev.br',
      script: './node_modules/.bin/next',
      args: 'start -p 3003', // Use a porta diretamente aqui
      interpreter: '/bin/bash', // ⬅️ Usa o bash para rodar comandos do npm/next
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
