import { useState, useRef, useEffect } from 'react'
import logo from './assets/zoeys-logo.png'
import eateryLogo from './assets/zoeys-eatery-logo.png'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#brands', label: 'Our Brands' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

const SERVICES = [
  { icon: '🍢', title: 'Street Foods', desc: 'Classic Filipino street food favorites like isaw, barbecue, and more, grilled to perfection.' },
  { icon: '🍺', title: 'Ice Cold Drinks & Beers', desc: 'Refreshing beverages and ice-cold beers to pair with your favorite meals and snacks.' },
  { icon: '🍲', title: 'Pulutan Specials', desc: 'Delicious pulutan dishes perfect for your drinking sessions with friends and barkada.' },
  { icon: '🍚', title: 'Silog Meals', desc: 'All-day breakfast silog meals served hot, fast, and satisfying.' },
  { icon: '🍗', title: 'Fried & Grilled', desc: 'Crispy fried chicken, grilled liempo, and other hearty dishes for a heavy appetite.' },
  { icon: '🥡', title: 'Takeout & Delivery', desc: 'Enjoy our signature dishes in the comfort of your home with our convenient takeout.' },
]

const BRANDS = [
  { name: "Zoey's Billiard House", tagline: "Play, Dine & Chill at Zoey's", owner: "Enrique Martinez", logoType: 'billiard', comingSoon: false },
  { name: "Zoey's Eatery & Street Foods", tagline: 'Good food, good mood.', owner: "Cristina Martinez", logoType: 'eatery', comingSoon: false },
]

const STATS = [
  { value: '🍽️', label: 'Budget-Friendly Meals' },
  { value: '🍻', label: 'Ice Cold Beverages' },
  { value: '✨', label: 'Clean & Safe Dining' },
  { value: '7', label: 'Days Open' },
]

const GALLERY_ITEMS = [
  {
    name: 'Ihaw-Ihaw',
    desc: 'Classic Filipino street food favorite, grilled to perfection.',
    image: '/carousel eatery & street foods/Ihaw-Ihaw.jpg'
  },
  {
    name: 'Sisig',
    desc: 'Sizzling sisig — the ultimate pulutan for any occasion.',
    image: '/carousel eatery & street foods/sisig.jpg'
  },
  {
    name: 'Kare-Kare',
    desc: 'Rich and hearty kare-kare, a Filipino classic done right.',
    image: '/carousel eatery & street foods/karekare.jpg'
  },
  {
    name: 'Pancit',
    desc: 'Freshly cooked pancit for a satisfying meal anytime.',
    image: '/carousel eatery & street foods/pansit.jpg'
  },
  {
    name: 'Hungarian Sausage',
    desc: 'Juicy grilled Hungarian sausage, a crowd favorite.',
    image: '/carousel eatery & street foods/hungarian.jpg'
  },
  {
    name: 'Street Foods',
    desc: 'Our special street foods — a must-try treat.',
    image: '/carousel eatery & street foods/Street Foods.jpg'
  },
  {
    name: 'Lechon Kawali',
    desc: 'Crispy and savory lechon kawali to satisfy your cravings.',
    image: '/carousel eatery & street foods/Lechon Kawali.jpg'
  },
]

const ABOUT_VALUES = [
  'Budget-Friendly Meals',
  'Ice Cold Beverages',
  'Clean & Safe Dining',
  'Local Favorites',
]

// ─── Color tokens — Light Pink Theme ────────────────────────────────────────
const C = {
  primary:      '#059669',   // emerald green — headings, accents
  primaryLight: '#34D399',   // lighter mint
  primaryPale:  '#A7F3D0',   // very soft mint
  forestDark:   '#065F46',   // dark forest green
  forestBorder: '#6EE7B7',
  bgLight:      '#F0FDF4',
  bgWhite:      '#FFFFFF',
  cardBorder:   '#A7F3D0',
  gold:         '#10B981',   // mint green buttons
  goldHover:    '#059669',
  heading:      '#064E3B',
  body:         '#374151',
  muted:        '#6B7280',
  navText:      '#059669',
  navBg:        'rgba(255,255,255,0.92)',
  darkBody:     '#ECFDF5',
  darkMuted:    '#6EE7B7',
  placeholderBg:'#F0FDF4',
  placeholderBorder: '#6EE7B7',
  statsBg:      '#F0FDF4',
  statsText:    '#059669',
}

