module.exports = {
    productionSourceMap: false,//生产环境的source map，设置为false以加速生产环境构建。
    configureWebpack: config => {
        // 为生产环境修改配置...
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production';
            // 打包文件大小配置
            config.performance = {
                maxEntrypointSize: 10000000,//入口起点的最大体积
                maxAssetSize: 30000000,//生成文件的最大体积
            }
        }
    },
}