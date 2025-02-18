module.exports = {
    apps: [
      {
        name: 'hafez-app-farsirocks',
        script: './index.js',
        watch: false,
        ignore_watch: ['node_modules'],
        autorestart: true,
        env: {
          NODE_ENV: 'production',
            PORT: 5174
        }
      }
    ]
  };
