export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto mt-9">
      <h1 className="text-3xl font-bold mb-6" >Sobre nós</h1>
      <div className="flex gap-6 justify-between">
        <div className="flex flex-col gap-3 w-[700px] text-xl">
          <p>Somos a Hipobeauty, uma empresa de cosméticos idealizada para atender e compreender as necessidades de pessoas que sofrem com algum tipo de alergia dermatológica.</p>
          <p>Nossa principal missão é oferecer mais opções de cosméticos para pessoas alérgicas através de produtos desenvolvidos com ingredientes selecionados e formulados de acordo com a sua necessidade.</p>
          <p className="mb-7">Nossas linhas são 100% hipoalergênicas e podem ser com ou sem cheiro, trabalhamos principalmente com Cremes, Perfumes e desodorantes.</p>
          <h1 className="text-center text-[#055664] font-bold text-3xl self-end">“ O nosso compromisso é de oferecer cosméticos que realcem sua beleza e atendam às suas necessidades. “</h1>
        </div>

        <img src="empresa.png" width="500px" alt="" />
      </div>

      
    </div>
  )
}