import polisaudeLogotipo from '../../assets/polisaudeLogotipo.png';

const Home = () => {
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-4">
      {/* ESQUERDA */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <h1 className="mb-3 text-6xl font-bold">
          Espaço Polisaude
        </h1>
        <p className="mb-8 text-muted-foreground">
          O Espaço Polisaúde (Vila Verde - Braga) tem como objectivo a promoção
          e manutenção de saúde.
        </p>
      </div>
      {/* DIREITA */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <img
          src={polisaudeLogotipo}
          alt="Descrição da imagem"
          className="w-full max-w-[550px] h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
