const webpack = require("webpack");
const merge = require("webpack-merge");

const isProduction = process.env.NODE_ENV === "production";

const bundleSuffix = isProduction ? '.min' : '';

const commonConfig = {
    mode: isProduction ? 'production' : 'development',
    devtool: !isProduction ? "source-map" : undefined,
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modules: [".", "node_modules"],
        alias: {
            "dat.gui": "dat.gui/build/dat.gui.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            onlyCompileBundledFiles: true
                        }
                    },
                ],
            },
            {
                test: /\.glsl$/, use: 'text-loader'
            }
        ]
    }
};

const foo = merge(commonConfig, {
    entry: `./foo.ts`,
    output: {
        filename: `./dist/foo${bundleSuffix}.js`,
        library: "foo"
    }
});

const foo2 = merge(commonConfig, {
    entry: `./foo2.ts`,
    output: {
        filename: `./dist/foo2${bundleSuffix}.js`,
        library: "foo2"
    }
});

const bar = merge(commonConfig, {
    entry: `./bar.js`,
    output: {
        filename: `./dist/bar${bundleSuffix}.js`,
        library: "bar"
    }
});

module.exports = [foo, foo2, bar];
