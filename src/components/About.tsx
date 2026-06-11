import { Row, Col } from 'antd'

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

      <Row gutter={[48, 32]} align="middle">
        {/* Text side */}
        <Col xs={24} md={12}>
          <p style={{
            fontSize: 16,
            color: '#7a6b6b',
            lineHeight: 1.8,
            marginBottom: 16,
          }}>
            I'm a self-directed developer based in Singapore, building real projects
            as my way of learning. I care deeply about the details — the way a button
            feels, how an animation breathes, why a layout earns trust.
          </p>
          <p style={{
            fontSize: 16,
            color: '#7a6b6b',
            lineHeight: 1.8,
          }}>
            Currently focused on React, TypeScript, and Spring Boot — and always
            looking for the next thing worth building.
          </p>
        </Col>

        {/* Visual side */}
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
    </section>
  )
}