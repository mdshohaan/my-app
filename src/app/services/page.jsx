import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
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
  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">ServicesPage</h1>
      <section className="grid grid-cols-12 gap-4">
        {data.map((d) => {
          return (
            <div
              key={d._id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <figure className="border-2 border-slate-300 bg-slate-50 w-full h-full flex justify-center items-center">
                <Link href={`/services/${d._id}`}>
                  <Image
                    className="w-full h-full object-scale-down"
                    src={d.service_image}
                    width={400}
                    height={150}
                    alt={`${d.service_name}`}
                  />
                </Link>
              </figure>
            </div>
          );
        })}
      </section>
    </div>
  );
}