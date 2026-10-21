import { Navigate } from "react-router-dom";

// Legacy links remain safe, but there is no separate DC Chargers storefront.
// All ZVolta and CITA DC charger products now live in the unified Shop.
export default function DcChargersRoute() {
  return <Navigate to="/products" replace />;
}
