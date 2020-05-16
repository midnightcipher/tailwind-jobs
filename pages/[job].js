import JobPosting from '@/components/JobPosting'
import { allJobs, getJob } from '@/lib/job-queries'

export async function getStaticPaths() {
  const jobs = await allJobs()

  return {
    paths: jobs.map((job) => ({ params: { job: job.path } })),
    fallback: false,
  }
}

export async function getStaticProps({ params: { job } }) {
  return {
    props: {
      job: await getJob(job),
    },
  }
}

export default function JobPage({ job }) {
  return <JobPosting job={job} />
}
