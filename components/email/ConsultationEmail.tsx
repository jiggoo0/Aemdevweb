import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ConsultationEmailProps {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export const ConsultationEmail = ({
  name,
  email,
  company,
  service,
  message,
}: ConsultationEmailProps) => (
  <Html>
    <Head />
    <Preview>New Consultation Request from {name}</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container className="mx-auto py-5 pb-12">
          <Heading className="text-2xl font-bold text-[#0f172a] mb-6">
            New Consultation Request
          </Heading>
          <Section className="bg-[#f8fafc] p-6 rounded-lg border border-[#e2e8f0]">
            <Text className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-1">
              Client Name
            </Text>
            <Text className="text-lg text-[#0f172a] mb-4">{name}</Text>

            <Text className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-1">
              Email Address
            </Text>
            <Text className="text-lg text-[#0f172a] mb-4">{email}</Text>

            {company && (
              <>
                <Text className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-1">
                  Company
                </Text>
                <Text className="text-lg text-[#0f172a] mb-4">{company}</Text>
              </>
            )}

            <Text className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-1">
              Service Interested
            </Text>
            <Text className="text-lg font-bold text-[#ec4899] mb-4">{service}</Text>

            <Hr className="border-[#e2e8f0] my-6" />

            <Text className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-1">
              Message / Business Details
            </Text>
            <Text className="text-[#334155] leading-relaxed whitespace-pre-wrap">{message}</Text>
          </Section>
          <Text className="text-xs text-[#94a3b8] mt-8 text-center uppercase tracking-widest">
            AEMDEVWEB Technical Infrastructure Specialists
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ConsultationEmail;
