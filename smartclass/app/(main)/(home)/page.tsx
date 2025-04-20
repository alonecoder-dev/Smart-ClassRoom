import StatusBar from "@/components/StatusBar";
import MainMenu from "@/components/MainMenu";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-32 pt-2 p1-10 item-center max-md:gap-10 md:flex-row animate-fade-in">

      <StatusBar />
      <MainMenu />


    </div>
  );
}

export default HomePage;