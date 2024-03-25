import React from 'react';
import SectionTitle from "@/components/section/section-title";
import Section from "@/components/section/section";
import EducationPopover from '@/components/education-popover/education-popover';
import { PopoverContent } from '@radix-ui/react-popover';

const EducationPage = React.forwardRef<HTMLDivElement>((_, forwardedRef) => {
  return (
    <>
      <Section sectionName="education" className="flex flex-col justify-between " ref={forwardedRef}>
        <SectionTitle title="education" className="border-lpred" />
        <div className='flex flex-col justify-around h-screen px-4'>
          <EducationPopover title="Front End Developer" variant="red-bubble" size="circle">
            <PopoverContent side="right" sideOffset={1} className="">
              <p className='text-wrap w-60'>Ceci contiendra une carte | This will contain a card</p>
            </PopoverContent>
          </EducationPopover>
          <EducationPopover title="Web Developer" variant="green-bubble" size="circle" className="self-end">
            <PopoverContent side="left" sideOffset={1} className="">
              <p className='text-wrap w-60'>Ceci contiendra une carte | This will contain a card</p>
            </PopoverContent>
          </EducationPopover>
          <EducationPopover title="Illustrator" variant="grey-bubble" size="circle">
            <PopoverContent side="right" sideOffset={1} className="">
              <p className='text-wrap w-60'>Ceci contiendra une carte | This will contain a card</p>
            </PopoverContent>
          </EducationPopover>
        </div>
      </Section>
    </>
  );
});

export default EducationPage;
