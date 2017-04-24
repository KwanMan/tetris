import React from 'react'
import Head from 'next/head'

import Tetris from '../components/Tetris'

const Index = () => (
  <div>
    <Head>
      <link rel='stylesheet' type='text/css' href='/static/styles.css' />
    </Head>
    <Tetris />
  </div>
)

export default Index
