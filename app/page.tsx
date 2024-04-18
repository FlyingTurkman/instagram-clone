import Posts from "@/components/mainPage/Posts";
import StoriesList from "@/components/mainPage/StoriesList";





export default function Home() {

  return (
    <main className="container flex flex-row mx-auto">
      <div className="flex basis-1/5 flex-shrink-0">

      </div>
      <div className="flex flex-col items-center basis-3/5 flex-shrink-0">
        <StoriesList/>
        <Posts/>
      </div>
      <div className="flex flex-col basis-1/5 flex-shrink-0">

      </div>
    </main>
  )
}
