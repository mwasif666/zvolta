import { BlogCard, BlogSidebar } from "../../BlogsPage.shared.jsx";
export function PageContentSection({ posts }) {
  const listPosts = posts.slice(1);
  return (
    <section className="blog-page__content" aria-label="Blog posts">
      <div className="blog-page__container">
        <div className="blog-page__layout">
          <div>
            <div className="blog-page__list">
              {listPosts.map((post) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </div>
          </div>

          <BlogSidebar posts={posts} />
        </div>
      </div>
    </section>
  );
}
