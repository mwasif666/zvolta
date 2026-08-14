import { BlogHero } from "./BlogsPage.shared.jsx";
import { PageFeaturedSection } from "./BlogsPage/sections/PageFeaturedSection.jsx";
import { PageContentSection } from "./BlogsPage/sections/PageContentSection.jsx";
import { useBlogPosts } from "../../hooks/useBlogApi";
export default function BlogsPage() {
  const { data: posts } = useBlogPosts();
  return (
    <>
      <div className="blog-page">
        <BlogHero />

        <PageFeaturedSection posts={posts} />

        <PageContentSection posts={posts} />
      </div>
    </>
  );
}
