import GridBox from "./GridBox";

const GridBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <GridBox
            heading="For Car Owners"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Car Parts",
              link: "/parts",
              backgroundColor: 'bg-black'
            }}

            >
              Find the perfect car parts for your vehicle. Browse our collection and contact sellers.
            </GridBox>
          <GridBox
            heading="For Car Parts Sellers"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Car Parts",
              link: "/parts/add_parts",
              backgroundColor: 'bg-blue-500'
            }}

            >
              List your car parts for sale and connect wih potential buyers. Sell new or used car parts.
            </GridBox>
        </div>
      </div>
    </section>
  );
};

export default GridBoxes;
