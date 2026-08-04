import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import fullpageExports from '@fullpage/react-fullpage';

const ReactFullpage = fullpageExports.default || fullpageExports;

const availableServices = [
  'Brand Identity',
  'UI/UX Design',
  'Print Design',
  'Social Media Design',
  'Website Design & Development',
  'Design Consultation',
  'Videography and Editing',
];

const countryCodes = [
  { code: '+64', iso: 'NZ', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+93', iso: 'AF', country: 'Afghanistan', flag: '🇦🇫' },
  { code: '+355', iso: 'AL', country: 'Albania', flag: '🇦🇱' },
  { code: '+213', iso: 'DZ', country: 'Algeria', flag: '🇩🇿' },
  { code: '+376', iso: 'AD', country: 'Andorra', flag: '🇦🇩' },
  { code: '+244', iso: 'AO', country: 'Angola', flag: '🇦🇴' },
  { code: '+1-268', iso: 'AG', country: 'Antigua & Barbuda', flag: '🇦🇬' },
  { code: '+54', iso: 'AR', country: 'Argentina', flag: '🇦🇷' },
  { code: '+374', iso: 'AM', country: 'Armenia', flag: '🇦🇲' },
  { code: '+61', iso: 'AU', country: 'Australia', flag: '🇦🇺' },
  { code: '+43', iso: 'AT', country: 'Austria', flag: '🇦🇹' },
  { code: '+994', iso: 'AZ', country: 'Azerbaijan', flag: '🇦🇿' },
  { code: '+1-242', iso: 'BS', country: 'Bahamas', flag: '🇧🇸' },
  { code: '+973', iso: 'BH', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+880', iso: 'BD', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+1-246', iso: 'BB', country: 'Barbados', flag: '🇧🇧' },
  { code: '+375', iso: 'BY', country: 'Belarus', flag: '🇧🇾' },
  { code: '+32', iso: 'BE', country: 'Belgium', flag: '🇧🇪' },
  { code: '+501', iso: 'BZ', country: 'Belize', flag: '🇧🇿' },
  { code: '+229', iso: 'BJ', country: 'Benin', flag: '🇧🇯' },
  { code: '+975', iso: 'BT', country: 'Bhutan', flag: '🇧🇹' },
  { code: '+591', iso: 'BO', country: 'Bolivia', flag: '🇧🇴' },
  { code: '+387', iso: 'BA', country: 'Bosnia & Herzegovina', flag: '🇧🇦' },
  { code: '+267', iso: 'BW', country: 'Botswana', flag: '🇧🇼' },
  { code: '+55', iso: 'BR', country: 'Brazil', flag: '🇧🇷' },
  { code: '+673', iso: 'BN', country: 'Brunei', flag: '🇧🇳' },
  { code: '+359', iso: 'BG', country: 'Bulgaria', flag: '🇧🇬' },
  { code: '+226', iso: 'BF', country: 'Burkina Faso', flag: '🇧🇫' },
  { code: '+257', iso: 'BI', country: 'Burundi', flag: '🇧🇮' },
  { code: '+855', iso: 'KH', country: 'Cambodia', flag: '🇰🇭' },
  { code: '+237', iso: 'CM', country: 'Cameroon', flag: '🇨🇲' },
  { code: '+1', iso: 'CA', country: 'Canada', flag: '🇨🇦' },
  { code: '+238', iso: 'CV', country: 'Cape Verde', flag: '🇨🇻' },
  { code: '+236', iso: 'CF', country: 'Central African Republic', flag: '🇨🇫' },
  { code: '+235', iso: 'TD', country: 'Chad', flag: '🇹🇩' },
  { code: '+56', iso: 'CL', country: 'Chile', flag: '🇨🇱' },
  { code: '+86', iso: 'CN', country: 'China', flag: '🇨🇳' },
  { code: '+57', iso: 'CO', country: 'Colombia', flag: '🇨🇴' },
  { code: '+269', iso: 'KM', country: 'Comoros', flag: '🇰🇲' },
  { code: '+242', iso: 'CG', country: 'Congo', flag: '🇨🇬' },
  { code: '+506', iso: 'CR', country: 'Costa Rica', flag: '🇨🇷' },
  { code: '+385', iso: 'HR', country: 'Croatia', flag: '🇭🇷' },
  { code: '+53', iso: 'CU', country: 'Cuba', flag: '🇨🇺' },
  { code: '+357', iso: 'CY', country: 'Cyprus', flag: '🇨🇾' },
  { code: '+420', iso: 'CZ', country: 'Czech Republic', flag: '🇨🇿' },
  { code: '+45', iso: 'DK', country: 'Denmark', flag: '🇩🇰' },
  { code: '+253', iso: 'DJ', country: 'Djibouti', flag: '🇩🇯' },
  { code: '+1-767', iso: 'DM', country: 'Dominica', flag: '🇩🇲' },
  { code: '+1-809', iso: 'DO', country: 'Dominican Republic', flag: '🇩🇴' },
  { code: '+593', iso: 'EC', country: 'Ecuador', flag: '🇪🇨' },
  { code: '+20', iso: 'EG', country: 'Egypt', flag: '🇪🇬' },
  { code: '+503', iso: 'SV', country: 'El Salvador', flag: '🇸🇻' },
  { code: '+240', iso: 'GQ', country: 'Equatorial Guinea', flag: '🇬🇶' },
  { code: '+291', iso: 'ER', country: 'Eritrea', flag: '🇪🇷' },
  { code: '+372', iso: 'EE', country: 'Estonia', flag: '🇪🇪' },
  { code: '+268', iso: 'SZ', country: 'Eswatini', flag: '🇸🇿' },
  { code: '+251', iso: 'ET', country: 'Ethiopia', flag: '🇪🇹' },
  { code: '+679', iso: 'FJ', country: 'Fiji', flag: '🇫🇯' },
  { code: '+358', iso: 'FI', country: 'Finland', flag: '🇫🇮' },
  { code: '+33', iso: 'FR', country: 'France', flag: '🇫🇷' },
  { code: '+241', iso: 'GA', country: 'Gabon', flag: '🇬🇦' },
  { code: '+220', iso: 'GM', country: 'Gambia', flag: '🇬🇲' },
  { code: '+995', iso: 'GE', country: 'Georgia', flag: '🇬🇪' },
  { code: '+49', iso: 'DE', country: 'Germany', flag: '🇩🇪' },
  { code: '+233', iso: 'GH', country: 'Ghana', flag: '🇬🇭' },
  { code: '+30', iso: 'GR', country: 'Greece', flag: '🇬🇷' },
  { code: '+1-473', iso: 'GD', country: 'Grenada', flag: '🇬🇩' },
  { code: '+502', iso: 'GT', country: 'Guatemala', flag: '🇬🇹' },
  { code: '+224', iso: 'GN', country: 'Guinea', flag: '🇬🇳' },
  { code: '+592', iso: 'GY', country: 'Guyana', flag: '🇬🇾' },
  { code: '+509', iso: 'HT', country: 'Haiti', flag: '🇭🇹' },
  { code: '+504', iso: 'HN', country: 'Honduras', flag: '🇭🇳' },
  { code: '+36', iso: 'HU', country: 'Hungary', flag: '🇭🇺' },
  { code: '+354', iso: 'IS', country: 'Iceland', flag: '🇮🇸' },
  { code: '+91', iso: 'IN', country: 'India', flag: '🇮🇳' },
  { code: '+62', iso: 'ID', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+98', iso: 'IR', country: 'Iran', flag: '🇮🇷' },
  { code: '+964', iso: 'IQ', country: 'Iraq', flag: '🇮🇶' },
  { code: '+353', iso: 'IE', country: 'Ireland', flag: '🇮🇪' },
  { code: '+972', iso: 'IL', country: 'Israel', flag: '🇮🇱' },
  { code: '+39', iso: 'IT', country: 'Italy', flag: '🇮🇹' },
  { code: '+1-876', iso: 'JM', country: 'Jamaica', flag: '🇯🇲' },
  { code: '+81', iso: 'JP', country: 'Japan', flag: '🇯🇵' },
  { code: '+962', iso: 'JO', country: 'Jordan', flag: '🇯🇴' },
  { code: '+7', iso: 'KZ', country: 'Kazakhstan', flag: '🇰🇿' },
  { code: '+254', iso: 'KE', country: 'Kenya', flag: '🇰🇪' },
  { code: '+686', iso: 'KI', country: 'Kiribati', flag: '🇰🇮' },
  { code: '+965', iso: 'KW', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+996', iso: 'KG', country: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: '+856', iso: 'LA', country: 'Laos', flag: '🇱🇦' },
  { code: '+371', iso: 'LV', country: 'Latvia', flag: '🇱🇻' },
  { code: '+961', iso: 'LB', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+266', iso: 'LS', country: 'Lesotho', flag: '🇱🇸' },
  { code: '+231', iso: 'LR', country: 'Liberia', flag: '🇱🇷' },
  { code: '+218', iso: 'LY', country: 'Libya', flag: '🇱🇾' },
  { code: '+423', iso: 'LI', country: 'Liechtenstein', flag: '🇱🇮' },
  { code: '+370', iso: 'LT', country: 'Lithuania', flag: '🇱🇹' },
  { code: '+352', iso: 'LU', country: 'Luxembourg', flag: '🇱🇺' },
  { code: '+261', iso: 'MG', country: 'Madagascar', flag: '🇲🇬' },
  { code: '+265', iso: 'MW', country: 'Malawi', flag: '🇲🇼' },
  { code: '+60', iso: 'MY', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+960', iso: 'MV', country: 'Maldives', flag: '🇲🇻' },
  { code: '+223', iso: 'ML', country: 'Mali', flag: '🇲🇱' },
  { code: '+356', iso: 'MT', country: 'Malta', flag: '🇲🇹' },
  { code: '+692', iso: 'MH', country: 'Marshall Islands', flag: '🇲🇭' },
  { code: '+222', iso: 'MR', country: 'Mauritania', flag: '🇲🇷' },
  { code: '+230', iso: 'MU', country: 'Mauritius', flag: '🇲🇺' },
  { code: '+52', iso: 'MX', country: 'Mexico', flag: '🇲🇽' },
  { code: '+691', iso: 'FM', country: 'Micronesia', flag: '🇫🇲' },
  { code: '+373', iso: 'MD', country: 'Moldova', flag: '🇲🇩' },
  { code: '+377', iso: 'MC', country: 'Monaco', flag: '🇲🇨' },
  { code: '+976', iso: 'MN', country: 'Mongolia', flag: '🇲🇳' },
  { code: '+382', iso: 'ME', country: 'Montenegro', flag: '🇲🇪' },
  { code: '+212', iso: 'MA', country: 'Morocco', flag: '🇲🇦' },
  { code: '+258', iso: 'MZ', country: 'Mozambique', flag: '🇲🇿' },
  { code: '+95', iso: 'MM', country: 'Myanmar', flag: '🇲🇲' },
  { code: '+264', iso: 'NA', country: 'Namibia', flag: '🇳🇦' },
  { code: '+674', iso: 'NR', country: 'Nauru', flag: '🇳🇷' },
  { code: '+977', iso: 'NP', country: 'Nepal', flag: '🇳🇵' },
  { code: '+31', iso: 'NL', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+505', iso: 'NI', country: 'Nicaragua', flag: '🇳🇮' },
  { code: '+227', iso: 'NE', country: 'Niger', flag: '🇳🇪' },
  { code: '+234', iso: 'NG', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+389', iso: 'MK', country: 'North Macedonia', flag: '🇲🇰' },
  { code: '+47', iso: 'NO', country: 'Norway', flag: '🇳🇴' },
  { code: '+968', iso: 'OM', country: 'Oman', flag: '🇴🇲' },
  { code: '+92', iso: 'PK', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+680', iso: 'PW', country: 'Palau', flag: '🇵🇼' },
  { code: '+970', iso: 'PS', country: 'Palestine', flag: '🇵🇸' },
  { code: '+507', iso: 'PA', country: 'Panama', flag: '🇵🇦' },
  { code: '+675', iso: 'PG', country: 'Papua New Guinea', flag: '🇵🇬' },
  { code: '+595', iso: 'PY', country: 'Paraguay', flag: '🇵🇾' },
  { code: '+51', iso: 'PE', country: 'Peru', flag: '🇵🇪' },
  { code: '+63', iso: 'PH', country: 'Philippines', flag: '🇵🇭' },
  { code: '+48', iso: 'PL', country: 'Poland', flag: '🇵🇱' },
  { code: '+351', iso: 'PT', country: 'Portugal', flag: '🇵🇹' },
  { code: '+974', iso: 'QA', country: 'Qatar', flag: '🇶🇦' },
  { code: '+40', iso: 'RO', country: 'Romania', flag: '🇷🇴' },
  { code: '+7', iso: 'RU', country: 'Russia', flag: '🇷🇺' },
  { code: '+250', iso: 'RW', country: 'Rwanda', flag: '🇷🇼' },
  { code: '+1-869', iso: 'KN', country: 'Saint Kitts & Nevis', flag: '🇰🇳' },
  { code: '+1-758', iso: 'LC', country: 'Saint Lucia', flag: '🇱🇨' },
  { code: '+1-784', iso: 'VC', country: 'Saint Vincent', flag: '🇻🇨' },
  { code: '+685', iso: 'WS', country: 'Samoa', flag: '🇼🇸' },
  { code: '+378', iso: 'SM', country: 'San Marino', flag: '🇸🇲' },
  { code: '+239', iso: 'ST', country: 'Sao Tome & Principe', flag: '🇸🇹' },
  { code: '+966', iso: 'SA', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+221', iso: 'SN', country: 'Senegal', flag: '🇸🇳' },
  { code: '+381', iso: 'RS', country: 'Serbia', flag: '🇷🇸' },
  { code: '+248', iso: 'SC', country: 'Seychelles', flag: '🇸🇨' },
  { code: '+232', iso: 'SL', country: 'Sierra Leone', flag: '🇸🇱' },
  { code: '+65', iso: 'SG', country: 'Singapore', flag: '🇸🇬' },
  { code: '+421', iso: 'SK', country: 'Slovakia', flag: '🇸🇰' },
  { code: '+386', iso: 'SI', country: 'Slovenia', flag: '🇸🇮' },
  { code: '+677', iso: 'SB', country: 'Solomon Islands', flag: '🇸🇧' },
  { code: '+252', iso: 'SO', country: 'Somalia', flag: '🇸🇴' },
  { code: '+27', iso: 'ZA', country: 'South Africa', flag: '🇿🇦' },
  { code: '+82', iso: 'KR', country: 'South Korea', flag: '🇰🇷' },
  { code: '+211', iso: 'SS', country: 'South Sudan', flag: '🇸🇸' },
  { code: '+34', iso: 'ES', country: 'Spain', flag: '🇪🇸' },
  { code: '+94', iso: 'LK', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+249', iso: 'SD', country: 'Sudan', flag: '🇸🇩' },
  { code: '+597', iso: 'SR', country: 'Suriname', flag: '🇸🇷' },
  { code: '+46', iso: 'SE', country: 'Sweden', flag: '🇸🇪' },
  { code: '+41', iso: 'CH', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+963', iso: 'SY', country: 'Syria', flag: '🇸🇾' },
  { code: '+886', iso: 'TW', country: 'Taiwan', flag: '🇹🇼' },
  { code: '+992', iso: 'TJ', country: 'Tajikistan', flag: '🇹🇯' },
  { code: '+255', iso: 'TZ', country: 'Tanzania', flag: '🇹🇿' },
  { code: '+66', iso: 'TH', country: 'Thailand', flag: '🇹🇭' },
  { code: '+670', iso: 'TL', country: 'Timor-Leste', flag: '🇹🇱' },
  { code: '+228', iso: 'TG', country: 'Togo', flag: '🇹🇬' },
  { code: '+676', iso: 'TO', country: 'Tonga', flag: '🇹🇴' },
  { code: '+1-868', iso: 'TT', country: 'Trinidad & Tobago', flag: '🇹🇹' },
  { code: '+216', iso: 'TN', country: 'Tunisia', flag: '🇹🇳' },
  { code: '+90', iso: 'TR', country: 'Turkey', flag: '🇹🇷' },
  { code: '+993', iso: 'TM', country: 'Turkmenistan', flag: '🇹🇲' },
  { code: '+688', iso: 'TV', country: 'Tuvalu', flag: '🇹🇻' },
  { code: '+256', iso: 'UG', country: 'Uganda', flag: '🇺🇬' },
  { code: '+380', iso: 'UA', country: 'Ukraine', flag: '🇺🇦' },
  { code: '+971', iso: 'AE', country: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+1', iso: 'US', country: 'United States', flag: '🇺🇸' },
  { code: '+598', iso: 'UY', country: 'Uruguay', flag: '🇺🇾' },
  { code: '+998', iso: 'UZ', country: 'Uzbekistan', flag: '🇺🇿' },
  { code: '+678', iso: 'VU', country: 'Vanuatu', flag: '🇻🇺' },
  { code: '+379', iso: 'VA', country: 'Vatican City', flag: '🇻🇦' },
  { code: '+58', iso: 'VE', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+84', iso: 'VN', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+967', iso: 'YE', country: 'Yemen', flag: '🇾🇪' },
  { code: '+260', iso: 'ZM', country: 'Zambia', flag: '🇿🇲' },
  { code: '+263', iso: 'ZW', country: 'Zimbabwe', flag: '🇿🇼' },
];

const disposableEmailDomains = [
  'tempmail.com', 'mailinator.com', '10minutemail.com', 'yopmail.com',
  'guerrillamail.com', 'trashmail.com', 'dispostable.com', 'getnada.com',
  'temp-mail.org', 'fakeinbox.com', 'sharklasers.com'
];

function CountrySelect({ selectedCode, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 290 });
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);

  const selectedCountry = countryCodes.find((c) => c.code === selectedCode) || countryCodes[0];

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: Math.max(290, rect.width)
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    }
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        triggerRef.current && !triggerRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = countryCodes.filter(
    (c) =>
      c.country.toLowerCase().includes(search.toLowerCase()) ||
      c.iso.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  return (
    <div className="custom-country-select">
      <button
        ref={triggerRef}
        type="button"
        className="custom-country-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedCountry.flag} {selectedCountry.iso} ({selectedCountry.code})</span>
        <span className="custom-country-arrow">▾</span>
      </button>

      {isOpen && createPortal(
        <div
          ref={dropdownRef}
          className="custom-country-portal-dropdown"
          style={{
            position: 'absolute',
            top: `${dropdownPos.top}px`,
            left: `${dropdownPos.left}px`,
            width: `${dropdownPos.width}px`,
          }}
          data-normal-scroll="true"
        >
          <div className="custom-country-search-wrap">
            <input
              type="text"
              className="custom-country-search"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
          <div
            className="custom-country-list"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {filtered.length === 0 ? (
              <div className="custom-country-empty">No countries found</div>
            ) : (
              filtered.map((c) => (
                <div
                  key={`${c.iso}-${c.code}`}
                  className={`custom-country-option ${c.code === selectedCode ? 'custom-country-option--active' : ''}`}
                  onClick={() => {
                    onChange(c.code);
                    setIsOpen(false);
                    setSearch('');
                  }}
                >
                  <span className="custom-country-option-flag">{c.flag}</span>
                  <span className="custom-country-option-name">{c.country}</span>
                  <span className="custom-country-option-code">({c.code})</span>
                </div>
              ))
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+64');
  const [phone, setPhone] = useState('');
  const [sameWhatsApp, setSameWhatsApp] = useState(true);
  const [whatsappCountryCode, setWhatsappCountryCode] = useState('+64');
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Brand Identity');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message || !phone) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    if (!sameWhatsApp && !whatsappPhone) {
      setStatus({ loading: false, success: false, error: 'Please enter your WhatsApp number.' });
      return;
    }

    // Check disposable email
    const emailDomain = email.split('@')[1]?.toLowerCase();
    if (emailDomain && disposableEmailDomains.includes(emailDomain)) {
      setStatus({ loading: false, success: false, error: 'Temporary or disposable email addresses are not allowed.' });
      return;
    }

    // Basic Phone length validation
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid phone number.' });
      return;
    }

    if (!sameWhatsApp) {
      const cleanWa = whatsappPhone.replace(/\D/g, '');
      if (cleanWa.length < 7 || cleanWa.length > 15) {
        setStatus({ loading: false, success: false, error: 'Please enter a valid WhatsApp number.' });
        return;
      }
    }

    setStatus({ loading: true, success: false, error: '' });

    const fullPhoneNumber = `${countryCode} ${phone.trim()}`;
    const fullWhatsAppNumber = sameWhatsApp
      ? `${countryCode} ${phone.trim()} (Same as Phone)`
      : `${whatsappCountryCode} ${whatsappPhone.trim()}`;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_kyz68uy';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    try {
      if (publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: name,
            from_email: email,
            phone_number: fullPhoneNumber,
            whatsapp_number: fullWhatsAppNumber,
            service: selectedService,
            message: message,
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setStatus({ loading: false, success: true, error: '' });
      setName('');
      setEmail('');
      setPhone('');
      setWhatsappPhone('');
      setSameWhatsApp(true);
      setMessage('');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again or email us directly.' });
    }
  };

  return (
    <ReactFullpage
      scrollingSpeed={850}
      navigation={true}
      navigationPosition="right"
      responsiveWidth={800}
      credits={{ enabled: false }}
      anchors={['contact', 'footer']}
      render={() => (
        <ReactFullpage.Wrapper>
          <section className="section contact-page-section">
            <Navbar scoped />
            <div className="contact-page__container">
              <div className="contact-page__info">
                <h1 className="display">
                  <span style={{ whiteSpace: 'nowrap' }}>Let's Build Something</span><br />
                  <span style={{ color: '#FF5C00' }}>Remarkable.</span>
                </h1>
                <p className="muted">
                  Whether you're launching a startup, refreshing your brand, or scaling your digital presence, we're ready to help.
                </p>
                <div className="contact-page__direct">
                  <a className="button button--outline" href="mailto:hello@vertexstudio.nz">
                    hello@vertexstudio.nz <span className="arrow">↗</span>
                  </a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Send Us a Message</h3>

                {status.success && (
                  <div className="contact-form__alert contact-form__alert--success">
                    ✓ Message sent successfully! We'll get back to you shortly.
                  </div>
                )}

                {status.error && (
                  <div className="contact-form__alert contact-form__alert--error">
                    {status.error}
                  </div>
                )}

                <div className="contact-form__group">
                  <label className="contact-form__label">Service Required</label>
                  <div className="contact-form__pills">
                    {availableServices.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        className={`contact-form__pill ${selectedService === srv ? 'contact-form__pill--active' : ''}`}
                        onClick={() => setSelectedService(srv)}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="contact-form__label">Your Name *</label>
                    <input
                      type="text"
                      className="contact-form__input"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label">Email Address *</label>
                    <input
                      type="email"
                      className="contact-form__input"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">Phone Number *</label>
                  <div className="contact-form__phone-wrap">
                    <CountrySelect
                      selectedCode={countryCode}
                      onChange={setCountryCode}
                    />
                    <input
                      type="tel"
                      className="contact-form__input contact-form__input--phone"
                      placeholder="21 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__checkbox-wrap">
                  <label className="contact-form__checkbox-label">
                    <input
                      type="checkbox"
                      className="contact-form__checkbox"
                      checked={sameWhatsApp}
                      onChange={(e) => setSameWhatsApp(e.target.checked)}
                    />
                    <span>WhatsApp number is the same as Phone number</span>
                  </label>
                </div>

                {!sameWhatsApp && (
                  <div className="contact-form__group">
                    <label className="contact-form__label">WhatsApp Number *</label>
                    <div className="contact-form__phone-wrap">
                      <CountrySelect
                        selectedCode={whatsappCountryCode}
                        onChange={setWhatsappCountryCode}
                      />
                      <input
                        type="tel"
                        className="contact-form__input contact-form__input--phone"
                        placeholder="21 123 4567"
                        value={whatsappPhone}
                        onChange={(e) => setWhatsappPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="contact-form__group">
                  <label className="contact-form__label">Project Details *</label>
                  <textarea
                    className="contact-form__textarea"
                    rows="2"
                    placeholder="Tell us about your goals, timeline, and budget..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="button button--violet contact-form__submit"
                  disabled={status.loading}
                >
                  <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                  <img className="button__arrow-icon" src="/assets/Group 51.svg" alt="" aria-hidden="true" />
                </button>
              </form>
            </div>
          </section>

          <FooterSection />
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

