import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, type BlogBlock } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-2xl font-bold text-gray-900 first:mt-0">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-xl font-semibold text-gray-900">{block.text}</h3>;
    case "p":
      return <p className="mt-4 text-gray-600">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-6 border-l-4 border-[#377f45] bg-[#e8f0e9] py-4 pl-6 pr-4 italic text-gray-700">
          <p>{block.text}</p>
          {block.attribution && <footer className="mt-2 text-sm not-italic text-gray-500">&mdash; {block.attribution}</footer>}
        </blockquote>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#377f45] text-white">
                {block.headers.map((header) => (
                  <th key={header} className="px-4 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={row.join("-")} className={i % 2 === 0 ? "bg-white" : "bg-[#e8f0e9]/50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="border-b border-gray-200 px-4 py-3 text-gray-600">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article>
      <div className="relative h-[280px] w-full sm:h-[380px] lg:h-[460px]">
        <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" className="object-cover" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#377f45] hover:text-[#2c6636]">
          <ArrowLeft className="size-4" />
          Back to Blog
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">{post.title}</h1>
        {post.subtitle && <p className="mt-2 text-lg text-gray-500">{post.subtitle}</p>}
        <p className="mt-3 text-sm text-gray-500">{post.date}</p>

        <div className="mt-8">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {post.tags && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-gray-200 pt-6">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#e8f0e9] px-4 py-1 text-xs font-medium text-[#377f45]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
