import { features } from "@/Items/HomeItems/StoreFeatures";

export function StoreFeatures() {
  return (
    <section className="my-12 p-2 md:px-12 rounded-2xl max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#E6E4B2] mb-10">چرا ما؟</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map(({ id, title, desc, icon: Icon }) => (
          <div
            key={id}
            className="bg-gradient-to-b from-[#1F1F1F] to-[#2C2C2C] rounded-xl p-6 text-center shadow-sm shadow-orange-500"
          >
            <div className="flex justify-center mb-4">
              <Icon className="w-12 h-12 text-[#FA6320] store-icon-glow" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
