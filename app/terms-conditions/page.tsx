import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions",
  description: "Terms that govern Vista Kids Dental's text messaging services, including opt-in, help/stop keywords, and message frequency.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsAndConditions() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral pt-[72px] md:pt-[88px]">
      <h1>SMS Terms &amp; Conditions</h1>

      <p>
        SMS Terms and Conditions. Use of the Vista Kids Dental text message-based services (the “Messaging Service”) is subject to the following Terms of Service. 
        These terms constitute a legal agreement (the “Agreement”). 
        Please read them carefully. Vista Kids Dental will allow several different opportunities, such as a entering a phone number on a form, to opt-in to SMS services. 
        When you sign up for our Messaging Service, you agree to receive the following type(s) of SMS from us:
      </p>

      <p> - Appointment reminders and scheduling</p>
      <p> - Follow-up care</p>
      <p> - Billing updates</p>
      <p> - Marketing</p>

      <p>
        You can cancel the Messaging Service at any time. 
        Just text "STOP" to unsubscribe. 
        After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. 
        After this, you will no longer receive SMS messages from us. 
        If you want to join again, just sign up as you did the first time or reply "START", and we will start sending SMS messages to you again.
      </p>

      <p>
        If at any time you forget what keywords are supported, just text "HELP". 
        After you send the SMS message "HELP" to us, we will respond with instructions on how to use our Service as well as how to unsubscribe.
      </p>

      <p>
        As always, message and data rates may apply for any messages sent to you from us and to us from you, and Vista Kids Dental is not liable for the cost of any such messages. 
        Frequency of messages may vary. Carriers are not liable for delayed or undelivered messages. If you have any questions about your text plan or data plan, it is best to contact your wireless provider. 
        For all questions about the Messaging Service, you can send an email to <a href="mailto:davidtakidsdds@gmail.com">davidtakidsdds@gmail.com</a>.
      </p>

      <p>
        You understand that anyone with access to your mobile phone may be able to view the messages you receive when using the Messaging Service, 
        and you agree that Vista Kids Dental will not be liable to you if this occurs.
      </p>

      <p>
        You understand that you are not required to consent to the Service to receive any other services from Vista Kids Dental .
      </p>

      <p>
        By agreeing to these Terms of Service and providing us with your mobile phone number when you opt in to the Messaging Service, 
        you authorize Vista Kids Dental to contact you by text message at your mobile phone number using an automatic telephone dialing system or device, 
        or any other computer assisted technology as applicable.
      </p>

      <p>
        If you have any questions regarding privacy, please read our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </main>
  );
}
