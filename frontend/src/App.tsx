import './App.css'
import { useState } from 'react'


function App() {
  const estados = [
    {
      id: 1,
      nombre: "Pendiente",
      fondo: "#FEE2E2",
      texto: "#991B1B"
    },
    {
      id: 2,
      nombre: "En progreso",
      fondo: "#FEF3C7",
      texto: "#92400E"
    },
    {
      id: 3,
      nombre: "Completado",
      fondo: "#DCFCE7",
      texto: "#166534"
    }];

  const [nombreProyecto, setNombreProyecto] = useState("")
  const [proyectosArray, setProyectosArray] = useState([
    { id: 1, nombre: "Sitio web", estado: estados[1] },
    { id: 2, nombre: "App móvil", estado: estados[0] },
    { id: 3, nombre: "API de clientes", estado: estados[2] }
  ]);
  return (
    <main>
      <h1>TaskFlow</h1>
      <input 
        placeholder="nombre del proyecto" 
        type="text"
        value={nombreProyecto}
        onChange={e => setNombreProyecto(e.target.value)}/>

      <button
        onClick={() => {
          if (nombreProyecto.trim() === "") {
            alert("El nombre de proyecto no puede estar vacio");
            return;
          }
            setProyectosArray([
              ...proyectosArray,
              { id: proyectosArray.length > 0 ? Math.max(...proyectosArray.map(p => p.id)) + 1 : 1, nombre: nombreProyecto, estado: estados[0] }
            ]);
            setNombreProyecto(""); 
        }}>Crear proyecto</button>

      <section className="proyectos">
        {proyectosArray.map((proyecto) => {
          return (
            <article className="tarjeta" key={proyecto.id}>
              <h3>{proyecto.nombre}</h3>
              <select 
              className="estado"
              style={{ backgroundColor: proyecto.estado.fondo, color: proyecto.estado.texto }}
              value={proyecto.estado.id}
              onChange={(e) => {
                const nuevoEstado = estados.find(estado => estado.id === parseInt(e.target.value));
                if (nuevoEstado) {
                  setProyectosArray(proyectosArray.map(p => p.id === proyecto.id ? { ...p, estado: nuevoEstado } : p));
                }
              }}>
                {estados.map((estado) => {
                  return (
                    <option key={estado.id} value={estado.id}>
                      {estado.nombre}
                    </option>
                  )
                })}
              </select>
              <button onClick={
                () => setProyectosArray(proyectosArray.filter(p => p.id !== proyecto.id))
              }
              >X</button>
            </article>
          )
        })}
      </section>
    </main>
  );
}

export default App;