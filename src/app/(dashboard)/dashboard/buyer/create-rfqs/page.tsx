import CreateRfqForm from "@/modules/buyer/_components/CreateRfqForm";
import RfqSidebar from "@/modules/buyer/_components/RfqSidebar";

const page = () => {
  return (
    <div className="w-full bg-gray-50 pt-1 pb-6">
      <div className="w-full flex flex-col lg:flex-row gap-5 ">
        <div className="w-full lg:w-[70%]">
          <CreateRfqForm />
        </div>

        <div className="hidden lg:block w-full lg:w-[30%]">
          <RfqSidebar />
        </div>
      </div>
    </div>
  );
};

export default page;
