const { NEXT_APP_NAME } = dotenv.config({ path: './.env' }).parsed;
module.exports = {
  apps: [
    {
      name: NEXT_APP_NAME || 'spa',
      script: 'npm',
      args: 'run start',
      watch: false,
      autorestart: true,
      max_memory_restart: '1G',
    },
  ],
};
