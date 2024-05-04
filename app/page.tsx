import Calendar1 from '@/components/pages/Calendar';
import { MyDrawer } from "@/components/ui/drawer"


export default async function Page() {

  return (
    <div>
      <div className="flex justify-center">
        <Calendar1 />
      </div>
      <div>
        <MyDrawer />
      </div>
    </div>
  )
}