import type { NextPage } from 'next'
import Layout from 'layouts/default'

const Index: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-indigo-800">Hello world</h1>
      </div>
    </Layout>
  )
}

export default Index
