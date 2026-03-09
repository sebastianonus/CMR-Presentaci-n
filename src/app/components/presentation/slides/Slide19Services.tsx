import { Truck, Store, Warehouse, Package } from 'lucide-react';

export function Slide19Services() {
  const services = [
    {
      icon: Truck,
      title: 'Última Milla',
      description: 'Distribución rápida y eficiente al punto final',
    },
    {
      icon: Store,
      title: 'Rutas B2B',
      description: 'Conectividad entre centros y puntos de venta',
    },
    {
      icon: Warehouse,
      title: 'Almacenaje Flexible',
      description: 'Soluciones adaptadas a tu volumen',
    },
    {
      icon: Package,
      title: 'Picking y Fulfillment',
      description: 'Alta precisión en preparación de pedidos',
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col p-12 bg-card rounded-3xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-5xl mb-4 text-[rgb(var(--onus-dark-blue-rgb))]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Servicios de ONUS Express
        </h1>
        <div className="w-24 h-1 bg-[rgb(var(--onus-turquoise-rgb))] rounded-full" />
        <p className="text-2xl md:text-3xl font-semibold mt-5 text-[rgb(var(--onus-dark-blue-rgb))]">Roadmap estructurado para una transición sin fricciones</p>
      </div>

      <p className="text-xl text-foreground/80 mb-8">Catálogo completo de soluciones logísticas:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[rgb(var(--onus-turquoise-rgb))]/5 to-transparent p-8 rounded-2xl border-l-4 border-[rgb(var(--onus-turquoise-rgb))] hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-[rgb(var(--onus-turquoise-rgb))]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <service.icon className="w-10 h-10 text-[rgb(var(--onus-turquoise-rgb))]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-[rgb(var(--onus-dark-blue-rgb))]">{service.title}</h3>
                <p className="text-foreground/70 text-lg">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-[rgb(var(--onus-dark-blue-rgb))] to-[rgb(var(--onus-dark-blue-rgb))]/80 p-8 rounded-2xl">
        <p className="text-white text-xl text-center">
          <strong className="text-[rgb(var(--onus-turquoise-rgb))]">Solución end-to-end:</strong>
          <span className="ml-2">Desde el almacén hasta el cliente final</span>
        </p>
      </div>
    </div>
  );
}
