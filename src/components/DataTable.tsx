import React from 'react';
import { Pencil, Trash2, RefreshCw } from 'lucide-react';
import { DataItem } from '../types';

interface DataTableProps {
  data: DataItem[];
  loading: boolean;
  onEdit: (item: DataItem) => void;
  onDelete: (id: string) => void;
}

export function DataTable({ data, loading, onEdit, onDelete }: DataTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Préstamo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Reembolso</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-center">
                <div className="flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
                  <span className="ml-2">Cargando datos...</span>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                No se encontraron registros
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{item.Nombre_del_cliente}</div>
                  <div className="text-sm text-gray-500">{item.Número_de_tel_movil}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{item.Número_de_prestamo}</div>
                  <div className="text-sm text-gray-500">{item.Nombre_del_producto}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.Estado_de_credito === 'Aprobado'
                      ? 'bg-green-100 text-green-800'
                      : item.Estado_de_credito === 'Pendiente'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.Estado_de_credito}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">${item.Valor_enviado_VE.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">de ${item.Valor_solicitado_VS.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(item.Fecha_de_reembolso).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => onEdit(item)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => item._id && onDelete(item._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}