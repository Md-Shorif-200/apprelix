import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../services/users-services";
import { useSession } from "next-auth/react";

export const useSingleUser = () => {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["user", session?.user?.id],
    queryFn: () => getSingleUser(session!.user.id),
    enabled: !!session?.user?.id,
  });
};
