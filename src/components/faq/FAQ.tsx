import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const FAQ = () => {
  return <section className="bg-[#27272A] py-8 sm:py-12 md:py-16">
    <div className="max-w-[1000px] mx-auto px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center sm:text-left">FAQ</h1>

      <Accordion type="single" collapsible className="mt-4 sm:mt-5">
        <AccordionItem value="item-1" className="border-b border-gray-500">
          <AccordionTrigger>
            <h2 className="text-sm sm:text-md font-semibold text-white text-left">What are the limits for course creation on YouCode?</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base text-white">With YouCode, the only limits are your creativity and the content you are legally allowed to share. There are no restrictions on the number of courses or lessons you can create.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b border-gray-500">
          <AccordionTrigger>
            <h2 className="text-sm sm:text-md font-semibold text-white text-left">Can I integrate quizzes or exercises into my YouCode courses?</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base text-white">Absolutely! YouCode supports the integration of various types of interactive activities like quizzes, coding exercises, and more.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b border-gray-500">
          <AccordionTrigger>
            <h2 className="text-sm sm:text-md font-semibold text-white text-left">How does YouCode ensure the quality of the courses offered?</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base text-white">We have a dedicated team for quality assurance of courses. Moreover, the YouCode community can leave reviews and report inappropriate content.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b border-gray-500">
          <AccordionTrigger>
            <h2 className="text-sm sm:text-md font-semibold text-white text-left">Does YouCode offer tracking tools for course creators?</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base text-white">Yes, we provide detailed analytics so you can monitor your students' progress and engagement with your courses.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b border-gray-500">
          <AccordionTrigger>
            <h2 className="text-sm sm:text-md font-semibold text-white text-left">Can I customize the appearance of my courses on YouCode?</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base text-white">Yes, YouCode offers customization options so you can align the look of your courses with your brand or personal preferences.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-b border-gray-500">
          <AccordionTrigger>
            <h2 className="text-sm sm:text-md font-semibold text-white text-left">What support does YouCode provide to content creators in case of issues?</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base text-white">We have a responsive support team that can be contacted directly via our platform for any technical issues or questions.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
}