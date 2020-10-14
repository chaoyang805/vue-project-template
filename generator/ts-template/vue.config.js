const path = require('path')
const merge = require('webpack-merge')
const devServer = {}
if (process.env.NODE_ENV === 'development') {
  const serverHost = process.env.VUE_APP_SERVER_HOST
  if (serverHost) {
    devServer.proxy = {
      '/': {
        target: `http://${serverHost}`,
        ws: true
      }
    }
  } else {
    console.warn(`调试中如需将 REST 接口请求代理到 Backend\n` +
      `在项目根目录创建 .env.development.local 文件，并指定 Backend 的接口地址，例如:VUE_APP_SERVER_HOST=127.0.0.1:8081\n`)
  }
}

module.exports = {
  chainWebpack(config) {
    config.externals({ phaser: 'Phaser' })
    if (process.env.NODE_ENV === 'production') {
      config
        .optimization
        .minimizer('terser')
        .tap((args) => {
          args[0].terserOptions.output =
            Object.assign({}, args[0].terserOptions.output, {
              comments: false
            })
          return args
        })
        .end()
    }
  },
  configureWebpack: (config) => {
    merge(config, {
      resolve: {
        extensions: ['.ts', '.js', '.vue', '.scss', '.json'],
        alias: {
          '@': path.resolve('src')
        }
      }
    })
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'eval-source-map'
      config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]'
      config.output.devtoolModuleFilenameTemplate = info => {
        const isVue = info.resourcePath.match(/\.vue$/)
        const isScript = info.identifier.match(/type=script/)
        return isVue && !isScript
          ? `webpack-generated:///${info.resourcePath}?${info.hash}`
          : `webpack-vue:///${info.resourcePath}`
      }
    }
  },
  outputDir: 'wwwroot',
  devServer: devServer,
  pluginOptions: {
    dll: {
      entry: {
        main: ['vue', 'vuex', 'vue-router', 'google-protobuf', 'grpc-web']
      },
      open: process.env.NODE_ENV === 'development',
      inject: process.env.NODE_ENV === 'development'
    }
  }
}