function LogoImage({ size = 48, border = 2 }) {
  const [failed, setFailed] = useState(false)
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    border: `${border}px solid ${C.gold}`,
    objectFit: 'contain',
    flexShrink: 0,
    display: 'block',
    backgroundColor: 'transparent',
  }
  if (failed) {
    return (
      <div style={{ ...style, backgroundColor: C.bgLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: C.gold }}>
        Z
      </div>
    )
  }
  return <img src={logo} alt="Zoey's Billiard House" style={style} onError={() => setFailed(true)} />
}

function EateryLogoImage({ size = 120, border = 4 }) {
  const [failed, setFailed] = useState(false)
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    border: `${border}px solid ${C.gold}`,
    objectFit: 'contain',
    flexShrink: 0,
    display: 'block',
    backgroundColor: 'transparent',
  }
  if (failed) {
    return (
      <div style={{ ...style, backgroundColor: C.bgLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: C.gold }}>
        🍴
      </div>
    )
  }
  return <img src={eateryLogo} alt="Zoey's Eatery & Street Foods" style={style} onError={() => setFailed(true)} />
}

function EateryDecoration() {
  return (
    <div className="float-2" style={{ pointerEvents: 'none', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', opacity: 0.18 }} aria-hidden="true">
      <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="140" r="70" stroke={C.primaryLight} strokeWidth="3" fill={C.primaryPale} opacity="0.6" />
        <circle cx="120" cy="80" r="35" stroke={C.primaryPale} strokeWidth="2" fill={C.bgLight} opacity="0.5" />
        <circle cx="90" cy="200" r="28" stroke={C.primaryPale} strokeWidth="2" fill={C.bgLight} opacity="0.5" />
        <path d="M180 120 Q 200 80 240 100 T 260 160" stroke={C.primaryLight} strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function GalleryCarousel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = current.clientWidth > 768 ? current.clientWidth / 2 : current.clientWidth * 0.8
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div style={{ position: 'relative', margin: '0 -24px' }}>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 24,
          padding: '24px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="hide-scroll"
      >
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              width: 'clamp(280px, 35vw, 420px)',
              scrollSnapAlign: 'center',
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(5, 150, 105, 0.15)',
              aspectRatio: '4/3',
              flexShrink: 0,
            }}
            className="gallery-card"
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
              className="gallery-img"
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '60px 24px 24px',
              background: 'linear-gradient(to top, rgba(6, 78, 59, 0.95) 0%, rgba(6, 78, 59, 0.7) 40%, transparent 100%)',
              color: '#fff',
              transition: 'transform 0.4s ease, opacity 0.4s ease',
            }}
              className="gallery-content">
              <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700, color: '#FFFFFF', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{item.name}</h3>
              <p style={{ margin: 0, fontSize: 14, color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 16 }}>
        <button onClick={() => scroll('left')} aria-label="Previous image" className="gallery-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button onClick={() => scroll('right')} aria-label="Next image" className="gallery-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  )
}

