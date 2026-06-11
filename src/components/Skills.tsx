import { useEffect, useState } from 'react'
import { Tag, Spin, Row, Col } from 'antd'
import { supabase } from '../lib/supabaseClient'
import type { Skill } from '../types'

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSkills() {
      const { data } = await supabase
        .from('skills')
        .select('*')
        .order('category')
        .order('name')
      if (data) setSkills(data)
      setLoading(false)
    }
    fetchSkills()
  }, [])

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <section id="skills" style={{
      padding: '100px 24px',
      background: '#fff8f6',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <p style={{
          fontSize: 13,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#c4848a',
          fontWeight: 500,
          marginBottom: 16,
        }}>
          Skills
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: '#3d3535',
          lineHeight: 1.2,
          marginBottom: 48,
        }}>
          What I work with.
        </h2>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 64 }}>
            <Spin size="large" />
          </div>
        ) : skills.length === 0 ? (
          <p style={{ color: '#7a6b6b' }}>No skills yet — check back soon.</p>
        ) : (
          <Row gutter={[32, 40]}>
            {Object.entries(grouped).map(([category, items]) => (
              <Col key={category} xs={24} sm={12}>
                <p style={{
                  fontSize: 12,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#a89090',
                  fontWeight: 600,
                  marginBottom: 14,
                }}>
                  {category}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {items.map(skill => (
                    <Tag
                      key={skill.id}
                      style={{
                        borderRadius: 20,
                        padding: '6px 16px',
                        fontSize: 14,
                        background: '#fdf0f1',
                        border: '1px solid #f0e0e2',
                        color: '#3d3535',
                        fontWeight: 500,
                      }}
                    >
                      {skill.name}
                    </Tag>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </section>
  )
}