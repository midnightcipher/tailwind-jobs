import path from 'path'
import { promises as fs } from 'fs'
import marked from 'marked'
import frontMatter from 'front-matter'

export async function getJob(jobPath) {
  const content = await fs.readFile(path.resolve(process.cwd(), `jobs/${jobPath}.md`), 'utf8')

  const { attributes: metadata, body: jobMarkdown } = frontMatter(content)
  const jobBody = marked(jobMarkdown)

  return {
    path: jobPath,
    metadata,
    body: jobBody,
  }
}

export async function allJobs() {
  const jobPaths = await fs.readdir(path.resolve(process.cwd(), 'jobs'))

  return await Promise.all(
    jobPaths.map(async (path) => {
      return await getJob(path.replace(/\.md$/, ''))
    })
  )
}
