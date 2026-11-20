export type Spec = { label: string; value: string };

export const services: {
  id: string;
  title: string;
  short: string;
  long: string;
  lead: string;
  specs: Spec[];
}[] = [
  {
    id: "machined-parts",
    title: "Custom Machined Parts",
    short: "CNC-machined frames, arms, mounts, and brackets built to your drawings and tolerances.",
    long: "CNC-machined frames, arms, motor mounts, gimbal brackets, and payload plates, produced to your drawings and tolerances. We work in aluminum (6061-T6, 7075), carbon-fiber-reinforced nylon, and G10/FR4 for lightweight structural parts.",
    lead: "5–10 days",
    specs: [
      { label: "Tolerance", value: "±0.05mm typical" },
      { label: "Turnaround", value: "5–10 business days" },
      { label: "Best for", value: "Structural airframe parts" },
    ],
  },
  {
    id: "prototyping",
    title: "Rapid Prototyping",
    short: "3D-printed and short-run parts turned around in days, so you can iterate on a design fast.",
    long: "FDM and resin 3D printing for fit checks, functional prototypes, and short-run parts that don't need to survive a full flight envelope yet. Get a design in your hands fast, iterate, then move the finalized version to CNC or small-batch production.",
    lead: "1–3 days",
    specs: [
      { label: "Materials", value: "PETG, nylon, resin" },
      { label: "Turnaround", value: "1–3 business days" },
      { label: "Best for", value: "Fit checks, iteration" },
    ],
  },
  {
    id: "small-batch",
    title: "Small-Batch Production",
    short: "Scalable manufacturing runs for fleets and first orders, without offshore minimums.",
    long: "Runs from a few dozen to a few thousand units, scaled to fleet orders or first production contracts. There are no overseas minimums and no six-month lead times. Parts are queued into our own shop and shipped as batches complete.",
    lead: "2–6 weeks",
    specs: [
      { label: "Batch size", value: "25 to 5,000 units" },
      { label: "Turnaround", value: "2–6 weeks, by volume" },
      { label: "Best for", value: "Fleet and first orders" },
    ],
  },
  {
    id: "inspection",
    title: "Quality & Inspection",
    short: "Dimensional checks and material documentation on every batch we ship.",
    long: "Every batch ships with dimensional inspection records and material certification, giving your engineering team documentation to trace back to alongside the parts themselves.",
    lead: "Every batch",
    specs: [
      { label: "Inspection", value: "First-article and sampling" },
      { label: "Documentation", value: "Certificate of conformance" },
      { label: "Best for", value: "Flight-critical parts" },
    ],
  },
];

export const reasons = [
  {
    title: "100% US-based manufacturing",
    short: "No offshore shipping delays or export-control uncertainty. Everything is made domestically.",
    long: "No offshore shipping delays, customs holds, or export-control uncertainty. Every part is produced domestically, which matters for commercial fleets and for government customers with sourcing requirements.",
  },
  {
    title: "Fast turnaround",
    short: "Prototype parts arrive in days, so your development timeline keeps moving.",
    long: "Prototype parts arrive in days because we run our own shop instead of brokering your job to a third party. Your development timeline keeps moving.",
  },
  {
    title: "Built for the drone industry",
    short: "We understand airframe weight budgets, vibration isolation, and flight-critical tolerances.",
    long: "We understand airframe weight budgets, vibration isolation, and flight-critical tolerances, so our review comments cover how a part will fly as well as whether it prints cleanly.",
  },
  {
    title: "Scales with you",
    short: "From a one-off prototype to a production order, the same partner carries you through.",
    long: "From a one-off prototype to a production order, the same partner and the same shop carry you through, with no re-sourcing or re-qualifying a new vendor as you grow.",
  },
];

export const steps = [
  {
    title: "Submit specs",
    short: "Send us your CAD files, drawings, or even a rough sketch and target volume.",
    long: "Send us CAD files (STEP, STL, or native format), drawings with call-outs, or even a rough sketch if the design isn't locked yet. Tell us your target volume and rough timeline so we can scope the right process from the start.",
    time: "Same day",
  },
  {
    title: "Quote & DFM review",
    short: "We review manufacturability, suggest tweaks if needed, and send a firm quote.",
    long: "We review the design for manufacturability, flag anything slow, fragile, or expensive to produce as drawn, and suggest changes where they help. You get a firm, itemized quote with lead time before anything is committed to production.",
    time: "1–2 business days",
  },
  {
    title: "Manufacture",
    short: "Parts are produced and inspected in our US facility.",
    long: "Parts are produced and dimensionally inspected in our US facility. For a new design, we run a first article for your sign-off before committing to the full batch, so surprises get caught on one part instead of a hundred.",
    time: "3–15 business days, by process and volume",
  },
  {
    title: "Ship & support",
    short: "Your order ships with documentation, and we're on call for the next run.",
    long: "Your order ships with inspection records and material documentation attached. We stay on call for the next run, and most customers come back for repeat batches instead of re-quoting from scratch each time.",
    time: "1–3 business days to ship",
  },
];

export const faq = [
  {
    q: "Do you need a finished CAD file to start?",
    a: "No. A rough sketch or reference part is enough to start a conversation, and a finished model speeds up the quote.",
  },
  {
    q: "What's the minimum order?",
    a: "There is none. We'll run a single prototype part as readily as a production batch.",
  },
  {
    q: "Can you sign an NDA before reviewing our design?",
    a: "Yes, and it's standard practice for anything pre-production.",
  },
];

export const facts = [
  "100% US-based manufacturing",
  "No minimum order",
  "Prototype to production",
  "NDA on request",
];
