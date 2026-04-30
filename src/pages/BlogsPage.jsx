import { SmartLink } from "../components/SmartLink";
import { blogPosts } from "../data/blogPosts";

const featuredPost = blogPosts[0];
const topPosts = blogPosts.slice(1, 4);
const listPosts = blogPosts.slice(1);
const categories = [
  "Charging Network",
  "EV Programs",
  "Host Partners",
  "Software",
  "Driver Network",
];

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

export default function BlogsPage() {
  return (
    <>
      <style data-page-style="blogs:1">{`
        .blog-page {
          --blog-bg: #000504;
          --blog-primary: #10f08a;
          --blog-primary-strong: #00e582;
          --blog-muted: rgba(255, 255, 255, 0.66);
          --blog-border: rgba(16, 240, 138, 0.24);
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 18% 12%, rgba(16, 240, 138, 0.18), transparent 28rem),
            radial-gradient(circle at 86% 42%, rgba(255, 255, 255, 0.08), transparent 30rem),
            var(--blog-bg);
          color: #ffffff;
          font-family: "DM Sans", "Questrial", system-ui, sans-serif;
        }

        .blog-page * {
          box-sizing: border-box;
        }

        .blog-page__container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .blog-page__hero {
          min-height: 500px;
          display: flex;
          align-items: center;
          padding: 150px 0 100px;
          background-image:
            radial-gradient(circle at 50% 42%, rgba(0, 255, 151, 0.16), transparent 32rem),
            linear-gradient(180deg, rgba(0, 5, 4, 0.58), rgba(0, 5, 4, 0.94)),
            url("/img/zvolta-3.jpg");
          background-position: center, center, center 46%;
          background-size: cover;
          text-align: center;
        }

        .blog-page__hero .blog-page__container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .blog-page__breadcrumbs {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: relative;
          margin: 0;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          text-transform: capitalize;
        }

        .blog-page__breadcrumbs::before,
        .blog-page__breadcrumbs::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--blog-primary);
          transform: translateY(-50%);
        }

        .blog-page__breadcrumbs::before {
          left: -18px;
        }

        .blog-page__breadcrumbs::after {
          right: -18px;
        }

        .blog-page__breadcrumbs a,
        .blog-page__breadcrumbs span {
          color: inherit;
          text-decoration: none;
        }

        .blog-page__breadcrumbs span::before {
          content: "/";
          margin-right: 10px;
          color: rgba(255, 255, 255, 0.75);
        }

        .blog-page__hero-title {
          margin: 24px 0 0;
          color: #ffffff;
          font-size: clamp(44px, 8vw, 88px);
          font-weight: 500;
          line-height: 0.95;
          letter-spacing: -0.06em;
        }

        .blog-page__featured {
          padding: 92px 0 40px;
        }

        .blog-page__featured-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr);
          gap: 30px;
          align-items: stretch;
        }

        .blog-page__feature-card,
        .blog-page__card,
        .blog-page__widget,
        .blog-page__newsletter {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          border-radius: 10px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(16, 185, 129, 0.06)),
            #070a0b;
          box-shadow: 0 18px 46px rgba(0, 0, 0, 0.32);
        }

        .blog-page__feature-card::after,
        .blog-page__card::after,
        .blog-page__widget::after,
        .blog-page__newsletter::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          padding: 1px;
          border-radius: inherit;
          background: linear-gradient(146deg, rgba(16, 185, 129, 0.7), rgba(255, 255, 255, 0.16) 24%, rgba(255, 255, 255, 0.06) 62%, rgba(16, 185, 129, 0.38));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .blog-page__feature-card {
          min-height: 520px;
        }

        .blog-page__feature-card img,
        .blog-page__card-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.2, 0, 0, 1), filter 0.3s ease;
        }

        .blog-page__feature-card:hover img,
        .blog-page__card:hover .blog-page__card-image img {
          transform: scale(1.08);
          filter: saturate(1.08) contrast(1.02);
        }

        .blog-page__feature-image {
          position: absolute;
          inset: 0;
        }

        .blog-page__feature-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.02), rgba(0, 5, 4, 0.9));
        }

        .blog-page__feature-content {
          position: absolute;
          inset: auto 0 0;
          z-index: 2;
          padding: 38px;
        }

        .blog-page__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
          color: var(--blog-primary);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .blog-page__feature-content h2,
        .blog-page__card h2 {
          margin: 0;
          color: #ffffff;
          font-weight: 750;
          letter-spacing: -0.04em;
        }

        .blog-page__feature-content h2 {
          max-width: 760px;
          font-size: clamp(32px, 5vw, 58px);
          line-height: 1.02;
        }

        .blog-page__feature-content h2 a,
        .blog-page__card h2 a,
        .blog-page__recent {
          color: inherit;
          text-decoration: none;
        }

        .blog-page__feature-content p,
        .blog-page__card p {
          max-width: 720px;
          margin: 18px 0 0;
          color: var(--blog-muted);
          font-size: 17px;
          line-height: 1.65;
        }

        .blog-page__top-list {
          display: grid;
          gap: 18px;
        }

        .blog-page__top-item {
          display: grid;
          grid-template-columns: 132px minmax(0, 1fr);
          gap: 18px;
          min-height: 140px;
          overflow: hidden;
          border: 1px solid var(--blog-border);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.045);
          text-decoration: none;
          transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
        }

        .blog-page__top-item:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 240, 138, 0.58);
          background: rgba(16, 240, 138, 0.08);
        }

        .blog-page__top-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-page__top-item div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 18px 18px 18px 0;
        }

        .blog-page__top-item span {
          color: var(--blog-primary);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .blog-page__top-item strong {
          margin-top: 8px;
          color: #ffffff;
          font-size: 18px;
          line-height: 1.25;
        }

        .blog-page__content {
          padding: 54px 0 128px;
        }

        .blog-page__layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 350px;
          gap: 38px;
          align-items: start;
        }

        .blog-page__list {
          display: grid;
          gap: 26px;
        }

        .blog-page__card {
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          min-height: 280px;
        }

        .blog-page__card-image {
          overflow: hidden;
          min-height: 280px;
        }

        .blog-page__card-body {
          padding: 30px;
        }

        .blog-page__card h2 {
          font-size: clamp(25px, 3vw, 34px);
          line-height: 1.08;
        }

        .blog-page__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          min-height: 54px;
          margin-top: 26px;
          padding: 8px 10px 8px 28px;
          border-radius: 999px;
          background: var(--blog-primary-strong);
          color: #020403;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color 0.25s ease, color 0.25s ease;
        }

        .blog-page__button:hover {
          background: #ffffff;
          color: #020403;
        }

        .blog-page__button-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          overflow: hidden;
          border-radius: 999px;
          background: #020403;
          color: var(--blog-primary);
        }

        .blog-page__button-icon svg {
          position: absolute;
          inset: 7px;
          width: 20px;
          height: 20px;
          transition: transform 0.25s ease;
        }

        .blog-page__button-icon svg:nth-child(2) {
          transform: translate(-32px, 32px);
        }

        .blog-page__button:hover .blog-page__button-icon svg:nth-child(1) {
          transform: translate(32px, -32px);
        }

        .blog-page__button:hover .blog-page__button-icon svg:nth-child(2) {
          transform: translate(0, 0);
          transition-delay: 0.08s;
        }

        .blog-page__sidebar {
          display: grid;
          gap: 22px;
          position: sticky;
          top: 110px;
        }

        .blog-page__widget {
          padding: 26px;
        }

        .blog-page__widget h3 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 22px;
          letter-spacing: -0.03em;
        }

        .blog-page__search {
          display: flex;
          min-height: 54px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.34);
        }

        .blog-page__search input {
          min-width: 0;
          flex: 1;
          border: 0;
          outline: 0;
          background: transparent;
          color: #ffffff;
          padding: 0 18px;
        }

        .blog-page__search button {
          width: 54px;
          border: 0;
          background: var(--blog-primary);
          color: #020403;
        }

        .blog-page__search svg {
          width: 22px;
          height: 22px;
        }

        .blog-page__recent-list {
          display: grid;
          gap: 12px;
        }

        .blog-page__recent {
          display: block;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.035);
          transition: border-color 0.25s ease, background-color 0.25s ease;
        }

        .blog-page__recent:hover {
          border-color: rgba(16, 240, 138, 0.55);
          background: rgba(16, 240, 138, 0.08);
        }

        .blog-page__recent span {
          display: block;
          color: var(--blog-primary);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .blog-page__recent strong {
          display: block;
          margin-top: 7px;
          font-size: 15px;
          line-height: 1.35;
        }

        .blog-page__category-list {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .blog-page__category-list a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .blog-page__category-list a:hover {
          color: var(--blog-primary);
        }

        .blog-page__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .blog-page__tags a {
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          padding: 8px 13px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 13px;
          text-decoration: none;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .blog-page__tags a:hover {
          border-color: var(--blog-primary);
          background: var(--blog-primary);
          color: #020403;
        }

        .blog-page__pagination {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 34px 0 0;
          padding: 0;
          list-style: none;
        }

        .blog-page__pagination a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          color: #ffffff;
          text-decoration: none;
        }

        .blog-page__pagination .is-active a,
        .blog-page__pagination a:hover {
          border-color: var(--blog-primary);
          background: var(--blog-primary);
          color: #020403;
        }

        @media (max-width: 1023px) {
          .blog-page__featured-grid,
          .blog-page__layout {
            grid-template-columns: 1fr;
          }

          .blog-page__sidebar {
            position: static;
          }
        }

        @media (max-width: 767px) {
          .blog-page__container {
            width: min(1180px, calc(100% - 24px));
          }

          .blog-page__hero {
            min-height: 420px;
            padding: 130px 0 76px;
          }

          .blog-page__hero-title {
            font-size: clamp(46px, 16vw, 76px);
          }

          .blog-page__featured {
            padding-top: 70px;
          }

          .blog-page__feature-card {
            min-height: 460px;
          }

          .blog-page__feature-content {
            padding: 24px;
          }

          .blog-page__top-item {
            grid-template-columns: 112px minmax(0, 1fr);
          }

          .blog-page__card {
            grid-template-columns: 1fr;
          }

          .blog-page__card-image {
            aspect-ratio: 16 / 11;
            min-height: 0;
          }

          .blog-page__card-body {
            padding: 24px;
          }
        }
      `}</style>

      <div className="blog-page">
        <BlogHero />

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

        <section className="blog-page__content" aria-label="Blog posts">
          <div className="blog-page__container">
            <div className="blog-page__layout">
              <div>
                <div className="blog-page__list">
                  {listPosts.map((post) => (
                    <BlogCard post={post} key={post.id} />
                  ))}
                </div>
                <ul className="blog-page__pagination" aria-label="Pagination">
                  <li>
                    <SmartLink href="/blogs">1</SmartLink>
                  </li>
                  <li className="is-active">
                    <SmartLink href="/blogs">2</SmartLink>
                  </li>
                  <li>
                    <SmartLink href="/blogs">3</SmartLink>
                  </li>
                </ul>
              </div>

              <BlogSidebar />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export { BlogHero, BlogSidebar, ArrowIcon };
