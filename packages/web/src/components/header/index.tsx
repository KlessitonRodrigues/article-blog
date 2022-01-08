import Link from 'next/link'
import { useState } from 'react'

import * as s from './styled'

const Header = () => {
  const [showMenus, setShowMenus] = useState({ cat: false, author: false })

  return (
    <s.Container
      onMouseLeave={() => setShowMenus({ cat: false, author: false })}
    >
      <s.Background>
        <s.Title>
          <Link href="/posts">NextJS Blog</Link>
        </s.Title>
        <nav>
          <s.NavItem
            onMouseEnter={() => setShowMenus({ author: false, cat: true })}
          >
            Categories
          </s.NavItem>
          <s.NavItem
            onMouseEnter={() => setShowMenus({ author: true, cat: false })}
          >
            Authors
          </s.NavItem>
        </nav>
      </s.Background>
      <s.HiddenMenu show={showMenus.cat}>
        <s.HiddenMenuItem>Cat</s.HiddenMenuItem>
        <s.HiddenMenuItem>Cat</s.HiddenMenuItem>
      </s.HiddenMenu>
      <s.HiddenMenu show={showMenus.author}>
        <s.HiddenMenuItem>Authors</s.HiddenMenuItem>
        <s.HiddenMenuItem>Authors</s.HiddenMenuItem>
      </s.HiddenMenu>
    </s.Container>
  )
}

export default Header
