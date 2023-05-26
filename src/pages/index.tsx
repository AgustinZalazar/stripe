import { IProduct } from '@/interface'
import ProductList from '@/components/ProductList'
import axios from 'axios'


export default function Home({ products }: { products: IProduct[] }) {
  return (
    <main className='w-full h-full'>
      <ProductList products={products} />
    </main>
  )
}

export async function getStaticProps() {
  try {
    const { data: products } = await axios(`${process.env.NEXT_URL}/api/products`)
    return {
      props: { products },
      revalidate: 86400
    }
  } catch (error) {
    console.log(error)
    return {
      props: { producs: [] }
    }
  }
}
