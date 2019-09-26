import React from 'react'
import GuestLayout from './GuestLayout';
import DefaultLayout from './DefaultLayout'
import { Route } from 'react-router-dom'

export default function ResolveLayout ({route, path, users}) {
    return <Route to={path} name={route.name}>
      {users.loggedIn 
        ? <DefaultLayout>
          {route.component}
        </DefaultLayout>
        : <GuestLayout>
          {route.component}
        </GuestLayout>}
    </Route>
  }