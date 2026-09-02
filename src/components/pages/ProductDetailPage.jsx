import { Navigate, useParams } from "react-router-dom";
import { useCommerceData } from "../../hooks/useCommerceData";
import { getChargerDetailHref } from "../../lib/chargerCatalog";
import { commerceApi } from "../../services/api";
import NotFoundPage from "./NotFoundPage";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = useCommerceData(() => commerceApi.product(slug), [slug]);

  if (product.loading) {
    return (
      <main className="commerce-page">
        <div className="commerce-state full">Loading product...</div>
      </main>
    );
  }

  if (product.error || !product.data) return <NotFoundPage />;

  return (
    <Navigate replace to={getChargerDetailHref(product.data, "/products")} />
  );
}
