import { useParams } from "react-router-dom";
import { PageSeo } from "../seo/PageSeo";
import { SmartLink } from "../SmartLink";
import { useFormSubmission } from "../../hooks/useFormSubmission";
import { blogPosts, getBlogPostBySlug } from "../../data/pages/blogs/blogPosts";
import NotFoundPage from "./NotFoundPage";
const blogCategories = Array.from(
  new Set(blogPosts.map((post) => post.category)),
);
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
function NotionArticleBody({ blocks }) {
  return (
    <div className="blog-detail__body">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        if (block.type === "heading") {
          return <h3 key={key}>{block.text}</h3>;
        }
        if (block.type === "subheading") {
          return <h4 key={key}>{block.text}</h4>;
        }
        if (block.type === "quote") {
          return <blockquote key={key}>{block.text}</blockquote>;
        }
        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List key={key}>
              {block.items.map((item, itemIndex) => (
                <li key={`${item}-${itemIndex}`}>{item}</li>
              ))}
            </List>
          );
        }
        if (block.type === "divider") {
          return <hr key={key} />;
        }
        return <p key={key}>{block.text}</p>;
      })}
    </div>
  );
}
function AdminArticleBody({ html }) {
  if (!html) return null;
  const parsed = new DOMParser().parseFromString(html, "text/html");
  parsed
    .querySelectorAll("script,style,iframe,object,embed")
    .forEach((node) => node.remove());
  parsed.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attribute) => {
      if (attribute.name.startsWith("on") || attribute.name === "style") {
        node.removeAttribute(attribute.name);
      }
      if (
        ["href", "src"].includes(attribute.name) &&
        /^javascript:/i.test(attribute.value)
      ) {
        node.removeAttribute(attribute.name);
      }
    });
  });
  return (
    <div
      className="blog-detail__body"
      dangerouslySetInnerHTML={{ __html: parsed.body.innerHTML }}
    />
  );
}
function Sidebar({ currentSlug, posts = blogPosts }) {
  const newsletter = useFormSubmission("https://formspree.io/f/mvgrykro");
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);
  const categories = Array.from(new Set(posts.map((post) => post.category)));
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
          {categories.map((category) => (
            <li key={category}>
              <SmartLink href="/blogs">
                <span>{category}</span>
                <span>
                  {
                    posts.filter((post) => post.category === category)
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
        <form onSubmit={newsletter.submit}>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            aria-label="Email address"
            placeholder="you@example.com"
          />
          <input type="hidden" name="subject" value="Blog newsletter signup" />
          <button type="submit" disabled={newsletter.status === "submitting"}>
            {newsletter.status === "submitting" ? "Sending…" : "Subscribe"}
          </button>
        </form>
        <p aria-live="polite">{newsletter.message}</p>
      </div>
    </aside>
  );
}
export {
  ArrowIcon,
  NotFoundPage,
  AdminArticleBody,
  NotionArticleBody,
  PageSeo,
  Sidebar,
  SmartLink,
  blogCategories,
  blogPosts,
  getBlogPostBySlug,
  useFormSubmission,
  useParams,
};
