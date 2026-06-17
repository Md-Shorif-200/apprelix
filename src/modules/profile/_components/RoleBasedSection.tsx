"use client";

import { UserType } from "@/modules/users/types/users.types";

import SupplierSection from "./SupplierSection";
import BuyerSection from "./BuyerSection";

const RoleBasedSection = ({ user }: { user: UserType }) => {
  if (user.role === "buyer") {
    return <BuyerSection />;
  }

  if (user.role === "supplier") {
    return <SupplierSection user={user} />;
  }

  // Unknown / no role — render nothing
  return null;
};

export default RoleBasedSection;
