const path = require('path'); //Permite saber dónde está ubicado el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //Dice dónde está el punto de entrada de la app
    output: { //Dónde va a vivir el proyecto una vez esté preparado
        path: path.resolve(__dirname, 'dist'), //Para saber dónde nos encontramos y crear una carpeta para el proyecto dist(distribution)
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development', //Para que se ejecute en modo desarrollo
    resolve: {
        extensions: ['.js', '.jsx'], //Para que reconozca los archivos js y jsx
        alias: { //Un objeto que nos permite crear alias para que no tengamos que escribir la extensión del archivo
            '@components': path.resolve(__dirname,'src/components/'),
            '@containers': path.resolve(__dirname,'src/containers/'),
            '@pages': path.resolve(__dirname,'src/pages/'),
            '@routes': path.resolve(__dirname,'src/routes/'),
            '@styles': path.resolve(__dirname,'src/styles/'),
            '@icons': path.resolve(__dirname,'src/assets/icons/'),
            '@logos': path.resolve(__dirname,'src/assets/logos/'),
            '@hooks': path.resolve(__dirname,'src/hooks/'),
            '@context': path.resolve(__dirname,'src/context/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //Usar una regla con Regex para detectar los elementos con los que se está trabajando js y jsx
                exclude: /node_modules/, //Excluir los archivos que se encuentran en la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Usar el loader de babel
                }
            },
            {
                test: /\.html$/, //Usar una regla con Regex para decirle que trabaje con los archivos html
                use: [
                    {
                        loader: 'html-loader', //Usar el loader de html
                    }
                ]
            },
            {
                test: /\.(css|scss)$/, //Usar una regla con Regex para decirle que trabaje con los archivos sass
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', 
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        compress: true,
        port: 3005,
        historyApiFallback: true,
    }
}