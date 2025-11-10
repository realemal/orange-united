import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

interface Doc { 
  id: string
  title: string
  summary?: string
  url: string
  body: string
  category?: string
  date?: string
}

function readArticles(dir: string): Doc[] {
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => (f.endsWith('.md') || f.endsWith('.mdx')) && !f.startsWith('_TEMPLATE'))
  
  return files.map(f => {
    const fp = path.join(dir, f)
    const raw = fs.readFileSync(fp, 'utf8')
    const { data, content } = matter(raw)
    const slug = f.replace(/\.(md|mdx)$/, '')
    
    return {
      id: slug,
      title: (data as any).title || slug,
      summary: (data as any).excerpt || '',
      url: `/articles/${slug}/`,
      body: content.substring(0, 500), // First 500 chars for search
      category: (data as any).category || '',
      date: (data as any).date ? new Date((data as any).date).toISOString() : ''
    }
  })
}

function readBoardMembers(): Doc[] {
  const boardFile = path.join(process.cwd(), 'src/data/board-members.json')
  if (!fs.existsSync(boardFile)) return []
  
  const data = JSON.parse(fs.readFileSync(boardFile, 'utf8'))
  return data.map((member: any) => ({
    id: `board-${member.id}`,
    title: member.name,
    summary: `${member.title} - ${member.area}`,
    url: '/school-board/',
    body: member.bio || '',
    category: 'School Board'
  }))
}

// Build the search index
const articlesDir = path.join(process.cwd(), 'src/content/articles')
const articles = readArticles(articlesDir)
const boardMembers = readBoardMembers()

const searchIndex = {
  articles,
  boardMembers,
  generated: new Date().toISOString()
}

const outputDir = path.join(process.cwd(), 'src/data/search')
fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(
  path.join(outputDir, 'index.json'),
  JSON.stringify(searchIndex, null, 2),
  'utf8'
)

console.log(`✅ Search index built: ${articles.length} articles, ${boardMembers.length} board members`)

