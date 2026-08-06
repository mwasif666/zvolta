import { SmartLink } from "../SmartLink";
import { blogPosts } from "../../data/pages/blogs/blogPosts";
const featuredPost = blogPosts[0];
const topPosts = blogPosts.slice(1, 4);
const listPosts = blogPosts.slice(1);
const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
function ArrowIcon() {
  return (
    <span className="blog-page__button-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path
          d="M5 12h12m0 0-5-5m5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <svg viewBox="0 0 24 24">
        <path
          d="M5 12h12m0 0-5-5m5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}
function BlogHero({ title = "Blog", crumb = "Blog" }) {
  return (
    <section className="blog-page__hero">
      <div className="blog-page__container">
        <nav className="blog-page__breadcrumbs" aria-label="Breadcrumb">
          <SmartLink href="/">Home</SmartLink>
          <span>{crumb}</span>
        </nav>
        <h1 className="blog-page__hero-title">{title}</h1>
      </div>
    </section>
  );
}
function BlogCard({ post, isLarge = false }) {
  return (
    <article className={`blog-page__card ${isLarge ? "is-large" : ""}`}>
      <SmartLink href={`/blogs/${post.slug}`} className="blog-page__card-image">
        <img src={post.cardImage} alt={post.title} />
      </SmartLink>
      <div className="blog-page__card-body">
        <div className="blog-page__meta">
          <span>{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h2>
          <SmartLink href={`/blogs/${post.slug}`}>{post.title}</SmartLink>
        </h2>
        <p>{post.excerpt}</p>
        <SmartLink href={`/blogs/${post.slug}`} className="blog-page__button">
          <span>Read more</span>
          <ArrowIcon />
        </SmartLink>
      </div>
    </article>
  );
}
function BlogSidebar() {
  return (
    <aside className="blog-page__sidebar" aria-label="Blog sidebar">
      <div className="blog-page__widget">
        <h3>Search</h3>
        <label className="blog-page__search">
          <span className="sr-only">Search blog</span>
          <input type="search" placeholder="Search..." />
          <button type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </label>
      </div>

      <div className="blog-page__widget">
        <h3>Related posts</h3>
        <div className="blog-page__recent-list">
          {blogPosts.slice(0, 3).map((post) => (
            <SmartLink
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="blog-page__recent"
            >
              <span>{post.category}</span>
              <strong>{post.title}</strong>
            </SmartLink>
          ))}
        </div>
      </div>

      <div className="blog-page__widget">
        <h3>Categories</h3>
        <ul className="blog-page__category-list">
          {categories.map((category) => (
            <li key={category}>
              <SmartLink href="/blogs">
                <span>{category}</span>
                <span>
                  {
                    blogPosts.filter((post) => post.category === category)
                      .length
                  }
                </span>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-page__widget">
        <h3>Tags</h3>
        <div className="blog-page__tags">
          {["EV Charging", "Drivers", "Fleet", "Hosts", "Software"].map(
            (tag) => (
              <SmartLink href="/blogs" key={tag}>
                {tag}
              </SmartLink>
            ),
          )}
        </div>
      </div>
    </aside>
  );
}
export { BlogHero, BlogSidebar, ArrowIcon };
export {
  BlogCard,
  SmartLink,
  blogPosts,
  categories,
  featuredPost,
  listPosts,
  topPosts,
};
