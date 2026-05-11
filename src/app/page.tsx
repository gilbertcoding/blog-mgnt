import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* 히어로 섹션 */}
      <section className="flex-1 flex items-center justify-center px-6 py-32 md:py-48">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            인형공예의 세계
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            손으로 만든 정성, 마음을 담은 작품.
            <br />
            인형공예 작가의 아름다운 세상에 오신 것을 환영합니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/gallery">
              <Button className="px-8 py-3 text-base">
                작품 보러 가기
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="px-8 py-3 text-base">
                블로그 읽기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 최근 작품 섹션 */}
      <section className="bg-gray-50 dark:bg-gray-900 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            최근 작품
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 작품 카드 - 추후 동적 데이터로 변경됨 */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button variant="outline" className="px-8 py-3">
                모든 작품 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 블로그 미리보기 섹션 */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            최신 블로그
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 블로그 카드 - 추후 동적 데이터로 변경됨 */}
            {[1, 2].map((item) => (
              <div
                key={item}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="px-8 py-3">
                모든 포스트 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gray-900 dark:bg-black text-white px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            작품에 대한 문의가 있으신가요?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            궁금한 점이나 주문 요청이 있으시면 언제든지 연락주세요.
          </p>
          <Link href="/contact">
            <Button className="px-8 py-3 text-base bg-white text-black hover:bg-gray-100">
              문의하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
