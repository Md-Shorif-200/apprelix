import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/users-services";

// get all users hooks
export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
};
