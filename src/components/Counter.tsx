import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {
  
  const [state, setState] = useState(0)
  return(
    <div className={classes.btn}>
    <button onClick={() => setState(prev => prev + 1)}>click</button>
    <div>{state}</div>
    </div>
    
  )
}