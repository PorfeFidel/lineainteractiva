import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TimelineEvent = ({ year, title, description, expanded, onClick }) => (
  <div className="mb-4">
    <div 
      className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-50 ${expanded ? 'bg-blue-50' : 'bg-white'}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="w-20 text-lg font-bold">{year}</div>
        <div className="flex-1">
          <h3 className="font-semibold">{title}</h3>
          {expanded && (
            <div className="mt-2">
              <p className="mb-2">{description}</p>
              <div className="mt-4 space-y-2">
                <textarea 
                  className="w-full p-2 border rounded" 
                  placeholder="Añade tus notas aquí..."
                  rows="2"
                />
                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    className="flex-1 p-2 border rounded" 
                    placeholder="URL de la imagen"
                  />
                  <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const TimelineInteractive = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);
  
  const events = [
    {
      year: 1808,
      title: "Crisis de la monarquía española",
      description: "Napoleón invade España, causando una crisis política en las colonias americanas."
    },
    {
      year: 1810,
      title: "Inicio de movimientos independentistas",
      description: "El Grito de Dolores en México y la Primera Junta de Buenos Aires marcan el inicio de la independencia."
    },
    {
      year: 1816,
      title: "Independencia de Argentina",
      description: "El Congreso de Tucumán declara la independencia de las Provincias Unidas del Río de la Plata."
    },
    {
      year: 1821,
      title: "Independencia de Perú y México",
      description: "San Martín entra a Lima y México logra su independencia con el Plan de Iguala."
    },
    {
      year: 1824,
      title: "Batalla de Ayacucho",
      description: "Victoria decisiva que asegura la independencia de Sudamérica del dominio español."
    }
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Línea de Tiempo Interactiva: Independencia de América Latina</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {events.map((event) => (
            <TimelineEvent
              key={event.year}
              {...event}
              expanded={expandedEvent === event.year}
              onClick={() => setExpandedEvent(expandedEvent === event.year ? null : event.year)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineInteractive;
