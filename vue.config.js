const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const cdn = {
    // 忽略打包的第三方库
    externals: {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'element-plus': 'ElementPlus'
    },
    // 通过cdn方式使用
    js: [
        'https://unpkg.com/vue@3',
        'https://unpkg.com/vue-router@4',
        'https://unpkg.com/vuex@4',
        '//cdn.jsdelivr.net/npm/element-plus',
    ],
    css: [],
};
module.exports = {
    productionSourceMap: false,
    chainWebpack: (config) => {
        // config.module
        //     .rule('swf')
        //     .test(/\.swf$/)
        //     .use('url-loader')
        //     .loader('url-loader')
        //     .tap((options) => {
        //         return {
        //             limit: 10000,
        //         };
        //     });
        // 添加别名
        // config.resolve.alias
        //     .set('@', resolve('src'))
        //     .set('assets', resolve('src/assets'))
        //     .set('components', resolve('src/components'))
        //     .set('router', resolve('src/router'))
        //     .set('store', resolve('src/store'))
        //     .set('views', resolve('src/views'));
        // config.plugin('copy').tap((args) => {
        //     args[0][0].to = 'resource';
        //     return args;
        // });
        // 移除 prefetch 插件
        // config.plugins.delete('prefetch-index');
        // 移除 preload 插件，避免加载多余的资源
        // config.plugins.delete('preload-index');
        // 配置cdn引入
        // config.plugin('html').tap((args) => {
        //     args[0].cdn = cdn;
        //     return args;
        // });
    },
    configureWebpack: config => {
        // 为生产环境修改配置
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production';
            // 打包文件大小配置
            config.performance = {
                maxEntrypointSize: 10000000,
                maxAssetSize: 30000000,
            }
            // 忽略打包配置
            // config.externals = cdn.externals;
            const plugins = [];
            plugins.push(
                //生产环境去掉console.log
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false, //去除注释
                        },
                        compress: {
                            drop_console: true, //去除console
                            drop_debugger: true, //去除debugger
                            pure_funcs: ['console.log'], //移除console.log
                        },
                    },
                })
            );

            config.plugins = [...plugins,...config.plugins];
        }

    },

}