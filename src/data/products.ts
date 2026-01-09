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


    
  },





  {
id: 'Smart Tables',
  name: 'Smart Tables',
  category: 'automation',
  description: `Transform the way you work, dine, and relax with our
Smart Tables. Designed to adapt intelligently to your
lifestyle, these tables offer smart height adjustment,
integrated power solutions, and seamless automation.
Whether at home, office, or commercial spaces, Smart
Tables enhance comfort, productivity, and elegance.
Control everything effortlessly using the Pert App
or voice commands for a truly modern experience.`,
  image: 'https://m.media-amazon.com/images/I/81pXqxDGDIL.jpg',
  features: [
    'Smart Height Adjustment',
    'App & Voice Control',
    'Wireless Charging Surface',
    'Touch Control Panel',
    'Smooth & Silent Operation',
    'Built-in Power Backup',
    'Smart Home Integration'
  ],
  categories: [
    {
      id: 'Smart Office Table',
      name: 'Smart Office Table',
      description: `This advanced Smart Office Table is engineered for
modern homes and professional workspaces. It offers
intelligent height adjustment, built-in wireless charging,
and smart surface controls for enhanced productivity.
Users can control individual table functions or manage
multiple tables together using a simple mobile app.
With automation compatibility and built-in safety
mechanisms, it delivers reliable performance with a
sleek, premium finish.`,
      images: [
        'https://media.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/homecentre/1000014628238-1000014628237_01-2100.jpg',
        "https://m.media-amazon.com/images/I/71eMIgixSVL._AC_UF894,1000_QL80_.jpg"
      ],
      specifications: [
        'Noise Level: <35dB',
        'Max Load Capacity: 80kg',
        'Height Adjustment Range: Customizable',
        'Control Options: App, Touch, Voice',
        'Power Supply: AC adapter or battery'
      ]
    },
    {
      id: 'Smart Dining Table',
      name: 'Smart Dining Table',
      description: `Designed for flexibility and everyday comfort,
this Smart Dining Table adapts effortlessly to various
activities such as dining, working, or entertaining.
Adjust table height, activate integrated charging, or
control ambient lighting using a remote or mobile app.
Create preset modes for different occasions and integrate
seamlessly with your smart home system. Its durable build,
silent operation, and elegant design enhance any space.`,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJucFJkn5xmqdlpP6Dc9tfmtNU_980nooQlQ&s',
        "https://i.pinimg.com/736x/22/ff/0e/22ff0ec5759a688f0a025d7b71fd39f4.jpg"
      ],
      specifications: [
        'Noise Level: <35dB',
        'Max Load Capacity: 80kg',
        'Height Adjustment: Smooth & Silent',
        'Preset Modes: Dining, Work, Relax',
        'Power Supply: AC adapter or battery'
      ]
    },
    {
      id: 'Smart Coffee Table',
      name: 'Smart Coffee Table',
      description: `Perfect for modern living rooms, the Smart Coffee
Table combines elegance with intelligent functionality.
Featuring wireless charging, touch controls, and smart
storage options, it enhances convenience during daily
use or social gatherings. Control lighting and charging
features via app or touch panel for a seamless experience.
Its compact design and premium materials make it both
functional and stylish.`,
      images: [
        'https://www.realestate.com.au/news-image/w_462,h_627/v1660073318/news-lifestyle-content-assets/wp-content/production/7-e1567662558711.jpg?_i=AA',
        "https://m.media-amazon.com/images/I/81abkDFcRLL.jpg",
        "https://thegreytechnologies.com/cdn/shop/products/smart-coffee-table-5_2000x.jpg?v=1612197451"
      ],
      specifications: [
        'Noise Level: <30dB',
        'Max Load Capacity: 60kg',
        'Wireless Charging: Supported',
        'Control Options: Touch & App',
        'Power Supply: AC adapter'
      ]
    },
    {
      id: 'Smart Conference Table',
      name: 'Smart Conference Table',
      description: `Built for corporate and commercial environments,
the Smart Conference Table delivers advanced technology
for seamless meetings and collaboration. It includes
integrated power outlets, wireless charging, cable
management, and smart automation controls. Manage
lighting, power, and table functions centrally through
an app or automation system. Its robust construction
and premium finish make it ideal for boardrooms.`,
      images: [
        'https://5.imimg.com/data5/SELLER/Default/2021/6/EZ/YN/SL/21996195/smart-conference-table.png',
        "https://gesab.com/wp-content/uploads/2016/09/noticia-salas-reunion.jpg",
        "https://vibeus-cdn.vibe.pub/blog/LMHXWIT7cyeWKsRamo4bHddPYpsJz4jD.png"
      ],
      specifications: [
        'Noise Level: <40dB',
        'Max Load Capacity: 120kg',
        'Integrated Power & Data Ports',
        'Centralized App Control',
        'Power Supply: AC adapter'
      ]
    }
  ]
},




