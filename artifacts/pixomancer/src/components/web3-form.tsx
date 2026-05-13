import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Web3Form({ formId, source, compact }: { formId: string, source: string, compact?: boolean }) {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // The access key provided by the user
    formData.append("access_key", "e1dbdb12-859a-432a-bdf6-4baf4c6a5241");
    formData.append("from_name", "Pixomancer Contact Form");
    formData.append("subject", `New Lead from ${source}`);
    formData.append("metadata", JSON.stringify({ formId, source }));

    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent.");
        form.reset();
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id={formId} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${formId}-name`} className="text-xs font-bold uppercase tracking-widest text-charcoal">Full Name</Label>
          <Input 
            id={`${formId}-name`} 
            name="name" 
            placeholder="John Doe" 
            required 
            className="border-cloud focus:border-teal focus:ring-teal bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${formId}-email`} className="text-xs font-bold uppercase tracking-widest text-charcoal">Email Address</Label>
          <Input 
            id={`${formId}-email`} 
            type="email" 
            name="email" 
            placeholder="john@example.com" 
            required 
            className="border-cloud focus:border-teal focus:ring-teal bg-white"
          />
        </div>
      </div>
      
      {!compact && (
        <div className="space-y-2">
          <Label htmlFor={`${formId}-subject`} className="text-xs font-bold uppercase tracking-widest text-charcoal">Interest</Label>
          <Input 
            id={`${formId}-subject`} 
            name="interest" 
            placeholder="e.g. Web Development, UI/UX Design" 
            className="border-cloud focus:border-teal focus:ring-teal bg-white"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor={`${formId}-message`} className="text-xs font-bold uppercase tracking-widest text-charcoal">
          {compact ? "Quick Brief" : "How can we help you?"}
        </Label>
        <Textarea 
          id={`${formId}-message`} 
          name="message" 
          placeholder={compact ? "Tell us about your project..." : "Describe your project, goals, and any specific requirements..."} 
          required 
          className="min-h-[120px] border-cloud focus:border-teal focus:ring-teal bg-white"
        />
      </div>

      <Button 
        type="submit" 
        disabled={sending}
        className="w-full btn-primary h-12 text-sm sm:text-base font-bold uppercase tracking-widest"
      >
        {sending ? "Sending..." : "Send Message →"}
      </Button>
    </form>
  );
}
