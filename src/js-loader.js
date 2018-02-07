const JSLoader = require('parcel-bundler/src/builtins/loaders/js-loader');

let ver = process.env.npm_package_parcel_jsVersion;

switch (ver) {
    case 'timestamp':
        ver = '' + Date.now();
        break;

    case 'hash':
        ver = (+new Date).toString(36);
        break;

    case undefined:
        ver = process.env.npm_package_version;
}

module.exports = function loadJSBundle(bundle) {
    if (ver && ver.length) {
        bundle += '?ver=' + ver;
    }

    return JSLoader(bundle);
};
