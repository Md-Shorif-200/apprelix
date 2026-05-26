import { CustomButton } from "@/components/common/CustomButton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const NavSearch = () => {
  return (
    <div className="  w-full lg:w-[400px]  flex items-center bg-ds-background border border-ds-border rounded-full px-2 sm:px-4 py-1.5 sm:py-2 gap-2 sm:gap-3 focus-within:border-ds-ring focus-within:ds-bg-background transition-all duration-200">
      {/* Search Icon */}
      <Search size={18} className=" text-muted flex-shrink-0" />
      {/* Input */}
      <Input
        type="text"
        placeholder="Search products, suppliers..."
        className="flex-1 bg-transparent text-sm text-ds-text border-0 outline-none placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0"
      />
      {/* Search Button */}
      <CustomButton
        variant="primary"
        text="Search"
        className=" hidden lg:block text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
      />
    </div>
  );
};

export default NavSearch;
