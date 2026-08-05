import { useCallback, useState } from "react";

export function useFormSubmission(endpoint) {
  const [submission, setSubmission] = useState({
    status: "idle",
    message: "",
  });

  const submit = useCallback(
    async (event) => {
      event.preventDefault();
      const form = event.currentTarget;

      setSubmission({ status: "submitting", message: "Sending…" });

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        form.reset();
        setSubmission({
          status: "success",
          message: "Thank you. Our team will contact you shortly.",
        });
      } catch {
        setSubmission({
          status: "error",
          message:
            "We could not send your request. Please email support@zvolta.com.",
        });
      }
    },
    [endpoint],
  );

  return { ...submission, submit };
}
