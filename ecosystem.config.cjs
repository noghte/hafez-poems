module.exports = {
    apps: [
      {
        name: 'hafez-app-farsirocks',
        cwd: '/var/www/poems.farsi.rocks',
        script: './index.js',
        watch: false,
        ignore_watch: ['node_modules'],
        autorestart: true,
        env: {
          NODE_ENV: 'production',
          PORT: 5174,
          LOG_LEVEL: 'info'
        }
      }
    ]
  };
