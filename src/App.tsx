import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataItem } from './types';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { DataForm } from './components/DataForm';
import { DataTable } from './components/DataTable';

const emptyForm: DataItem = {
  Contactos: '',
  Número_de_prestamo: '',
  ID_de_sub_factura: '',
  Estado_de_credito: '',
  Nombre_del_cliente: '',
  Número_de_tel_movil: '',
  Clientes_nuevos: false,
  Valor_solicitado_VS: 0,
  Valor_enviado_VE: 0,
  Registro_de_notas: '',
  Nombre_del_producto: '',
  Fecha_de_reembolso: '',
  Fecha_de_creacion_tarea: '',
  Fecha_de_tramitacion_caso: '',
  Nombre_de_la_empresa: '',
  Apodo_de_usuario_de_cobro: ''
};

function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const [formData, setFormData] = useState<DataItem>(emptyForm);
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && formData._id) {
        await axios.put(`http://localhost:5000/api/data/${formData._id}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/data', formData);
      }
      fetchData();
      setFormData(emptyForm);
      setShowForm(false);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleEdit = (item: DataItem) => {
    setFormData(item);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar este registro?')) {
      try {
        await axios.delete(`http://localhost:5000/api/data/${id}`);
        fetchData();
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
          <Header
            showForm={showForm}
            onToggleForm={() => {
              setFormData(emptyForm);
              setIsEditing(false);
              setShowForm(!showForm);
            }}
            onRefresh={fetchData}
          />

          {showForm && (
            <DataForm
              data={formData}
              isEditing={isEditing}
              onSubmit={handleSubmit}
              onChange={setFormData}
            />
          )}

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <DataTable
            data={filteredData}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;