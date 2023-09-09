import { Configuration } from 'webpack'; //to access built-in plugins

// декомпозируем настройки вебпака и разносим разные конфиги в разные файлы 
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode, // мод сборки - в 'development' сборке много лишнего в бандл может записаться, в 'production' сборке ничего лишнего в бандле нет  
    entry: paths.entry, // путь и название файла(файлов) откуда мы собираем логику и код для билда
    output: {
      filename: '[name].[contenthash].js', // настройки файла бандла с [именем] и [уникальным id]
      path: paths.build , // путь в котором хранятся билды
      clean: true, // настройка при котором при каждом билде удаляются результаты прошлого билда и ненцжные файлы
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    // настройка показывающая где в коде ошибка при компиляции
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined, 
  }
}