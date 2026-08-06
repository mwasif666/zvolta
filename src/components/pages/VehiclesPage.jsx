import { VehicleHeroSection } from "./VehiclesPage/sections/VehicleHeroSection.jsx";
import { VehicleShowcaseSection } from "./VehiclesPage/sections/VehicleShowcaseSection.jsx";
import { StandardFeaturesSection } from "./VehiclesPage/sections/StandardFeaturesSection.jsx";
export default function VehiclesPage() {
  return (
    <>
      <div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="w-full bg-white">
              <VehicleHeroSection />
              <div className="content-overlap bg-white">
                <VehicleShowcaseSection />
                <StandardFeaturesSection />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
