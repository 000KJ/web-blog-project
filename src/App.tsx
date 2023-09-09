import { Suspense, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"

import './styles/index.scss'

import { Counter } from "./components/Counter"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"


export const App = () => {
const { theme, toggleTheme } = useTheme();

const classNamesArgs = {
  cls: 'app', 
  mods: { hovered: true, selected: false }, 
  additional: [theme, 'cls1', 'cls2']
}

  return(
    <div className={classNames(classNamesArgs)}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
        <Suspense fallback={<div>AAAAAAAAA Загрузка///</div>} >
          <Routes>
            <Route path={'/'} element={<MainPageAsync />}/>
            <Route path={'/about'} element={<AboutPageAsync />}/>
          </Routes>
        </Suspense>
      <Counter/>
    </div>
  )
}