{


  
  id: 'Automatic Gates',
  name: 'Automatic Gates',
  category: 'automation',
  description: `Enhance security, convenience, and style with our
Automatic Gate solutions. Designed for residential,
commercial, and industrial use, these gates provide
smooth, reliable, and intelligent access control.
Schedule opening and closing, manage entry remotely,
and integrate seamlessly with your smart home or
security system. With app and voice control, managing
your property access has never been more secure
or effortless.`,
  image: 'https://gategurus.com.au/wp-content/uploads/2023/08/automatic-sliding-gate-bg-1.jpg',
  features: [
    'Heavy-Duty Motor System',
    'App & Voice Control',
    'Remote Access Operation',
    'Obstacle Detection Safety',
    'Weather Resistant Design',
    'Battery Backup Support'
  ],
  categories: [
    {
      id: 'Automatic Sliding Gates',
      name: 'Automatic Sliding Gates',
      description: `Automatic Sliding Gates are ideal for properties
with limited space and high security requirements.
Powered by a robust motor, they offer smooth and
silent horizontal movement with precise control.
Operate individual gates or multiple access points
using a mobile app, remote, or access control system.
With obstacle detection and smart automation support,
they deliver reliable performance with enhanced safety
and a modern, professional appearance.`,
      images: [
        'https://cpimg.tistatic.com/5423755/b/4/automatic-sliding-gates.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2023/7/327768121/DI/MQ/AW/22592413/automatic-gate-system.jpg'
      ],
      specifications: [
        'Noise Level: <40dB',
        'Max Gate Weight: 800kg',
        'Gate Length Support: Up to 8M',
        'Opening Speed: Adjustable',
        'Power Supply: AC adapter or battery'
      ]
    },
    {
      id: 'Automatic Swing Gates',
      name: 'Automatic Swing Gates',
      description: `Automatic Swing Gates are designed for elegance
and convenience in residential and commercial spaces.
These gates open smoothly inward or outward using
powerful actuators and smart control systems.
Operate via remote, wall switch, or mobile app, and
schedule automatic opening times for added comfort.
With silent operation, durable construction, and
smart safety features, they combine security with
aesthetic appeal.`,
      images: [
        'https://livfuture.com/wp-content/uploads/2023/12/Swing-gate-1-1.webp',
        'https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/20220912065350-d74c9157-14f2-41de-8b5e-472630e27762.jpg'
      ],
      specifications: [
        'Noise Level: <40dB',
        'Max Gate Weight: 500kg per leaf',
        'Opening Angle: Up to 120°',
        'Operation Mode: Smooth & Silent',
        'Power Supply: AC adapter or battery'
      ]
    }
  ]
},



{
  id: 'Rolling Shutter Motor',
  name: 'Rolling Shutter Motor',
  category: 'automation',
  description: `Secure and automate your spaces with our Rolling
Shutter Motor solutions. Designed for residential,
commercial, and industrial applications, these motors
deliver powerful, smooth, and reliable shutter operation.
Automate opening and closing schedules, control remotely,
and integrate effortlessly with your smart home or
security system. With app and voice control support,
managing shutters has never been more efficient,
secure, or convenient.`,
  image: 'https://5.imimg.com/data5/GLADMIN/Default/2022/7/MU/BK/GM/86648/rolling-shutter-motor-500x500.jpg',
  features: [
    'Heavy-Duty Motor Performance',
    'App & Voice Control',
    'Remote & Switch Operation',
    'Built-in Safety Brake',
    'Thermal Overload Protection',
    'Battery Backup Support'
  ],
  categories: [
    {
      id: 'Residential Rolling Shutter Motor',
      name: 'Residential Rolling Shutter Motor',
      description: `Designed for homes and small commercial spaces,
this Residential Rolling Shutter Motor ensures smooth,
quiet, and efficient shutter movement. It supports
remote control, wall switch operation, and smart app
integration for everyday convenience. With built-in
safety protection and compact design, it provides
reliable performance while maintaining a clean,
aesthetic appearance.`,
      images: [
        'https://fpimages.withfloats.com/actual/664db154292f8dc7a920df3a.jpeg'
      ],
      specifications: [
        'Noise Level: <40dB',
        'Max Load Capacity: 300kg',
        'Shutter Height Support: Up to 4M',
        'Operation Speed: Adjustable',
        'Power Supply: AC adapter or battery'
      ]
    },
    {
      id: 'Industrial Rolling Shutter Motor',
      name: 'Industrial Rolling Shutter Motor',
      description: `Built for heavy-duty commercial and industrial
applications, this Industrial Rolling Shutter Motor
delivers high torque and long-lasting durability.
It supports large shutters with smooth and stable
operation under continuous usage. Control shutters
via remote, control panel, or automation system,
and benefit from advanced safety features such as
overload protection and emergency manual operation.`,
      images: [
        'https://5.imimg.com/data5/SELLER/Default/2023/6/317112270/MG/HR/MJ/23158049/rolling-shutter-motor-500x500.jpg'
      ],
      specifications: [
        'Noise Level: <45dB',
        'Max Load Capacity: 800kg',
        'Shutter Height Support: Up to 8M',
        'Duty Cycle: Continuous Operation',
        'Power Supply: AC adapter with backup'
      ]
    }
  ]
},


];
