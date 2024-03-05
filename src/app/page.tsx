
import MacbookScrollDemo from '@/app/Hero/page'
import Main from "@/app/Main/page"
import Side from '@/components/Side'
export default function Home() {
  

  return (
    <main >
      <Side/>
      <div>
        <MacbookScrollDemo />
      </div>
      <div>
        <Main />
      </div>
    </main>
  );
}
