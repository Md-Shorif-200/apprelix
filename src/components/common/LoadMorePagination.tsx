// "use client";

// import { ArrowRight } from "lucide-react";

// import { CustomButton } from "@/components/shared/CustomButton";

// type LoadMorePaginationProps = {
//   hasMore: boolean;
//   isLoadingMore: boolean;
//   onLoadMore: () => void;
//   buttonLabel?: string;
//   loadingLabel?: string;
//   disabledLabel?: string;
//   className?: string;
//   skeletonRows?: number;
// };

// const LoadMorePagination = ({
//   hasMore,
//   isLoadingMore,
//   onLoadMore,
//   buttonLabel = "Load More",
//   loadingLabel = "Loading...",
//   disabledLabel = "No More Data",
//   className = "",
//   skeletonRows = 3,
// }: LoadMorePaginationProps) => {
//   const isDisabled = isLoadingMore || !hasMore;

//   return (
//     <div className={`pt-5 ${className}`.trim()}>
//       <div className="flex justify-center">
//         <CustomButton
//           text={
//             isLoadingMore ? loadingLabel : hasMore ? buttonLabel : disabledLabel
//           }
//           variant="primary"
//           icon={<ArrowRight size={18} />}
//           className="min-w-[170px] justify-center rounded-3xl py-5 font-bold px-2"
//           disabled={isDisabled}
//           onClick={onLoadMore}
//         />
//       </div>

//       {isLoadingMore ? (
//         <div className="mt-4 space-y-2.5">
//           {Array.from({ length: skeletonRows }).map((_, index) => (
//             <div
//               key={index}
//               className="h-11 w-full animate-pulse rounded-xl bg-(--ds-bg-elevated)"
//             />
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default LoadMorePagination;