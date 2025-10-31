import { PageLayout } from "../../../components/ui/PageLayout";

const terms = [
  "Quy định về phạm vi sử dụng dữ liệu và nội dung trên nền tảng",
  "Cam kết hỗ trợ và quyền lợi giữa NgocTay.io và người dùng",
  "Trách nhiệm khi phát hiện sai lệch thông tin hoặc sự cố kỹ thuật",
];

export default function TermsOfUsePage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Chính sách</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">Điều khoản sử dụng</h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Vui lòng đọc kỹ các điều khoản dưới đây trước khi sử dụng dịch vụ của NgocTay.io. Việc tiếp tục sử dụng đồng nghĩa với việc bạn chấp nhận concept vận hành và những cam kết bảo mật của chúng tôi.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ul className="space-y-4 text-base text-slate-700">
            {terms.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
