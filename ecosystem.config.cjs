module.exports = {
  apps: [
    {
      name: 'zvolta-website',
      script: 'node_modules/.bin/vite',
      args: 'preview --port 3001 --host',
      cwd: '/home/zvolta-website',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
  ],
};
