module.exports = {
  apps: [
    {
      name: 'lumoz-op-bridge',
      script: './.output/server/index.mjs',
      env: {
        NUXT_HOST: '0.0.0.0',
        PORT: 10071
      }
    }
  ]
}
