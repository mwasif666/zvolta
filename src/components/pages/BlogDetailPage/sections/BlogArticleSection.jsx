import {
  ArrowIcon,
  AdminArticleBody,
  NotionArticleBody,
  Sidebar,
  SmartLink,
} from "../../BlogDetailPage.shared.jsx";

export function BlogArticleSection({ post, related, posts }) {
  return (
    <main className="blog-detail__main">
      <div className="blog-detail__container">
        <div className="blog-detail__cover">
          <img src={post.image} alt={post.title} />
        </div>
        {post.imageCaption ? (
          <p className="blog-detail__cover-caption">{post.imageCaption}</p>
        ) : null}

        <div className="blog-detail__layout">
          <article className="blog-detail__article">
            <div className="blog-detail__meta">
              <span>{post.category}</span>
              <span>Last update: {post.date}</span>
              <span>{post.readTime}</span>
              <span>By {post.author}</span>
            </div>

            <h2>{post.title}</h2>
            {post.htmlBody ? (
              <AdminArticleBody html={post.htmlBody} />
            ) : post.body ? (
              <NotionArticleBody blocks={post.body} />
            ) : (
              <>
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
              </>
            )}

            <div className="blog-detail__author">
              <div className="blog-detail__author-mark">Z</div>
              <div>
                <h4>{post.author}</h4>
                <span>ZVolta Insights</span>
                <p>
                  Notes from the ZVolta team on EV charging, fleet operations,
                  software, and Pakistan's clean mobility network.
                </p>
              </div>
            </div>

            <SmartLink href="/blogs" className="blog-detail__button">
              <span>Back to blog</span>
              <ArrowIcon />
            </SmartLink>
          </article>

          <Sidebar currentSlug={post.slug} posts={posts} />
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
  );
}
