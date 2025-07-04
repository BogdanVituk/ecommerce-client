export interface IProductItem {
    id: number
    title: string
    price: number
    description: string
    category: Category
    images: string[]
}
  
interface Category {
id: number
name: string
image: string
}
  
export interface ICartItem extends IProductItem {
  count: number
} 