import { Headset, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import ClientsSection from "@/components/ClientsSection";
import GetInTouchForm from "@/components/GetInTouchForm";
import GoogleMap from "@/components/GoogleMap";
import PageBanner from "@/components/PageBanner";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "Motia'z Royal Business Park, Corporate Office, 4th Floor, Chandigarh – Ambala Highway, Zirakpur",
  },
  {
    icon: Phone,
    label: "For Sales",
    value: "+91 77103 08523",
    href: "tel:+917710308523",
  },
  {
    icon: PhoneCall,
    label: "For Any Inquiry",
    value: "Toll Free: +91 88600 95959",
    href: "tel:+918860095959",
  },
  {
    icon: Headset,
    label: "For General/Other Services",
    value: "Helpdesk: +91 85588 44517",
    href: "tel:+918558844517",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@motiagroup.com",
    href: "mailto:info@motiagroup.com",
  },
];

export default function Page() {
  return (
    <>
      <PageBanner
        title="Contact us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact us" }]}
        image="/contactus.png"
        overlayColor="#377F45"
        overlayOpacity={0.82}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
          Get In Touch
        </span>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Your dream property in North India is just a conversation away. Whether you&rsquo;re exploring residential
          or commercial opportunities, our team is here to help &mdash; reach out to{" "}
          <span className="font-semibold text-[#377f45]">Motia Group</span> below.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <GetInTouchForm />

          <div className="rounded-2xl bg-[#f4f8f5] p-8 shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            <p className="mt-2 text-gray-600">
              Interested in investing in commercial or residential property? Fill in the form and we&rsquo;ll reach
              you soon.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#377f45]">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block text-gray-700 transition-colors hover:text-[#377f45]">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-gray-700">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <h3 className="text-center text-2xl font-bold text-gray-900">Find Us Here</h3>
        <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
          <GoogleMap />
        </div>
      </section>

      <ClientsSection />
    </>
  );
}
