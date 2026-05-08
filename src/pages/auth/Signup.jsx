import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  ArrowRight,
  Phone,
  Check
} from 'lucide-react';
import logo from '../../assets/logo/logo.png';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Signup submitted:', formData);
    }, 2000);
  };

  const goBack = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="inline-block">
            <img src={logo} alt="Wholesale Depot" className="h-8 md:h-10 w-auto" />
          </Link>
          <Link to="/login" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-10">
        <div className="w-full max-w-lg">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Create Your Account
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Join thousands of happy customers getting fresh groceries delivered
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className={`flex items-center gap-2 ${step === 1 ? 'opacity-100' : 'opacity-50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 1 ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'
              }`}>1</div>
              <span className="text-xs font-semibold text-gray-600 hidden sm:inline">Personal Info</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className={`flex items-center gap-2 ${step === 2 ? 'opacity-100' : 'opacity-50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 2 ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'
              }`}>2</div>
              <span className="text-xs font-semibold text-gray-600 hidden sm:inline">Account Setup</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/30 p-6 sm:p-8">
            
            {/* Social Signup */}
            {step === 1 && (
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all hover:border-gray-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all hover:border-gray-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                </div>
                <div className="relative mt-6 mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-400 font-medium">Or sign up with email</span>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* ===== STEP 1: Personal Info ===== */}
              {step === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        First Name
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Last Name
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* ===== STEP 2: Account Setup ===== */}
              {step === 2 && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Min. 8 characters"
                        className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {/* Password Strength */}
                    {formData.password && (
                      <div className="mt-2 flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-all ${
                              formData.password.length >= level * 3
                                ? level <= 2 ? 'bg-red-500' : level === 3 ? 'bg-yellow-500' : 'bg-green-500'
                                : 'bg-gray-200'
                            }`}
                          ></div>
                        ))}
                        <span className="text-[10px] text-gray-400 ml-2">
                          {formData.password.length < 6 ? 'Weak' : 
                           formData.password.length < 9 ? 'Medium' : 'Strong'}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter password"
                        className={`w-full pl-10 pr-12 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all placeholder:text-gray-400 ${
                          formData.confirmPassword && formData.password !== formData.confirmPassword
                            ? 'bg-red-50 border-red-200 text-red-600'
                            : formData.confirmPassword && formData.password === formData.confirmPassword
                            ? 'bg-green-50 border-green-200 text-green-600'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <p className="text-[10px] text-red-500 mt-1 ml-1">Passwords do not match</p>
                    )}
                    {formData.confirmPassword && formData.password === formData.confirmPassword && (
                      <p className="text-[10px] text-green-500 mt-1 ml-1">Passwords match ✓</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue/30 mt-0.5"
                        required
                      />
                      <span className="text-sm text-gray-500">
                        I agree to the{' '}
                        <a href="#" className="text-brand-blue hover:underline font-medium">Terms</a>
                        {' '}and{' '}
                        <a href="#" className="text-brand-blue hover:underline font-medium">Privacy Policy</a>
                      </span>
                    </label>
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="px-6 py-3.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                )}
                
                <button
                  type="submit"
                  disabled={loading || (step === 2 && formData.password !== formData.confirmPassword)}
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : step === 1 ? (
                    <>
                      Continue
                      <ArrowRight size={16} />
                    </>
                  ) : (
                    <>
                      Create Account
                      <Check size={16} />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-blue hover:text-brand-blue-dark font-bold transition-colors">
              Sign In
            </Link>
          </p>

          {/* Benefits */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: '', text: 'Free Delivery' },
              { icon: '', text: 'Secure Checkout' },
              { icon: '', text: 'Exclusive Deals' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm">
                <span className="text-xl">{item.icon}</span>
                <p className="text-[10px] text-gray-500 font-medium mt-1">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}