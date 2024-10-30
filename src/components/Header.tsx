import React from 'react';
import { Plus, RefreshCw, X } from 'lucide-react';

interface HeaderProps {
  showForm: boolean;
  onToggleForm: () => void;
  onRefresh: () => void;
}

export function Header({ showForm, onToggleForm, onRefresh }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          FastCash - Gestión de Préstamos
        </h1>
        <p className="text-gray-600">Sistema de Recolección y Validación de Datos</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={onRefresh}
          className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-200 transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          Actualizar
        </button>
        <button
          onClick={onToggleForm}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          {showForm ? 'Cancelar' : 'Nuevo Registro'}
        </button>
      </div>
    </div>
  );
}