import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// 문의 폼 검증 스키마
const ContactFormSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다"),
  email: z.string().email("유효한 이메일 주소를 입력하세요"),
  subject: z.string().min(3, "제목은 3자 이상이어야 합니다"),
  message: z.string().min(10, "메시지는 10자 이상이어야 합니다"),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 데이터 검증
    const validatedData: ContactFormData = ContactFormSchema.parse(body);

    // TODO: Resend API를 통해 이메일 발송
    // const result = await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `[문의] ${validatedData.subject}`,
    //   html: `
    //     <h1>${validatedData.subject}</h1>
    //     <p><strong>발신자:</strong> ${validatedData.name}</p>
    //     <p><strong>이메일:</strong> ${validatedData.email}</p>
    //     <p><strong>메시지:</strong></p>
    //     <p>${validatedData.message.replace(/\n/g, "<br />")}</p>
    //   `,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "문의가 성공적으로 전송되었습니다",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.flatten(),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "문의 전송 중 오류가 발생했습니다",
      },
      { status: 500 }
    );
  }
}
