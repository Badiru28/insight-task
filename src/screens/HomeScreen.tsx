import { HomeHistory, HomeStatistic, HomeStats } from "../components";

const HomeScreen = () => {
  return (
    <div className=" px-28 py-4 space-y-5 ">
      <HomeStats />
      <HomeStatistic />
      <HomeHistory />
    </div>
  );
};

export default HomeScreen;
