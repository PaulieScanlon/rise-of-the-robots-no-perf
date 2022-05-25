import React from 'react'
import RootElement from './src/components/root-element'

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="Inconsolata-Bold-w2"
      rel="preload"
      href="/fonts/Inconsolata-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Inconsolata-Regular-w2"
      rel="preload"
      href="/fonts/Inconsolata-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Inconsolata-Light-w2"
      rel="preload"
      href="/fonts/Inconsolata-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <style
      key="inline-style"
      dangerouslySetInnerHTML={{
        __html: `
      @font-face {
        font-family: 'Inconsolata-Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Inconsolata-Bold.woff2) format('woff2'),
          url(/fonts/Inconsolata-Bold.woff) format('woff');
      }
      @font-face {
        font-family: 'Inconsolata-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Inconsolata-Regular.woff2) format('woff2'),
          url(/fonts/Inconsolata-Regular.woff) format('woff');
      }
      @font-face {
        font-family: 'Inconsolata-Light';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(/fonts/Inconsolata-Light.woff2) format('woff2'),
          url(/fonts/Inconsolata-Light.woff) format('woff');
      }
    `,
      }}
    />,
  ])
}
