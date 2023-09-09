import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule, web } from 'webpack'; //to access built-in plugins
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  // Если не используем тайпскрипт - тогда нужен babel-loader (для обратной совместимости версий языка для совместимости со всеми браузерами)
  const typescriptLoader = { // свойство отвечающие за обработку данных выходящих за рамки js, например png, jpg и тп (в том числе ts)! 
    test: /\.tsx?$/, // регулярка с расширениями файлов которые должны обработать лоудером. 
    use: 'ts-loader', // лоадер которые применяется для файлов с расширением строкой выше.
    exclude: /node_modules/, // тут исключения прописываются, мы не обрабатываем папку node_modules. 
  };

  const miniCssLoader = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i, // регулярка настроенная на расширения sass и scss 
    use: [ // порядок нижеследующих лоадеров важен!
      // Creates `style` nodes from JS strings - создает стили из JS строк
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS - транслирует css в CommonJS (CommonJS - это стандарт модульного взаимодействия js скриптов)
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
          },
        },
      },
      // Compiles Sass to CSS - преобразовывает sass (препроцессоный код) в css (нативный)
      "sass-loader",
    ],
  };

  return [
    // т.к. порядок лоадеров важен, для наглядности выносим в константу
    typescriptLoader,
    cssLoader,
  ]
}