import { SmartLink } from "../../BlogDetailPage.shared.jsx";

export function BlogHeroSection() {
  return (
    <section className="blog-detail__hero">
      <div className="blog-detail__container">
        <nav className="blog-detail__breadcrumbs" aria-label="Breadcrumb">
          <SmartLink href="/">Home</SmartLink>
          <span>Blog details</span>
        </nav>
        <h1 className="blog-detail__hero-title">Blog details</h1>
      </div>
    </section>
  );
}
