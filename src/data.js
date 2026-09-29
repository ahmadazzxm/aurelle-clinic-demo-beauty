export const nav = [
  ['Our story', '#'],
  ['Procedures', '#proc'],
  ['Programs', '#programs'],
  ['Results', '#results'],
  ['Journal', '#'],
  ['Contact', '#'],
];

export const programs = ['Face programs', 'Body programs', 'Wellness programs'];

export const procedures = [
  { key: 'face', label: 'Face', title: 'Refine & restore', image: 'tab-face.jpg', pos: 'center 30%', alt: 'Face procedures',
    items: ['Rhinoplasty: Nose reshaping', 'Face lift: The natural lift', 'Blepharoplasty: Eyelid surgery', 'Chin & jawline contouring'] },
  { key: 'skin', label: 'Skin', title: 'Clear, even, luminous', image: 'treatment-laser.jpg', pos: 'center', alt: 'Skin treatments',
    items: ['Fractional CO₂ laser resurfacing', 'Pigmentation & melasma', 'Acne & scar programme', 'Signature Aurelle facial'] },
  { key: 'body', label: 'Body', title: 'Sculpt with precision', image: 'tab-body.jpg', pos: 'center 30%', alt: 'Body procedures',
    items: ['Liposculpture', 'Tummy tuck', 'Non-surgical skin tightening', 'Post-pregnancy programme'] },
  { key: 'injectables', label: 'Injectables', title: 'Subtle, never overdone', image: 'treatment-lip-filler.jpg', pos: 'center', alt: 'Injectable treatments',
    items: ['Anti-wrinkle injections', 'Natural-look lip filler', 'Skin boosters', 'Full-face harmonisation'] },
  { key: 'wellness', label: 'Wellness', title: 'Beauty from within', image: 'treatment-iv.jpg', pos: 'center', alt: 'Wellness treatments',
    items: ['IV vitality drips', 'Hormone balance', 'Longevity check-up', 'Nutrition coaching'] },
];

export const stats = [['20', 'Years'], ['15k+', 'Patients'], ['8', 'Doctors']];

export const team = [
  { name: 'Dr. Nour Haddad', role: 'Dermatology', image: 'dr-nour-haddad.jpg' },
  { name: 'Dr. Lara Khoury', role: 'Injectables', image: 'dr-lara-khoury.jpg' },
  { name: 'Dr. Rami Saab', role: 'Longevity', image: 'dr-rami-saab.jpg' },
];

export const results = [
  { caption: 'Acne · 4 sessions fractional laser', slug: 'acne', label: 'Acne, 4 sessions fractional laser' },
  { caption: 'Lip filler · 1 session', slug: 'lips', label: 'Lip filler, 1 session' },
  { caption: 'Pigmentation · 3 peels', slug: 'pig', label: 'Pigmentation, 3 peels' },
];

export const booking = {
  treatments: ['Laser skin resurfacing', 'Natural-look lip filler', 'IV vitality drip'],
  doctors: ['Dr. Nour Haddad', 'Dr. Karim Aoun', 'Dr. Lara Khoury', 'Dr. Rami Saab'],
  days: [['Tue', 6], ['Wed', 7], ['Thu', 8], ['Fri', 9], ['Sat', 10]],
  slots: [['10:00', false], ['11:00', true], ['12:30', false], ['14:00', false]],
};
