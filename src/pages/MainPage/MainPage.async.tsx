import { lazy } from 'react';

// такой комментарий /* webpackChunkName: "желаемое-название"*/ позволяет задать название файла бандла, удобно для отслеживания бандлов
export const MainPageAsync = lazy(() => import(/* webpackChunkName: "MainPage"*/'./MainPage').then(module => ({default: module.MainPage })));
