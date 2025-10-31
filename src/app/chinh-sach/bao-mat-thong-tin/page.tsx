import { PageLayout } from "../../../components/ui/PageLayout";

const policies = [
  "NgocTay.io chỉ thu thập dữ liệu cần thiết để cải thiện trải nghiệm người dùng",
  "Thông tin được mã hóa và lưu trữ an toàn, tuân thủ quy định pháp luật",
  "Người dùng có thể yêu cầu cập nhật hoặc xoá dữ liệu bất kỳ lúc nào",
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Chính sách</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">Chính sách bảo mật</h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Chúng tôi tôn trọng và bảo vệ dữ liệu cá nhân của bạn. Chính sách này mô tả cách NgocTay.io thu thập, sử dụng và lưu trữ thông tin.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ul className="space-y-4 text-base text-slate-700">
            {policies.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
