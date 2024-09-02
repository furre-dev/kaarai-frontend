import Popup from "@/components/molecules/Popup";
import HomeFirstSection from "@/components/organisms/home/HomeFirstSection";
import HomeSecondSection from "@/components/organisms/home/HomeSecondSection";
import "material-symbols";

export default function Home() {

  return (
    <main className="">
      <Popup />
      <HomeFirstSection />
      <HomeSecondSection />
    </main>
  );
}
