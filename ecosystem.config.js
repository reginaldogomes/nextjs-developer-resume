module.exports = {
  apps: [
    {
      name: 'reginaldogomes.dev.br',
      cwd: '/home/ubuntu/apps/reginaldogomes.dev.br',
      script: 'npm',
      args: 'start',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'production',
        PORT: 3003,
      },
    },
  ],
}
