import { Button } from 'antd'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Ambient blob */}
      <div style={{
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
        background: 'radial-gradient(circle, #e8b4b8 0%, #f5d6d8 40%, transparent 70%)',
        opacity: 0.35,
        top: '50%',
        left: '50%',
        transform: 'translate(-60%, -50%)',
        animation: 'blobFloat 8s ease-in-out infinite',
        zIndex: 0,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: 640,
        width: '100%',
      }}>
        <p style={{
          fontSize: 13,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#c4848a',
          marginBottom: 16,
          fontWeight: 500,
        }}>
          Software Developer
        </p>

        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(32px, 7vw, 80px)',
          fontWeight: 700,
          color: '#3d3535',
          lineHeight: 1.1,
          marginBottom: 24,
        }}>
          Hi, I'm Yolanda.
        </h1>

        <p style={{
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: '#7a6b6b',
          lineHeight: 1.7,
          marginBottom: 40,
          padding: '0 8px',
        }}>
            I build across the full stack — from embedded robotic systems and mobile apps to AI-powered recognition tools and web platforms. 
            Always learning, always shipping something new.

        </p>

        <Button
          type="primary"
          size="large"
          href="#projects"
          style={{ borderRadius: 40, paddingInline: 36, height: 48 }}
        >
          See my work
        </Button>
      </div>

      <style>{`
        @keyframes blobFloat {
          0%, 100% { transform: translate(-60%, -50%) scale(1); }
          50% { transform: translate(-60%, -54%) scale(1.05); }
        }
      `}</style>
    </section>
  )
}