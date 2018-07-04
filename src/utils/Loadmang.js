import React from 'react'
import Loadable from 'react-loadable'

const Loader = () => <div>Loading...</div>

const Loadmang = func => Loadable({
  loader: func,
  loading: Loader,
  delay: 400
})

export default Loadmang
