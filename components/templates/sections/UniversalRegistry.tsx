/**
 * [AEMZA_MACKS_SYSTEM_ARCHITECT]
 * [MISSION]: CONSOLIDATE_ALL_REGISTRY_VARIANTS (Features, Products, Items)
 * [COMPONENT_ID]: UniversalRegistry.tsx
 * [VERSION]: 1.0.0
 * [STATUS]: PRODUCTION_READY
 * [STRATEGY]: RSC-First, Data-Driven Rendering, Strict Type Safety
 */

import { memo } from "react";
import type { BaseTemplateProps } from "@/types/template-props";
import type { ServiceFeature, CatalogItem } from "@/types";
import IconRenderer from "@/components/ui/IconRenderer";

// Sub-component for rendering Core Features
export const FeatureGrid = memo(({ features }: { features: readonly ServiceFeature[] }) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {features.map((feature) => (
      <div
        key={feature.title}
        className="transform rounded-xl border border-gray-700 bg-gray-800/50 p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-cyan-500/10"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700 text-cyan-400">
          <IconRenderer name={feature.icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{feature.title}</h3>
        <p className="mt-2 text-gray-300">{feature.description}</p>
      </div>
    ))}
  </div>
));
FeatureGrid.displayName = "FeatureGrid";

// Sub-component for rendering Catalog Items (Products/Services)
const ItemGrid = memo(({ items }: { items: readonly CatalogItem[] }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {items.map((item) => (
      <div
        key={item.name}
        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 text-center shadow-md transition-all hover:border-cyan-500/50 hover:shadow-xl"
      >
        <div className="flex h-32 items-center justify-center bg-gray-900">
          <IconRenderer
            name={item.icon}
            className="h-16 w-16 text-cyan-400 transition-transform group-hover:scale-110"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <p className="mt-2 flex-1 text-sm text-gray-400">{item.description}</p>
          {item.price && (
            <div className="mt-4">
              <span className="rounded-full bg-cyan-900/50 px-3 py-1 text-sm font-medium text-cyan-300">
                {item.price} {item.unit && `/ ${item.unit}`}
              </span>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
));
ItemGrid.displayName = "ItemGrid";

const UniversalRegistry = ({ data }: BaseTemplateProps) => {
  const { items, coreFeatures, templateSlug } = data;

  const hasItems = items && items.length > 0;
  const hasFeatures = coreFeatures && coreFeatures.length > 0;

  // Determine which content to render based on priority and template type
  const renderContent = () => {
    // For catalog-type templates, always prioritize items.
    if (templateSlug === "catalog" && hasItems) {
      return (
        <div className="space-y-12">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Service Catalog
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
              Explore our comprehensive range of solutions tailored for your success.
            </p>
          </div>
          <ItemGrid items={items!} />
        </div>
      );
    }

    // For other templates, render features if they exist.
    if (hasFeatures) {
      return (
        <div className="space-y-12">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Core Capabilities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
              Leverage our powerful features designed to deliver maximum impact and results.
            </p>
          </div>
          <FeatureGrid features={coreFeatures} />
        </div>
      );
    }

    // Fallback to items if features are not present but items are.
    if (hasItems) {
      return (
        <div className="space-y-12">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Available Packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
              Choose the perfect package that fits your needs.
            </p>
          </div>
          <ItemGrid items={items!} />
        </div>
      );
    }

    return null; // Render nothing if no relevant data is available
  };

  const content = renderContent();

  if (!content) {
    return null;
  }

  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{content}</div>
    </section>
  );
};

export default memo(UniversalRegistry);
