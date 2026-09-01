import type { Content } from "@/content/types";

export const en = {
  meta: {
    siteName: "ISOVIA",
    tagline: "Radiopharmaceutical Logistics & Emergency Transport",
    pages: {
      home: {
        title: "ISOVIA – Radiopharmaceutical Logistics & Emergency Transport",
        description:
          "Specialised logistics and advisory partner for radiopharmaceuticals, nuclear medicine and theranostics across North Rhine-Westphalia, Hesse and Rhineland-Palatinate. Emergency and backup transport with short response times.",
      },
      nuclearMedicine: {
        title: "About Nuclear Medicine – PET, SPECT & Theranostics | ISOVIA",
        description:
          "How radiopharmaceuticals are used in diagnostics and therapy — and why short half-lives make logistics the decisive factor.",
      },
      contact: {
        title: "Contact & Transport Enquiry | ISOVIA",
        description:
          "Scheduled courier order, emergency transport or backup solution — send your transport enquiry directly online.",
      },
      imprint: {
        title: "Legal Notice | ISOVIA",
        description:
          "Information pursuant to Section 5 of the German Telemedia Act (TMG).",
      },
      privacy: {
        title: "Privacy Policy | ISOVIA",
        description:
          "Information on the processing of personal data under the GDPR.",
      },
    },
  },

  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    responsibility: "Responsibility",
    nuclearMedicine: "Nuclear Medicine",
    contact: "Contact",
    imprint: "Legal Notice",
    privacy: "Privacy",
  },

  common: {
    skipToContent: "Skip to content",
    languageLabel: "Language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    phoneLabel: "Phone",
    emailLabel: "Email",
    serviceAreaLabel: "Service area",
    serviceArea: "North Rhine-Westphalia – Hesse – Rhineland-Palatinate",
    contactCta: "Request a transport consultation",
    emergencyCta: "Request emergency transport",
  },

  home: {
    hero: {
      eyebrow: "Radiopharmaceutical Logistics & Emergency Transport",
      title: "When time matters, logistics becomes",
      titleAccent: "part of patient care.",
      subtitle:
        "Specialised logistics and advisory partner for radiopharmaceuticals, nuclear medicine and theranostics, based in Bonn — dependable above all when primary transport fails.",
      primaryCta: "Request a transport consultation",
      imageAlt:
        "Type A packages labelled to ADR Class 7 containing radioactive material being prepared for transport",
    },

    stats: [
      { value: "NRW · HE · RP", label: "Service area" },
      { value: "ADR Class 7", label: "Dangerous goods & radiation protection" },
      { value: "6D™", label: "ISOVIA methodology" },
      { value: "GPS · ePOD", label: "Unbroken traceability" },
    ],

    about: {
      eyebrow: "About ISOVIA",
      title: "Not a courier service. Part of the supply chain.",
      paragraphs: [
        "We see radiopharmaceutical logistics as an integral part of healthcare delivery: when a preparation fails to arrive on time, under the right conditions and with complete documentation, it is not simply a failed transport — it is a patient examination or treatment put at risk.",
        "Our first market is the North Rhine-Westphalia – Hesse – Rhineland-Palatinate corridor, with a focus on radiopharmacies, PET centres, nuclear medicine departments and the manufacturers that supply them. From here we are building a network step by step into further regions of Germany and neighbouring European markets.",
        "ISOVIA operates according to our own ISOVIA 6D™ methodology – Diagnose, Design, Digitise, Deploy, Demonstrate, Develop – through which we systematically analyse, design, digitise, implement, demonstrate and continuously improve logistics processes for our customers. This methodology underpins our three business divisions: Advisory, Logistics and Intelligence.",
        "We see ourselves as a partner, not an interchangeable service provider — particularly when primary transport fails and fast, competent action determines the success of an examination.",
      ],
      founder: {
        eyebrow: "The founder",
        name: "Alain Mugabo",
        role: "Founder & Managing Partner",
        body: "A healthcare professional and entrepreneur with experience across nuclear medicine, radiology and healthcare management, combined with an MBA in Healthcare Management. His path — economics, healthcare management, radiology, nuclear medicine — is rare in the logistics industry: ISOVIA understands not only how a package is transported, but what is inside it and what it means clinically.",
        quote:
          "I founded ISOVIA because radiopharmaceutical logistics requires more than transportation. It requires an understanding of time-critical healthcare operations, regulatory requirements and the consequences of a delivery failure.",
        imageAlt: "Portrait of Alain Mugabo, founder and managing partner of ISOVIA",
      },
    },

    services: {
      eyebrow: "Our services",
      title: "Three service areas that build on one another",
      intro:
        "Scheduled courier transport for radiopharmaceuticals, emergency and backup logistics as the core of our offering, and logistics and advisory services for manufacturers and larger customers.",
      areas: [
        {
          number: "01",
          title: "Radiopharmaceutical Courier",
          intro:
            "Scheduled and on-demand transport for time-critical, radioactive preparations — documented and compliant with applicable radiation protection and dangerous goods regulations (ADR Class 7), with an unbroken chain of custody from the radiopharmacy to the facility.",
          items: [
            "Fluorine-18 (F-18)",
            "Gallium-68 (Ga-68)",
            "Technetium-99m (Tc-99m)",
            "Lutetium-177 (Lu-177)",
            "Iodine-131 (I-131)",
            "Other approved materials by arrangement",
          ],
        },
        {
          number: "02",
          title: "Emergency & Backup Logistics",
          intro:
            "Our most important service area: dependable coverage when your primary carrier fails or additional capacity is needed at short notice. Time-critical radiopharmaceuticals allow no room for delay.",
          items: [
            "Emergency transport with short response times",
            "Short-notice collection",
            "Weekend availability",
            "Evening and early-morning support",
            "Backup in case of primary carrier failure",
            "Clearly defined escalation processes",
          ],
        },
        {
          number: "03",
          title: "Radiopharma Logistics Advisory",
          intro:
            "For manufacturers, radiopharmacies and university facilities seeking a partner who understands the entire chain from production to hospital — built on our 6D™ methodology.",
          items: [
            "Route planning and fixed delivery routes",
            "Transport documentation to ADR and GDP standards",
            "Design of handover and collection processes",
            "Development of standard operating procedures (SOPs)",
            "Operational support and process guidance",
            "Coordination of regulatory requirements",
          ],
        },
      ],
      chain: {
        title: "From production to patient",
        steps: [
          "Cyclotron / Radiopharmacy",
          "ISOVIA",
          "Hospital / PET Centre",
          "Patient",
        ],
      },
    },

    emergency: {
      eyebrow: "Emergency & backup",
      title: "Operational when the primary transport fails.",
      body: "Talk to us about your specific backup requirements — together we will design a process that takes effect immediately when it matters most.",
      cta: "Discuss backup requirements",
    },

    responsibility: {
      eyebrow: "Responsibility",
      title: "Commitment & ethics",
      intro:
        "Radiopharmaceutical logistics sits where medicine, radiation protection and transport law meet. Responsible conduct is the precondition for it, not an add-on.",
      commitment: {
        title: "Our commitment",
        items: [
          {
            title: "Reliability as a core principle",
            body: "Every transport gets the same care, whatever the hour or the urgency: stable, traceable, safe under pressure.",
          },
          {
            title: "Investment in digitalisation",
            body: "GPS tracking, electronic proof of delivery (ePOD) and temperature monitoring run the whole journey: customers see status live, we catch deviations early.",
          },
          {
            title: "Availability when it matters",
            body: "No office hours apply here. We are extending cover into evenings, weekends and urgent call-outs, and say plainly where it is not yet continuous.",
          },
          {
            title: "Partnership-driven growth",
            body: "We grow as a long-term partner, not a short-term supplier, expanding capacity along the North Rhine-Westphalia – Hesse – Rhineland-Palatinate corridor.",
          },
          {
            title: "Responsibility to patients",
            body: "At the end of every transport, someone is waiting for a diagnosis or treatment. We move part of their care, not a package.",
          },
        ],
      },
      ethics: {
        title: "Our ethics",
        items: [
          {
            title: "Compliance & safety",
            body: "We work to the Radiation Protection Act (StrlSchG), ADR Class 7 and the rules on documentation, labelling and driver qualification, and claim only certifications we hold.",
          },
          {
            title: "Integrity and transparency",
            body: "We are straight with customers, authorities and partners, and report deviations, delays and incidents as they happen.",
          },
          {
            title: "Confidentiality",
            body: "Customers, routes, volumes and supply relationships stay confidential – as does every operational and patient-related detail.",
          },
          {
            title: "Radiation protection and duty of care",
            body: "Handling radioactive material safely is the core of the job. With qualified experts, we follow defined procedures for collection, transport, handover and incidents.",
          },
          {
            title: "Responsibility to society",
            body: "Reliable regional healthcare depends on logistics that hold. Commercial success and responsible conduct reinforce each other when a patient is on the receiving end.",
          },
        ],
      },
    },

    nuclearTeaser: {
      eyebrow: "Background",
      title: "Some radionuclides have a half-life of only a few hours.",
      body: "A preparation that does not arrive on time does not simply lose effectiveness — it can make an entire examination or treatment impossible. This is exactly where ISOVIA comes in.",
      cta: "More on nuclear medicine",
      imageAlt:
        "Yellow packages marked UN2915 for radioactive material moving along a conveyor",
    },

    finalCta: {
      title: "Tell us what you need to move.",
      body: "Whether it's a scheduled courier order, an emergency transport, or an enquiry about our backup solutions — we look forward to hearing from you.",
      primaryCta: "Request a transport consultation",
    },
  },

  nuclearMedicine: {
    eyebrow: "Background",
    title: "About Nuclear Medicine",
    intro:
      "Nuclear medicine is a field in which minute quantities of radioactively labelled substances — known as radiopharmaceuticals — are used to make disease visible (diagnostics) or to treat it directly (therapy).",
    lead: "Unlike conventional imaging, nuclear medicine provides not only anatomical but functional information — showing how an organ or tissue is actually working.",
    diagnostics: {
      title: "Diagnostics: PET and SPECT",
      body: "In positron emission tomography (PET) and single-photon emission computed tomography (SPECT), radiopharmaceuticals are administered that accumulate selectively in specific tissues. The radiation they emit is captured by specialised cameras and processed into diagnostic images. These techniques play a central role in the early detection and monitoring of cancer, cardiovascular disease and neurological disorders.",
    },
    radionuclides: {
      title: "Key radionuclides",
      items: [
        {
          name: "Fluorine-18 (F-18)",
          description:
            "The basis for FDG-PET, one of the most widely used diagnostic techniques in oncology.",
        },
        {
          name: "Gallium-68 (Ga-68)",
          description:
            "Used in specialised PET procedures, including for neuroendocrine tumours and prostate cancer diagnostics.",
        },
        {
          name: "Technetium-99m (Tc-99m)",
          description:
            "The most commonly used radionuclide in SPECT diagnostics.",
        },
        {
          name: "Iodine-131 (I-131)",
          description:
            "Used both diagnostically and therapeutically, particularly in thyroid medicine.",
        },
        {
          name: "Lutetium-177 (Lu-177)",
          description:
            "A central radionuclide in modern theranostics, used among other things for neuroendocrine tumours and prostate cancer.",
        },
      ],
    },
    theranostics: {
      title: "Theranostics: diagnosis and therapy combined",
      body: "Theranostics describes the combined use of diagnostics and therapy targeting the same molecular mechanism: a diagnostic radiopharmaceutical is first used to determine whether a tumour carries a specific target structure; a therapeutic radiopharmaceutical is then used to attack that same structure directly. This approach is among the most significant developments in modern oncology.",
    },
    whyLogistics: {
      title: "Why logistics matters so much in nuclear medicine",
      body: "Radiopharmaceuticals are subject to strict time, temperature and regulatory requirements. Many of the radionuclides used have extremely short half-lives — sometimes only a few hours. A delayed or failed transport can directly affect:",
      affected: [
        "PET examinations",
        "SPECT examinations",
        "Radionuclide therapies",
        "Radiopharmaceutical production",
        "Clinical trials",
      ],
      closing:
        "This is exactly where ISOVIA comes in: we understand the clinical urgency behind every transport and design our logistics to consistently meet these demands.",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us what you need to move.",
    intro:
      "Whether it's a scheduled courier order, an emergency transport, or a general enquiry about our backup solutions — use the form or contact us directly.",
    form: {
      sections: {
        contact: "Your details",
        transport: "Transport details",
        enquiry: "Type of enquiry",
      },
      fields: {
        company: "Company",
        name: "Name",
        position: "Position",
        email: "Email",
        phone: "Phone",
        origin: "Origin (pickup location)",
        destination: "Destination (delivery location)",
        material: "Radiopharmaceutical / material",
        frequency: "Transport frequency",
        temperature: "Temperature requirement",
        enquiryType: "Type of enquiry",
        message: "Additional information",
      },
      placeholders: {
        company: "Hospital, radiopharmacy or manufacturer",
        name: "Your full name",
        position: "e.g. Head of Nuclear Medicine",
        email: "you@facility.com",
        phone: "+49 …",
        origin: "e.g. Radiopharmacy Cologne",
        destination: "e.g. PET Centre Bonn",
        material: "e.g. F-18 FDG",
        frequency: "e.g. daily, weekly, one-off",
        temperature: "e.g. ambient, 2–8 °C",
        message: "Time windows, special requirements, questions …",
      },
      enquiryTypes: {
        regular: {
          label: "Regular",
          description: "Scheduled or recurring courier order",
        },
        emergency: {
          label: "Emergency",
          description: "Time-critical — handled as a priority",
        },
        backup: {
          label: "Backup",
          description: "Cover in case of primary carrier failure",
        },
      },
      optional: "optional",
      privacyConsent: {
        before: "I have read and accept the ",
        linkText: "privacy policy",
        after: ".",
      },
      submit: "Request a transport consultation",
      submitting: "Sending …",
      success: {
        title: "Your enquiry has reached us.",
        body: "We will get back to you as soon as possible. For time-critical requests you can also reach us by phone at any time.",
        referenceLabel: "Your reference",
        again: "Send another enquiry",
      },
      errors: {
        company: "Please enter your company.",
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        origin: "Please enter the pickup location.",
        destination: "Please enter the delivery location.",
        material: "Please enter the radiopharmaceutical or material.",
        enquiryType: "Please select the type of enquiry.",
        privacy: "Please accept the privacy policy.",
        submit:
          "Your enquiry could not be sent. Please try again or give us a call.",
      },
    },
    direct: {
      title: "Direct contact",
      company: "ISOVIA – Medical Products & Services Mugabo e.K.",
      addressLines: [
        "Oberaustrasse 98",
        "53179 Bonn",
        "North Rhine-Westphalia, Germany",
      ],
    },
    emergency: {
      title: "Emergency & backup requests",
      body: 'Please clearly mark time-critical requests as "Emergency" so we can prioritise your enquiry.',
    },
  },

  footer: {
    tagline: "Radiopharmaceutical Logistics & Emergency Transport",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    copyright: "Medical Products & Services Mugabo e.K.",
    disclaimer: "All rights reserved.",
  },
} satisfies Content;
