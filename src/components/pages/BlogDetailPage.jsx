import {
  NotFoundPage,
  PageSeo,
  useParams,
} from "./BlogDetailPage.shared.jsx";
import { BlogArticleSection } from "./BlogDetailPage/sections/BlogArticleSection.jsx";
import { BlogHeroSection } from "./BlogDetailPage/sections/BlogHeroSection.jsx";
import { useBlogPost, useBlogPosts } from "../../hooks/useBlogApi";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { data: post, loading } = useBlogPost(slug);
  const { data: blogPosts } = useBlogPosts();

  if (loading) {
    return <div className="commerce-state full">Loading article…</div>;
  }

  if (!post) {
    return <NotFoundPage />;
  }

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <PageSeo
        pathname={`/blogs/${post.slug}`}
        meta={{
          title: `${post.title} | ZVolta`,
          description: post.excerpt,
          image: post.image,
        }}
      />
      <div className="blog-detail">
        <BlogHeroSection />
        <BlogArticleSection post={post} related={related} posts={blogPosts} />
      </div>
    </>
  );
}
