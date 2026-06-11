import { Card } from 'antd'
import { MailOutlined, PhoneOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 24px', maxWidth: 960, margin: '0 auto' }}>
      <p style={{
        fontSize: 13,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#c4848a',
        fontWeight: 500,
        marginBottom: 16,
      }}>
        Contact
      </p>

      <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 700,
        color: '#3d3535',
        lineHeight: 1.2,
        marginBottom: 48,
      }}>
        Let's get in touch.
      </h2>

      <Card style={{
        borderRadius: 24,
        border: '1px solid #f0e8e4',
        background: 'linear-gradient(135deg, #fdf6f0 0%, #faf0f1 100%)',
        boxShadow: '0 4px 24px rgba(196, 132, 138, 0.1)',
        maxWidth: 480,
        width: '100%',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[
            { icon: <UserOutlined />, label: 'Name', value: 'Yolanda' },
            { icon: <MailOutlined />, label: 'Email', value: 'yolandayenck@gmail.com' },
            { icon: <PhoneOutlined />, label: 'Phone', value: '+65 8023 6268' },
            { icon: <EnvironmentOutlined />, label: 'Location', value: 'Singapore, SG' },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: '#f5eeee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c4848a',
                fontSize: 18,
                flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#a89090', margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {label}
                </p>
                <p style={{ fontSize: 16, color: '#3d3535', margin: 0, fontWeight: 500 }}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}