/**
 * Shape of one locale's content. Every locale module ends with
 * `satisfies Content`, so a missing or misnamed key is a build error rather
 * than a blank space on the live site.
 *
 * Services, About and Responsibility are anchored sections of the home page,
 * so their copy lives under `home` and appears exactly once. Nuclear medicine
 * and contact are real pages and keep their own groups.
 */

export type LabelledItem = {
  title: string;
  body: string;
};

export type SeoMeta = {
  title: string;
  description: string;
};

export type Content = {
  meta: {
    siteName: string;
    tagline: string;
    /** Per-route metadata, keyed to the real routes only. */
    pages: {
      home: SeoMeta;
      nuclearMedicine: SeoMeta;
      contact: SeoMeta;
      imprint: SeoMeta;
      privacy: SeoMeta;
    };
  };

  /** Labels for both the anchored sections and the real routes. */
  nav: {
    home: string;
    about: string;
    services: string;
    responsibility: string;
    nuclearMedicine: string;
    contact: string;
    imprint: string;
    privacy: string;
  };

  common: {
    skipToContent: string;
    languageLabel: string;
    menuOpen: string;
    menuClose: string;
    phoneLabel: string;
    emailLabel: string;
    serviceAreaLabel: string;
    serviceArea: string;
    contactCta: string;
    emergencyCta: string;
  };

  home: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      primaryCta: string;
      imageAlt: string;
    };

    stats: { value: string; label: string }[];

    /** #about — company positioning (including the 6D™ methodology) and founder. */
    about: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      founder: {
        eyebrow: string;
        name: string;
        role: string;
        body: string;
        quote: string;
        imageAlt: string;
      };
    };

    /** #services — the three service areas in full, no separate teaser. */
    services: {
      eyebrow: string;
      title: string;
      intro: string;
      areas: {
        number: string;
        title: string;
        intro: string;
        items: string[];
      }[];
      chain: {
        title: string;
        steps: string[];
      };
    };

    /** Coral band between services and responsibility. */
    emergency: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
    };

    /** #responsibility — sections 4 and 5 of the content documents, condensed. */
    responsibility: {
      eyebrow: string;
      title: string;
      intro: string;
      commitment: {
        title: string;
        items: LabelledItem[];
      };
      ethics: {
        title: string;
        items: LabelledItem[];
      };
    };

    /** Short teaser linking through to the nuclear medicine page. */
    nuclearTeaser: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      imageAlt: string;
    };

    finalCta: {
      title: string;
      body: string;
      primaryCta: string;
    };
  };

  nuclearMedicine: {
    eyebrow: string;
    title: string;
    intro: string;
    lead: string;
    diagnostics: LabelledItem;
    radionuclides: {
      title: string;
      items: { name: string; description: string }[];
    };
    theranostics: LabelledItem;
    whyLogistics: {
      title: string;
      body: string;
      affected: string[];
      closing: string;
    };
  };

  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    form: {
      sections: {
        contact: string;
        transport: string;
        enquiry: string;
      };
      fields: {
        company: string;
        name: string;
        position: string;
        email: string;
        phone: string;
        origin: string;
        destination: string;
        material: string;
        frequency: string;
        temperature: string;
        enquiryType: string;
        message: string;
      };
      placeholders: {
        company: string;
        name: string;
        position: string;
        email: string;
        phone: string;
        origin: string;
        destination: string;
        material: string;
        frequency: string;
        temperature: string;
        message: string;
      };
      enquiryTypes: {
        regular: { label: string; description: string };
        emergency: { label: string; description: string };
        backup: { label: string; description: string };
      };
      optional: string;
      privacyConsent: {
        before: string;
        linkText: string;
        after: string;
      };
      submit: string;
      submitting: string;
      success: {
        title: string;
        body: string;
        referenceLabel: string;
        again: string;
      };
      errors: {
        /** Field-level messages, shared by the client form and the action. */
        company: string;
        name: string;
        email: string;
        origin: string;
        destination: string;
        material: string;
        enquiryType: string;
        privacy: string;
        /** Whole-form failure. */
        submit: string;
      };
    };
    direct: {
      title: string;
      company: string;
      addressLines: string[];
    };
    emergency: LabelledItem;
  };

  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    copyright: string;
    disclaimer: string;
  };
};
