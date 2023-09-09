import { lazy } from 'react';

// такой комментарий /* webpackChunkName: "желаемое-название"*/ позволяет задать название файла бандла, удобно для отслеживания бандлов
export const AboutPageAsync = lazy(() => import(/* webpackChunkName: "AboutPage"*/'./AboutPage').then(module => ({default: module.AboutPage })));
