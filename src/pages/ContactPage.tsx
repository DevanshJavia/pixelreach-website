import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Video, 
  Coffee, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    budget: '$2,400 Foundation Website',
    meetingType: 'video',
    preferredTime: 'Morning (9:30 AM - 12:00 PM)',
    message: ''
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Website Design & Development'
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const servicesList = [
    'Website Design & Development',
    'Search Engine Optimisation (SEO)',
    'Social Media Management',
    'Digital Analytics & Reporting'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== s));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.businessName.trim()) errors.businessName = 'Please enter your business or venture name.';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Please enter a valid email address.';
    if (!formData.phone.trim() || formData.phone.length < 8) errors.phone = 'Please provide an Australian phone number.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2c1d23] via-[#35232a] to-[#25181e] text-[#FFE5D9] py-16 sm:py-24 border-b border-[#47333a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ffcad4] bg-[#47333a]/80 px-3 py-1 rounded-md border border-[#9d8189]/50 inline-block">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFE5D9] leading-tight">
              Book a consultation with our Adelaide digital marketing team.
            </h1>
            <p className="text-base sm:text-lg text-[#D8E2DC] leading-relaxed pt-2">
              Whether you need a brand-new website, local Google Maps ranking improvements, or a plain-English marketing audit, we are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form / Confirmation */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#D8E2DC] p-8 sm:p-10 shadow-sm">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2c1d23] tracking-tight">
                    Schedule Your Free 20-Minute Discovery Session
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5c434c] mt-1">
                    Fill in your details below and we will confirm your meeting within one business day.
                  </p>
                </div>

                {/* Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2c1d23] mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Mitchell"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#2c1d23] focus:outline-none focus:ring-2 focus:ring-[#f4acb7] ${
                        formErrors.name ? 'border-rose-400 bg-rose-50/30' : 'border-[#D8E2DC]'
                      }`}
                    />
                    {formErrors.name && <p className="text-[11px] text-rose-500 mt-1">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2c1d23] mb-1">
                      Business or Trading Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Adelaide Hills Timber Co."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#2c1d23] focus:outline-none focus:ring-2 focus:ring-[#f4acb7] ${
                        formErrors.businessName ? 'border-rose-400 bg-rose-50/30' : 'border-[#D8E2DC]'
                      }`}
                    />
                    {formErrors.businessName && <p className="text-[11px] text-rose-500 mt-1">{formErrors.businessName}</p>}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2c1d23] mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@yourbusiness.com.au"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#2c1d23] focus:outline-none focus:ring-2 focus:ring-[#f4acb7] ${
                        formErrors.email ? 'border-rose-400 bg-rose-50/30' : 'border-[#D8E2DC]'
                      }`}
                    />
                    {formErrors.email && <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2c1d23] mb-1">
                      Phone Number (AU) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0412 345 678 or (08) 8123 4567"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#2c1d23] focus:outline-none focus:ring-2 focus:ring-[#f4acb7] ${
                        formErrors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-[#D8E2DC]'
                      }`}
                    />
                    {formErrors.phone && <p className="text-[11px] text-rose-500 mt-1">{formErrors.phone}</p>}
                  </div>
                </div>

                {/* Current Website URL */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2c1d23] mb-1">
                    Current Website Address (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://www.yourbusiness.com.au (Leave blank if you don't have one)"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8E2DC] text-sm text-[#2c1d23] focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
                  />
                </div>

                {/* Services of Interest Checkboxes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2c1d23] mb-2">
                    Services of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {servicesList.map((srv) => {
                      const isChecked = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center gap-2.5 transition-all ${
                            isChecked
                              ? 'border-[#f4acb7] bg-[#FFE5D9]/50 text-[#2c1d23] font-bold shadow-xs'
                              : 'border-[#D8E2DC] hover:border-[#f4acb7] text-[#5c434c]'
                          }`}
                        >
                          <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                            isChecked ? 'bg-[#f4acb7] border-[#f4acb7] text-[#2c1d23] font-bold' : 'border-[#9d8189] bg-white'
                          }`}>
                            {isChecked && '✓'}
                          </span>
                          <span>{srv}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Meeting Preferences: Video or In-Person Coffee in Adelaide */}
                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2c1d23]">
                    Consultation Format Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, meetingType: 'video' })}
                      className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        formData.meetingType === 'video'
                          ? 'border-[#f4acb7] bg-[#FFE5D9]/50 text-[#2c1d23] font-bold shadow-xs'
                          : 'border-[#D8E2DC] text-[#5c434c]'
                      }`}
                    >
                      <Video className="w-4 h-4 text-[#963847] shrink-0" />
                      <div>
                        <p className="text-xs font-semibold">Google Meet Video Call</p>
                        <p className="text-[11px] text-[#5c434c] font-normal">Convenient screen share review</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, meetingType: 'coffee' })}
                      className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        formData.meetingType === 'coffee'
                          ? 'border-[#f4acb7] bg-[#FFE5D9]/50 text-[#2c1d23] font-bold shadow-xs'
                          : 'border-[#D8E2DC] text-[#5c434c]'
                      }`}
                    >
                      <Coffee className="w-4 h-4 text-[#963847] shrink-0" />
                      <div>
                        <p className="text-xs font-semibold">Adelaide CBD Coffee</p>
                        <p className="text-[11px] text-[#5c434c] font-normal">King William St / North Terrace</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Project Brief / Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2c1d23] mb-1">
                    What is your main digital goal right now?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about your business, current frustrations, or target timeline..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8E2DC] text-sm text-[#2c1d23] focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-semibold uppercase tracking-wider text-[#2c1d23] bg-[#f4acb7] hover:bg-[#ffcad4] active:bg-[#f4acb7] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#f4acb7]"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-[#9d8189]">
                  We respect your privacy. No spam, sales pressure, or unwanted promotional mailing lists.
                </p>
              </form>
            ) : (
              <div className="py-8 space-y-6 text-center">
                <div className="w-16 h-16 bg-[#FFE5D9] text-[#963847] rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#2c1d23]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#5c434c] max-w-md mx-auto">
                    Your discovery session request for <span className="font-semibold text-[#2c1d23]">{formData.businessName}</span> has been received.
                  </p>
                </div>

                <div className="p-4 bg-[#FFE5D9]/20 rounded-2xl border border-[#D8E2DC] max-w-md mx-auto text-left text-xs space-y-2 text-[#5c434c]">
                  <p className="font-bold text-[#2c1d23]">What Happens Next:</p>
                  <p>1. Our senior Adelaide advisor will review your business information and online presence.</p>
                  <p>2. We will contact you at <span className="font-semibold text-[#2c1d23]">{formData.phone}</span> or <span className="font-semibold text-[#2c1d23]">{formData.email}</span> within 1 business day to confirm your {formData.meetingType === 'video' ? 'video meeting link' : 'CBD coffee location'}.</p>
                  <p>3. We will prepare an initial local search visibility snapshot prior to our call.</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        websiteUrl: '',
                        budget: '$2,400 Foundation Website',
                        meetingType: 'video',
                        preferredTime: 'Morning (9:30 AM - 12:00 PM)',
                        message: ''
                      });
                    }}
                    className="text-xs text-[#963847] hover:text-[#2c1d23] font-semibold"
                  >
                    Submit another inquiry or update details
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Adelaide Office, Map Mockup, Operating Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="bg-[#2c1d23] text-[#FFE5D9] rounded-3xl p-8 border border-[#47333a] shadow-xl space-y-6">
              <div className="border-b border-[#47333a] pb-4">
                <span className="text-xs font-semibold text-[#f4acb7] uppercase tracking-wider">Adelaide Studio</span>
                <h3 className="text-xl font-bold text-[#FFE5D9] mt-1">Direct Contact Details</h3>
              </div>

              <div className="space-y-4 text-sm text-[#D8E2DC]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f4acb7] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#FFE5D9]">Office Address</p>
                    <p className="text-xs text-[#D8E2DC]/80 mt-0.5">
                      Level 2, 115 King William Street<br />
                      Adelaide SA 5000, Australia<br />
                      <span className="text-[#ffcad4]">(Consultations by appointment)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#f4acb7] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#FFE5D9]">Telephone</p>
                    <p className="text-xs text-[#D8E2DC]/80 mt-0.5">(08) 8123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#f4acb7] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#FFE5D9]">Email Inquiries</p>
                    <p className="text-xs text-[#D8E2DC]/80 mt-0.5">hello@pixelreach.com.au</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#f4acb7] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#FFE5D9]">Operating Hours</p>
                    <p className="text-xs text-[#D8E2DC]/80 mt-0.5">
                      Monday to Friday: 9:00 AM – 5:00 PM ACST<br />
                      Closed on South Australian Public Holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Adelaide CBD Map Locator Card */}
            <div className="bg-[#1f1418] rounded-3xl p-6 border border-[#47333a] text-[#FFE5D9] space-y-4">
              <div className="flex items-center justify-between text-xs text-[#D8E2DC]/80 border-b border-[#47333a] pb-3">
                <span className="font-semibold text-[#FFE5D9]">Adelaide CBD Location</span>
                <span className="text-[#f4acb7] font-mono">SA 5000</span>
              </div>

              {/* Vector Map Diagram */}
              <div className="h-44 rounded-xl bg-[#2c1d23] border border-[#47333a] relative overflow-hidden flex items-center justify-center p-4">
                {/* Simulated Street Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-0.5 bg-[#D8E2DC] top-8 absolute" />
                  <div className="w-full h-0.5 bg-[#D8E2DC] top-20 absolute" />
                  <div className="w-full h-0.5 bg-[#D8E2DC] top-32 absolute" />
                  <div className="h-full w-0.5 bg-[#D8E2DC] left-12 absolute" />
                  <div className="h-full w-0.5 bg-[#D8E2DC] left-36 absolute" />
                  <div className="h-full w-0.5 bg-[#D8E2DC] left-60 absolute" />
                </div>

                <div className="relative z-10 text-center space-y-2">
                  <div className="w-10 h-10 bg-[#f4acb7] rounded-full flex items-center justify-center mx-auto shadow-lg ring-4 ring-[#47333a]">
                    <MapPin className="w-5 h-5 text-[#2c1d23]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#FFE5D9]">King William Street</p>
                    <p className="text-[10px] text-[#ffcad4]">Heart of Adelaide CBD</p>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 text-[9px] text-[#9d8189] font-mono">
                  Victoria Square · 200m
                </div>
                <div className="absolute top-2 right-2 text-[9px] text-[#9d8189] font-mono">
                  Rundle Mall · 400m
                </div>
              </div>

              <div className="text-xs text-[#D8E2DC]/80 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#f4acb7] shrink-0" />
                <span>Convenient tram & bus access from all Adelaide suburbs</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
