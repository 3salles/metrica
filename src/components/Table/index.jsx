import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import './styles.css';

const productsData = [
  {
    id: 'prod_001',
    name: 'Furadeira de Impacto a bateria Bosch GSB 12V-30, 12V SB',
    stock: 400,
    price: 400,
  },
  {
    id: 'prod_002',
    name: 'Kit de Pontas e Brocas Bosch X-Line 33 pçs',
    stock: 200,
    price: 65,
  },
  {
    id: 'prod_003',
    name: 'Parafusadeira e furadeira Bosch GSR 7-14 E 400W 127V ',
    stock: 400,
    price: 200,
  },
  {
    id: 'prod_004',
    name: 'Vonder Vd 6002 - Caixa Plástica, Preta',
    stock: 0,
    price: 20,
  },
  {
    id: 'prod_005',
    name: 'Tramontina 41001108, Alicate Universal 8 pol, Amarelo',
    stock: 30,
    price: 25,
  },
  {
    id: 'prod_006',
    name: 'Maleta de ferramentas kit com 129 peças 13564 Sparta',
    stock: 400,
    price: 99,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Nome',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('stock', {
    header: 'Estoque',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: 'Preço',
    cell: info =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(info.getValue()),
  }),
];

export default function Table() {
  const [data, setData] = useState(() => [...productsData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td
                key={cell.id}
                className={`${cell.row.index ===
                  row.getVisibleCells().length + 1 && 'remove-border'}`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
