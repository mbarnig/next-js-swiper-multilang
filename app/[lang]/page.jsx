import { fetchPosts } from "@/lib/api";
import PostSwiper from "@/components/PostSwiper";

export default async function LangPage({ params }) {
  const posts = await fetchPosts();
  const { lang } = params;

  return (
    <div className="flex flex-col h-[100dvh]">
      <header className="bg-gray-800 text-white flex items-center justify-center h-[25dvh]">
        <h1 className="text-3xl">Mon Site en {lang.toUpperCase()}</h1>
      </header>

      <main className="flex-grow overflow-y-auto">
        <PostSwiper posts={posts} />
      </main>

      <footer className="bg-gray-900 text-white flex items-center justify-center h-[15dvh]">
        <p>Footer - {lang.toUpperCase()}</p>
      </footer>
    </div>
  );
}