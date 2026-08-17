import { useMemo, useState } from "./StoriesPage.shared.jsx";
import { useBlogPosts } from "../../hooks/useBlogApi";
import { StoriesHeroSection } from "./StoriesPage/sections/StoriesHeroSection.jsx";
import { FeaturedStorySection } from "./StoriesPage/sections/FeaturedStorySection.jsx";
import { LatestStoriesSection } from "./StoriesPage/sections/LatestStoriesSection.jsx";
import { EditorialCtaSection } from "./StoriesPage/sections/EditorialCtaSection.jsx";
export default function StoriesPage() {
  const { data: blogPosts, error, loading, refetch } = useBlogPosts();
  const [featured, ...restPosts] = blogPosts;
  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map((post) => post.category)));
    return ["All stories", ...unique];
  }, [blogPosts]);
  const [activeCategory, setActiveCategory] = useState("All stories");
  const visiblePosts = useMemo(() => {
    if (activeCategory === "All stories") return restPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory, restPosts]);
  return (
    <div className="relative overflow-hidden bg-[#040605] text-white">
      {/* ambient glows */}
      <div className="pointer-events-none absolute left-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[42rem] h-[24rem] w-[24rem] rounded-full bg-lime-400/10 blur-[120px]" />

      {/* ================= HERO ================= */}
      <StoriesHeroSection
        categories={categories}
        storyCount={blogPosts.length}
      />

      {/* ================= FEATURED ================= */}
      {loading ? (
        <div className="commerce-state full">Loading stories...</div>
      ) : null}
      {!loading && error ? (
        <div className="commerce-state error full">
          <p>{error}</p>
          <button type="button" onClick={refetch}>
            Try again
          </button>
        </div>
      ) : null}
      {!loading && !error && !featured ? (
        <div className="commerce-state full">No published stories yet.</div>
      ) : null}
      {!loading && !error && featured ? (
        <>
          <FeaturedStorySection featured={featured} />

          {/* ================= FILTER + GRID ================= */}
          <LatestStoriesSection
            activeCategory={activeCategory}
            categories={categories}
            setActiveCategory={setActiveCategory}
            visiblePosts={visiblePosts}
          />
        </>
      ) : null}

      {/* ================= CTA BAND ================= */}
      <EditorialCtaSection />
    </div>
  );
}
