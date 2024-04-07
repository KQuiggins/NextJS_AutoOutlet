import HeroPage from "@/components/Hero";
import GridBoxes from "@/components/GridBoxes";
import HomeParts from "@/components/HomeParts";
import connectDb from "./config/db";

const HomePage = async () => {
  await connectDb();
  return (
    <>
      <HeroPage />
      <GridBoxes />
      <HomeParts />
    </>
  );
};

export default HomePage;
