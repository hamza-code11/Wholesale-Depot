import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  ArrowRight,
  Check,
} from 'lucide-react';
import logo from '../../assets/logo/logo.png';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['123 Grocery Street', 'Lahore, Pakistan 54000'],
    color: 'text-brand-red',
    bgColor: 'bg-red-50',
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: ['+92 300 1234567', '+92 42 1234567'],
    color: 'text-brand-blue',
    bgColor: 'bg-blue-50',
    link: 'tel:+923001234567',
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['info@wholesaledepot.com', 'support@wholesaledepot.com'],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    link: 'mailto:info@wholesaledepot.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sun: 9:00 AM - 9:00 PM', 'Customer Support 24/7'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ===== HERO SECTION ===== */}
      <div className="bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center">
            <p className="text-xs text-white/60 mb-2">
              <Link to="/" className="hover:text-white/80 transition-colors">Home</Link> / Contact
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3">
              Get In Touch
            </h1>
            <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
              Have questions or feedback? We'd love to hear from you. Reach out and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* ===== CONTACT INFO CARDS ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-lg p-4 md:p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {item.link ? (
                <a href={item.link} target={item.link.startsWith('http') ? '_blank' : ''} rel="noopener noreferrer">
                  <div className={`w-10 h-10 md:w-11 md:h-11 ${item.bgColor} rounded-xl flex items-center justify-center mb-3 hover:scale-110 transition-transform`}>
                    <item.icon size={20} className={item.color} />
                  </div>
                </a>
              ) : (
                <div className={`w-10 h-10 md:w-11 md:h-11 ${item.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                  <item.icon size={20} className={item.color} />
                </div>
              )}
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-[11px] md:text-xs text-gray-500 leading-relaxed">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          
          {/* ===== LEFT: Contact Form ===== */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                  <MessageSquare size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-extrabold text-gray-900">Send Us a Message</h2>
                  <p className="text-xs text-gray-400">We'll get back within 24 hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all text-gray-700 cursor-pointer"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="order">Order Inquiry</option>
                        <option value="product">Product Question</option>
                        <option value="delivery">Delivery Issue</option>
                        <option value="return">Return/Refund</option>
                        <option value="wholesale">Wholesale/Bulk Order</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400 resize-none"
                      required
                    ></textarea>
                    <p className="text-[10px] text-gray-400 mt-1 text-right">
                      {formData.message.length}/500
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30 active:scale-[0.98] disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

          {/* ===== RIGHT: Quick Contact ===== */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Call Us */}
            <a 
              href="tel:+923001234567" 
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone size={22} className="text-brand-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900">Call Us</p>
                <p className="text-xs text-gray-500">+92 300 1234567</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Available 24/7</p>
              </div>
              <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

            {/* Email Us */}
            <a 
              href="mailto:info@wholesaledepot.com" 
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail size={22} className="text-brand-red" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900">Email Us</p>
                <p className="text-xs text-gray-500 truncate">info@wholesaledepot.com</p>
                <p className="text-[10px] text-gray-400 mt-0.5">We reply within 24 hours</p>
              </div>
              <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

            {/* Visit Us */}
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <MapPin size={22} className="text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900">Visit Us</p>
                <p className="text-xs text-gray-500">123 Grocery Street, Lahore</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Mon - Sun: 9AM - 9PM</p>
              </div>
              <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

          </div>

        </div>
      </div>

    </div>
  );
}