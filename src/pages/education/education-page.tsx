import React from 'react';
import SectionTitle from "@/components/section/section-title";
import Section from "@/components/section/section";

const EducationPage = React.forwardRef<HTMLDivElement>((_, forwardedRef) => {
  return (
    <>
      <Section sectionName="education" className="" ref={forwardedRef}>
        <SectionTitle title="education" className="border-lpred" />
      </Section>
    </>
  );
});

export default EducationPage;
