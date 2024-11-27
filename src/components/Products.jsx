const products = [
  {
    id: 1,
    name: 'Pele serena 150ml',
    category: 'Hidratantes',
    price: 120.90,
    image: '/pele-serena.jpeg'
  },
  {
    id: 2,
    name: 'Puro toque 100g',
    category: 'Sabonetes',
    price: 9.90,
    image: '/sabonete.jpeg'
  },
  {
    id: 3,
    name: 'SolDerm 250ml',
    category: 'Protetor Solar',
    price: 109.90,
    image: '/protetor-solar.jpeg'
  },
  {
    id: 4,
    name: 'LotusSun 200ml',
    category: 'Protetor Solar',
    price: 84.99,
    image: '/protetor.jpeg'
  },
  {
    id: 5,
    name: 'Kit Pele Serena',
    category: 'KIT',
    price: 390.99,
    image: '/kit.jpeg'
  },
  {
    id: 6,
    name: 'DermoFresh 70ml',
    category: 'Desodorante',
    price: 39.90,
    image: '/desodorante.jpeg'
  },
  {
    id: 7,
    name: 'LotusSpray 100ml',
    category: 'Desodorante',
    price: 45.90,
    image: '/desodorante-spray.jpeg'
  },
  {
    id: 8,
    name: 'LotusLips 3,5g',
    category: 'Batom',
    price: 43.86,
    image: '/batom.jpeg'
  },
  {
    id: 9,
    name: 'Susurro de frescor 150ml',
    category: 'Perfume',
    price: 119.90,
    image: '/perfume.jpeg'
  },
  {
    id: 10,
    name: 'Mistério suave 200ml',
    category: 'Body Splash',
    price: 79.90,
    image: '/body-splash.jpeg'
  }
]

export default function Products() {
  return ( 
    <div className="max-w-7xl mx-auto mt-9">
      <h1 className="text-3xl font-bold mb-14" >Nossos Produtos</h1>
      <div className="grid grid-cols-5 gap-12">
      {products.map((product, index) => (
        <div key={index} className="w-56 h-80 border-2 rounded-lg">
          <div className="w-full h-40 relative">
            <img className="object-cover w-full h-full" src={product.image} alt={product.name}></img>
          </div>
          <div className="p-2">
            <p className="text-gray-500 mb-2 text-sm">{product.category}</p>
            <p className="text-lg font-bold mb-11">{product.name}</p>
            <div className="flex justify-between">
              <p className="font-bold text-lg text-[#055664]">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
              </p>
              <button className="bg-[#C0EFF8] text-[#055664] font-bold px-2 py-1 rounded-xl">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}