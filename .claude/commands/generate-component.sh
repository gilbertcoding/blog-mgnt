#!/bin/bash

# 컴포넌트 생성 스크립트
# 사용법: ./generate-component.sh <ComponentName> [category]
# 예: ./generate-component.sh GalleryCard gallery

set -e

COMPONENT_NAME="${1}"
CATEGORY="${2:-ui}"

# 입력값 검증
if [ -z "$COMPONENT_NAME" ]; then
  echo "❌ 에러: 컴포넌트 이름을 입력하세요"
  echo "사용법: /generate-component <ComponentName> [category]"
  echo "예: /generate-component GalleryCard gallery"
  exit 1
fi

# 파일 경로 설정
COMPONENT_DIR="src/components/$CATEGORY"
COMPONENT_FILE="$COMPONENT_DIR/${COMPONENT_NAME}.tsx"

# 폴더 생성
mkdir -p "$COMPONENT_DIR"

# 이미 존재하는 파일 확인
if [ -f "$COMPONENT_FILE" ]; then
  echo "⚠️  경고: $COMPONENT_FILE 파일이 이미 존재합니다"
  exit 1
fi

# 컴포넌트 템플릿 생성
cat > "$COMPONENT_FILE" << EOF
import { ReactNode } from "react";

interface ${COMPONENT_NAME}Props {
  // props를 여기에 정의하세요
  children?: ReactNode;
}

export const ${COMPONENT_NAME} = ({
  children,
}: ${COMPONENT_NAME}Props): ReactNode => {
  return (
    <div className="flex items-center justify-center">
      {children}
    </div>
  );
};
EOF

echo "✅ 컴포넌트가 생성되었습니다!"
echo "📁 경로: $COMPONENT_FILE"
echo "🎨 카테고리: $CATEGORY"
echo ""
echo "다음 단계:"
echo "1. $COMPONENT_FILE 파일을 편집하세요"
echo "2. Props 인터페이스에 필요한 속성을 추가하세요"
echo "3. 컴포넌트 구현을 완성하세요"
