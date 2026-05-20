// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { cn } from "@/lib/utils";

// export type CustomTableColumn<T> = {
//   key: keyof T | string;
//   header: React.ReactNode;
//   headerClassName?: string;
//   cellClassName?: string;
//   cell?: (row: T) => React.ReactNode;
// };

// type CustomTableProps<T extends Record<string, any>> = {
//   columns: CustomTableColumn<T>[];
//   data: T[];
//   rowKey?: (row: T, index: number) => React.Key;
//   tableClassName?: string;
//   containerClassName?: string;
//   headerClassName?: string;
//   headerRowClassName?: string;
//   rowClassName?: string;
//   emptyMessage?: React.ReactNode;
//   emptyColSpan?: number;
// };

// const CustomTable = <T extends Record<string, any>>({
//   columns,
//   data,
//   rowKey,
//   tableClassName,
//   containerClassName,
//   headerClassName,
//   headerRowClassName,
//   rowClassName,
//   emptyMessage = "No Data Available",
//   emptyColSpan,
// }: CustomTableProps<T>) => {
//   if (data.length === 0) {
//     return (
//       <div
//         className={cn("w-full overflow-x-auto rounded-xl", containerClassName)}
//       >
//         {typeof emptyMessage === "string" ? (
//           <p className="py-8 text-center text-white/70">{emptyMessage}</p>
//         ) : (
//           emptyMessage
//         )}
//       </div>
//     );
//   }

//   return (
//     <div
//       className={cn("w-full overflow-x-auto rounded-xl ", containerClassName)}
//     >
//       <Table className={tableClassName}>
//         <TableHeader className={headerClassName}>
//           <TableRow className={headerRowClassName}>
//             {columns.map((column) => (
//               <TableHead
//                 key={String(column.key)}
//                 className={column.headerClassName}
//               >
//                 {column.header}
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {data.length > 0 ? (
//             data.map((row, rowIndex) => (
//               <TableRow
//                 key={rowKey ? rowKey(row, rowIndex) : rowIndex}
//                 className={rowClassName}
//               >
//                 {columns.map((column) => (
//                   <TableCell
//                     key={String(column.key)}
//                     className={column.cellClassName}
//                   >
//                     {column.cell ? column.cell(row) : row[column.key]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell
//                 colSpan={emptyColSpan ?? columns.length}
//                 className="py-8 text-center"
//               >
//                 {emptyMessage}
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CustomTable;
