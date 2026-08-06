import { useState } from "./ContactUsPage.shared.jsx";
import { ContactPageHeroSection } from "./ContactUsPage/sections/ContactPageHeroSection.jsx";
import { ContactPageInfoSection } from "./ContactUsPage/sections/ContactPageInfoSection.jsx";
import { ContactPageFormSection } from "./ContactUsPage/sections/ContactPageFormSection.jsx";
export default function ContactUsPage() {
  const [submitState, setSubmitState] = useState("idle");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Form submission failed");
      }
      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };
  const resetFormState = () => setSubmitState("idle");
  return (
    <>
      <div className="contact-page">
        <ContactPageHeroSection />

        <ContactPageInfoSection />

        <ContactPageFormSection
          handleSubmit={handleSubmit}
          resetFormState={resetFormState}
          submitState={submitState}
        />
      </div>
    </>
  );
}
