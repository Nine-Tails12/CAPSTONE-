import { Header } from "@/components/header"
import { MaterialsForm } from "@/components/materials-form"
import { Sidebar } from "@/components/sidebar"

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <MaterialsForm />
        </main>
      </div>
    </div>
  )
}

