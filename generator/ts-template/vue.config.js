const path = require('path')
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
<%_ if (options.elementUIUsage === 'on-demand') { _%>

const tsImportPluginFactory = require('ts-import-plugin')
const camel2Dash = require('camel-2-dash')

const configElementUIImports = (config) => {
  config.module
    .rule('ts')
    .use('ts-loader')
    .tap(options => {
      // eslint-disable-next-line no-param-reassign
      options = {
        ...options,
        transpileOnly: true,
        compilerOptions: {
          module: 'es2015'
        },
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryName: 'element-ui',
              libraryDirectory: 'lib',
              camel2DashComponentName: true,
              style: p => path.join(
                'element-ui',
                'lib', 'theme-chalk',
                `${camel2Dash(path.basename(p, '.js'))}.css`
              )
            })
          ]
        })
      }
      return options
    })
}
<%_ } _%>

module.exports = {
  chainWebpack(config) {
    config.plugins.delete('fork-ts-checker')
<%_ if (options.elementUIUsage === 'on-demand') { _%>
    configElementUIImports(config)
<%_ } _%>
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.scss', '.json'],
      alias: {
        '@': path.resolve('src')
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
