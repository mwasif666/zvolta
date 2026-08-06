import {
  NotFoundPage,
  PageSeo,
  blogPosts,
  getBlogPostBySlug,
  useParams,
} from "./BlogDetailPage.shared.jsx";
import { BlogArticleSection } from "./BlogDetailPage/sections/BlogArticleSection.jsx";
import { BlogHeroSection } from "./BlogDetailPage/sections/BlogHeroSection.jsx";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

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
        <BlogArticleSection post={post} related={related} />
      </div>
    </>
  );
}
