import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen p-20 grid grid-cols-[repeat(4,minmax(200px,220px))] grid-rows-[100px_minmax(100px,1fr)] gap-4 ">
        <Header />

        <CardContainer />
      </main>
    </>
  );
}
