import { PageLayout } from "../../../components/ui/PageLayout";
import { Button } from "../../../components/ui/Button";

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Liên hệ</span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Trao đổi về concept phù hợp với đội ngũ của bạn
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Điền thông tin, chúng tôi sẽ phản hồi trong vòng 24 giờ với đề xuất roadmap và lịch hẹn workshop phù hợp.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <form className="grid gap-4 rounded-2xl border border-indigo-100 bg-surface p-6 shadow-sm">
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
            <Button className="mt-2">Gửi yêu cầu</Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
