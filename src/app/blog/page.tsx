import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { blogPosts } from "@/data/blogPosts";

export default function Page() {
  return (
    <>
      <PageBanner
        title="Motia Group Blogs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        image="/blog/blog.jpg"
        overlayColor="#377F45"
        overlayOpacity={0.82}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col border border-gray-200 shadow-sm">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] w-full">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                <span className="absolute right-4 top-4 rounded-full bg-[#377f45] px-4 py-1 text-xs font-semibold text-white">
                  BLOG
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-semibold text-[#377f45]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#2c6636]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold text-[#377f45] hover:text-[#2c6636]">
                  READ MORE &raquo;
                </Link>
              </div>

              <div className="border-t border-gray-200 px-6 py-4 text-sm text-gray-500">
                {post.date} &nbsp;&bull;&nbsp; No Comments
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
