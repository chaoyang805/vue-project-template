module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'element-ui': '^2.13.1'
    }
  })
  if (options.elementUIUsage === 'on-demand') {
    api.extendPackage({
      dependencies: {
        "camel-2-dash": "^0.1.0",
        "ts-import-plugin": "^1.6.6"
      }
    })
  }

  api.render('../ui/element')

  if (options.elementUIUsage === 'all') {
    api.injectImports('src/plugins/index.ts', `import './element'`)
  }
  api.onCreateComplete(() => {

  })
}
