import { Footer } from "../../../components/ui/Footer";
import { Navbar } from "../../../components/ui/Navbar";

const terms = [
  "Quy định về phạm vi sử dụng dữ liệu và nội dung trên nền tảng",
  "Cam kết hỗ trợ và quyền lợi giữa NgocTay.io và người dùng",
  "Trách nhiệm khi phát hiện sai lệch thông tin hoặc sự cố kỹ thuật",
];

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6">
          <h1 className="text-3xl font-semibold text-slate-900">Điều khoản sử dụng</h1>
          <p className="text-base text-slate-600">
            Vui lòng đọc kỹ các điều khoản dưới đây trước khi sử dụng dịch vụ của NgocTay.io.
          </p>
          <ul className="space-y-4 text-base text-slate-700">
            {terms.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
