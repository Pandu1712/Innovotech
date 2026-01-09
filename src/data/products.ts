import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'smart-switch',
    name: 'Smart Switch',
    category: 'switches',
    description: 'Step into the future of home automation. Our intelligent ecosystem leverages a powerful trifecta of Wi-Fi, Bluetooth, and Zigbee for unparalleled, always-on connectivity. Your smartphone becomes the command center for your entire home, offering instant access and control 24/7, no matter your location. Elevate your interior with our sleek designs, available in a spectrum of modern colors and bespoke finishes that blend technology and style perfectly.',
    image: 'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948320/Picture7_koqhiu.png',
    features: [
      'Touch Control Technology',
      'Voice Assistant Integration',
      'Energy Monitoring',
      'Remote Access via App',
      'Timer & Scheduling',
      'Overload Protection'
    ],
    categories: [
      {
        id: 'Smart Control',
        name: 'Smart Control',
        description: `Imagine having thepower to transformyour homewith just a touch. Our Smart Panel lets you effortlessly 
manage your world—dim the lights, draw the curtains, check security cameras, greet guests with a video
doorbell and set custom scenes that suit your mood. From smart switches to sensors, every smart device in
your home is now just a tap away. Step into a new realm of convenience, where your home responds to you
like never before`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948320/Picture7_koqhiu.png',
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948314/Picture8_ikcloe.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948320/Picture5_ornmnq.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948321/Picture2_qr4mef.jpg"
         
        ],
        specifications: [
          'Control Panel ',
          'Gateway Switch ',
          'Dimension (LxHxW): 8.6cm x 8.6cm x 3.6cm',
          'WiFi 2.4GHz',
          'Dual connectivity',
          "Customizable scenes and settings"
        ]
      },
      {
        id: 'panels stella series',
        name: 'Panels Stella Series',
        description: `Discover unparalleled homecontrol withour ultra-flexible modern switch. Effortlessly tailor your setup to 
be wireless or wired. Additionally, customize button labels for a personalized touch. Designed with a sleek
metallic finish, our panels come in six stunning colors to complement your style. Discover the perfect fusion of
elegance and technology.`,
        images: [
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948313/Picture12_j9vsgg.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948314/Picture10_echokq.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948314/Picture8_ikcloe.png"

        ],
        specifications: [
          '8.6cm x 8.6cm x 3.9cm',
          'Zigbee for fast, reliable, and secure smart',
          'Tempered Glass Panel',
          'WiFi & Bluetooth',
          'Scene Control',
          "home connectivity with enhanced range and energy efficiency"
        ]
      },
      {
        id: 'Elegora Series',
        name: 'Elegora Series',
        description: `Our premium DALI solutionelevates your space with an integrated power supply, eliminating the 
Tired of the complexity and disruption of traditional automation? Our system is the elegant solution.
It delivers a powerful, luxury smart home experience through an incredibly simple, wire-free setup.
Enjoy sophisticated control over your environment instantly, without a single wire being added or
wall being disturbed. This is seamless home automation as it should be: powerful, invisible, and
designed to complement your space. `,
        images: [
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948313/Picture15_cjy4x5.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948313/Picture13_xggjsw.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948313/Picture14_dzx4zs.jpg",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948313/Picture15_cjy4x5.png"
        ],
        specifications: [
          'Input: 90-250V AC',
          'Maximum Load: 3x1000W',
          'Crystal Glass Finish',
          'Smart Automation',
          'Multi-Device Control'
        ]
      }
    ]
  },
  {
    id: 'smart-light',
    name: 'Smart Light',
    category: 'lighting',
    description: `We believe your environment should support your well-being, and
lighting is a vital part of that. Elysian Lights is not just a product;
it’s a philosophy. Each light is meticulously crafted to be a beautiful
object that enriches your home's aesthetic, while also creating an
ambiance that helps you feel centered, relaxed, and perfectly at ease.
Light has the power to transform a space and a moment. With
Elysian Lights, you can harness that power to shape your world.
From the energy of a bright morning to the calm of a quiet evening,
our lights adapt to your needs and desires. With sophisticated forms
and personalized finishes, each piece is designed not just to light a
room, but to complement your lifestyle and turn everyday moments
into cherished memories.`,
    image: 'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948302/Picture24_bmmvvz.png',
    features: [
      '16 Million Color Options',
      'Adjustable Brightness',
      'Voice Control Ready',
      'Music Sync Mode',
      'Schedule & Timer',
      'Energy Efficient LED'
    ],
    categories: [
      {
        id: 'bulb',
        name: 'Smart COB Lights',
        description: `Don't let their size fool you. Our SmartCOB Lights deliver a powerful, high-intensity beam of light from a
remarkably compact and stylish fixture. Engineered for performance, they provide uncompromised,
consistent brightness that effectively illuminates any area. Thanks to efficient COB technology, you get
this high-level performance with minimal energy use. For those who need clarity, visibility, and style, these
lights are the perfect fit`,
        images: [
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948302/Picture24_bmmvvz.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948307/Picture18_gujhbh.jpg",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948306/Picture21_nhuo26.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948306/Picture22_kvicze.png"

        ],
        specifications: [
          'Dimming: Smooth brightness control (0-100%)',
          'Adjustable color temperature (2700K - 6500K).',
          'Exceptional color rendering for true-to-life lighting.',
          'Equipped with premium COB chips from brands like Bridgelux and Osram for superior performance',
          'Color Temperature: 2700K-6500K'
        ]
      },
      {
        id: 'strip',
        name: 'Smart Spot Light',
        description: `Your home is a living space, and your lighting should be just as dynamic. Our Smart Spotlight allows you
to adapt your interior at a touch. Effortlessly adjust the focus and intensity to set the scene—create a
dramatic evening look, provide clear task lighting, or cast a soft, warm glow. This is intelligent, flexible
lighting designed to enhance your home’s best features and elevate your everyday moments.
`,
        images: [
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948302/Picture24_bmmvvz.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948301/Picture25_jv5kww.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948298/Picture32_mfi35w.png"
        ],
        specifications: [
          'Dimming: Smooth brightness control (0-100%)',
          'Adjustable color temperature (2700K - 6500K).',
          'Exceptional color rendering for true-to-life lighting.',
          'Equipped with premium COB chips from brands like Bridgelux and Osram for superior performance',
          'Color Temperature: 2700K-6500K'
        ]
      },
      {
        id: 'panel',
        name: 'Magnetic Track Light',
        description: `Your home evolves, and now your lighting can too. Our Magnetic Track system is designed for modern living,
offering a truly future-proof solution. As your furniture layout changes, your artwork moves, or your needs
shift from day to night, simply reposition the lights in seconds. This adaptable system ensures your lighting is
never obsolete, providing the perfect blend of contemporary style and long-term flexibility`,
        images: [
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948298/Picture32_mfi35w.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948301/Picture27_ws4hzo.jpg",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948300/Picture28_mgb5vg.png",
          
        ],
        specifications: [
          'Dimming: Smooth brightness control (0-100%)',
          'Adjustable color temperature (2700K - 6500K).',
          'Exceptional color rendering for true-to-life lighting.',
          'Equipped with premium COB chips from brands like Bridgelux and Osram for superior performance',
          'Color Temperature: 2700K-6500K'
        ]
      },
      {
        id: 'panel1',
        name: 'Linear Profiles',
        description: `Experience light in its purest form. Our lights are designed to disappear, leaving behind only a seamless,
uninterrupted line of beautiful illumination. They adapt perfectly to the unique contours of your space—
integrating into coves, under cabinets, or along walls to create an ambient glow from a hidden source.
This energy-efficient solution enhances your smart home by providing a layer of sophisticated, modern
light that makes every corner feel intentional and beautifully lit`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948293/Picture37_uzbua6.png',
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948293/Picture36_rup63i.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948294/Picture35_yybzgv.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948293/Picture37_uzbua6.png"
        ],
        specifications: [
          'Dimming: Smooth brightness control (0-100%)',
          'Adjustable color temperature (2700K - 6500K).',
          'Exceptional color rendering for true-to-life lighting.',
          'Equipped with premium COB chips from brands like Bridgelux and Osram for superior performance',
          'Color Temperature: 2700K-6500K'
        ]
      },
      {
        id: 'panel11',
        name: 'Wall Washer',
        description: `Bathe your living spaces in a smooth, impactful light. Our Wall Washer lights are designed to create a
welcoming and open atmosphere, washing entire surfaces with a consistent, even glow. They are perfect for
making hallways feel wider, accent walls more vibrant, and architectural details pop with depth. Their
modern, sleek design integrates effortlessly into your smart home, giving you a powerful tool to enhance the
scale and style of any room
`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948293/Picture40_i5q3ya.png',
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948293/Picture41_uvipni.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948293/Picture38_khkpx0.png",
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948293/Picture39_zrlydf.png",

        ],
        specifications: [
          'Dimming: Smooth brightness control (0-100%)',
          'Adjustable color temperature (2700K - 6500K).',
          'Exceptional color rendering for true-to-life lighting.',
          'Equipped with premium COB chips from brands like Bridgelux and Osram for superior performance',
          'Color Temperature: 2700K-6500K'
        ]
      }







    ]
  },
  {
    id: 'smart-curtains',
    name: 'Smart Curtains',
    category: 'automation',
    description: `Orchestrate the light in your home, from sunrise to sunset.
Our Smart Curtains sync perfectly with the rhythm of your
day. Schedule them to open gently, welcoming the morning
sun. Have them automatically adjust to block harsh glare,
saving energy. As evening arrives, they'll close to provide
complete privacy and create a warm, inviting atmosphere.
With intuitive control through the Pert App and voice
commands, managing your home's light and privacy has
never been more convenient or graceful.`,
    image: 'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948284/Picture43_peqfhs.png',
    features: [
      'Whisper Quiet Motor',
      'App & Voice Control',
      'Sunrise/Sunset Automation',
      'Remote Operation',
      'Easy Installation',
      'Battery Backup'
    ],
    categories: [
      {
        id: 'American Curtains',
        name: 'American Curtains',
        description: `Take complete command of your environment
with our advanced curtain motor. Beyond its
silent and smooth operation, this system offers
unparalleled control. Manage individual curtains
or entire groups simultaneously through our user
friendly app. For the ultimate smart home, the dry
contact feature allows for seamless integration
with external automation systems. Combined with
built-in obstacle detection for safety, it's the
powerful, intelligent heart of your smart window
treatments, available for both American and
Ripple curtains`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948284/Picture43_peqfhs.png',
          "https://res.cloudinary.com/dfs1es68i/image/upload/v1767948285/Picture42_o5x40b.png",
        ],
        specifications: [
          'Noise Level: <35dB',
          'Max Load: 50kg',
          'Track Length: Up to 6M',
          'Speed: Adjustable',
          'Power: AC adapter or battery'
        ]
      },
      {
        id: 'Curtains Blinds',
        name: 'Curtain Blinds',
        description: `Your home, your light, your rules.
Experience unparalleled control over your
environment with our smart shades. Use a
classic wall switch, a handy remote, or our
powerful smartphone app to adjust your
home's light and privacy from anywhere,
anytime. For ultimate convenience, create
pre-set schedules or integrate them into
your existing smart home system. Enjoy
whisper-quiet, smooth operation and a
durable, stylish design that enhances any
room while improving energy efficiency.

`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948284/Picture44_iqwpp7.png',
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948284/Picture45_yi2zls.png'
        ],
        specifications: [
          'Noise Level: <35dB',
          'Max Load: 50kg',
          'Track Length: Up to 6M',
          'Speed: Adjustable',
          'Power: AC adapter or battery'
        ]
      },

    ]
  },
  {
    id: 'smart-security',
    name: 'Smart Security',
    category: 'security',
    description: `Smart securitybrings peaceofmind in awaythat’spersonal,empowering
and easy to integrate into everyday life. Imaginebeingabletocheckinonyour
home, lock doors or turn on lights with a quicktaponyourphone,nomatter
where you are. It’s not just about protectingpossessions—it’saboutcreating a
space that feels safe and comfortable, tailoredtohowyoulive.Frominstant alerts
to remote control, smart security givesyouthereassurancethatyour home is
secure and adaptable to yourneeds,makinglifesimpler,saferand worry-free`,
    image: 'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948283/Picture46_r7fy3i.jpg',
    features: [
      'HD Video Recording',
      'Motion Detection Alerts',
      'Night Vision',
      'Two-Way Audio',
      'Cloud Storage',
      '24/7 Live Monitoring'
    ],
    categories: [
      {
        id: 'Video Doorbell',
        name: 'Video Doorbell',
        description: `Stay close to what matters most with our Video Door
bell, a smart, subtle guardian for your front door. It’s al
ways on the lookout, sending you instant alerts to your
phone when someone’s at the door, whether it’s a friend
stopping by or a package delivery. The real-time video
and two-way talk let you see and speak to visitors on the
spot, keeping you in control and adding that extra peace
of mind. Stay informed, stay in control and feel safe no
matter the time or place`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948283/Picture47_akbksy.png'
        ],
        specifications: [
          'Screen Quality: 1080 Full HD',
          'PIR Motion detection',
          'Two Way Audio',

        ]
      },
      {
        id: 'Wifi Camera',
        name: '2MP CCTV Camera',
        description: `Ensure your peace of mind with our 2 MP CCTV Cam
era, designed to keep your home secure around the clock.
Whether you’re near or far, stay updated with real-time
monitoring on your smartphone. With a near 360-degree
view and motion detection, you can trust that there are
no blind spots and every corner of your home is covered.
Keep your home safe with instant alerts, easy video
access and continuous monitoring, all at your fingertips.`,
        images: [
          "https://okos.in/cdn/shop/files/1_6b96dc50-8a1f-4ef9-82e1-b10b2b0ce7b7.jpg?v=1735385946"
        ],
        specifications: [
          'View: Near 360 degree view- No blind spot ',
          'Motion detection',
          'Night Vision',

        ]
      },
      {
        id: 'Smart Door',
        name: 'Smart Door Lock',
        description: `Say goodbye to traditional keys and embrace keyless entry, all
managed from your smartphone. Lock and un- lock your
door from anywhere, whether you’re at work, on vacation or
simply across the room. With the ability to share access with
trusted family and friends, you’ll have complete control over
who enters your home. No more worrying about misplaced
keys or unexpected guests — your home’s security is now
always in the palm of your hand.
`,
        images: [
          'https://yaleonline.in/cdn/shop/products/3_81f1fa71-fe33-40c6-afa8-fc7243435f3f.jpg?v=1740809042&width=1946'
        ],
        specifications: [
          'Fingerprint, app, password, RFID, key',
          'Secure relocking after each use',
          'Schedule temporary keys',
          'Track entries in real-time',
          'Built-in for ease of installation'
        ]
      }
    ]
  },
  {
    id: 'smart-accessories',
    name: 'Smart Accessories',
    category: 'accessories',
    description: `simplify your routine and reduce daily
friction. Let a motion sensor light your way as you walk in,
or have a smart plug turn on a lamp at sunset automatically.
These intuitive devices work together, allowing you to
automate tasks, control appliances remotely with your
phone, and create schedules that fit your rhythm. The result
is a more convenient, energy-efficient, and secure home that
gives you back your time and peace of mind`,
    image: 'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948282/Picture55_w2gz8r.png',
    features: [
      'Universal Compatibility',
      'Easy Integration',
      'Wireless Connectivity',
      'Compact Design',
      'Energy Efficient',
      'Plug & Play'
    ],
    categories: [




      {
        id: 'IR Blaster',
        name: 'IR Blaster',
        description: `Control all your devices—TV, AC and more—through
your smartphone or voice commands. Its compact design
fits seamlessly into any room, removing the clutter of
multiple remotes. Smart, easy control is now at your
fingertips, anytime and anywhere`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948282/Picture54_nobapq.png'
        ],
        specifications: [
          'Functionality:Controls infrared devices',
          'Connects through Wi-Fi',

          'Automation engine',
          ':Typically up to 10 meters.'
        ]
      },
      {
        id: 'Smart plug ',
        name: 'Smart Plug',
        description: `Our 16 Amp Smart Plug makes smart control sim- ple
—just plug it in to instantly manage high-power and
everyday devices alike. Gain seamless control over
appliances, lights and electronics right from your
smartphone or with voice commands, putting
convenience at your fingertips.`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948282/Picture55_w2gz8r.png'
        ],
        specifications: [
          'Allows remote control of electrical devices via smar tphone.',
          'Connects through Wi-Fi',

          'Usually 16A',
          'Customizable buttons'
        ]
      },
      {
        id: 'Smart Gateway',
        name: 'Smart Gateway',
        description: `Our Smart Gateways are available for Wi-Fi, Bluetooth,
and Sigmesh connectivity, providing versatile options for
seamless device management. Each gateway enables stable,
reliable communication between Sigmesh-enabled devices,
making automa- tion and control effortless through your
smartphone or smart home system.`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948282/Picture56_vtrc3x.png'
        ],
        specifications: [
          ': Central hub that connects various smart devices',
          'WiFi + Zigbee+ Bluetooth  Mesh Multiple connectivity',
          'WiFi: 2.4GHz',
          'Encryption and secure access controls.'
        ]
      },
      {
        id: 'Motion Sensor',
        name: 'Motion Sensor',
        description: `It detects small objects with high precision, making it
perfect for smart automation and lighting control. It
easily integrates into your system, providing seamless,
real-time motion detection to enhance everyday conve
nience.`,
        images: [
          'https://www.leydenindia.com/image/cache/catalog/pir%20sensor/51QTagK8YRL._AC_SL1209_-550x550.jpg'
        ],
        specifications: [
          ': Detects movement within a specified range to trigger actions.',
          'Connects through Zigbee',
          'Usually around 90° to 180°.',

        ]
      },
      {
        id: 'Door Sensor',
        name: 'Door Sensor',
        description: `A simple, efficient solution for enhancing the security and
automation of your home or office. Easily install- able on
doors, windows or desk drawers, it connects seamlessly to
your smart IoT system, providing re- al-time notifications
and control for added peace of mind.  `,
        images: [
          'https://www.security.org/app/uploads/2020/06/DoorWindow2.jpg'
        ],
        specifications: [
          'Functionality Monitors the opening and closing of doors windows',
          "Connects through Zigbee"
        ]
      },
      {
        id: 'Microwave Sensor Round ',
        name: 'Microwave Sensor',
        description: `ur advanced microwave sensor ensures precise motion
detection using high-frequency electromagnetic waves. With
wide coverage and superior sensitivity, it is ideal for smart
lighting, security systems, and energy-efficient au- tomation
solutions. Designed for reliability, it performs seamlessly in
various indoor environments.`,
        images: [
          'https://res.cloudinary.com/dfs1es68i/image/upload/v1767948281/Picture59_pkhivg.png'
        ],
        specifications: [
          'Functionality Uses microwaves to detect the presence of objects',
          "Field of View 360°."
        ]
      }
    ]
  }
];
