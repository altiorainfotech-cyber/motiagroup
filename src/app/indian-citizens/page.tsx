import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import { faqPageJsonLd } from "@/lib/structuredData";

const leftFaqs: FaqItem[] = [
  {
    question: "What number of properties would I be able to purchase?",
    answer: <p>You can possess as many properties as you want.</p>,
  },
  {
    question: "Do I need to pay stamp duty if the property is transferred or is a gift?",
    answer: (
      <p>
        Yes. Generally, the stamp duty on the gift deed ranges from 5% to 12% in all states. Whereas, in states like
        Haryana, Rajasthan and Delhi, concession of 1 to 2 per cent is given to female transferors.
      </p>
    ),
  },
  {
    question: "What is the time required for home loan disbursement?",
    answer: (
      <p>
        Generally, loans are disbursed within 2 weeks after the full documentation and submission of required
        procedures.
      </p>
    ),
  },
  {
    question: "What are the documents needed to apply for a home loan?",
    answer: (
      <>
        <p>You have to submit the following documents:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Proof of Income: Pay stub, Bank statements (personal &amp; business)</li>
          <li>Salaried Applicants: Latest 3 Months salary slip showing all deductions and Form 16 for the last three years.</li>
          <li>Self Employed Applicants: IT returns for the past 2 years and computation of income for the last 2 years as certified by a CA</li>
          <li>Bank Statement: Past 6 months</li>
          <li>Guarantor Form (Optional)</li>
        </ul>
      </>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What is RERA?",
    answer: (
      <>
        <p>
          RERA is the acronym (short-form) for Real Estate (Regulation and Development) Act, 2016. It&rsquo;s salient
          features:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>To bring transparency and efficiency in the process of buying and selling of Real-estate.</li>
          <li>To provide legal cover and to protect consumers&rsquo; interests / rights in the RE sector</li>
          <li>To ensure that there is a defined process and efficient handling of disputes</li>
          <li>
            To define and standardize term and measures, so as to bring all concerned parties to the same level of
            understanding, thereby also lending certain standardization across builders / projects. This will further
            help consumers to compare diverse projects and developers with ease.
          </li>
          <li>Defining duties, liabilities and penalties for builders / developers and brokers / intermediaries.</li>
          <li>Setting up timelines for registration processes and dispute resolution.</li>
          <li>
            RERA mandates all developers / builders to upload all relevant information regarding a project &ndash;
            viz. Details of land titles, approvals, construction progress, names of brokers etc., on their website.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What do the terms: Carpet area, Built up area and Super built up area mean?",
    answer: (
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <span className="font-semibold text-gray-900">Build up area:</span> The whole region of the floor
          &ndash; the rug region, dividers, halls, hallways, chamber zones and storm cellar.
        </li>
        <li>
          <span className="font-semibold text-gray-900">Carpet area:</span> usable area inside the dividers &ndash;
          that is, the territory in which you can really lay a rug.
        </li>
        <li>
          <span className="font-semibold text-gray-900">Super built up area:</span> This insinuates the entire area,
          which incorporates the floor covering territory, halls and passageways, dividers, lifts, staircases storm
          cellars, and other chamber and utility territories.
        </li>
      </ul>
    ),
  },
  {
    question: "Are there any income tax considerations while transferring newly acquired property?",
    answer: (
      <p>
        If the transfer happens inside three years of procurement, the income tax exemption under Section 54F of the
        Income Tax Act does not hold good.
      </p>
    ),
  },
  {
    question: "What is the maximum amount of housing loan available?",
    answer: (
      <p>
        The maximum amount is 85% of the cost of the property, which includes the cost of land, subject to a maximum
        amount of INR 1 crore.
      </p>
    ),
  },
];

const faqSchema = faqPageJsonLd([
  {
    question: "What number of properties would I be able to purchase?",
    answer: "You can possess as many properties as you want.",
  },
  {
    question: "Do I need to pay stamp duty if the property is transferred or is a gift?",
    answer:
      "Yes. Generally, the stamp duty on the gift deed ranges from 5% to 12% in all states. Whereas, in states like Haryana, Rajasthan and Delhi, a concession of 1 to 2 per cent is given to female transferors.",
  },
  {
    question: "What is the time required for home loan disbursement?",
    answer:
      "Generally, loans are disbursed within 2 weeks after the full documentation and submission of required procedures.",
  },
  {
    question: "What are the documents needed to apply for a home loan?",
    answer:
      "You have to submit the following documents: proof of income (pay stub, bank statements for personal and business); for salaried applicants, the latest 3 months' salary slips showing all deductions and Form 16 for the last three years; for self-employed applicants, IT returns for the past 2 years and computation of income for the last 2 years as certified by a CA; bank statements for the past 6 months; and a guarantor form (optional).",
  },
  {
    question: "What is RERA?",
    answer:
      "RERA is the acronym (short-form) for Real Estate (Regulation and Development) Act, 2016. Its salient features include: bringing transparency and efficiency in the process of buying and selling of real estate; providing legal cover and protecting consumers' interests and rights in the real estate sector; ensuring a defined process and efficient handling of disputes; defining and standardizing terms and measures so as to bring all concerned parties to the same level of understanding, lending standardization across builders and projects and helping consumers compare diverse projects and developers with ease; defining duties, liabilities and penalties for builders/developers and brokers/intermediaries; setting up timelines for registration processes and dispute resolution; and mandating all developers/builders to upload all relevant information regarding a project, such as details of land titles, approvals, construction progress, and names of brokers, on their website.",
  },
  {
    question: "What do the terms: Carpet area, Built up area and Super built up area mean?",
    answer:
      "Built up area is the whole region of the floor, including the carpet area, walls, balconies, corridors, chamber zones and basement. Carpet area is the usable area inside the walls, that is, the area in which you can actually lay a carpet. Super built up area refers to the entire area, which includes the carpet area, halls and passageways, walls, lifts, staircases, basements, and other chamber and utility areas.",
  },
  {
    question: "Are there any income tax considerations while transferring newly acquired property?",
    answer:
      "If the transfer happens within three years of procurement, the income tax exemption under Section 54F of the Income Tax Act does not hold good.",
  },
  {
    question: "What is the maximum amount of housing loan available?",
    answer:
      "The maximum amount is 85% of the cost of the property, which includes the cost of land, subject to a maximum amount of INR 1 crore.",
  },
]);

export default function Page() {
  return (
    <>
      <PageBanner
        title="FAQ's for Indian Citizens & Property Buyers"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }, { label: "Indian Citizens" }]}
        image="/faq.jpg"
        overlayColor="#377F45"
        overlayOpacity={0.82}
      />
      <JsonLd data={faqSchema} />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">FAQ</span>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Generally Asked Questions</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Everything Indian citizens and property buyers need to know about purchasing with Motia Group &mdash; from
          home loans and RERA to area terminology and tax considerations.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal variant="left">
            <FaqAccordion items={leftFaqs} />
          </Reveal>
          <Reveal variant="right">
            <FaqAccordion items={rightFaqs} />
          </Reveal>
        </div>
      </section>

      <Reveal variant="up">
        <RelatedLinks
          links={[
            { label: "NRI Property FAQ", href: "/nris" },
            { label: "Contact Motia Group", href: "/contact-us" },
            { label: "Why Choose Motia Group", href: "/why-motia-group" },
            { label: "About Motia Group", href: "/about-us" },
            { label: "Property Investment", href: "/property-investment" },
          ]}
        />
      </Reveal>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
