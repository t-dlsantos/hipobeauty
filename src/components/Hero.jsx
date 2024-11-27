import Button from "./Button"

export default function Hero() {
  return (
    <>
      <h1 className="font-bold text-5xl w-[720px] leading-snug text-white mb-7">
        Produtos Hipoalergênicos. Cuide da pessoa mais importante, você mesma!!!
      </h1>
      <p className="text-2xl text-white mb-12">Beleza que respeita sua pele.</p>
      <button className="bg-[#055664] px-10 py-3 text-lg font-bold text-white rounded-xl">Comprar Produtos</button>
    </>
  );
}