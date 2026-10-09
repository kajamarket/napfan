import React, { useState } from 'react';
import { CheckCircle2, Shield, Send } from 'lucide-react';
import { siteConfig } from '../site.config';

interface PrayerRequestSectionProps {
  googleFormUrl?: string;
}

export const PrayerRequestSection: React.FC<PrayerRequestSectionProps> = ({
  googleFormUrl,
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [category, setCategory] = useState<string>('Personal Breakthrough');
  const [request, setRequest] = useState<string>('');
  const [isConfidential, setIsConfidential] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setRequest('');
  };

  return (
    <section id="prayer-request" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Container: bg-[#F6E4CF] rounded-3xl p-8 md:p-12 border-l-4 border-[#321C04] */}
        <div className="bg-[#F6E4CF] rounded-3xl p-8 md:p-12 border-l-4 border-[#321C04] shadow-sm">
          {/* Section Heading: text-[#321C04] text-3xl md:text-4xl font-normal */}
          <h2 className="text-[#321C04] text-3xl md:text-4xl font-normal font-display italic">
            How Can We Pray With You?
          </h2>

          {/* Supporting Copy: text-[#321C04]/70 text-base leading-relaxed mt-3 mb-8 */}
          <p className="text-[#321C04]/70 text-base leading-relaxed mt-3 mb-8 font-light">
            The intercessors of {siteConfig.name} stand with you in faith. Whatever burden, need, or petition is on your heart, share it in confidence with our prayer team.
          </p>

          {/* Google Form Embed Container if provided */}
          {googleFormUrl ? (
            <div className="w-full">
              {/* Google Form Embed Placeholder */}
              <iframe
                src={googleFormUrl}
                title="Prayer Request Form"
                className="w-full min-h-[560px] border-0 rounded-2xl bg-[#FFF9F2]"
                loading="lazy"
              >
                Loading prayer form…
              </iframe>
            </div>
          ) : submitted ? (
            /* Submission Confirmation Screen */
            <div className="py-8 sm:py-10 text-center bg-[#FFF9F2] rounded-2xl p-6 border border-[#D9C4AA]/50">
              <div className="w-12 h-12 rounded-full bg-[#321C04]/10 text-[#321C04] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-display italic text-[#321C04] mb-2 font-normal">
                Your Prayer Request Has Been Received
              </h3>

              <p className="text-sm text-[#321C04]/70 font-light leading-relaxed max-w-lg mx-auto mb-6">
                “Again I say to you that if two of you agree on earth concerning anything that they ask, it will be done for them by My Father in heaven.” — Matthew 18:19.
                <br />
                Our intercessory team is standing with you before the throne of grace.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#321C04] text-[#FFF9F2] hover:bg-[#1F1003] text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                <span>Submit Another Request</span>
              </button>
            </div>
          ) : (
            /* Prayer Request Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="pr-name" className="block text-xs font-mono uppercase tracking-wider text-[#321C04] font-semibold mb-2">
                    Your Name (or Anonymous)
                  </label>
                  <input
                    type="text"
                    id="pr-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#D9C4AA] text-sm text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#321C04]"
                  />
                </div>

                <div>
                  <label htmlFor="pr-location" className="block text-xs font-mono uppercase tracking-wider text-[#321C04] font-semibold mb-2">
                    City / Country
                  </label>
                  <input
                    type="text"
                    id="pr-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lagos, Nairobi, London..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#D9C4AA] text-sm text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#321C04]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pr-category" className="block text-xs font-mono uppercase tracking-wider text-[#321C04] font-semibold mb-2">
                  Prayer Focus Category
                </label>
                <select
                  id="pr-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#D9C4AA] text-sm text-[#321C04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#321C04]"
                >
                  <option value="Personal Breakthrough">Personal Breakthrough & Guidance</option>
                  <option value="Healing & Health">Physical & Emotional Healing</option>
                  <option value="Family & Marriage">Family, Marriage & Children</option>
                  <option value="Spiritual Growth">Spiritual Awakening & Consecration</option>
                  <option value="Career & Provision">Financial Provision & Career</option>
                  <option value="Community & Nation">Community Peace & National Revival</option>
                  <option value="Thanksgiving">Praise Report / Answered Prayer</option>
                </select>
              </div>

              <div>
                <label htmlFor="pr-request" className="block text-xs font-mono uppercase tracking-wider text-[#321C04] font-semibold mb-2">
                  Your Prayer Petition <span className="text-[#321C04]">*</span>
                </label>
                <textarea
                  id="pr-request"
                  required
                  rows={4}
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  placeholder="Share your prayer need or thanksgiving in detail..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#D9C4AA] text-sm text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#321C04] resize-y"
                />
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="pr-confidential"
                  checked={isConfidential}
                  onChange={(e) => setIsConfidential(e.target.checked)}
                  className="w-4 h-4 rounded border-[#D9C4AA] text-[#321C04] focus:ring-[#321C04]"
                />
                <label htmlFor="pr-confidential" className="text-xs text-[#321C04]/80 flex items-center gap-1.5 cursor-pointer">
                  <Shield className="w-3.5 h-3.5 text-[#321C04] shrink-0" />
                  <span>Keep this petition confidential for the pastoral intercessory team only</span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#321C04] text-[#FFF9F2] hover:bg-[#1F1003] text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Prayer Request</span>
                </button>
              </div>
            </form>
          )}

          {/* Discreet Google Form Embed marker comment */}
          {/* Google Form Embed Placement: To embed your Google Form directly, pass googleFormUrl or replace the form above with: <iframe src="YOUR_GOOGLE_FORM_URL" className="w-full min-h-[500px]" /> */}
        </div>
      </div>
    </section>
  );
};
