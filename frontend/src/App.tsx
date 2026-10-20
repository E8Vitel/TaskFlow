import './App.css'

function App() {
  const estados = [
    {
      nombre: "Pendiente",
      fondo: "#FEE2E2",
      texto: "#991B1B"
    },
    {
      nombre: "En progreso",
      fondo: "#FEF3C7",
      texto: "#92400E"
    },
    {
      nombre: "Completado",
      fondo: "#DCFCE7",
      texto: "#166534"
    }];

  const proyectos = [
    { id: 1, nombre: "Sitio web", estado: estados[1] },
    { id: 2, nombre: "App móvil", estado: estados[0] },
    { id: 3, nombre: "API de clientes 1", estado: estados[2] },
    { id: 4, nombre: "API de clientes 2", estado: estados[2] },
    { id: 5, nombre: "API de clientes 3", estado: estados[2] },
    { id: 6, nombre: "API de clientes 4", estado: estados[2] },
    { id: 7, nombre: "API de clientes 5", estado: estados[2] }
  ];

  return (
    <main>
      <h1>TaskFlow</h1>
      <section className="proyectos">
        {proyectos.map((proyecto) => {
          return (
            <article className="tarjeta" key={proyecto.id}>
              <h3>{proyecto.nombre}</h3>
              <p className="estado" style={{ backgroundColor: proyecto.estado.fondo, color: proyecto.estado.texto }}>
                {proyecto.estado.nombre}
              </p>
            </article>
          )
        })}
      </section>
    </main>
  );
}

export default App;