import {
  Icon,
  PrimaryButton,
  Reveal,
  SmartLink,
  chargerOptionBenefits,
  chargerOptionCards,
  useState,
} from "../../HostPage.shared.jsx";
import { useCart } from "../../../../context/CartContext";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../../../context/StorefrontSettingsContext";
import { useCommerceData } from "../../../../hooks/useCommerceData";
import {
  findChargerProduct,
  getChargerCardDetails,
  getChargerDetailHref,
} from "../../../../lib/chargerCatalog";
import { commerceApi } from "../../../../services/api";

function ChargerCartButton({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const isAvailable = Number(product.stock) > 0;
  const label = isAvailable
    ? added
      ? `${product.title} added to cart`
      : `Add ${product.title} to cart`
    : `${product.title} is out of stock`;

  return (
    <button
      type="button"
      className={`host-charger-cart ${added ? "is-added" : ""}`}
      aria-label={label}
      title={label}
      disabled={!isAvailable}
      onClick={() => {
        addItem(product);
        setAdded(true);
      }}
    >
      <Icon name={added ? "check" : "cart"} className="h-5 w-5" />
    </button>
  );
}

export function ChargersSection({
  setShowInstallationOptions,
  showInstallationOptions,
}) {
  const { settings } = useStorefrontSettings();
  const catalog = useCommerceData(
    () => commerceApi.allProducts({ sort: "featured" }),
    [],
  );

  return (
    <section id="chargers" className="host-charger-options">
      <div className="host-container">
        <div className="host-charger-panel">
          <span className="host-charger-panel-glow" aria-hidden="true" />
          <img
            src="/img/Host/Hosting Banner.png"
            alt="Zvolta charger installed outside a host location"
            className="host-charger-bg"
          />

          <Reveal className="host-charger-header">
            <p className="host-charger-eyebrow">
              <span>
                <Icon name="bolt" className="h-5 w-5" />
              </span>
              Charger options
            </p>
            <h2 className="host-charger-title">
              Match charging power to how people use <span>your space.</span>
            </h2>
            <p className="host-charger-copy">
              Choose the right charger for your traffic, power supply, and
              business goals.
            </p>
          </Reveal>

          <div className="host-charger-grid">
            {chargerOptionCards.map((charger, index) => {
              const product = findChargerProduct(catalog.data, charger.title);
              const details = getChargerCardDetails(product, charger);
              const title = product?.title || charger.title;
              const description =
                product?.shortDescription ||
                product?.description ||
                charger.description;
              const image = product?.images?.[0]?.url || charger.image;
              const detailHref = getChargerDetailHref(product, charger.href);
              const isPopular = Boolean(product?.isPopular || charger.popular);
              const price = product
                ? formatStoreCurrency(
                    product.discountPrice || product.price,
                    settings.currency,
                  )
                : charger.price;

              return (
                <Reveal key={charger.title} delay={index * 0.08}>
                  <article
                    className={`host-charger-card ${isPopular ? "is-popular" : ""}`}
                  >
                    <span className="host-charger-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {isPopular ? (
                      <span className="host-charger-popular">Popular</span>
                    ) : null}
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                    {image ? (
                      <div className="host-charger-art">
                        <img
                          src={image}
                          alt={product?.images?.[0]?.alt || `${title} product`}
                          className={`host-charger-image ${charger.imageSize === "large" ? "is-large" : "is-small"}`}
                        />
                      </div>
                    ) : null}
                    <div className="host-charger-feature-list">
                      {charger.features.map((feature) => (
                        <div className="host-charger-feature" key={feature}>
                          <span className="host-charger-check">
                            <Icon name="check" className="h-3 w-3" />
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="host-charger-specs">
                      <div className="host-charger-spec-row">
                        <span>Power</span>
                        <strong>{details.power}</strong>
                      </div>
                      <div className="host-charger-spec-row">
                        <span>Best for</span>
                        <strong>{details.bestFor}</strong>
                      </div>
                      <div className="host-charger-spec-row">
                        <span>Location</span>
                        <strong>{details.location}</strong>
                      </div>
                      <div className="host-charger-spec-row">
                        <span>Price</span>
                        <strong>{price}</strong>
                      </div>
                    </div>
                    <div className="host-charger-actions">
                      <SmartLink
                        href={detailHref}
                        className={`host-charger-learn ${isPopular ? "is-primary" : ""}`}
                      >
                        View details
                        <Icon name="arrow" className="h-4 w-4" />
                      </SmartLink>
                      {product ? <ChargerCartButton product={product} /> : null}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="host-charger-support-strip">
            {chargerOptionBenefits.map((item) => (
              <div className="host-charger-support-item" key={item.title}>
                <span className="host-charger-support-icon">
                  <Icon name={item.icon} className="h-8 w-8" />
                </span>
                <span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal>
            <div className="host-charger-quiz">
              <div className="host-charger-quiz-copy">
                <span className="host-charger-quiz-mark">?</span>
                <span>
                  Not sure which charger fits your space?
                  <small>
                    Take our quick quiz and we'll recommend the best option.
                  </small>
                </span>
              </div>
              <PrimaryButton
                href="/contact-us"
                className="host-charger-quiz-button"
              >
                Find the right charger
              </PrimaryButton>
            </div>
            {!showInstallationOptions ? (
              <div className="host-expand-actions host-installation-expand-actions">
                <button
                  type="button"
                  className="host-expand-button"
                  onClick={() => setShowInstallationOptions(true)}
                >
                  Show installation options
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
