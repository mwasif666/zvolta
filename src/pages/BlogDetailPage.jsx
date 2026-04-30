import { useParams } from "react-router-dom";
import { SmartLink } from "../components/SmartLink";
import { blogPosts, getBlogPostBySlug } from "../data/blogPosts";

function ArrowIcon() {
  return (
    <span className="blog-detail__button-icon" aria-hidden="true">
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

function Sidebar({ currentSlug }) {
  const relatedPosts = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  return (
    <aside className="blog-detail__sidebar" aria-label="Blog sidebar">
      <div className="blog-detail__widget">
        <h3>Related posts</h3>
        <div className="blog-detail__recent-list">
          {relatedPosts.map((post) => (
            <SmartLink
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="blog-detail__recent"
            >
              <span>{post.category}</span>
              <strong>{post.title}</strong>
            </SmartLink>
          ))}
        </div>
      </div>

      <div className="blog-detail__widget">
        <h3>Categories</h3>
        <ul className="blog-detail__category-list">
          {[
            "Charging Network",
            "EV Programs",
            "Host Partners",
            "Software",
            "Driver Network",
          ].map((category) => (
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

      <div className="blog-detail__newsletter">
        <span>Stay updated</span>
        <h3>Get ZVolta mobility notes in your inbox.</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input type="email" placeholder="you@example.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </aside>
  );
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <style data-page-style="blog-detail:1">{`
        .blog-detail {
          --blog-bg: #000504;
          --blog-primary: #10f08a;
          --blog-primary-strong: #00e582;
          --blog-muted: rgba(255, 255, 255, 0.68);
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

        .blog-detail * {
          box-sizing: border-box;
        }

        .blog-detail__container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .blog-detail__hero {
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

        .blog-detail__hero .blog-detail__container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .blog-detail__breadcrumbs {
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

        .blog-detail__breadcrumbs::before,
        .blog-detail__breadcrumbs::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--blog-primary);
          transform: translateY(-50%);
        }

        .blog-detail__breadcrumbs::before {
          left: -18px;
        }

        .blog-detail__breadcrumbs::after {
          right: -18px;
        }

        .blog-detail__breadcrumbs a,
        .blog-detail__breadcrumbs span {
          color: inherit;
          text-decoration: none;
        }

        .blog-detail__breadcrumbs span::before {
          content: "/";
          margin-right: 10px;
          color: rgba(255, 255, 255, 0.75);
        }

        .blog-detail__hero-title {
          max-width: 900px;
          margin: 24px 0 0;
          color: #ffffff;
          font-size: clamp(42px, 7vw, 82px);
          font-weight: 500;
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .blog-detail__main {
          padding: 92px 0 128px;
        }

        .blog-detail__cover,
        .blog-detail__article,
        .blog-detail__widget,
        .blog-detail__newsletter,
        .blog-detail__related-card {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          border-radius: 10px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(16, 185, 129, 0.06)),
            #070a0b;
          box-shadow: 0 18px 46px rgba(0, 0, 0, 0.32);
        }

        .blog-detail__cover::after,
        .blog-detail__article::after,
        .blog-detail__widget::after,
        .blog-detail__newsletter::after,
        .blog-detail__related-card::after {
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

        .blog-detail__cover {
          aspect-ratio: 16 / 8;
          margin-bottom: 34px;
        }

        .blog-detail__cover img,
        .blog-detail__inline-image img,
        .blog-detail__related-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-detail__layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 350px;
          gap: 38px;
          align-items: start;
        }

        .blog-detail__article {
          padding: 38px;
        }

        .blog-detail__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 24px;
          color: var(--blog-primary);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .blog-detail__article h2 {
          margin: 0 0 20px;
          color: #ffffff;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 760;
          line-height: 1.04;
          letter-spacing: -0.05em;
        }

        .blog-detail__article h3 {
          margin: 46px 0 18px;
          color: #ffffff;
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1.12;
          letter-spacing: -0.04em;
        }

        .blog-detail__article p {
          margin: 0;
          color: var(--blog-muted);
          font-size: 18px;
          line-height: 1.75;
        }

        .blog-detail__article p + p {
          margin-top: 24px;
        }

        .blog-detail__split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          margin: 34px 0;
        }

        .blog-detail__inline-image {
          overflow: hidden;
          border-radius: 10px;
          aspect-ratio: 16 / 11;
        }

        .blog-detail__audio {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.045);
          color: #ffffff;
          padding: 10px 18px 10px 10px;
          font-weight: 800;
        }

        .blog-detail__audio span:first-child {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: var(--blog-primary);
          color: #020403;
          font-size: 12px;
        }

        .blog-detail__points {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .blog-detail__points li {
          position: relative;
          padding-left: 28px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 17px;
          line-height: 1.55;
        }

        .blog-detail__points li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--blog-primary);
        }

        .blog-detail__author {
          display: grid;
          grid-template-columns: 86px minmax(0, 1fr);
          gap: 20px;
          margin-top: 46px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.045);
        }

        .blog-detail__author-mark {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 86px;
          height: 86px;
          border-radius: 999px;
          background: var(--blog-primary);
          color: #020403;
          font-size: 30px;
          font-weight: 900;
        }

        .blog-detail__author h4 {
          margin: 0;
          color: #ffffff;
          font-size: 22px;
        }

        .blog-detail__author span {
          display: block;
          margin-top: 4px;
          color: var(--blog-primary);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .blog-detail__author p {
          margin-top: 10px;
          font-size: 15px;
          line-height: 1.6;
        }

        .blog-detail__sidebar {
          display: grid;
          gap: 22px;
          position: sticky;
          top: 110px;
        }

        .blog-detail__widget,
        .blog-detail__newsletter {
          padding: 26px;
        }

        .blog-detail__widget h3,
        .blog-detail__newsletter h3 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 22px;
          letter-spacing: -0.03em;
        }

        .blog-detail__recent-list {
          display: grid;
          gap: 12px;
        }

        .blog-detail__recent {
          display: block;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.035);
          color: #ffffff;
          text-decoration: none;
          transition: border-color 0.25s ease, background-color 0.25s ease;
        }

        .blog-detail__recent:hover {
          border-color: rgba(16, 240, 138, 0.55);
          background: rgba(16, 240, 138, 0.08);
        }

        .blog-detail__recent span,
        .blog-detail__newsletter span {
          display: block;
          color: var(--blog-primary);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .blog-detail__recent strong {
          display: block;
          margin-top: 7px;
          font-size: 15px;
          line-height: 1.35;
        }

        .blog-detail__category-list {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .blog-detail__category-list a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .blog-detail__category-list a:hover {
          color: var(--blog-primary);
        }

        .blog-detail__newsletter form {
          display: grid;
          gap: 12px;
        }

        .blog-detail__newsletter input {
          min-height: 52px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.34);
          color: #ffffff;
          outline: 0;
          padding: 0 18px;
        }

        .blog-detail__newsletter button {
          min-height: 52px;
          border: 0;
          border-radius: 999px;
          background: var(--blog-primary);
          color: #020403;
          font-weight: 900;
          text-transform: uppercase;
        }

        .blog-detail__related {
          padding-top: 74px;
        }

        .blog-detail__related h2 {
          margin: 0 0 26px;
          color: #ffffff;
          font-size: clamp(32px, 5vw, 54px);
          letter-spacing: -0.05em;
        }

        .blog-detail__related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .blog-detail__related-card {
          color: #ffffff;
          text-decoration: none;
        }

        .blog-detail__related-card img {
          aspect-ratio: 16 / 11;
        }

        .blog-detail__related-card div {
          padding: 22px;
        }

        .blog-detail__related-card span {
          color: var(--blog-primary);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .blog-detail__related-card h3 {
          margin: 8px 0 0;
          color: #ffffff;
          font-size: 21px;
          line-height: 1.18;
          letter-spacing: -0.03em;
        }

        .blog-detail__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          min-height: 54px;
          margin-top: 30px;
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

        .blog-detail__button:hover {
          background: #ffffff;
        }

        .blog-detail__button-icon {
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

        .blog-detail__button-icon svg {
          position: absolute;
          inset: 7px;
          width: 20px;
          height: 20px;
          transition: transform 0.25s ease;
        }

        .blog-detail__button-icon svg:nth-child(2) {
          transform: translate(-32px, 32px);
        }

        .blog-detail__button:hover .blog-detail__button-icon svg:nth-child(1) {
          transform: translate(32px, -32px);
        }

        .blog-detail__button:hover .blog-detail__button-icon svg:nth-child(2) {
          transform: translate(0, 0);
          transition-delay: 0.08s;
        }

        @media (max-width: 1023px) {
          .blog-detail__layout,
          .blog-detail__related-grid {
            grid-template-columns: 1fr;
          }

          .blog-detail__sidebar {
            position: static;
          }
        }

        @media (max-width: 767px) {
          .blog-detail__container {
            width: min(1180px, calc(100% - 24px));
          }

          .blog-detail__hero {
            min-height: 420px;
            padding: 130px 0 76px;
          }

          .blog-detail__hero-title {
            font-size: clamp(38px, 13vw, 66px);
          }

          .blog-detail__main {
            padding-top: 70px;
          }

          .blog-detail__cover {
            aspect-ratio: 16 / 11;
          }

          .blog-detail__article {
            padding: 24px;
          }

          .blog-detail__split,
          .blog-detail__author {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="blog-detail">
        <section className="blog-detail__hero">
          <div className="blog-detail__container">
            <nav className="blog-detail__breadcrumbs" aria-label="Breadcrumb">
              <SmartLink href="/">Home</SmartLink>
              <span>Blog details</span>
            </nav>
            <h1 className="blog-detail__hero-title">Blog details</h1>
          </div>
        </section>

        <main className="blog-detail__main">
          <div className="blog-detail__container">
            <div className="blog-detail__cover">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="blog-detail__layout">
              <article className="blog-detail__article">
                <div className="blog-detail__meta">
                  <span>{post.category}</span>
                  <span>Last update: {post.date}</span>
                  <span>{post.readTime}</span>
                  <span>By {post.author}</span>
                </div>

                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>

                <div className="blog-detail__audio">
                  <span>Play</span>
                  <span>4:32</span>
                  <span>Listen to this article</span>
                </div>

                <h3>What this means for the network</h3>
                {post.content.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="blog-detail__split">
                  <div className="blog-detail__inline-image">
                    <img src="/img/zvolta-1.jpg" alt="ZVolta field vehicle" />
                  </div>
                  <div className="blog-detail__inline-image">
                    <img
                      src="/img/charging-post.jpg"
                      alt="ZVolta charging setup"
                    />
                  </div>
                </div>

                <p>{post.content[2]}</p>

                <h3>Key takeaways</h3>
                <ul className="blog-detail__points">
                  {post.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="blog-detail__author">
                  <div className="blog-detail__author-mark">Z</div>
                  <div>
                    <h4>{post.author}</h4>
                    <span>ZVolta Insights</span>
                    <p>
                      Notes from the ZVolta team on EV charging, fleet
                      operations, software, and Pakistan's clean mobility
                      network.
                    </p>
                  </div>
                </div>

                <SmartLink href="/blogs" className="blog-detail__button">
                  <span>Back to blog</span>
                  <ArrowIcon />
                </SmartLink>
              </article>

              <Sidebar currentSlug={post.slug} />
            </div>

            <section className="blog-detail__related">
              <h2>Browse related blog</h2>
              <div className="blog-detail__related-grid">
                {related.map((item) => (
                  <SmartLink
                    href={`/blogs/${item.slug}`}
                    className="blog-detail__related-card"
                    key={item.id}
                  >
                    <img src={item.cardImage} alt={item.title} />
                    <div>
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </SmartLink>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
