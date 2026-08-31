import type { Content } from "@/content/types";

export const fr = {
  meta: {
    siteName: "ISOVIA",
    tagline: "Logistique radiopharmaceutique & transport d'urgence",
    pages: {
      home: {
        title: "ISOVIA – Logistique radiopharmaceutique & transport d'urgence",
        description:
          "Partenaire spécialisé en logistique et en conseil pour les radiopharmaceutiques, la médecine nucléaire et la théranostique en Rhénanie-du-Nord–Westphalie, Hesse et Rhénanie-Palatinat. Transports d'urgence et de secours à délai de réaction court.",
      },
      nuclearMedicine: {
        title:
          "À propos de la médecine nucléaire – TEP, TEMP & théranostique | ISOVIA",
        description:
          "Comment les radiopharmaceutiques sont utilisés en diagnostic et en thérapie — et pourquoi les demi-vies courtes font de la logistique le facteur déterminant.",
      },
      contact: {
        title: "Contact & demande de transport | ISOVIA",
        description:
          "Commande de messagerie planifiée, transport d'urgence ou solution de secours — envoyez votre demande de transport directement en ligne.",
      },
      imprint: {
        title: "Mentions légales | ISOVIA",
        description:
          "Informations conformément à l'article 5 de la loi allemande sur les télémédias (TMG).",
      },
      privacy: {
        title: "Politique de confidentialité | ISOVIA",
        description:
          "Informations sur le traitement des données personnelles au sens du RGPD.",
      },
    },
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    responsibility: "Responsabilité",
    nuclearMedicine: "Médecine nucléaire",
    contact: "Contact",
    imprint: "Mentions légales",
    privacy: "Confidentialité",
  },

  common: {
    skipToContent: "Aller au contenu",
    languageLabel: "Langue",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    serviceAreaLabel: "Zone de service",
    serviceArea: "Rhénanie-du-Nord–Westphalie – Hesse – Rhénanie-Palatinat",
    contactCta: "Demander une consultation transport",
    emergencyCta: "Demander un transport d'urgence",
  },

  home: {
    hero: {
      eyebrow: "Logistique radiopharmaceutique & transport d'urgence",
      title: "Lorsque le temps compte, la logistique devient",
      titleAccent: "une composante des soins aux patients.",
      subtitle:
        "Partenaire spécialisé en logistique et en conseil pour les radiopharmaceutiques, la médecine nucléaire et la théranostique, basé à Bonn — fiable surtout lorsque le transport principal fait défaut.",
      primaryCta: "Demander une consultation transport",
      imageAlt:
        "Colis de type A étiquetés selon l'ADR classe 7 contenant des matières radioactives, préparés pour le transport",
    },

    stats: [
      { value: "NRW · HE · RP", label: "Zone de service" },
      {
        value: "ADR classe 7",
        label: "Marchandises dangereuses & radioprotection",
      },
      { value: "6D™", label: "Méthodologie ISOVIA" },
      { value: "GPS · ePOD", label: "Traçabilité ininterrompue" },
    ],

    about: {
      eyebrow: "À propos d'ISOVIA",
      title: "Pas un service de messagerie. Une partie de la chaîne de soins.",
      paragraphs: [
        "Nous considérons la logistique radiopharmaceutique comme une composante essentielle des soins de santé : lorsqu'une préparation n'arrive pas à temps, dans les conditions requises et avec une documentation complète, ce n'est pas seulement un transport qui a échoué — c'est un examen ou un traitement de patient qui est mis en péril.",
        "Notre premier marché est le corridor Rhénanie-du-Nord–Westphalie – Hesse – Rhénanie-Palatinat, avec un accent sur les radiopharmacies, les centres TEP, les services de médecine nucléaire et les fabricants qui les approvisionnent. À partir de là, nous construisons progressivement un réseau vers d'autres régions d'Allemagne et les marchés européens voisins.",
        "ISOVIA fonctionne selon sa propre méthodologie ISOVIA 6D™ — Diagnose, Design, Digitise, Deploy, Demonstrate, Develop (Diagnostiquer, Concevoir, Numériser, Déployer, Démontrer, Développer) — grâce à laquelle nous analysons, concevons, numérisons, mettons en œuvre, démontrons et améliorons continuellement les processus logistiques de nos clients. Cette méthodologie constitue le socle de nos trois pôles d'activité : Advisory (Conseil), Logistics (Transport et exécution) et Intelligence (Données, suivi et optimisation des processus).",
        "Nous nous considérons comme un partenaire, et non comme un prestataire interchangeable — en particulier lorsque le transport principal fait défaut et qu'une action rapide et compétente détermine la réussite d'un examen.",
      ],
      founder: {
        eyebrow: "Le fondateur",
        name: "Alain Mugabo",
        role: "Fondateur & Associé-gérant",
        body: "Professionnel de santé et entrepreneur possédant une expérience en médecine nucléaire, en radiologie et en gestion de la santé, complétée par un MBA en gestion de la santé. Son parcours — économie, gestion de la santé, radiologie, médecine nucléaire — est rare dans le secteur de la logistique : ISOVIA comprend non seulement comment un colis est transporté, mais ce qu'il contient et sa signification clinique.",
        quote:
          "J'ai fondé ISOVIA parce que la logistique radiopharmaceutique exige bien plus que du transport. Elle exige une compréhension des opérations de santé critiques en termes de délais, des exigences réglementaires et des conséquences d'un échec de livraison.",
        imageAlt: "Portrait d'Alain Mugabo, fondateur et associé-gérant d'ISOVIA",
      },
    },

    services: {
      eyebrow: "Nos services",
      title: "Trois domaines de services qui se complètent",
      intro:
        "Le transport de messagerie planifié pour les radiopharmaceutiques, la logistique d'urgence et de secours au cœur de notre offre, ainsi que des services logistiques et de conseil pour les fabricants et les grands comptes.",
      areas: [
        {
          number: "01",
          title: "Messagerie radiopharmaceutique",
          intro:
            "Transport planifié et à la demande pour des préparations radioactives critiques en termes de délais — documenté et conforme à la réglementation applicable en matière de radioprotection et de marchandises dangereuses (ADR classe 7), avec une chaîne de traçabilité ininterrompue depuis la radiopharmacie jusqu'à l'établissement.",
          items: [
            "Fluor-18 (F-18)",
            "Gallium-68 (Ga-68)",
            "Technetium-99m (Tc-99m)",
            "Lutétium-177 (Lu-177)",
            "Iode-131 (I-131)",
            "Autres matières autorisées, sur demande",
          ],
        },
        {
          number: "02",
          title: "Logistique d'urgence et de secours",
          intro:
            "Notre domaine de service le plus important : une couverture fiable lorsque votre transporteur principal fait défaut ou qu'une capacité supplémentaire est nécessaire dans un délai très court. Les radiopharmaceutiques critiques ne tolèrent aucun retard.",
          items: [
            "Transports d'urgence à délai de réaction court",
            "Enlèvement à très court préavis",
            "Disponibilité le week-end",
            "Assistance en soirée et tôt le matin",
            "Solution de secours en cas de défaillance du transporteur",
            "Processus d'escalade clairement définis",
          ],
        },
        {
          number: "03",
          title: "Conseil en logistique radiopharmaceutique",
          intro:
            "Pour les fabricants, les radiopharmacies et les établissements universitaires à la recherche d'un partenaire comprenant l'ensemble de la chaîne, de la production à l'hôpital — fondé sur notre méthodologie 6D™.",
          items: [
            "Planification des itinéraires et circuits fixes",
            "Documentation conforme aux normes ADR et BPD (GDP)",
            "Conception des processus de remise et de prise en charge",
            "Élaboration de procédures opérationnelles normalisées (SOP)",
            "Accompagnement opérationnel et suivi des processus",
            "Coordination des exigences réglementaires",
          ],
        },
      ],
      chain: {
        title: "De la production au patient",
        steps: [
          "Cyclotron / Radiopharmacie",
          "ISOVIA",
          "Hôpital / Centre TEP",
          "Patient",
        ],
      },
      theranostics: {
        title: "Logistique de la théranostique — un regard vers l'avenir",
        body: "Nous nous préparons délibérément à la prochaine génération de logistique radiopharmaceutique : la théranostique, utilisant des radionucléides thérapeutiques tels que le Lu-177 et l'Ac-225. Nous ne proposons que ce que nous pouvons réellement assurer, sur le plan opérationnel comme réglementaire.",
      },
    },

    emergency: {
      eyebrow: "Urgence & secours",
      title: "Opérationnels lorsque le transport principal fait défaut.",
      body: "Parlez-nous de vos besoins spécifiques en matière de solution de secours — nous concevrons ensemble un processus qui s'active immédiatement lorsque cela compte le plus.",
      cta: "Discuter des besoins de secours",
    },

    responsibility: {
      eyebrow: "Responsabilité",
      title: "Engagement & éthique",
      intro:
        "La logistique radiopharmaceutique se situe à la croisée de la médecine, de la radioprotection et du droit des transports. Un comportement responsable n'est donc pas une option pour ISOVIA, mais une condition fondamentale de notre activité.",
      commitment: {
        title: "Notre engagement",
        items: [
          {
            title: "La fiabilité comme principe fondamental",
            body: "Nous nous engageons à traiter chaque transport avec le même soin, quels que soient l'heure, le jour de la semaine ou le degré d'urgence. Nos processus sont conçus pour rester stables, traçables et sûrs, même sous pression temporelle.",
          },
          {
            title: "Investissement dans la numérisation",
            body: "ISOVIA investit systématiquement dans le suivi numérique : le suivi GPS, la preuve de livraison électronique (ePOD) et le contrôle de la température garantissent une transparence totale tout au long du transport. Cet investissement dans une télématique moderne permet à nos clients de suivre à tout moment le statut de leur envoi — et nous permet de réagir rapidement en cas d'écart.",
          },
          {
            title: "Une disponibilité au moment opportun",
            body: "La logistique radiopharmaceutique ne suit pas les horaires de bureau classiques. Nous élargissons délibérément notre disponibilité afin d'être présents lorsque nos clients ont besoin de nous — le week-end, le soir et dans les situations urgentes. Lorsque nous ne pouvons pas encore proposer un service en continu, nous le communiquons ouvertement plutôt que de promettre une disponibilité que nous ne pourrions pas garantir.",
          },
          {
            title: "Une croissance fondée sur le partenariat",
            body: "ISOVIA se développe aux côtés de ses partenaires — dont des acteurs reconnus du secteur radiopharmaceutique. Nous nous considérons comme un partenaire à long terme, et non comme un simple prestataire ponctuel, et nous investissons continuellement dans le développement de nos capacités le long du corridor Rhénanie-du-Nord–Westphalie – Hesse – Rhénanie-Palatinat, puis au-delà.",
          },
          {
            title: "Une responsabilité envers les patients",
            body: "Au bout de chaque transport se trouve une personne qui attend un examen ou un traitement. Cette conscience façonne notre engagement : nous ne livrons pas simplement un colis — nous apportons une contribution aux soins de santé.",
          },
        ],
      },
      ethics: {
        title: "Notre éthique",
        items: [
          {
            title: "Conformité & sécurité",
            body: "Nous alignons systématiquement nos processus sur la réglementation en vigueur — notamment la loi allemande sur la radioprotection (StrlSchG), le règlement ADR relatif au transport de marchandises dangereuses (classe 7), ainsi que les exigences applicables en matière de documentation, d'étiquetage et de qualification des conducteurs. Lorsqu'une exigence est encore en cours de mise en œuvre, nous établissons une distinction claire entre ce qu'ISOVIA remplit déjà et ce sur quoi nous travaillons activement — nous ne communiquons que sur des certifications et des capacités réellement acquises.",
          },
          {
            title: "Intégrité et transparence",
            body: "Notre communication avec les clients, les autorités et les partenaires est honnête et vérifiable. Nous ne promettons ni disponibilité, ni capacité, ni certification que nous ne pourrions pas garantir. Tout écart, retard ou incident est communiqué immédiatement et en toute transparence.",
          },
          {
            title: "Confidentialité",
            body: "Nous traitons les informations relatives aux clients, aux itinéraires, aux volumes et aux relations de livraison avec une stricte confidentialité. La nature sensible de la logistique radiopharmaceutique exige une gestion prudente de toutes les informations opérationnelles et liées aux patients tout au long de la chaîne de transport.",
          },
          {
            title: "Radioprotection et devoir de vigilance",
            body: "La gestion responsable des matières radioactives est au cœur de notre activité. Nous travaillons en étroite collaboration avec des experts qualifiés en radioprotection et nous appuyons sur des procédures clairement définies pour la prise en charge, le transport, la remise et la gestion des incidents.",
          },
          {
            title: "Responsabilité envers la société",
            body: "ISOVIA considère son activité comme une contribution à un système de santé fonctionnel et fiable dans la région. Nous agissons selon le principe que la réussite économique et le comportement responsable ne s'excluent pas mutuellement, mais se renforcent — en particulier dans un environnement où chaque décision a, en définitive, un impact sur un patient.",
          },
        ],
      },
    },

    nuclearTeaser: {
      eyebrow: "Contexte",
      title: "Certains radionucléides n'ont que quelques heures de demi-vie.",
      body: "Une préparation qui n'arrive pas à temps ne perd pas simplement en efficacité — elle peut rendre impossible tout un examen ou un traitement. C'est précisément là qu'intervient ISOVIA.",
      cta: "En savoir plus sur la médecine nucléaire",
      imageAlt:
        "Colis jaunes portant le marquage UN2915 pour matières radioactives sur un convoyeur",
    },

    finalCta: {
      title: "Dites-nous ce que vous devez transporter.",
      body: "Qu'il s'agisse d'une commande de messagerie planifiée, d'un transport d'urgence ou d'une demande concernant nos solutions de secours — nous serons heureux de recevoir votre message.",
      primaryCta: "Demander une consultation transport",
    },
  },

  nuclearMedicine: {
    eyebrow: "Contexte",
    title: "À propos de la médecine nucléaire",
    intro:
      "La médecine nucléaire est une discipline dans laquelle des quantités infimes de substances marquées radioactivement — appelées radiopharmaceutiques — sont utilisées pour rendre une maladie visible (diagnostic) ou pour la traiter directement (thérapie).",
    lead: "Contrairement à l'imagerie classique, la médecine nucléaire fournit non seulement des informations anatomiques, mais aussi fonctionnelles — montrant comment un organe ou un tissu fonctionne réellement.",
    diagnostics: {
      title: "Diagnostic : TEP et TEMP",
      body: "En tomographie par émission de positons (TEP) et en tomographie d'émission monophotonique (TEMP), des radiopharmaceutiques sont administrés et s'accumulent de manière sélective dans certains tissus. Le rayonnement qu'ils émettent est capté par des caméras spécialisées et transformé en images diagnostiques. Ces techniques jouent un rôle central dans le dépistage précoce et le suivi des cancers, des maladies cardiovasculaires et des troubles neurologiques.",
    },
    radionuclides: {
      title: "Principaux radionucléides",
      items: [
        {
          name: "Fluor-18 (F-18)",
          description:
            "Base de la TEP au FDG, l'une des techniques diagnostiques les plus utilisées en oncologie.",
        },
        {
          name: "Gallium-68 (Ga-68)",
          description:
            "Utilisé dans des procédures TEP spécialisées, notamment pour les tumeurs neuroendocrines et le diagnostic du cancer de la prostate.",
        },
        {
          name: "Technetium-99m (Tc-99m)",
          description:
            "Le radionucléide le plus couramment utilisé en diagnostic TEMP.",
        },
        {
          name: "Iode-131 (I-131)",
          description:
            "Utilisé à la fois à des fins diagnostiques et thérapeutiques, notamment en médecine thyroïdienne.",
        },
        {
          name: "Lutétium-177 (Lu-177)",
          description:
            "Radionucléide central de la théranostique moderne, utilisé notamment pour les tumeurs neuroendocrines et le cancer de la prostate.",
        },
      ],
    },
    theranostics: {
      title: "Théranostique : diagnostic et thérapie réunis",
      body: "La théranostique désigne l'utilisation combinée du diagnostic et de la thérapie ciblant le même mécanisme moléculaire : un radiopharmaceutique diagnostique est d'abord utilisé pour déterminer si une tumeur présente une structure cible spécifique ; un radiopharmaceutique thérapeutique est ensuite utilisé pour attaquer directement cette même structure. Cette approche compte parmi les avancées les plus importantes de l'oncologie moderne.",
    },
    whyLogistics: {
      title: "Pourquoi la logistique est si déterminante en médecine nucléaire",
      body: "Les radiopharmaceutiques sont soumis à des exigences strictes en matière de délais, de température et de réglementation. De nombreux radionucléides utilisés ont des demi-vies extrêmement courtes — parfois seulement quelques heures. Un transport retardé ou défaillant peut affecter directement :",
      affected: [
        "les examens TEP",
        "les examens TEMP",
        "les thérapies par radionucléides",
        "la production radiopharmaceutique",
        "les essais cliniques",
      ],
      closing:
        "C'est précisément là qu'intervient ISOVIA : nous comprenons l'urgence clinique derrière chaque transport et concevons notre logistique pour répondre systématiquement à ces exigences.",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Dites-nous ce que vous devez transporter.",
    intro:
      "Qu'il s'agisse d'une commande de messagerie planifiée, d'un transport d'urgence ou d'une demande générale concernant nos solutions de secours — utilisez le formulaire ou contactez-nous directement.",
    form: {
      sections: {
        contact: "Vos coordonnées",
        transport: "Détails du transport",
        enquiry: "Type de demande",
      },
      fields: {
        company: "Entreprise",
        name: "Nom",
        position: "Fonction",
        email: "E-mail",
        phone: "Téléphone",
        origin: "Lieu d'origine (enlèvement)",
        destination: "Lieu de destination (livraison)",
        material: "Radiopharmaceutique / matière",
        frequency: "Fréquence de transport",
        temperature: "Exigence de température",
        enquiryType: "Type de demande",
        message: "Informations complémentaires",
      },
      placeholders: {
        company: "Hôpital, radiopharmacie ou fabricant",
        name: "Votre nom complet",
        position: "p. ex. chef de service de médecine nucléaire",
        email: "vous@etablissement.fr",
        phone: "+49 …",
        origin: "p. ex. radiopharmacie de Cologne",
        destination: "p. ex. centre TEP de Bonn",
        material: "p. ex. F-18 FDG",
        frequency: "p. ex. quotidien, hebdomadaire, ponctuel",
        temperature: "p. ex. température ambiante, 2–8 °C",
        message: "Créneaux horaires, particularités, questions …",
      },
      enquiryTypes: {
        regular: {
          label: "Régulière",
          description: "Commande de messagerie planifiée ou récurrente",
        },
        emergency: {
          label: "Urgence",
          description: "Critique en termes de délais — traitée en priorité",
        },
        backup: {
          label: "Secours",
          description: "Couverture en cas de défaillance du transport principal",
        },
      },
      optional: "facultatif",
      privacyConsent: {
        before: "J'ai lu et j'accepte la ",
        linkText: "politique de confidentialité",
        after: ".",
      },
      submit: "Demander une consultation transport",
      submitting: "Envoi en cours …",
      success: {
        title: "Votre demande nous est bien parvenue.",
        body: "Nous reviendrons vers vous dans les meilleurs délais. Pour les demandes critiques en termes de délais, vous pouvez également nous joindre par téléphone à tout moment.",
        referenceLabel: "Votre référence",
        again: "Envoyer une autre demande",
      },
      errors: {
        company: "Veuillez indiquer votre entreprise.",
        name: "Veuillez indiquer votre nom.",
        email: "Veuillez indiquer une adresse e-mail valide.",
        origin: "Veuillez indiquer le lieu d'enlèvement.",
        destination: "Veuillez indiquer le lieu de destination.",
        material: "Veuillez indiquer le radiopharmaceutique ou la matière.",
        enquiryType: "Veuillez choisir le type de demande.",
        privacy: "Veuillez accepter la politique de confidentialité.",
        submit:
          "Votre demande n'a pas pu être envoyée. Veuillez réessayer ou nous appeler.",
      },
    },
    direct: {
      title: "Contact direct",
      company: "ISOVIA – Medical Products & Services Mugabo e.K.",
      addressLines: [
        "Oberaustrasse 98",
        "53179 Bonn",
        "Rhénanie-du-Nord-Westphalie, Allemagne",
      ],
    },
    emergency: {
      title: "Demandes d'urgence et de secours",
      body: "Veuillez clairement indiquer les demandes urgentes comme « Urgence » afin que nous puissions traiter votre demande en priorité.",
    },
  },

  footer: {
    tagline: "Logistique radiopharmaceutique & transport d'urgence",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Informations légales",
    copyright: "Medical Products & Services Mugabo e.K.",
    disclaimer: "Tous droits réservés.",
  },
} satisfies Content;
