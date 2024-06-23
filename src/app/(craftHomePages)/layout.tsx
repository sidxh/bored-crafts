import Navbar from "@/components/(utilities)/Navbar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="max-w-screen-xl mx-auto text-lg font-bold">
            <Navbar />
            {children}
        </section>
    )
  }