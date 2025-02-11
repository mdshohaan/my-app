
export default function ServiceDetailPage({ params }) {
  const data = [
    {
      _id: "60d21b4667d0d8992e610c85",
      service_name: "EcoClean",
      service_image: "/service_img_1.png",
      service_description:
        "EcoClean offers environmentally friendly cleaning services for homes and offices, using only non-toxic and biodegradable products.",
    },
    {
      _id: "60d21b4667d0d8992e610c86",
      service_name: "TechFix",
      service_image: "/service_img_2.png",
      service_description:
        "TechFix provides comprehensive repair and maintenance services for all your electronic devices, ensuring they run smoothly and efficiently.",
    },
    {
      _id: "60d21b4667d0d8992e610c87",
      service_name: "FitLife",
      service_image: "/service_img_3.png",
      service_description:
        "FitLife offers personalized fitness training and nutrition plans to help you achieve your health and wellness goals.",
    },
  ];
  const id = params?.id;
  const singleData = data.find((d) => d._id == id);
  return (
    <>
      <h1 className="font-bold text-3xl mb-4">ServiceDetailPage</h1>
      <div className="flex items-center">
        <div className="max-w-[400px] space-y-4">
          <p>ID: {id}</p>
          <p>{singleData.service_name}</p>
          <h2 className="font-bold">Description</h2>
          <p>{singleData.service_description}</p>
        </div>

        <figure className="w-full flex justify-center">
          <img
            className="w-full max-w-[400px]"
            src={singleData.service_image}
          />
        </figure>
      </div>
    </>
  );
}