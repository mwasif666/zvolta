import {
  BlogCard,
  BlogSidebar,
  SmartLink,
  listPosts,
} from "../../BlogsPage.shared.jsx";
export function PageContentSection() {
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

          <BlogSidebar />
        </div>
      </div>
    </section>
  );
}
