interface GalleryDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function GalleryDetailPage({
  params,
}: GalleryDetailPageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-white dark:bg-black px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          작품 상세 페이지
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          작품 ID: {id} (개발 예정)
        </p>
      </div>
    </div>
  );
}
