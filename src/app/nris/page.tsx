import Image from "next/image";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import PageBanner from "@/components/PageBanner";
import { clientLogos } from "@/data/clientLogos";

const leftFaqs: FaqItem[] = [
  {
    question: "Who is an NRI?",
    answer: (
      <p>
        An Indian Citizen who holds a legitimate Indian international ID and remains abroad for work/carrying on
        business or employment outside India or remains abroad under conditions showing an aim for a questionable
        span of remain abroad is a non-inhabitant Indian (NRI). Non-occupant outside natives of Indian Origin are
        treated at standard with non-inhabitant Indians (NRI).
      </p>
    ),
  },
  {
    question: "Can an NRI buy property in India?",
    answer: (
      <>
        <p>
          The Reserve Bank of India (RBI) has conceded general consent to NRIs, PIOs and outside natives to put
          resources into land for their private purpose. The general authorization covers just residential and
          commercial property. Moreover, NRIs can buy commercial, just as residential property in India (apart from
          agricultural land, farm house and plantation property) gave the buy thought is met either out of internal
          settlements in outside trade through ordinary financial channels or out of assets from the buyer&rsquo;s
          NRE/FCNR accounts kept up with banks in India.
        </p>
        <p>
          For this, A declaration must be submitted to the Central Office of Reserve Bank in structure IPI 7 inside a
          time of 90 days from the date of procurement of the property/last installment.
        </p>
      </>
    ),
  },
  {
    question: "Are there Any Tax Benefits for NRIs purchasing properties?",
    answer: (
      <p>
        No tax benefits are available for except if you file your returns and in this manner become qualified to
        benefit the tax cuts as referenced under Home Loan FAQ&rsquo;s.
      </p>
    ),
  },
  {
    question: "What are the documents mandatory for obtaining NRI Home Loans?",
    answer: (
      <>
        <p>Apart from the documents needed for a regular home loan, NRIs need to submit the following documents to the bank:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Copy of relevant pages of passport</li>
          <li>Copy of visa/work permit</li>
          <li>The power of attorney (POA). POA is required because the borrower is not based in India</li>
          <li>Utility bills (electricity, telephone, gas connection, etc.)</li>
          <li>Driving license issued abroad</li>
          <li>Government- issued national identity card or labour card or social card at the country of residence</li>
          <li>Original copy of the latest overseas bank account showing overseas address</li>
          <li>
            Employment contract/ appointment letter/offer letter or any other document/agreement, showing current
            terms of employment
          </li>
          <li>Salary certificate/slip for last three months</li>
          <li>Bank account statement, showing salary credit for last 6 months</li>
          <li>
            Duly acknowledged copy of last year individual tax return (NRIs/PIOs located in the West Asian countries
            are not required to submit this document).
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the repayment period for the home loan for NRIs?",
    answer: (
      <p>
        Home loan offered to NRIs do not exceed 5 years in major cases. However, some financial institutions offer
        loans for a term of 7 years as well.
      </p>
    ),
  },
  {
    question: "Do NRIs require permission of the Reserve Bank of India (RBI) to buy immovable property in India?",
    answer: (
      <p>No, NRIs don&rsquo;t require consent from the RBI to buy an immovable property (residential or commercial) in India.</p>
    ),
  },
  {
    question: "What is the eligibility criteria for obtaining NRI Home Loans?",
    answer: (
      <>
        <p>The eligibility is calculated in the same way as it is done for resident Indians with special emphasis on:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Qualifications &ndash; Graduate (minimum)</li>
          <li>Current job profile and work experience</li>
          <li>Chances of continuing abroad for the loan tenure</li>
          <li>Chances of servicing the loan with an extended tenure in case the applicant needs to return to India</li>
        </ul>
      </>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is there any limit on the number of residential properties that an NRI can buy?",
    answer: <p>No. There is no limit placed on the number of residential properties an NRI can purchase in India.</p>,
  },
  {
    question: "Can proceeds of the sale of such properties be suspended out of India?",
    answer: (
      <p>
        In case of residential properties, the repatriation of sale proceeds is limited to not more than 2 such
        properties.
      </p>
    ),
  },
  {
    question:
      "Can a person resident outside India hold any immovable property in India acquired by way of inheritance from a person resident in India?",
    answer: (
      <p>
        Yes. A person resident outside India can hold such a kind of property as per the provisions of Section 6(5)
        of the Foreign Exchange Management Act, 1999.
      </p>
    ),
  },
  {
    question: "What is the mode of payment for purchase of residential/commercial property in India by an NRI/PIO?",
    answer: (
      <p>
        Under the general authorizations accessible, an NRI/PIO may buy residential/business property in India out
        of funds remitted to India through regular financial channels or through funds held in his NRE/FCNR
        (B)/NRO account. No consideration will be paid outside of India.
      </p>
    ),
  },
  {
    question: "Can an NRI/PIO acquire residential/commercial property by way of gift under the general permission available?",
    answer: (
      <p>
        Yes. Under the general RBI guidelines, an NRI/PIO may acquire residential/commercial property by way of gift
        from a person resident in India or an NRI or a PIO.
      </p>
    ),
  },
  {
    question: "Can an NRI or PIO buy property in India jointly with a foreign citizen?",
    answer: <p>No, an NRI or a PIO cannot purchase a property in India jointly with a foreign citizen.</p>,
  },
];

export default function Page() {
  const track = [...clientLogos, ...clientLogos];

  return (
    <>
      <PageBanner
        title="NRIs Property FAQ"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }, { label: "NRIs" }]}
        image="/faq.jpg"
        overlayColor="#377F45"
        overlayOpacity={0.82}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Generally Asked questions</h2>

        <div className="mt-10 grid gap-x-8 gap-y-0 sm:grid-cols-2">
          <FaqAccordion items={leftFaqs} />
          <FaqAccordion items={rightFaqs} />
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <h2 className="text-center text-2xl font-bold underline text-gray-900 sm:text-3xl">Our Clients</h2>

        <div className="mt-10 overflow-hidden py-12">
          <div className="animate-marquee flex w-max items-center gap-16 sm:gap-20">
            {track.map((logo, i) => (
              <div key={`${logo.src}-${i}`} className="relative h-20 w-[150px] shrink-0">
                <Image src={logo.src} alt={logo.alt} fill sizes="150px" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
