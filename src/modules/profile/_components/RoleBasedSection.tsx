"use client"

import BuyerSection, { type BuyerFields } from "./BuyerSection"
import SupplierSection, { type SupplierFields } from "./SupplierSection"

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface RoleBasedSectionProps {
  user: { role?: string } & BuyerFields & SupplierFields
}

// ─────────────────────────────────────────────
// Orchestrator — decides which section to render
// ─────────────────────────────────────────────
const RoleBasedSection = ({ user }: RoleBasedSectionProps) => {

  if (user.role === "buyer") {
    return <BuyerSection user={user} />
  }

  if (user.role === "supplier") {
    return <SupplierSection user={user} />
  }

  // Unknown / no role — render nothing
  return null
}

export default RoleBasedSection