export default function EateryApp({ onSwitchBrand }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Reveal Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    // Active Section Observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -70% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      sectionObserver.observe(section)
    })

    // Scroll to Top + Progress Listener
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setShowScrollTop(scrollTop > 400)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${C.bgWhite} 0%, #F0FDF4 100%)`, fontFamily: "'Poppins', sans-serif", color: C.body }}>

      {/* ── Scroll Progress Bar ── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 4, backgroundColor: 'rgba(167, 243, 208, 0.4)' }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #6EE7B7, #059669, #34D399)',
          boxShadow: '0 0 12px rgba(5, 150, 105, 0.7), 0 0 4px rgba(52, 211, 153, 0.9)',
          transition: 'width 0.1s linear',
          borderRadius: '0 4px 4px 0',
        }} />
      </div>

      {/* ── Navbar ── */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: C.navBg, borderBottom: `1px solid ${C.primaryPale}`, boxShadow: '0 4px 24px rgba(214,51,132,0.10)', backdropFilter: 'blur(12px)' }}>
        <nav style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            <EateryLogoImage size={44} border={2} />
            <span style={{ fontSize: 15, fontWeight: 700, color: C.primary, letterSpacing: '-0.01em' }}>Zoey&apos;s Eatery</span>
          </a>

          {/* Desktop nav */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 28, listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
            className="hamburger"
          >
            <span style={{ display: 'block', height: 2, width: 24, backgroundColor: C.gold, transition: 'transform 0.2s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', height: 2, width: 24, backgroundColor: C.gold, transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', height: 2, width: 24, backgroundColor: C.gold, transition: 'transform 0.2s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: `1px solid ${C.primaryPale}`, backgroundColor: '#FFF0F6', padding: '16px 24px' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}
                    className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    style={{ display: 'block', padding: '10px 0', fontSize: 15, textDecoration: 'none', borderBottom: `1px solid ${C.primaryPale}` }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* ── Hero ── */}
        <section id="home" style={{ position: 'relative', overflow: 'hidden', background: `linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 40%, #F0FDF4 100%)`, paddingTop: 112, paddingBottom: 80, borderBottom: `1px solid ${C.primaryPale}` }}>
          <EateryDecoration />
          <div className="hero-grid" style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: 560 }}>
              <h1 className="reveal" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, color: C.heading, margin: 0 }}>
                Good food, <span className="text-gradient-animate" style={{ WebkitBackgroundClip: 'text' }}>Good mood.</span>
              </h1>
              <p className="reveal reveal-delay-1" style={{ marginTop: 16, fontSize: 18, fontWeight: 600, color: C.primary }}>
                Paltao&apos;s Best Comfort Food
              </p>
              <p className="reveal reveal-delay-2" style={{ marginTop: 10, fontSize: 15, color: C.body, lineHeight: 1.7 }}>
                Satisfy your cravings with our delicious street foods and meals.
              </p>

              <div className="reveal reveal-delay-3" style={{ marginTop: 36, display: 'flex', gap: '12px 16px', flexWrap: 'wrap' }}>
                {[
                  { icon: '🌙', label: 'Open Until 2:00 AM' },
                  { icon: '🍔', label: 'Fresh & Hot Meals' },
                  { icon: '🍹', label: 'Cold Beverages' },
                ].map((badge) => (
                  <span key={badge.label}
                    className="hero-badge"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: C.forestDark, backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: 30, boxShadow: '0 6px 16px rgba(214, 51, 132, 0.08)', border: `1px solid ${C.primaryPale}`, cursor: 'default' }}>
                    <span aria-hidden="true">{badge.icon}</span> {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Animated Food SVG */}
            <div className="reveal reveal-delay-2 hero-ball-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 24 }}>
              <svg className="hero-ball" width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                
                {/* Steaming Bowl Illustration */}
                
                {/* Steam 1 */}
                <path d="M80,80 Q70,60 80,40 T80,10" fill="none" stroke="rgba(5, 150, 105, 0.4)" strokeWidth="6" strokeLinecap="round" className="float-1" />
                {/* Steam 2 */}
                <path d="M110,90 Q120,70 110,40 T110,15" fill="none" stroke="rgba(5, 150, 105, 0.5)" strokeWidth="8" strokeLinecap="round" className="float-2" />
                {/* Steam 3 */}
                <path d="M140,80 Q130,55 140,35 T140,10" fill="none" stroke="rgba(5, 150, 105, 0.3)" strokeWidth="5" strokeLinecap="round" className="float-3" />

                {/* BBQ Skewer 1 */}
                <line x1="160" y1="50" x2="100" y2="120" stroke="#8B4513" strokeWidth="6" strokeLinecap="round" />
                <circle cx="145" cy="65" r="12" fill="#D2691E" />
                <circle cx="130" cy="85" r="12" fill="#D2691E" />
                <circle cx="115" cy="105" r="12" fill="#D2691E" />

                {/* BBQ Skewer 2 */}
                <line x1="60" y1="50" x2="120" y2="120" stroke="#8B4513" strokeWidth="6" strokeLinecap="round" />
                <circle cx="75" cy="65" r="12" fill="#CD853F" />
                <circle cx="90" cy="85" r="12" fill="#CD853F" />
                <circle cx="105" cy="105" r="12" fill="#CD853F" />

                {/* Bowl Back Edge */}
                <ellipse cx="110" cy="120" rx="70" ry="20" fill="#047857" />

                {/* Food Content (Broth/Sauce) */}
                <ellipse cx="110" cy="122" rx="64" ry="16" fill="#F59E0B" />

                {/* Bowl Front Body */}
                <path d="M40,120 C40,180 70,190 110,190 C150,190 180,180 180,120 Z" fill="#064E3B" />
                
                {/* Bowl Pattern / Highlight */}
                <path d="M50,130 C60,170 85,180 110,180 C135,180 160,170 170,130" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" />
                
                {/* Bowl Rim */}
                <ellipse cx="110" cy="120" rx="70" ry="20" fill="none" stroke="#10B981" strokeWidth="6" />
                
              </svg>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" style={{ backgroundColor: C.bgLight, padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'center' }} className="about-grid">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="interactive-logo-wrapper float-1">
                <EateryLogoImage size={280} border={6} />
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: C.forestDark, margin: '0 0 16px' }}>
                About Zoey&apos;s Eatery
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body, margin: 0 }}>
                Welcome to Zoey&apos;s Eatery & Street Foods — your go-to spot for delicious comfort food
                in Paltao, Pulilan. We serve up freshly cooked meals and classic street foods that hit the spot.
                Perfect for a quick bite or relaxing meal with friends and family.
              </p>
              <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ABOUT_VALUES.map((value) => (
                  <li key={value} className="value-item" style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: C.heading }}>
                    <span className="value-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', backgroundColor: C.gold, color: '#FFFFFF', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" style={{ backgroundColor: C.bgWhite, padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: C.forestDark, margin: '0 0 12px' }}>Our Services</h2>
              <p style={{ fontSize: 15, color: C.muted, margin: 0 }}>Everything you need for a great night at the tables</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, maxWidth: 1050, margin: '0 auto' }}>
              {SERVICES.map((service, i) => (
                <article key={service.title} className={`service-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="service-icon-box">
                    <span>{service.icon}</span>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Brands ── */}
        <section id="brands" style={{ backgroundColor: C.bgLight, padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: C.forestDark, margin: '0 0 12px' }}>Our Brands</h2>
              <p style={{ fontSize: 15, color: C.muted, margin: 0 }}>The Zoey family of businesses in Paltao</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
              {BRANDS.map((brand, i) => (
                <article key={brand.name} className={`reveal reveal-delay-${i + 1} brand-card`}
                  onClick={() => { if (brand.logoType === 'billiard') onSwitchBrand('billiard'); }}>
                  {brand.comingSoon && (
                    <span style={{ position: 'absolute', top: 12, right: 12, backgroundColor: C.forestDark, color: '#FFFFFF', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20 }}>
                      Coming Soon
                    </span>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                    <div className="interactive-logo-wrapper">
                      {brand.logoType === 'billiard'
                        ? <LogoImage size={160} border={5} />
                        : <EateryLogoImage size={160} border={5} />
                      }
                    </div>
                  </div>
                  <h3 style={{ marginTop: 16, fontSize: 17, fontWeight: 700, color: C.gold }}>{brand.name}</h3>
                  <p style={{ marginTop: 6, fontSize: 14, color: C.muted }}>{brand.tagline}</p>
                  <p style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: C.primary, backgroundColor: C.bgLight, padding: '4px 12px', borderRadius: 20 }}>Owned By: {brand.owner}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section id="why-us" style={{ background: `linear-gradient(135deg, #FFF0F6 0%, #FCE7F3 100%)`, borderTop: `1px solid ${C.primaryPale}`, borderBottom: `1px solid ${C.primaryPale}`, padding: '64px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <h2 className="reveal" style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: C.heading, margin: '0 0 48px' }}>Why Choose Us</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 32 }}>
              {STATS.map((stat, i) => (
                <div key={stat.label} className={`reveal reveal-delay-${i + 1} stat-card`} style={{ textAlign: 'center' }}>
                  <p className="stat-value" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: C.primary, margin: '0 0 8px' }}>{stat.value}</p>
                  <p style={{ fontSize: 15, color: C.body, margin: 0, fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section id="gallery" style={{ backgroundColor: C.bgWhite, padding: '80px 0', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: C.heading, margin: '0 0 12px' }}>Gallery</h2>
              <p style={{ fontSize: 15, color: C.muted, margin: 0 }}>A glimpse inside Zoey&apos;s Billiard House</p>
            </div>

            <div className="reveal reveal-delay-1">
              <GalleryCarousel />
            </div>

          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" style={{ backgroundColor: C.bgLight, padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: C.forestDark, margin: '0 0 12px' }}>Get in Touch</h2>
              <p style={{ fontSize: 15, color: C.muted, margin: 0 }}>For reservations and bookings, reach us through:</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
              {/* Facebook Card */}
              <div className="contact-card reveal reveal-delay-1" style={{ backgroundColor: C.bgWhite, border: `1px solid ${C.cardBorder}`, boxShadow: '0 6px 18px rgba(5,150,105,0.08)' }}>
                <div className="contact-icon">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 style={{ marginTop: 16, fontSize: 17, fontWeight: 700, color: C.heading }}>Message Us on Facebook</h3>
                <p style={{ marginTop: 8, fontSize: 14, color: C.body, lineHeight: 1.6, flexGrow: 1 }}>Send us a message on our Facebook page for reservations and inquiries.</p>
                <a href="https://www.facebook.com/profile.php?id=100078094314922" target="_blank" rel="noopener noreferrer"
                  style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#1877F2', color: '#FFFFFF', padding: '12px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'all 0.25s ease', boxShadow: '0 4px 14px rgba(24,119,242,0.3)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(24,119,242,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(24,119,242,0.3)' }}>
                  Visit Facebook Page
                </a>
              </div>

              {/* Email Card */}
              <div className="contact-card reveal reveal-delay-2" style={{ backgroundColor: C.bgWhite, border: `1px solid ${C.cardBorder}`, boxShadow: '0 6px 18px rgba(5,150,105,0.08)' }}>
                <div className="contact-icon">
                  <svg width="52" height="52" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 5.1L1.5 18.9C1.5 20.1 2.5 21 3.75 21H7.5V11.25L1.5 6.75z" fill="#4285f4"/>
                    <path d="M22.5 5.1L22.5 18.9C22.5 20.1 21.5 21 20.25 21H16.5V11.25L22.5 6.75z" fill="#34a853"/>
                    <path d="M16.5 11.25V4.5L12 7.875L7.5 4.5V11.25L12 14.625z" fill="#ea4335"/>
                    <path d="M22.5 6.75V5.1c0-.98-.82-1.78-1.8-1.78-.32 0-.64.08-.95.25L16.5 4.5v6.75z" fill="#fbbc04"/>
                    <path d="M1.5 6.75V5.1c0-.98.82-1.78 1.8-1.78.32 0 .64.08.95.25L7.5 4.5v6.75z" fill="#c5221f"/>
                  </svg>
                </div>
                <h3 style={{ marginTop: 16, fontSize: 17, fontWeight: 700, color: C.heading }}>Email Us</h3>
                <p style={{ marginTop: 8, fontSize: 14, color: C.body, lineHeight: 1.6, flexGrow: 1 }}>Send your booking details and we&apos;ll confirm right away.</p>
                <a href="mailto:zoeyallinonestop@gmail.com"
                  style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#EA4335', color: '#FFFFFF', padding: '12px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'all 0.25s ease', boxShadow: '0 4px 14px rgba(234,67,53,0.3)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(234,67,53,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(234,67,53,0.3)' }}>
                  zoeyallinonestop@gmail.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="contact-card reveal reveal-delay-3" style={{ backgroundColor: C.bgWhite, border: `1px solid ${C.cardBorder}`, boxShadow: '0 6px 18px rgba(5,150,105,0.08)' }}>
                <div className="contact-icon" style={{ width: 52, height: 52, borderRadius: 12, backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <h3 style={{ marginTop: 16, fontSize: 17, fontWeight: 700, color: C.heading }}>Call or Text Us</h3>
                <p style={{ marginTop: 8, fontSize: 14, color: C.body, lineHeight: 1.6, flexGrow: 1 }}>Reach out via phone for quick reservations and immediate assistance.</p>
                <a href="tel:09399079574"
                  style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#25D366', color: '#FFFFFF', padding: '12px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'all 0.25s ease', boxShadow: '0 4px 14px rgba(37,211,102,0.3)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(37,211,102,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,211,102,0.3)' }}>
                  0939 907 9574
                </a>
              </div>
            </div>
            <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, color: C.body }}>
                <span aria-hidden="true">📍</span>
                <span>Paltao, Pulilan, Bulacan</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, color: C.body }}>
                <span aria-hidden="true">🕐</span>
                <span>Open Daily: 8:00 AM – 2:00 AM</span>
              </div>
            <div className="reveal reveal-delay-4" style={{ marginTop: 60, borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 32px rgba(5,150,105,0.1)' }}>
              {/* Google Maps Embed - using Paltao, Pulilan, Bulacan */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15421.847525424564!2d120.8407421!3d14.9080275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396556cf9e1d88b%3A0xc07ce9b04f32630!2sPaltao%2C%20Pulilan%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1717904000000!5m2!1sen!2sph" 
                width="100%" 
                height="350" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              <div style={{ padding: '20px 24px', backgroundColor: '#FFFFFF', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, color: C.body, fontWeight: 500 }}>
                  <span aria-hidden="true" style={{ fontSize: 18 }}>📍</span>
                  <span>Paltao, Pulilan, Bulacan</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, color: C.body, fontWeight: 500 }}>
                  <span aria-hidden="true" style={{ fontSize: 18 }}>🕐</span>
                  <span>Open Daily: 8:00 AM – 2:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Rich Footer ── */}
      <footer style={{ background: '#064E3B', color: '#ECFDF5', padding: '64px 0 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, marginBottom: 48 }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <EateryLogoImage size={48} border={0} />
              <span style={{ fontSize: 18, fontWeight: 700, color: '#34D399', letterSpacing: '-0.01em' }}>Zoey&apos;s Eatery</span>
            </div>
            <p style={{ fontSize: 14, color: '#A7F3D0', lineHeight: 1.7, marginBottom: 24, maxWidth: 300 }}>
              Paltao&apos;s premier destination for billiards, relaxation, and great comfort food. We provide top-notch tables and freshly cooked meals.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(52, 211, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', transition: 'all 0.2s', border: '1px solid rgba(52,211,153,0.2)' }} onMouseEnter={e => {e.currentTarget.style.backgroundColor = '#34D399'; e.currentTarget.style.color = '#064E3B'}} onMouseLeave={e => {e.currentTarget.style.backgroundColor = 'rgba(52, 211, 153, 0.1)'; e.currentTarget.style.color = '#34D399'}}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(52, 211, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', transition: 'all 0.2s', border: '1px solid rgba(52,211,153,0.2)' }} onMouseEnter={e => {e.currentTarget.style.backgroundColor = '#34D399'; e.currentTarget.style.color = '#064E3B'}} onMouseLeave={e => {e.currentTarget.style.backgroundColor = 'rgba(52, 211, 153, 0.1)'; e.currentTarget.style.color = '#34D399'}}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 600, color: '#FFFFFF', margin: '0 0 20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Home', 'About', 'Services', 'Gallery'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: '#A7F3D0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#34D399'} onMouseLeave={e => e.currentTarget.style.color = '#A7F3D0'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 600, color: '#FFFFFF', margin: '0 0 20px' }}>Operating Hours</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: '#A7F3D0' }}>
                <span>Monday - Sunday</span>
                <span style={{ fontWeight: 600, color: '#34D399' }}>8:00 AM - 2:00 AM</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: '#A7F3D0', marginTop: 8, paddingTop: 16, borderTop: '1px solid rgba(52,211,153,0.2)' }}>
                <span>Walk-ins</span>
                <span style={{ fontWeight: 600, color: '#FFFFFF' }}>Always Welcome</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(52,211,153,0.2)', paddingTop: 24, textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(167,243,208,0.7)' }}>
            © {new Date().getFullYear()} Zoey&apos;s Billiard House & Eatery. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1023px) { .desktop-nav { display: none !important; } }
        @media (min-width: 1024px) { .hamburger { display: none !important; } }
      `}</style>

      {/* ── Back to Top Button ── */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          width: 52,
          height: 52,
          borderRadius: '50%',
          backgroundColor: C.primary,
          color: '#FFFFFF',
          border: 'none',
          boxShadow: '0 8px 24px rgba(214, 51, 132, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 99,
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.goldHover; e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.primary; e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

    </div>
  )
}