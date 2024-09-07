import Header from "@/components/header";
import Pokebody from "@/components/pokebody";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Pokebody />
    </main>
  );
}
