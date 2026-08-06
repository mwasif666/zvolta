import {
  ArrowIcon,
  SmartLink,
  featuredPost,
  topPosts,
} from "../../BlogsPage.shared.jsx";
export function PageFeaturedSection() {
  return (
    <section className="blog-page__featured" aria-label="Featured posts">
      <div className="blog-page__container">
        <div className="blog-page__featured-grid">
          <article className="blog-page__feature-card">
            <SmartLink
              href={`/blogs/${featuredPost.slug}`}
              className="blog-page__feature-image"
            >
              <img src={featuredPost.image} alt={featuredPost.title} />
            </SmartLink>
            <div className="blog-page__feature-content">
              <div className="blog-page__meta">
                <span>{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
              </div>
              <h2>
                <SmartLink href={`/blogs/${featuredPost.slug}`}>
                  {featuredPost.title}
                </SmartLink>
              </h2>
              <p>{featuredPost.excerpt}</p>
              <SmartLink
                href={`/blogs/${featuredPost.slug}`}
                className="blog-page__button"
              >
                <span>Read more</span>
                <ArrowIcon />
              </SmartLink>
            </div>
          </article>

          <div className="blog-page__top-list">
            {topPosts.map((post) => (
              <SmartLink
                href={`/blogs/${post.slug}`}
                className="blog-page__top-item"
                key={post.id}
              >
                <img src={post.cardImage} alt={post.title} />
                <div>
                  <span>{post.category}</span>
                  <strong>{post.title}</strong>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
