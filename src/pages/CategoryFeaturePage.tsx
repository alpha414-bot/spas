import { HotTubsBrandInterface } from "@/function";
import MainLayout from "@/layouts/MainLayout";
import { useLoaderData } from "react-router-dom";
interface CategoryLoaderData {
  category: HotTubsBrandInterface;
}
const CategoryFeaturePage = () => {
  const { category } = useLoaderData() as CategoryLoaderData;

  return (
    <MainLayout
      title={`${category?.title} Features`}
      description={category?.textDescription}
    >
      <div className="container maincontent">
        <div className="jumbotron overview clarity">
          {/*style="background: url('/img/backyard-bg.jpg'); background-repeat:no-repeat;">*/}
          <div className="row">
            <h1>Discover how to improve your life by adding {category?.title}.</h1>
          </div>
          <div className="mastercrafted">
            <div className="row">
              <h2 className="slant-title">Seating</h2>
              <div className="col-md-12">
                <div className="col-md-4">
                  <img
                    width="100%"
                    className="slantMask"
                    src="/img/Sitting.jpg"
                    alt="Man and woman enjoying Coastal Series Spas egonomically designed hot tub seats"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Ergonomic Design</h4>
                  <p>
                    From the minute you sit down, you'll feel the difference.
                    Our engineers created seats that complement the contour of
                    your body, making it easy to relax, naturally. Once you're
                    wrapped in comfort of the form fitting seats, strategic jet
                    placement delivers targeted hydrotherapy from head to toe.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <h2 className="slant-title">HYDROTHERAPY - JET SYSTEM</h2>
              <div className="row">
                <div className="col-md-4">
                  <img
                    width="100%"
                    className="slantMask"
                    src="/img/gallery/features/Tuina Station.png"
                    alt="Master Force bio magnetic hot tub therapy system on Trident Series Spas"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    width="100%"
                    className="slantMask"
                    src="/img/gallery/features/Vortex Station.png"
                    alt="Master Force bio magnetic hot tub therapy system on Trident Series Spas"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    width="100%"
                    className="slantMask"
                    src="/img/gallery/features/Shiatsu Station.png"
                    alt="Master Force bio magnetic hot tub therapy system on Trident Series Spas"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img
                    width="100%"
                    className="slantMask"
                    src="/img/gallery/features/Directional Station.png"
                    alt="Master Force bio magnetic hot tub therapy system on Trident Series Spas"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    width="100%"
                    className="slantMask"
                    src="/img/gallery/features/Rotary Shower.png"
                    alt="Master Force bio magnetic hot tub therapy system on Trident Series Spas"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    width="100%"
                    className="slantMask"
                    src="/img/gallery/features/Foot Massage.png"
                    alt="Master Force bio magnetic hot tub therapy system on Trident Series Spas"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <h2 className="slant-title">Engineering Features</h2>
              <div className="col-md-4">
                <img
                  width="100%"
                  className="slantMask"
                  src="/img/gallery/features/Framing.png"
                  alt="Master Spas exclusive EcoPur Charge filtration system takes the work out of hot tub maintainance"
                />
                <h4>FRAMING</h4>
                <p>
                  Quality pressure-treated wood structure (50 year life
                  expectancy, meets environmental stan dards). Removable side
                  panels. Anti-moisture ABS plastic base for increased stability
                  and heat re tention. Base and frame with ThermoFoilTM protec
                  tion. Frame is bonded to shell.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  width="100%"
                  className="slantMask"
                  src="/img/gallery/features/DYNACRETE.png"
                  alt="Energy efficient insulation lowers the cost of operating your hot tub"
                />
                <h4>DYNACRETE BASE</h4>
                <p>
                  {" "}
                  Made of recycled acrylic and resin. Isolates frame bottom from
                  moisture. The structure’s flat base prevents the creation of
                  air pockets, thus ensuring increased stability and foot
                  support rigidity. The most durable and solid spas in the
                  industry.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  width="100%"
                  className="slantMask"
                  src="/img/gallery/features/REINFORCED.png"
                  alt="Energy efficient insulation lowers the cost of operating your hot tub"
                />
                <h4>REINFORCED FINISH</h4>
                <p>
                  Lucite® Cast Acrylic and reinforced fiberglass fin ish to
                  ensure strength and durability. Hand rolled process eliminates
                  air pockets which can cause separation
                </p>
              </div>
            </div>
            <div className="row">
              <h2 className="slant-title">Spa Cover &amp; Spa Safety</h2>
              <div className="col-md-3">
                <img
                  width="100%"
                  className="slantMask"
                  src="/img/gallery/features/1.png"
                  alt="Bluetooth speaker"
                />
                <p>
                  Double Sewn, Hand Grips Pro vide superior durability and an
                  extra level of comfort.
                </p>
              </div>
              <div className="col-md-3">
                <img
                  width="100%"
                  className="slantMask"
                  src="/img/gallery/features/2.png"
                  alt="Bluetooth speaker"
                />
                <p>
                  Insulated Heat Bags Helps to eliminate heat loss between the
                  cover fold when spa is not in use.
                </p>
              </div>
              <div className="col-md-3">
                <img
                  width="100%"
                  className="slantMask"
                  src="/img/gallery/features/3.png"
                  alt="Bluetooth speaker"
                />
                <p>
                  Child Resistant Locking Mechanisms Fasten to each corner of
                  the spa, providing that extra peace of mind.
                </p>
              </div>
              <div className="col-md-3">
                <img
                  width="100%"
                  className="slantMask"
                  src="/img/gallery/features/4.png"
                  alt="Bluetooth speaker"
                />
                <p>
                  Sealed Interior Hexene Poly Bag Protects inner foam core by
                  reducing sweating and moisture.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <p>
              <small>* Indicates an Optional Feature</small>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default CategoryFeaturePage;
