import CleanEnergyEnvironment from "../../../components/facts/CleanEnergyenvironment";
import FactsCTA from "../../../components/facts/FactsCTA";
import FactsDisclaimer from "../../../components/facts/FactsDisclaimer";
import FactsHero from "../../../components/facts/FactsHero";
import FrameworkComparison from "../../../components/facts/FrameworkComparison";
import NationalContext from "../../../components/facts/NationalContext";

import TaxRevenue from "../../../components/facts/TaxRevenue";
import WorkforceReality from "../../../components/facts/WorkforceReality";
import FactsHeader from "../../../components/FactsHeader";
import Foot from "../../../components/Foot";


export default function FactsPage () {
  return (
    <>
    <FactsHeader />

    <main>
      <FactsHero />
      <TaxRevenue />
      <WorkforceReality />
      <CleanEnergyEnvironment />
      <FrameworkComparison />
      <NationalContext />
      <FactsCTA />
      <FactsDisclaimer />
      <Foot />
      </main>
    </>
      
  )
}