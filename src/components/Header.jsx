import Logo from "../assets/logo.svg";

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="h-20 flex items-center gap-20 mb-20">
      <img src={Logo} width={50} alt="" />
      <div className="flex gap-14 text-white font-light">
        <button onClick={() => scrollToSection('inicio')}>Início</button>
        <button onClick={() => scrollToSection('produtos')}>Produtos</button>
        <button onClick={() => scrollToSection('sobre')}>Sobre nós</button>
        <button onClick={() => scrollToSection('contato')}>Contato</button>
      </div>
    </header>
  );
}
