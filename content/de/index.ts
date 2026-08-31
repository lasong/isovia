import type { Content } from "@/content/types";

export const de = {
  meta: {
    siteName: "ISOVIA",
    tagline: "Radiopharmazeutische Logistik & Notfalltransport",
    pages: {
      home: {
        title: "ISOVIA – Radiopharmazeutische Logistik & Notfalltransport",
        description:
          "Spezialisierter Logistik- und Beratungspartner für Radiopharmazeutika, Nuklearmedizin und Theranostik in Nordrhein-Westfalen, Hessen und Rheinland-Pfalz. Notfall- und Backup-Transporte mit kurzer Reaktionszeit.",
      },
      nuclearMedicine: {
        title: "Über Nuklearmedizin – PET, SPECT & Theranostik | ISOVIA",
        description:
          "Wie Radiopharmazeutika in Diagnostik und Therapie eingesetzt werden – und warum kurze Halbwertszeiten Logistik zum entscheidenden Faktor machen.",
      },
      contact: {
        title: "Kontakt & Transportanfrage | ISOVIA",
        description:
          "Geplanter Kurierauftrag, Notfalltransport oder Backup-Lösung – stellen Sie Ihre Transportanfrage direkt online.",
      },
      imprint: {
        title: "Impressum | ISOVIA",
        description: "Angaben gemäß § 5 TMG.",
      },
      privacy: {
        title: "Datenschutzerklärung | ISOVIA",
        description:
          "Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
      },
    },
  },

  nav: {
    home: "Start",
    about: "Über uns",
    services: "Leistungen",
    responsibility: "Verantwortung",
    nuclearMedicine: "Nuklearmedizin",
    contact: "Kontakt",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },

  common: {
    skipToContent: "Zum Inhalt springen",
    languageLabel: "Sprache",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    serviceAreaLabel: "Einsatzgebiet",
    serviceArea: "Nordrhein-Westfalen – Hessen – Rheinland-Pfalz",
    contactCta: "Transportberatung anfragen",
    emergencyCta: "Notfalltransport anfragen",
  },

  home: {
    hero: {
      eyebrow: "Radiopharmazeutische Logistik & Notfalltransport",
      title: "Wenn Zeit zählt, wird Logistik",
      titleAccent: "Teil der Patientenversorgung.",
      subtitle:
        "Spezialisierter Logistik- und Beratungspartner für Radiopharmazeutika, Nuklearmedizin und Theranostik mit Sitz in Bonn – verlässlich besonders dann, wenn Primärtransporte ausfallen.",
      primaryCta: "Transportberatung anfragen",
      imageAlt:
        "Nach ADR Klasse 7 gekennzeichnete Typ-A-Versandstücke mit radioaktivem Material werden für den Transport vorbereitet",
    },

    stats: [
      { value: "NRW · HE · RP", label: "Einsatzgebiet" },
      { value: "ADR Klasse 7", label: "Gefahrgut & Strahlenschutz" },
      { value: "6D™", label: "ISOVIA Methodik" },
      { value: "GPS · ePOD", label: "Lückenlose Nachverfolgung" },
    ],

    about: {
      eyebrow: "Über ISOVIA",
      title: "Kein Kurierdienst. Ein Teil der Versorgungskette.",
      paragraphs: [
        "Wir verstehen radiopharmazeutische Logistik als integralen Bestandteil der Gesundheitsversorgung: Wenn ein Präparat nicht rechtzeitig, unter den richtigen Bedingungen und mit lückenloser Dokumentation ankommt, ist nicht nur ein Transport gescheitert – es ist eine Patientenuntersuchung oder -therapie gefährdet.",
        "Unser erster Markt ist der Wirtschaftsraum Nordrhein-Westfalen – Hessen – Rheinland-Pfalz, mit Fokus auf Radiopharmazien, PET-Zentren, nuklearmedizinische Abteilungen und die Hersteller, die sie beliefern. Von hier aus bauen wir schrittweise ein Netzwerk in weitere Regionen Deutschlands und angrenzende europäische Märkte auf.",
        "ISOVIA arbeitet nach der eigens entwickelten ISOVIA 6D™-Methodik – Diagnose, Design, Digitise, Deploy, Demonstrate, Develop –, mit der wir logistische Prozesse für unsere Kunden systematisch analysieren, gestalten, digital abbilden, umsetzen, nachweisbar machen und kontinuierlich weiterentwickeln. Diese Methodik bildet die Grundlage für unsere drei Geschäftsbereiche: Advisory (Beratung), Logistics (Transport & Ausführung) und Intelligence (Daten, Nachverfolgung und Prozessoptimierung).",
        "Wir sehen uns als Partner, nicht als austauschbaren Dienstleister – insbesondere dann, wenn Primärtransporte ausfallen und schnelles, kompetentes Handeln über den Erfolg einer Untersuchung entscheidet.",
      ],
      founder: {
        eyebrow: "Der Gründer",
        name: "Alain Mugabo",
        role: "Gründer & Managing Partner",
        body: "Gesundheitsfachmann und Unternehmer mit Erfahrung in Nuklearmedizin, Radiologie und Gesundheitsmanagement, ergänzt durch einen MBA in Healthcare Management. Seine Stationen – Ökonomie, Gesundheitsmanagement, Radiologie, Nuklearmedizin – sind in der Logistikbranche selten: ISOVIA versteht nicht nur, wie ein Paket transportiert wird, sondern was darin steckt und welche klinische Bedeutung es hat.",
        quote:
          "Ich habe ISOVIA gegründet, weil radiopharmazeutische Logistik mehr erfordert als Transport. Sie erfordert Verständnis für zeitkritische medizinische Abläufe, regulatorische Anforderungen und die Konsequenzen eines gescheiterten Transports.",
        imageAlt: "Porträt von Alain Mugabo, Gründer und Managing Partner von ISOVIA",
      },
    },

    services: {
      eyebrow: "Unsere Leistungen",
      title: "Drei Leistungsbereiche, die aufeinander aufbauen",
      intro:
        "Der planbare Kurierdienst für Radiopharmazeutika, die Notfall- und Backup-Logistik als Kernstück unseres Angebots sowie Beratungs- und Logistiklösungen für Hersteller und größere Kunden.",
      areas: [
        {
          number: "01",
          title: "Radiopharmazeutischer Kurierdienst",
          intro:
            "Geplante und kurzfristig abrufbare Transporte für zeitkritische, radioaktive Präparate – dokumentiert und unter Einhaltung der geltenden Strahlenschutz- und Gefahrgutvorschriften (ADR Klasse 7), mit lückenloser Chain of Custody von der Radiopharmazie bis zur Einrichtung.",
          items: [
            "Fluor-18 (F-18)",
            "Gallium-68 (Ga-68)",
            "Technetium-99m (Tc-99m)",
            "Lutetium-177 (Lu-177)",
            "Iod-131 (I-131)",
            "Weitere zugelassene Materialien nach Absprache",
          ],
        },
        {
          number: "02",
          title: "Notfall & Backup-Logistik",
          intro:
            "Unser wichtigster Leistungsbereich: die verlässliche Absicherung, wenn der primäre Transportdienstleister ausfällt oder kurzfristig zusätzlicher Bedarf entsteht. Zeitkritische Radiopharmazeutika verzeihen keine Verzögerung.",
          items: [
            "Notfalltransporte mit kurzer Reaktionszeit",
            "Kurzfristige Abholung und Übernahme",
            "Verfügbarkeit auch am Wochenende",
            "Unterstützung am Abend und frühen Morgen",
            "Backup bei Ausfall des primären Dienstleisters",
            "Klar definierte Eskalationsprozesse",
          ],
        },
        {
          number: "03",
          title: "Radiopharma-Logistikberatung",
          intro:
            "Für Hersteller, Radiopharmazien und universitäre Einrichtungen, die einen Partner suchen, der die gesamte Kette von der Produktion bis zur Klinik versteht – aufbauend auf unserer 6D™-Methodik.",
          items: [
            "Routenplanung und feste Lieferrouten",
            "Transportdokumentation nach ADR und GDP",
            "Gestaltung von Übergabeprozessen",
            "Entwicklung von Standardarbeitsanweisungen (SOPs)",
            "Operative Unterstützung und Prozessbegleitung",
            "Koordination regulatorischer Anforderungen",
          ],
        },
      ],
      chain: {
        title: "Von der Produktion bis zum Patienten",
        steps: [
          "Zyklotron / Radiopharmazie",
          "ISOVIA",
          "Klinik / PET-Zentrum",
          "Patient",
        ],
      },
      theranostics: {
        title: "Theranostik-Logistik – ein Blick nach vorn",
        body: "Wir bereiten uns gezielt auf die nächste Generation radiopharmazeutischer Logistik vor: die Theranostik mit therapeutischen Radionukliden wie Lu-177 und Ac-225. Wir bieten nur an, was wir operativ und regulatorisch tatsächlich leisten können.",
      },
    },

    emergency: {
      eyebrow: "Notfall & Backup",
      title: "Handlungsfähig, wenn der Primärtransport ausfällt.",
      body: "Sprechen Sie uns an, um Ihre individuellen Backup-Anforderungen zu besprechen – wir entwickeln gemeinsam mit Ihnen einen Ablauf, der im Ernstfall sofort greift.",
      cta: "Backup-Anforderungen besprechen",
    },

    responsibility: {
      eyebrow: "Verantwortung",
      title: "Engagement & Ethik",
      intro:
        "Radiopharmazeutische Logistik bewegt sich im Schnittfeld von Medizin, Strahlenschutz und Transportrecht. Verantwortungsvolles Handeln ist für ISOVIA daher kein Zusatz, sondern Grundvoraussetzung unserer Tätigkeit.",
      commitment: {
        title: "Unser Engagement",
        items: [
          {
            title: "Zuverlässigkeit als Grundprinzip",
            body: "Wir verpflichten uns, jeden Transport mit derselben Sorgfalt zu behandeln, unabhängig von Uhrzeit, Wochentag oder Dringlichkeit. Unsere Prozesse sind darauf ausgelegt, auch unter Zeitdruck stabil, nachvollziehbar und sicher zu bleiben.",
          },
          {
            title: "Investition in Digitalisierung",
            body: "ISOVIA setzt konsequent auf digitale Nachverfolgung: GPS-Tracking, elektronischer Zustellnachweis (ePOD) und Temperaturüberwachung sorgen für volle Transparenz über den gesamten Transportverlauf. Diese Investition in moderne Telematik ermöglicht es unseren Kunden, den Status ihrer Sendung jederzeit nachzuvollziehen – und uns, frühzeitig auf Abweichungen zu reagieren.",
          },
          {
            title: "Verfügbarkeit, wenn sie gebraucht wird",
            body: "Radiopharmazeutische Logistik kennt keine klassischen Bürozeiten. Wir bauen unsere Erreichbarkeit gezielt so aus, dass wir dann verfügbar sind, wenn unsere Kunden uns brauchen – an Wochenenden, am Abend und in dringenden Situationen. Wo wir eine Leistung noch nicht durchgängig anbieten können, kommunizieren wir das offen, statt Verfügbarkeiten zu versprechen, die wir nicht halten können.",
          },
          {
            title: "Partnerschaftliches Wachstum",
            body: "ISOVIA wächst gemeinsam mit seinen Partnern – darunter renommierte Akteure der radiopharmazeutischen Branche. Wir verstehen uns als langfristiger Partner, nicht als kurzfristiger Dienstleister, und investieren kontinuierlich in den Ausbau unserer Kapazitäten entlang des Korridors Nordrhein-Westfalen – Hessen – Rheinland-Pfalz sowie perspektivisch darüber hinaus.",
          },
          {
            title: "Verantwortung gegenüber Patienten",
            body: "Am Ende jedes Transports steht ein Mensch, der auf eine Untersuchung oder Behandlung wartet. Dieses Bewusstsein prägt unser Engagement: Wir liefern nicht einfach ein Paket – wir liefern einen Beitrag zur Gesundheitsversorgung.",
          },
        ],
      },
      ethics: {
        title: "Unsere Ethik",
        items: [
          {
            title: "Compliance & Sicherheit",
            body: "Wir richten unsere Prozesse konsequent an den geltenden Vorschriften aus – insbesondere dem Strahlenschutzgesetz (StrlSchG), der Gefahrgutverordnung Straße (ADR, Klasse 7) sowie den einschlägigen Anforderungen an Dokumentation, Kennzeichnung und Fahrerqualifikation. Wo eine Anforderung noch im Aufbau ist, unterscheiden wir klar zwischen dem, was ISOVIA bereits erfüllt, und dem, woran wir aktiv arbeiten – wir kommunizieren nur Zertifizierungen und Fähigkeiten, die tatsächlich bestehen.",
          },
          {
            title: "Integrität und Transparenz",
            body: "Unsere Kommunikation gegenüber Kunden, Behörden und Partnern ist ehrlich und nachvollziehbar. Wir versprechen keine Verfügbarkeiten, Kapazitäten oder Zertifizierungen, die wir nicht erfüllen können. Abweichungen, Verzögerungen oder Zwischenfälle werden unmittelbar und offen kommuniziert.",
          },
          {
            title: "Vertraulichkeit",
            body: "Informationen zu Kunden, Routen, Mengen und Lieferbeziehungen behandeln wir streng vertraulich. Der sensible Charakter radiopharmazeutischer Logistik erfordert einen sorgsamen Umgang mit allen betrieblichen und patientenbezogenen Informationen entlang der gesamten Transportkette.",
          },
          {
            title: "Strahlenschutz und Sorgfaltspflicht",
            body: "Der verantwortungsvolle Umgang mit radioaktiven Materialien steht im Zentrum unserer Tätigkeit. Wir arbeiten dabei eng mit qualifizierten Strahlenschutzexperten zusammen und setzen auf klar definierte Abläufe für Übernahme, Transport, Übergabe und den Umgang mit Zwischenfällen.",
          },
          {
            title: "Verantwortung gegenüber der Gesellschaft",
            body: "ISOVIA versteht seine Tätigkeit als Beitrag zu einer funktionierenden, verlässlichen Gesundheitsversorgung in der Region. Wir handeln nach dem Grundsatz, dass wirtschaftlicher Erfolg und verantwortungsvolles Handeln sich nicht ausschließen, sondern bedingen – besonders in einem Umfeld, in dem am Ende jeder Entscheidung ein Patient steht.",
          },
        ],
      },
    },

    nuclearTeaser: {
      eyebrow: "Hintergrund",
      title: "Manche Radionuklide haben nur wenige Stunden Halbwertszeit.",
      body: "Ein Präparat, das nicht rechtzeitig ankommt, verliert nicht nur an Wirksamkeit – es kann eine gesamte Untersuchung oder Behandlung unmöglich machen. Genau hier setzt ISOVIA an.",
      cta: "Mehr über Nuklearmedizin",
      imageAlt:
        "Gelbe Versandstücke mit UN2915-Kennzeichnung für radioaktives Material auf einer Förderstrecke",
    },

    finalCta: {
      title: "Sagen Sie uns, was Sie transportieren müssen.",
      body: "Ob geplanter Kurierauftrag, Notfalltransport oder eine Anfrage zu unseren Backup-Lösungen – wir freuen uns auf Ihre Nachricht.",
      primaryCta: "Transportberatung anfragen",
    },
  },

  nuclearMedicine: {
    eyebrow: "Hintergrund",
    title: "Über Nuklearmedizin",
    intro:
      "Die Nuklearmedizin ist ein Fachgebiet, in dem geringste Mengen radioaktiv markierter Substanzen – sogenannte Radiopharmazeutika – eingesetzt werden, um Krankheiten sichtbar zu machen (Diagnostik) oder gezielt zu behandeln (Therapie).",
    lead: "Anders als in der klassischen Bildgebung liefert die Nuklearmedizin nicht nur anatomische, sondern funktionelle Informationen – sie zeigt, wie ein Organ oder Gewebe tatsächlich arbeitet.",
    diagnostics: {
      title: "Diagnostik: PET und SPECT",
      body: "In der Positronen-Emissions-Tomographie (PET) und der Einzelphotonen-Emissionscomputertomographie (SPECT) werden Radiopharmazeutika verabreicht, die sich gezielt in bestimmten Geweben anreichern. Die ausgesandte Strahlung wird von speziellen Kameras erfasst und zu diagnostischen Bildern verarbeitet. Diese Verfahren spielen eine zentrale Rolle bei der Früherkennung und Verlaufskontrolle von Krebserkrankungen, Herz-Kreislauf-Erkrankungen und neurologischen Störungen.",
    },
    radionuclides: {
      title: "Wichtige Radionuklide",
      items: [
        {
          name: "Fluor-18 (F-18)",
          description:
            "Basis für FDG-PET, eines der meistgenutzten diagnostischen Verfahren in der Onkologie.",
        },
        {
          name: "Gallium-68 (Ga-68)",
          description:
            "Eingesetzt in spezialisierten PET-Verfahren, unter anderem bei neuroendokrinen Tumoren und der Prostatakarzinom-Diagnostik.",
        },
        {
          name: "Technetium-99m (Tc-99m)",
          description:
            "Das am häufigsten verwendete Radionuklid in der SPECT-Diagnostik.",
        },
        {
          name: "Iod-131 (I-131)",
          description:
            "Eingesetzt sowohl diagnostisch als auch therapeutisch, insbesondere in der Schilddrüsenmedizin.",
        },
        {
          name: "Lutetium-177 (Lu-177)",
          description:
            "Zentrales Radionuklid der modernen Theranostik, u. a. bei neuroendokrinen Tumoren und dem Prostatakarzinom.",
        },
      ],
    },
    theranostics: {
      title: "Theranostik: Diagnose und Therapie aus einer Hand",
      body: "Theranostik beschreibt den kombinierten Einsatz von Diagnostik und Therapie mit demselben molekularen Zielmechanismus: Zunächst wird mittels eines diagnostischen Radiopharmazeutikums sichtbar gemacht, ob ein Tumor eine bestimmte Zielstruktur trägt; anschließend wird gezielt ein therapeutisches Radiopharmazeutikum eingesetzt, das genau diese Struktur angreift. Dieser Ansatz zählt zu den bedeutendsten Entwicklungen der modernen Onkologie.",
    },
    whyLogistics: {
      title: "Warum Logistik in der Nuklearmedizin so entscheidend ist",
      body: "Radiopharmazeutika unterliegen strengen zeitlichen, thermischen und regulatorischen Anforderungen. Viele der eingesetzten Radionuklide haben extrem kurze Halbwertszeiten – teils nur wenige Stunden. Ein verspäteter oder gescheiterter Transport kann sich unmittelbar auswirken auf:",
      affected: [
        "PET-Untersuchungen",
        "SPECT-Untersuchungen",
        "Radionuklidtherapien",
        "die radiopharmazeutische Herstellung",
        "klinische Studien",
      ],
      closing:
        "Genau an dieser Schnittstelle setzt ISOVIA an: Wir verstehen die klinische Dringlichkeit hinter jedem Transport und gestalten unsere Logistik so, dass sie diesen Anforderungen konsequent gerecht wird.",
    },
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Sagen Sie uns, was Sie transportieren müssen.",
    intro:
      "Ob geplanter Kurierauftrag, Notfalltransport oder eine grundsätzliche Anfrage zu unseren Backup-Lösungen – nutzen Sie das Formular oder kontaktieren Sie uns direkt.",
    form: {
      sections: {
        contact: "Ihre Kontaktdaten",
        transport: "Transportdetails",
        enquiry: "Art der Anfrage",
      },
      fields: {
        company: "Unternehmen",
        name: "Name",
        position: "Position",
        email: "E-Mail",
        phone: "Telefon",
        origin: "Herkunftsort (Abholung)",
        destination: "Zielort (Lieferung)",
        material: "Radiopharmazeutikum / Material",
        frequency: "Transporthäufigkeit",
        temperature: "Temperaturanforderung",
        enquiryType: "Art der Anfrage",
        message: "Weitere Informationen",
      },
      placeholders: {
        company: "Klinik, Radiopharmazie oder Hersteller",
        name: "Ihr vollständiger Name",
        position: "z. B. Leitung Nuklearmedizin",
        email: "ihre@einrichtung.de",
        phone: "+49 …",
        origin: "z. B. Radiopharmazie Köln",
        destination: "z. B. PET-Zentrum Bonn",
        material: "z. B. F-18 FDG",
        frequency: "z. B. täglich, wöchentlich, einmalig",
        temperature: "z. B. Raumtemperatur, 2–8 °C",
        message: "Zeitfenster, Besonderheiten, Rückfragen …",
      },
      enquiryTypes: {
        regular: {
          label: "Regelmäßig",
          description: "Geplanter oder wiederkehrender Kurierauftrag",
        },
        emergency: {
          label: "Notfall",
          description: "Zeitkritisch – wird vorrangig bearbeitet",
        },
        backup: {
          label: "Backup",
          description: "Absicherung bei Ausfall des Primärtransports",
        },
      },
      optional: "optional",
      privacyConsent: {
        before: "Ich habe die ",
        linkText: "Datenschutzerklärung",
        after: " gelesen und akzeptiere sie.",
      },
      submit: "Transportberatung anfragen",
      submitting: "Wird gesendet …",
      success: {
        title: "Ihre Anfrage ist bei uns eingegangen.",
        body: "Wir melden uns so schnell wie möglich bei Ihnen. Bei zeitkritischen Anfragen erreichen Sie uns zusätzlich jederzeit telefonisch.",
        referenceLabel: "Ihre Referenz",
        again: "Weitere Anfrage senden",
      },
      errors: {
        company: "Bitte geben Sie Ihr Unternehmen an.",
        name: "Bitte geben Sie Ihren Namen an.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
        origin: "Bitte geben Sie den Abholort an.",
        destination: "Bitte geben Sie den Zielort an.",
        material: "Bitte geben Sie das Radiopharmazeutikum oder Material an.",
        enquiryType: "Bitte wählen Sie die Art der Anfrage.",
        privacy: "Bitte akzeptieren Sie die Datenschutzerklärung.",
        submit:
          "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      },
    },
    direct: {
      title: "Direktkontakt",
      company: "ISOVIA – Medical Products & Services Mugabo e.K.",
      addressLines: [
        "Oberaustrasse 98",
        "53179 Bonn",
        "Nordrhein-Westfalen, Deutschland",
      ],
    },
    emergency: {
      title: "Notfall & Backup-Anfrage",
      body: 'Bitte kennzeichnen Sie zeitkritische Anfragen deutlich als „Notfall", damit wir Ihre Anfrage priorisiert bearbeiten können.',
    },
  },

  footer: {
    tagline: "Radiopharmazeutische Logistik & Notfalltransport",
    navTitle: "Navigation",
    contactTitle: "Kontakt",
    legalTitle: "Rechtliches",
    copyright: "Medical Products & Services Mugabo e.K.",
    disclaimer: "Alle Rechte vorbehalten.",
  },
} satisfies Content;
