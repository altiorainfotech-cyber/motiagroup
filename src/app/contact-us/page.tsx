import ClientsSection from "@/components/ClientsSection";
import GetInTouchForm from "@/components/GetInTouchForm";
import GoogleMap from "@/components/GoogleMap";
import PageBanner from "@/components/PageBanner";

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
        <p className="text-gray-700">
          Your dream property in North India is just a conversation away. Whether you&rsquo;re exploring residential
          or commercial opportunities, our team is here to help Contact us at{" "}
          <span className="text-[#377f45]">Motia Group</span>
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <GetInTouchForm />

          <div>
            <h2 className="text-center text-2xl uppercase tracking-wide text-[#377f45] sm:text-3xl">
              Contact Information
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl text-[#377f45]">Head Office:</h3>
                <p className="mt-1 text-gray-700">
                  Motia&rsquo;z Royal Business Park, Corporate Office, 4th Floor, Chandigarh &ndash; Ambala Highway,
                  Zirakpur
                </p>
              </div>

              <div>
                <h3 className="text-xl text-[#377f45]">For Sales:</h3>
                <p className="mt-1 text-gray-700">
                  Sales Representative: <span className="text-gray-500">+91</span> 77103 08523
                </p>
              </div>

              <div>
                <h3 className="text-xl text-[#377f45]">For Any Inquiry:</h3>
                <p className="mt-1 text-gray-700">Toll Free: +91 88600 95959</p>
              </div>

              <div>
                <h3 className="text-xl text-[#377f45]">For General/Other Services:</h3>
                <p className="mt-1 text-gray-700">
                  Helpdesk: <span className="text-gray-500">+91</span> 85588 44517
                </p>
              </div>

              <div>
                <h3 className="text-xl text-[#377f45]">Email:</h3>
                <p className="mt-1 text-gray-700">info@motiagroup.com</p>
              </div>

              <p className="text-gray-700">
                If you are interested investing in commercial or residential property, kindly fill in this form. We
                will reach you soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      
   <GoogleMap />
      <ClientsSection />
    </>
  );
}
