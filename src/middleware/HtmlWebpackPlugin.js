const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Các cài đặt khác của Webpack
    plugins: [
        new HtmlWebpackPlugin({
            template: 'openlayers_app/index.html', // Mẫu HTML
            filename: 'index.html', // Tên tệp HTML đầu ra
        }),
    ],
};
