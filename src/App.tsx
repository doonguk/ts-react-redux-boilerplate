import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TodoPage, MainPage, NotFoundPage} from "./pages"

export default function App() {
  return(
    <Switch>
      <Route exact path={'/'} component={MainPage}/>
      <Route path={'/todo'} component={TodoPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  )
}