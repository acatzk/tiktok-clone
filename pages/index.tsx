import type { NextPage } from 'next'
import Layout from 'layouts/default'
import Sidebar from 'components/Sidebar'

const Index: NextPage = () => {
  return (
    <Layout>
      <div className="relative flex flex-row max-w-5xl mx-auto">
        <Sidebar />
        <section className="p-4 ml-14 md:absolute right-0 w-full md:w-[65%]">
          orem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas, temporibus, quos
          veritatis aliquid consectetur illo facilis sequi possimus officiis perspiciatis mollitia,
          harum distinctio repellat aliquam cumque est commodi excepturi.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repudiandae quas, temporibus, quos veritatis aliquid
          consectetur illo facilis sequi possimus officiis perspiciatis mollitia, harum distinctio
          repellat aliquam cumque est commodi excepturi.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repudiandae quas, temporibus, quos veritatis aliquid consectetur illo
          facilis sequi possimus officiis perspiciatis mollitia, harum distinctio repellat aliquam
          cumque est commodi excepturi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae quas, temporibus, quos veritatis aliquid consectetur illo facilis sequi
          possimus officiis perspiciatis mollitia, harum distinctio repellat aliquam cumque est
          commodi excepturi.Lorem ipsum orem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae quas, temporibus, quos veritatis aliquid consectetur illo facilis sequi
          possimus officiis perspiciatis mollitia, harum distinctio repellat aliquam cumque est
          commodi excepturi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quas, temporibus, quos veritatis aliquid consectetur illo facilis sequi possimus officiis
          perspiciatis mollitia, harum distinctio repellat aliquam cumque est commodi
          excepturi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas,
          temporibus, quos veritatis aliquid consectetur illo facilis sequi possimus officiis
          perspiciatis mollitia, harum distinctio repellat aliquam cumque est commodi
          excepturi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas,
          temporibus, quos veritatis aliquid consectetur illo facilis sequi possimus officiis
          perspiciatis mollitia, harum distinctio repellat aliquam cumque est commodi
          excepturi.Lorem ipsum
        </section>
      </div>
    </Layout>
  )
}

export default Index
