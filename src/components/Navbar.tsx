import { useState } from 'react'
import { Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Projects', 'Skills', 'Contact']

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {links.map(link => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={onClick}
          style={{
            color: '#7a6b6b',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 500,
            display: 'block',
            padding: '8px 0',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#c4848a')}
          onMouseLeave={e => (e.currentTarget.style.color = '#7a6b6b')}
        >
          {link}
        </a>
      ))}
    </>
  )

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(250, 247, 244, 0.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #f0e8e4',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
    }}>
      <span style={{
        fontFamily: 'Georgia, serif',
        fontSize: 20,
        fontWeight: 600,
        color: '#3d3535',
        letterSpacing: '0.02em',
      }}>
        yolanda.dev
      </span>

      {/* Desktop links */}
      <nav style={{
        display: 'flex',
        gap: 32,
      }}
        className="desktop-nav"
      >
        <NavLinks />
      </nav>

      {/* Mobile hamburger */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        className="mobile-nav"
        onClick={() => setOpen(true)}
        style={{ color: '#3d3535', fontSize: 18 }}
      />

      <Drawer
        title="yolanda.dev"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={220}
      >
        <NavLinks onClick={() => setOpen(false)} />
      </Drawer>
    </header>
  )
}