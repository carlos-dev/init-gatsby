import React from 'react'
export {wrapRootElement} from './gastby/wrapRootElement'

export const onRenderBody = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script type="text/javascript" />
  ])
}