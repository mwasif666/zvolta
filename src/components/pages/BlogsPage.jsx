import { BlogHero } from "./BlogsPage.shared.jsx";
import { PageFeaturedSection } from "./BlogsPage/sections/PageFeaturedSection.jsx";
import { PageContentSection } from "./BlogsPage/sections/PageContentSection.jsx";
import { useBlogPosts } from "../../hooks/useBlogApi";
export default function BlogsPage() {
  const { data: posts, error, loading, refetch } = useBlogPosts();
  return (
    <>
      <div className="blog-page">
        <BlogHero />

        {loading ? (
          <div className="commerce-state full">Loading articles...</div>
        ) : null}
        {!loading && error ? (
          <div className="commerce-state error full">
            <p>{error}</p>
            <button type="button" onClick={refetch}>
              Try again
            </button>
          </div>
        ) : null}
        {!loading && !error && posts.length === 0 ? (
          <div className="commerce-state full">No published articles yet.</div>
        ) : null}
        {!loading && !error && posts.length > 0 ? (
          <>
            <PageFeaturedSection posts={posts} />
            <PageContentSection posts={posts} />
          </>
        ) : null}
      </div>
    </>
  );
}
