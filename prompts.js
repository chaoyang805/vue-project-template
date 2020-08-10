// language = ts
// grpc-web boolean
// axios boolean
// login page boolean
// echarts boolean
// worker-loader
// cli-plugin-dll
module.exports = [
  {
    name: 'useAxios',
    type: 'confirm',
    message: 'use axios to fire http request?',
    default: false
  },
  {
    name: 'elementUIUsage',
    type: 'list',
    message: 'use element-ui as ui framework?',
    choices: [
      {
        name: 'none',
        value: 'none'
      },
      {
        name: 'all',
        value: 'all'
      },
      {
        name: 'on-demand',
        value: 'on-demand'
      }
    ],
    default: 'on-demand'
  }
]
