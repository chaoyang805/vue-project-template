module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'element-ui': '^2.13.1'
    }
  })

  api.render('../ui/element')

  if (options.elementUIUsage === 'all') {
    api.injectImports('src/plugins/index.ts', `import './element'`)
  }
  api.onCreateComplete(() => {

  })
}
