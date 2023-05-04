let lista = [
    { nombre: "Jennifer Almiron", tipo: "string" },
    { edad: 26, tipo: "number" },
    { esDesarrollador: true, tipo: "boolean" },
    { fecha: new Date("1996-07-11"), tipo: "date" },
    {
      libro: {
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        fecha: 1943,
        url: "https://www.amazon.com/Principito-Spanish-Antoine-Saint-Exup%C3%A9ry/dp/0156013924"
      },
      tipo: "object"
    }
  ];
  
  console.log(lista);