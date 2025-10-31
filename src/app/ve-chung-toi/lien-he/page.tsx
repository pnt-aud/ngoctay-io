import { Footer } from "../../../components/ui/Footer";
import { Navbar } from "../../../components/ui/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
          <h1 className="text-3xl font-semibold text-slate-900">Liên hệ</h1>
          <p className="text-base text-slate-600">
            Bạn cần tư vấn chi tiết? Gửi yêu cầu của bạn, chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
          </p>
          <form className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Họ và tên
              <input className="rounded-md border border-slate-200 p-2" placeholder="Nguyễn Văn A" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Email
              <input className="rounded-md border border-slate-200 p-2" placeholder="email@company.com" type="email" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Nội dung
              <textarea className="rounded-md border border-slate-200 p-2" rows={4} placeholder="Mô tả nhu cầu của bạn" />
            </label>
            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
