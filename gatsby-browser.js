import React from 'react'

import LocaleWrap from './wrapPageElement'

export const wrapPageElement = LocaleWrap

import { PreviewStoreProvider } from 'gatsby-source-prismic'

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)