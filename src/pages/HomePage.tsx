import React from "react";
import { Hero } from "../components/Hero";
import { ScrollSpeed } from "../components/ScrollSpeed";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { PrototypeShowcase } from "../components/PrototypeShowcase";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { TrustedClients } from "../components/TrustedClients";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { CTA } from "../components/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PrototypeShowcase />
      <Projects />
      <Experience />
      <TrustedClients />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
