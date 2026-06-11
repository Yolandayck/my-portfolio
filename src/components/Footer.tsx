import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

export default function Footer() {
  return (
    <footer style={{
      background: '#fff',
      borderTop: '1px solid #f0e8e4',
      padding: '32px 24px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
        maxWidth: 960,
        margin: '0 auto',
      }}>
        <p style={{ fontSize: 14, color: '#a89090', margin: 0 }}>
          © {new Date().getFullYear()} Made by{' '}
          <span style={{ color: '#c4848a', fontWeight: 500 }}>Yolanda</span>
        </p>

        <div style={{ display: 'flex', gap: 16 }}>
          <a
            href="https://github.com/Yolandayck"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#a89090', fontSize: 22, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c4848a')}
            onMouseLeave={e => (e.currentTarget.style.color = '#a89090')}
          >
            <GithubOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/yolanda-yen/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#a89090', fontSize: 22, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c4848a')}
            onMouseLeave={e => (e.currentTarget.style.color = '#a89090')}
          >
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </footer>
  )
}