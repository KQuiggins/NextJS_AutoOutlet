import Image from "next/image";

const PartImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt="part image"
            width={1800}
            height={400}
            priority={true}
            className="object-cover h-[400px] mx-auto rounded-xl"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="part image"
                width={0}
                height={0}
                sizes="100vw"
                priority={true}
                className="object-cover h-[400px] w-full rounded-xl"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PartImages;
