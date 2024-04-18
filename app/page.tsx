import StoriesList from "@/components/mainPage/StoriesList";





export default function Home() {

  return (
    <main className="container flex flex-row mx-auto">
      <div className="flex basis-1/5">

      </div>
      <div className="flex flex-col basis-3/5">
        <StoriesList/>
      </div>
      <div className="flex flex-col basis-1/5">

      </div>
    </main>
  )
}
