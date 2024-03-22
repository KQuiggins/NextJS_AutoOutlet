import parts from '@/parts.json';



const PartsPage = () => {


  return (
    <div>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {parts.map((part, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{part.part_name}</h2>
              <p>{part.description}</p>
              <p>Car: {part.car}</p>
              <p>Year: {part.year}</p>
              <p>Seller Name: {part.seller_name}</p>
              <p>Seller Location: {part.seller_location.street}, {part.seller_location.city}, {part.seller_location.state}, {part.seller_location.zipcode}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartsPage