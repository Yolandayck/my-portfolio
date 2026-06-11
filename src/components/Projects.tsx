import { useEffect, useState } from 'react'
import { Card, Tag, Button, Spin, Row, Col } from 'antd'
import { supabase } from '../lib/supabaseClient'
import type { Project } from '../types'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false })
      if (data) setProjects(data)
      setLoading(false)
    }
    fetchProjects()
  }, [])

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ padding: '100px 24px', maxWidth: 960, margin: '0 auto' }}>
      <p style={{
        fontSize: 13,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#c4848a',
        fontWeight: 500,
        marginBottom: 16,
      }}>
        Projects
      </p>

      <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 700,
        color: '#3d3535',
        lineHeight: 1.2,
        marginBottom: 48,
      }}>
        Things I've built.
      </h2>

      {loading ? (
        <div style={{ textAlign: 'center', padding: 64 }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          {/* Featured projects */}
          {featured.length > 0 && (
            <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
              {featured.map(project => (
                <Col key={project.id} xs={24} sm={12} lg={8}>
                  <ProjectCard project={project} featured />
                </Col>
              ))}
            </Row>
          )}

          {/* Rest of projects */}
          {rest.length > 0 && (
            <Row gutter={[16, 16]}>
              {rest.map(project => (
                <Col key={project.id} xs={24} sm={12} lg={8}>
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
          )}

          {projects.length === 0 && (
            <p style={{ color: '#7a6b6b' }}>No projects yet — check back soon.</p>
          )}
        </>
      )}
    </section>
  )
}

function ProjectCard({ project, featured = false }: { project: Project, featured?: boolean }) {
  return (
    <Card
      style={{
        borderRadius: 16,
        border: '1px solid #f0e8e4',
        background: featured ? 'linear-gradient(135deg, #fdf6f0 0%, #faf0f1 100%)' : '#fff',
        boxShadow: featured ? '0 4px 24px rgba(196, 132, 138, 0.1)' : 'none',
        height: '100%',
      }}
      cover={project.thumbnail_url ? (
        <img
          src={project.thumbnail_url}
          alt={project.title}
          style={{ borderRadius: '16px 16px 0 0', height: 180, objectFit: 'cover' }}
        />
      ) : undefined}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <h3 style={{
          fontFamily: 'Georgia, serif',
          fontSize: featured ? 20 : 17,
          fontWeight: 700,
          color: '#3d3535',
          margin: 0,
        }}>
          {project.title}
        </h3>
        {featured && (
          <Tag color="pink" style={{ borderRadius: 20, fontSize: 11 }}>Featured</Tag>
        )}
      </div>

      <p style={{ fontSize: 14, color: '#7a6b6b', lineHeight: 1.7, marginBottom: 16 }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
        {project.tech_stack.map(tech => (
          <Tag key={tech} style={{
            borderRadius: 20,
            background: '#f5eeee',
            border: 'none',
            color: '#c4848a',
            fontSize: 12,
          }}>
            {tech}
          </Tag>
        ))}
      </div>

      {project.link && (
        <Button
          type="link"
          href={project.link}
          target="_blank"
          style={{ padding: 0, color: '#c4848a', fontWeight: 500 }}
        >
          View project →
        </Button>
      )}
    </Card>
  )
}