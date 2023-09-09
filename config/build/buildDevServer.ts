import { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { BuildOptions } from "./types/config"

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    // порт в котором открывается наше приложение
    port: options.port,
    // настройка для автоматического открывания страницы в браузере, эту опцию можно здесь не прописать, а писать в скриптах package.json --open
    open: true,
    // настройка для исключения ошибки, возникающей при обновлении страницы, 
    // например, если мы при помощи роутинга и кнопок "о нас" перешли на страницу /about, то страница откроется,
    // но если мы обновим страницу, то возникнет ошибка get запроса. Эта настройка исключает эту ошибку.
    historyApiFallback: true,
  }
}