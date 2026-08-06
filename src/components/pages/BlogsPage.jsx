import { BlogHero } from "./BlogsPage.shared.jsx";
import { PageFeaturedSection } from "./BlogsPage/sections/PageFeaturedSection.jsx";
import { PageContentSection } from "./BlogsPage/sections/PageContentSection.jsx";
export default function BlogsPage() {
  return (
    <>
      <div className="blog-page">
        <BlogHero />

        <PageFeaturedSection />

        <PageContentSection />
      </div>
    </>
  );
}
