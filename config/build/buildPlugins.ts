import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack'; //to access built-in plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions, BuildPaths } from './types/config';

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ // дополнительно устанавливаемый вебпак плагин для создания корневого html файла, внутри в виде объекта можно прописывать разные настройки для него, если настроек нет то плагин создает каждый раз дефолтный html файл.
       template: paths.html, // прописываем настрой ку о том, чтобы конкретно index.html из папки public использовался как шаблон для встраивания в него скриптов, а не создавался каждый раз дефолтный html файл.
    }), 
    new ProgressPlugin(), // встроенный плагин для отображения прогресса по сборке, чтобы знать на каком этапе сборка и тп.
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    })
  ]
};
