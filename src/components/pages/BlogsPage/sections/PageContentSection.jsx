import {
  BlogCard,
  BlogSidebar,
  SmartLink,
} from "../../BlogsPage.shared.jsx";
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

          <BlogSidebar posts={posts} />
        </div>
      </div>
    </section>
  );
}
