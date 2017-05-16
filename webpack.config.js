module.exports = {
  entry: './public/app.jsx' ,//入口
  output: {
      path:__dirname,
      filename: './public/bundle.js'//生成一個bundle.js
  },
  resolve: {
      root:__dirname,//node js的變數
      alias: {//自訂package
          Greeter: 'public/components/Greeter.jsx',
          GreeterMessage: 'public/components/GreeterMessage.jsx',
          GreeterForm: 'public/components/GreeterForm.jsx'
      },
      extensions:['', '.js', '.jsx']
  },
  module: {
      loaders: [
        {
             loader: 'babel-loader',
             query: {
                 presets: ['react','es2015']
             },
             test: /\.jsx?$/,
             exclude:/(node_modules｜bower_components)/
          }
      ]
  }
};

