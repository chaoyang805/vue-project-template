module.exports = (api, options, rootOptions) => {
  // 命令
  api.extendPackage({
    scripts: {
      'serve': 'vue-cli-service serve',
      'build': 'vue-cli-service build',
      'build:proto': './build-proto.sh',
      'lint': 'vue-cli-service lint',
      'dll': 'vue-cli-service dll'
    },
    'scripts-info': {
      'serve': '运行开发服务器',
      'build': '生产环境执行构建',
      'build:proto': '生成 protobuf 代码',
      'lint': '执行 eslint',
      'dll': '提取公共库模块'
    }
  })

  // 安装基础公共库
  api.extendPackage({
    dependencies: {
      '@vue/composition-api': '^0.5.0',
      'vue': '^2.6.11',
      'vue-router': '^3.2.0',
      'vuex': '^3.4.0',
      'vuex-composition-helpers': '^1.0.18',
      'lodash': '^4.17.15',
      'number-precision': '^1.5.0',
      'grpc-web': '^1.2.0',
      'google-protobuf': '^3.12.2'
    },
    devDependencies: {
      '@types/google-protobuf': '^3.7.2',
      '@types/lodash': '^4.14.136',
      '@types/node': '^14.0.11',
      '@typescript-eslint/eslint-plugin': '^2.33.0',
      '@typescript-eslint/parser': '^2.33.0',
      '@vue/cli-plugin-eslint': '~4.5.0',
      '@vue/cli-plugin-router': '~4.5.0',
      '@vue/cli-plugin-typescript': '~4.5.0',
      '@vue/cli-plugin-vuex': '~4.5.0',
      '@vue/cli-service': '~4.5.0',
      '@vue/eslint-config-airbnb': '^5.0.2',
      '@vue/eslint-config-typescript': '^5.0.2',
      'eslint': '^6.7.2',
      'eslint-plugin-import': '^2.20.2',
      'eslint-plugin-vue': '^6.2.2',
      'node-sass': '^4.12.0',
      'sass-loader': '^8.0.2',
      'svg-inline-loader': '^0.8.2',
      'typescript': '^3.9.3',
      'vue-cli-plugin-dll': '^1.1.12',
      'vue-template-compiler': '^2.6.11',
      'webpack-merge': '^4.2.2'
    }
  })

  if (options.useAxios) {
    api.extendPackage({
      dependencies: {
        'axios': '^0.19.2'
      }
    })
  }

  // postcss
  api.extendPackage({
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    }
  })

  // 删除 vue-cli3 默认文件
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  const fs = require('fs')
  const srcPath = __dirname + '/public/index.html'
  const destDir = api.resolve('public')
  const destPath = destDir + '/index.html'
  console.info('copy ' + srcPath + ' to ' + destPath)
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, true)
  }
  fs.copyFileSync(srcPath, destPath)
  if (options.elementUIUsage !== 'none') {
    require('./element.js')(api, options)
  }

  api.render('./ts-template')

  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true
  })
}
