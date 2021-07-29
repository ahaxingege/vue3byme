const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    // entry: path.resolve(__dirname, './src/main.js'),
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // html所在路径
        compress: true, // 是否压缩
        port: 3000, // 端口
        hot: true, // 热部署
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 不编译node_modules下的文件
                loader: 'babel-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000,
                        name: 'fonts/[hash].[ext]'
                    },
                }
            },
            {
                // 图片
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000,
                        name: 'images/[hash].[ext]'
                    },
                },
            },
        ]
    },
    resolve: {
        // 设置src别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        //后缀名 可以根据需要自由增减
        extensions: ['.js', '.vue'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title: '手搭 Vue 开发环境',
            favicon: './public/favicon.ico', // 图标
        }),
        // 添加 VueLoaderPlugin 插件
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),

    ]
}
