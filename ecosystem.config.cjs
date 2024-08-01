module.exports = {
  apps: [
    {
      name: 'ton-layer2-bridge',
      script: './.output/server/index.mjs',
      env: {
        NUXT_HOST: '0.0.0.0',
        PORT: 10072
      }
    }
  ]
}
