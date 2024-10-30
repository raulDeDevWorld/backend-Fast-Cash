import React from 'react';
import { Save } from 'lucide-react';
import { DataItem } from '../types';

interface DataFormProps {
  data: DataItem;
  isEditing: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (data: DataItem) => void;
}

export function DataForm({ data, isEditing, onSubmit, onChange }: DataFormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-gray-50 p-6 rounded-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Contactos</label>
          <input
            type="text"
            value={data.Contactos}
            onChange={(e) => onChange({ ...data, Contactos: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Número de Préstamo</label>
          <input
            type="text"
            value={data.Número_de_prestamo}
            onChange={(e) => onChange({ ...data, Número_de_prestamo: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">ID de Sub-factura</label>
          <input
            type="text"
            value={data.ID_de_sub_factura}
            onChange={(e) => onChange({ ...data, ID_de_sub_factura: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Estado de Crédito</label>
          <select
            value={data.Estado_de_credito}
            onChange={(e) => onChange({ ...data, Estado_de_credito: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Seleccionar estado</option>
            <option value="Aprobado">Aprobado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Rechazado">Rechazado</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Nombre del Cliente</label>
          <input
            type="text"
            value={data.Nombre_del_cliente}
            onChange={(e) => onChange({ ...data, Nombre_del_cliente: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Teléfono Móvil</label>
          <input
            type="text"
            value={data.Número_de_tel_movil}
            onChange={(e) => onChange({ ...data, Número_de_tel_movil: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Cliente Nuevo</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={data.Clientes_nuevos}
              onChange={(e) => onChange({ ...data, Clientes_nuevos: e.target.checked })}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Sí</span>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Valor Solicitado</label>
          <input
            type="number"
            value={data.Valor_solicitado_VS}
            onChange={(e) => onChange({ ...data, Valor_solicitado_VS: Number(e.target.value) })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Valor Enviado</label>
          <input
            type="number"
            value={data.Valor_enviado_VE}
            onChange={(e) => onChange({ ...data, Valor_enviado_VE: Number(e.target.value) })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Registro de Notas</label>
          <textarea
            value={data.Registro_de_notas}
            onChange={(e) => onChange({ ...data, Registro_de_notas: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Nombre del Producto</label>
          <input
            type="text"
            value={data.Nombre_del_producto}
            onChange={(e) => onChange({ ...data, Nombre_del_producto: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Fecha de Reembolso</label>
          <input
            type="date"
            value={data.Fecha_de_reembolso}
            onChange={(e) => onChange({ ...data, Fecha_de_reembolso: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Fecha de Creación</label>
          <input
            type="date"
            value={data.Fecha_de_creacion_tarea}
            onChange={(e) => onChange({ ...data, Fecha_de_creacion_tarea: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Fecha de Tramitación</label>
          <input
            type="date"
            value={data.Fecha_de_tramitacion_caso}
            onChange={(e) => onChange({ ...data, Fecha_de_tramitacion_caso: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Empresa</label>
          <input
            type="text"
            value={data.Nombre_de_la_empresa}
            onChange={(e) => onChange({ ...data, Nombre_de_la_empresa: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Usuario de Cobro</label>
          <input
            type="text"
            value={data.Apodo_de_usuario_de_cobro}
            onChange={(e) => onChange({ ...data, Apodo_de_usuario_de_cobro: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
        >
          <Save className="w-5 h-5" />
          {isEditing ? 'Actualizar' : 'Guardar'}
        </button>
      </div>
    </form>
  );
}