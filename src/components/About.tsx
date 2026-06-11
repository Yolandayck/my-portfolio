import { Row, Col, Card } from 'antd'
import {
  CodeOutlined,
  BulbOutlined,
  TeamOutlined,
  RocketOutlined,
} from '@ant-design/icons'

const highlights = [
  {
    icon: <CodeOutlined />,
    title: 'Clean Code',
    description: 'I write maintainable, scalable code following best practices and industry standards.',
  },
  {
    icon: <BulbOutlined />,
    title: 'Problem Solving',
    description: 'I enjoy tackling complex challenges and finding elegant solutions to technical problems.',
  },
  {
    icon: <TeamOutlined />,
    title: 'Collaboration',
    description: 'I thrive in team environments and enjoy working with others.',
  },
  {
    icon: <RocketOutlined />,
    title: 'Continuous Learning',
    description: 'I stay updated with the latest technologies and continuously improve my skills.',
  },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: '100px 24px',
      maxWidth: 960,
      margin: '0 auto',
    }}>
      <p style={{
        fontSize: 13,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#c4848a',
        fontWeight: 500,
        marginBottom: 16,
      }}>
        About me
      </p>

      <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 700,
        color: '#3d3535',
        lineHeight: 1.2,
        marginBottom: 40,
      }}>
        I turn ideas into<br />living interfaces.
      </h2>

      {/* Bio + visual */}
      <Row gutter={[48, 32]} align="middle" style={{ marginBottom: 56 }}>
        <Col xs={24} md={12}>
          <p style={{
            fontSize: 16,
            color: '#7a6b6b',
            lineHeight: 1.8,
            marginBottom: 16,
          }}>
            I'm a passionate software engineer-in-training with a strong foundation
            in full-stack development, mobile app design, and emerging technologies
            like AI and computer vision. I have hands-on experience building diverse
            projects — from mobile apps and web platforms to AI-powered recognition
            systems and embedded hardware solutions.
          </p>
          <p style={{
            fontSize: 16,
            color: '#7a6b6b',
            lineHeight: 1.8,
            marginBottom: 16,
          }}>
            I thrive on solving complex problems, designing intuitive user experiences,
            and applying innovative solutions across software, hardware, and cloud
            environments.
          </p>
          <p style={{
            fontSize: 16,
            color: '#7a6b6b',
            lineHeight: 1.8,
          }}>
            I'm continuously exploring new technologies and enjoy transforming ideas
            into functional, impactful solutions.
          </p>
        </Col>

        <Col xs={24} md={12}>
          <div style={{
            background: 'linear-gradient(135deg, #f5d6d8 0%, #e8d5c4 100%)',
            borderRadius: 24,
            height: 280,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 72,
          }}>
            🌿
          </div>
        </Col>
      </Row>

      {/* Highlight cards */}
      <Row gutter={[16, 16]}>
        {highlights.map(({ icon, title, description }) => (
          <Col key={title} xs={24} sm={12} md={6}>
            <Card style={{
              borderRadius: 16,
              border: '1px solid #f0e8e4',
              background: 'linear-gradient(135deg, #fdf6f0 0%, #faf0f1 100%)',
              height: '100%',
              textAlign: 'center',
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: '#f5eeee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c4848a',
                fontSize: 22,
                margin: '0 auto 16px',
              }}>
                {icon}
              </div>
              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 16,
                fontWeight: 700,
                color: '#3d3535',
                marginBottom: 8,
              }}>
                {title}
              </h3>
              <p style={{
                fontSize: 14,
                color: '#7a6b6b',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}