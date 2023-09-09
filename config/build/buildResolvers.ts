import { ResolveOptions } from 'webpack'; //to access built-in plugins

export const buildResolvers = (): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'], // свойство в котором описаны расширеня файлов которые можно не указывать при импортах
  }
}