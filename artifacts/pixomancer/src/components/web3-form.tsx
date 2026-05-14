import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function Web3Form({ formId, source, compact }: { formId: string, source: string, compact?: boolean }) {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Dynamic naming based on source for Web3Forms dashboard
    const readableSource = source.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const fromName = `Pixomancer - ${readableSource}`;
    const subject = `New Inquiry from ${formData.get("name") || "Website"} via ${readableSource}`;

    // The access key provided by the user
    formData.append("access_key", "e1dbdb12-859a-432a-bdf6-4baf4c6a5241");
    formData.append("from_name", fromName);
    formData.append("subject", subject);
    formData.append("from_source", source); // For extra tracking
    formData.append("metadata", JSON.stringify({ formId, source, page: window.location.pathname }));

    const email = (formData.get("email") as string).toLowerCase();
    
    // Comprehensive list of test/temp keywords and domains
    const forbiddenKeywords = [
      "test", "testing", "temp", "fake", "demo", "example", "trial", "sample", 
      "dummy", "noreply", "admin", "null", "undefined", "asdf"
    ];
    
    const forbiddenDomains = [
      "example.com", "test.com", "testing.com", "mailinator.com", "yopmail.com", 
      "trashmail.com", "temp-mail.org", "10minutemail.com", "guerrillamail.com", 
      "dispostable.com", "getnada.com", "tempmail.net", "tempmail.com", 
      "sharklasers.com", "guerrillamailblock.com", "pokemail.net", "grr.la"
    ];
    
    const isForbidden = forbiddenKeywords.some(keyword => email.includes(keyword)) || 
                        forbiddenDomains.some(domain => email.endsWith(domain));

    if (isForbidden) {
      alert("Please use a valid professional email address. Test, temporary, or generic example emails are strictly prohibited.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent. Our team will review your brief and respond within one business day.");
        form.reset();
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id={formId} className="space-y-5">
      {/* Hidden field for Web3Forms bot protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
      
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
            placeholder="john@company.com" 
            required 
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Please enter a valid professional email address."
            className="border-cloud focus:border-teal focus:ring-teal bg-white"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${formId}-phone`} className="text-xs font-bold uppercase tracking-widest text-charcoal">Phone Number (Optional)</Label>
          <Input 
            id={`${formId}-phone`} 
            type="tel" 
            name="phone" 
            placeholder="+1 (555) 000-0000" 
            className="border-cloud focus:border-teal focus:ring-teal bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${formId}-subject`} className="text-xs font-bold uppercase tracking-widest text-charcoal">Service Required</Label>
          <Select name="service" defaultValue="">
            <SelectTrigger id={`${formId}-subject`} className="border-cloud focus:border-teal focus:ring-teal bg-white h-10">
              <SelectValue placeholder="Choose a Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-dev">Web & SaaS Engineering</SelectItem>
              <SelectItem value="ui-ux">UI / UX Experience Design</SelectItem>
              <SelectItem value="marketing">Digital Marketing</SelectItem>
              <SelectItem value="ecommerce">E-Commerce Solutions</SelectItem>
              <SelectItem value="branding">Brand Identity</SelectItem>
              <SelectItem value="copywriting">Authority Copywriting</SelectItem>
              <SelectItem value="video">Video & Animation</SelectItem>
              <SelectItem value="ai">AI Automation & Systems</SelectItem>
              <SelectItem value="other">Other / Custom Stack</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-message`} className="text-xs font-bold uppercase tracking-widest text-charcoal">
          {compact ? "Quick Brief (Optional)" : "How can we help you? (Optional)"}
        </Label>
        <Textarea 
          id={`${formId}-message`} 
          name="message" 
          placeholder={compact ? "Tell us about your project goals..." : "Describe your project, goals, and any specific requirements you have in mind..."} 
          className="min-h-[120px] border-cloud focus:border-teal focus:ring-teal bg-white"
        />
      </div>

      <Button 
        type="submit" 
        disabled={sending}
        className="w-full btn-primary h-12 text-sm sm:text-base font-bold uppercase tracking-widest"
      >
        {sending ? "Processing..." : "Submit Your Brief →"}
      </Button>
    </form>
  );
}
