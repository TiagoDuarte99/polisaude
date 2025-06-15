import { Mail, Phone, MapPinHouse } from 'lucide-react';
const Contactos = () => {
  return (
    <div>
      <div className="flex flex-col h-full items-center pt-[100px] pb-[80px]">
        <h2 className="mb-3 text-5xl font-bold">Contactos</h2>
        <p className="mb-8">
          Entre em contacto connosco para agendar o seu serviço ou esclarecer
          qualquer dúvida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1300px] mx-auto px-4 py-6 ">
        <div className="bg-secondary p-6 flex flex-col h-full items-center rounded-md shadow">
          <Mail size={48} className="text-primary" />
          <p className="pt-3 text-2xl text-center">Email</p>
          <p className="text-center">polisaude@polisaude.pt</p>
        </div>
        <div className="bg-secondary p-6 flex flex-col h-full items-center rounded-md shadow">
          <MapPinHouse size={48} className="text-primary" />
          <p className="pt-3 text-2xl text-center">Endereço</p>
          <p className="pt-3 text-center">
            Jardim da, Jardim da Praça do Município, Praça do Município 40,
            4730-760 Vila Verde
          </p>
        </div>
        <div className="bg-secondary p-6 flex flex-col h-full items-center rounded-md shadow">
          <Phone size={48} className="text-primary" />
          <p className="pt-3 text-2xl text-center">Telemóvel</p>
          <p className="pt-3 text-center">+351 910 000 000</p>
        </div>
      </div>

      <div className="mx-auto flex h-full justify-center p-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.66653606460386!2d-8.436631801416826!3d41.6485620799328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2501aa1117911b%3A0x84852c4bad446454!2sC%C3%A2mara%20Municipal%20de%20Vila%20Verde!5e0!3m2!1spt-PT!2spt!4v1707647832550!5m2!1spt-PT!2spt"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contactos;
