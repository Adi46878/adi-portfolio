import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpqgornb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 cascade-enter">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-foreground/70">
            Have a project in mind or want to discuss data science opportunities?
            I'd love to hear from you. Reach out and let's create something
            impactful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {[
            {
              icon: Mail,
              label: "Email",
              value: "aditya.30069@gmail.com",
              link: "mailto:aditya.30069@gmail.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+91 9811102922",
              link: "tel:+919811102922",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Gurugram, Haryana",
              link: "#",
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.link}
                className="group bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 card-hover-lift"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-all duration-300 mb-4 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {contact.label}
                </h3>
                <p className="text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
                    <div className="bg-card rounded-lg border border-border p-8 md:p-12 shadow-sm cascade-enter" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-muted/30 border-border text-foreground placeholder:text-foreground/40 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/30 border-border text-foreground placeholder:text-foreground/40 focus:border-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-muted/30 border-border text-foreground placeholder:text-foreground/40 focus:border-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={6}
                  className="bg-muted/30 border-border text-foreground placeholder:text-foreground/40 focus:border-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 h-auto transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <p className="text-xs text-foreground/50 text-center mt-4">
              I typically respond within 24 hours. Feel free to reach out for collaborations or opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
