import ProductList from '@/components/ProductList'
import { IProduct } from '@/interface'
import axios from 'axios'
import Image from 'next/image'


export default function Home({ products }: { products: IProduct[] }) {
  return (
    <main
      className=''
    >
      <ProductList products={products} />
    </main>
  )
}

export async function getStaticProps() {
  try {
    const { data: products } = await axios('http://localhost:3000/api/products')
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
