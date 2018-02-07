module.exports = function (bundler) {
    bundler.addBundleLoader('js', require.resolve('./src/js-loader'));
};