// my-plugin.js
class MyPlugin {
  constructor(options) {
    console.log('🚀🚀~ options:', options);
  }
  apply(compiler) {
    // console.log('🚀🚀~ : my-plugin');
  }
}
module.exports = MyPlugin;