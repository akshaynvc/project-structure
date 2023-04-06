import React, {ReactNode, FC} from 'react';

type LayoutProps = {
  children:ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <div>Layout</div>
  )
}

export default Layout