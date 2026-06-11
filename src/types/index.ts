export interface Project {
  id: string
  title: string
  description: string
  tech_stack: string[]
  link: string | null
  thumbnail_url: string | null
  featured: boolean
  created_at: string
}

export interface Skill {
  id: string
  name: string
  category: string
  created_at: string
}