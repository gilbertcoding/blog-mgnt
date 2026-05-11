interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-white dark:bg-black px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          블로그 포스트
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          포스트 슬러그: {slug} (개발 예정)
        </p>
      </div>
    </div>
  );
}
