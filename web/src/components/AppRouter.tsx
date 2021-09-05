import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { authRoutes, publicRoutes } from '../routes'
import { INDEX_ROUTE } from '../utils/consts'

const AppRouter: React.FC = () => {
  const isAuth = false

  return (
    <Switch>
      {isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      <Redirect to={INDEX_ROUTE} />
    </Switch>
  )
}

export default AppRouter
