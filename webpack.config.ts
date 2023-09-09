import path from 'path';
import { Configuration } from 'webpack'; //to access built-in plugins

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // путь и название файла(файлов) откуда мы собираем логику и код для билда
    build: path.resolve(__dirname, 'build'), // путь в котором хранятся билды
    html: path.resolve(__dirname, 'public', 'index.html'), // прописываем настроку о том, чтобы конкретно index.html из папки public использовался как шаблон для встраивания в него скриптов, а не создавался каждый раз дефолтный html файл.
  }
  
  // настройка которую вручную задаем
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';
  
  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};