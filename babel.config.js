module.exports = function (api) {
    api.cache(() => NODE_ENV);

    api.env();

    return {
        presets: [
            "@babel/preset-typescript"
        ],
        plugins: [
            "@babel/plugin-transform-modules-commonjs",
            "@babel/plugin-transform-runtime"
        ]
    }
}
