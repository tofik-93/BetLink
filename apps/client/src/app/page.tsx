"use client";
import { ClientLayout } from "../components/layout/ClientLayout";
import { Button } from "../components/ui/buttion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Users, Home, ArrowRight, CheckCircle } from "lucide-react";
import { PropertyCard } from "../components/property/PropertyCard";
import { mockProperties } from "../data/mockProperties";
import { motion } from "framer-motion";
import heroBg from "../../public/assets/hero.png";


const steps = [
  {
    icon: Home,
    title: "Browse Properties",
    desc: "Explore verified listings curated by our broker network.",
  },
  {
    icon: Shield,
    title: "Submit a Request",
    desc: "Apply for your preferred property — your info stays private.",
  },
  {
    icon: Users,
    title: "Broker Connects You",
    desc: "Once approved, broker securely shares contact details.",
  },
];

export default function HomePage() {
  return (
    <ClientLayout>
      {/* HERO */}
      <section className="relative h-[700px] flex items-center">
        <Image src={heroBg} alt="" fill priority className="object-cover" />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-[#0b1c39]/80" />

        <div className="relative container">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              Find Your Perfect
              <br />
              Rental,{" "}
              <span className="text-amber-400 font-semibold">
                Securely
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/80">
              BetLink connects renters and landlords through trusted brokers.
              No direct contact until you're approved — privacy first.
            </p>

            <div className="mt-10 flex gap-5">
              <Link href="/properties">
                <button className="bg-amber-400 text-black px-7 py-3 rounded-md font-medium hover:bg-amber-300 transition flex items-center gap-2">
                  Browse Properties
                  <ArrowRight size={18} />
                </button>
              </Link>

              <Link href="/register">
                <button className="bg-white/90 text-gray-900 px-7 py-3 rounded-md font-medium hover:bg-white transition">
                  List Your Property
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-semibold">
            How BetLink Works
          </h2>
          <p className="text-gray-500 mt-3">
            A streamlined process that keeps everyone safe and informed.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <step.icon className="text-amber-500" />
                </div>

                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-semibold">
                Featured Properties
              </h2>
              <p className="text-gray-500 mt-2">
                Handpicked by our broker team.
              </p>
            </div>

            <Link
              href="/properties"
              className="text-amber-500 font-medium flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockProperties.slice(0, 3).map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="container max-w-xl text-center">
          <h2 className="text-3xl font-serif font-semibold">
            Why Choose BetLink?
          </h2>

          <div className="space-y-4 mt-10 text-left">
            {[
              "Broker-verified listings — no scams, no spam",
              "Your contact details stay private until approval",
              "Transparent request tracking from start to finish",
              "Dedicated broker support throughout the process",
            ].map(item => (
              <div
                key={item}
                className="flex gap-3 bg-white border rounded-lg p-4 shadow-sm"
              >
                <CheckCircle className="text-green-500 shrink-0 mt-1" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}