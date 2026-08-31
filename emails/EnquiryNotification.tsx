import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { EnquiryTypeValue } from "@/lib/validation/contact";

export type EnquiryEmailProps = {
  reference: string;
  enquiryType: EnquiryTypeValue;
  locale: string;
  submittedAt: string;
  company: string;
  name: string;
  position?: string | null;
  email: string;
  phone?: string | null;
  origin: string;
  destination: string;
  material: string;
  frequency?: string | null;
  temperature?: string | null;
  message?: string | null;
};

const ACCENT = "#f07144";
const PRIMARY = "#454895";
const MUTED = "#5f6079";
const BORDER = "#e4e4ee";

function Row({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <Section style={{ borderBottom: `1px solid ${BORDER}`, padding: "10px 0" }}>
      <Text
        style={{
          margin: 0,
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: MUTED,
        }}
      >
        {label}
      </Text>
      <Text style={{ margin: "4px 0 0", fontSize: "15px", color: "#1a1a2e" }}>
        {value}
      </Text>
    </Section>
  );
}

/**
 * Notification sent to Operations. An emergency is colour-flagged as well as
 * subject-prefixed, so it stays obvious once the mail is open.
 */
export function EnquiryNotification(props: EnquiryEmailProps) {
  const isEmergency = props.enquiryType === "EMERGENCY";
  const bannerColour = isEmergency ? ACCENT : PRIMARY;

  return (
    <Html>
      <Head />
      <Preview>
        {`${isEmergency ? "NOTFALL — " : ""}${props.company}: ${props.origin} → ${props.destination} (${props.material})`}
      </Preview>
      <Body
        style={{
          backgroundColor: "#fbfbfd",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          margin: 0,
          padding: "24px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            border: `1px solid ${BORDER}`,
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Section style={{ backgroundColor: bannerColour, padding: "20px 28px" }}>
            <Text
              style={{
                margin: 0,
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {isEmergency ? "Notfall / Emergency" : "Website enquiry"}
            </Text>
            <Heading
              as="h1"
              style={{ margin: "6px 0 0", fontSize: "22px", color: "#ffffff" }}
            >
              {props.reference}
            </Heading>
          </Section>

          <Section style={{ padding: "8px 28px 24px" }}>
            <Row label="Unternehmen / Company" value={props.company} />
            <Row label="Name" value={props.name} />
            <Row label="Position" value={props.position} />
            <Row label="E-Mail" value={props.email} />
            <Row label="Telefon / Phone" value={props.phone} />
            <Row label="Abholung / Origin" value={props.origin} />
            <Row label="Ziel / Destination" value={props.destination} />
            <Row label="Material" value={props.material} />
            <Row label="Häufigkeit / Frequency" value={props.frequency} />
            <Row label="Temperatur / Temperature" value={props.temperature} />
            <Row label="Art der Anfrage / Enquiry type" value={props.enquiryType} />
            <Row label="Sprache / Locale" value={props.locale.toUpperCase()} />
            <Row label="Eingegangen / Received" value={props.submittedAt} />

            {props.message ? (
              <Section style={{ paddingTop: "16px" }}>
                <Text
                  style={{
                    margin: 0,
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: MUTED,
                  }}
                >
                  Weitere Informationen / Additional information
                </Text>
                <Text
                  style={{
                    margin: "6px 0 0",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#1a1a2e",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {props.message}
                </Text>
              </Section>
            ) : null}

            <Hr style={{ borderColor: BORDER, margin: "24px 0 16px" }} />

            <Text style={{ margin: 0, fontSize: "13px", color: MUTED }}>
              Antworten Sie direkt auf diese E-Mail, um{" "}
              <Link href={`mailto:${props.email}`} style={{ color: PRIMARY }}>
                {props.name}
              </Link>{" "}
              zu erreichen.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default EnquiryNotification;
