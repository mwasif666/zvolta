const commonSoftwareFeatures = [
  ["QR start", "Users scan the charger and start from the app"],
  ["Live status", "See if the charger is available, in use, or offline"],
  ["Usage tracking", "See charging sessions and energy used"],
  ["Payment handling", "Users pay through the app"],
  ["Price control", "Set your own charging price"],
  ["Timing control", "Choose when the charger is available"],
  ["Access control", "Keep it private, shared, or public"],
  ["Dashboard", "Track usage, earnings, and charger activity"],
];

const safetyFeatures = [
  [
    "RCBO protection",
    "Helps prevent current leakage and electric shock, even in rain",
  ],
  ["MBO protection", "Helps protect the charger from overload issues"],
  [
    "Overvoltage protection",
    "Helps protect the charger when voltage goes too high",
  ],
  ["Surge protection", "Helps protect the charger from sudden voltage spikes"],
  ["Safe AC charging", "Reliable charging for daily use"],
  ["2 year local warranty", "Local support in Pakistan"],
];

const importedComparisonRows = [
  ["Smart software", "Included", "Usually not included"],
  ["App based charging", "Included", "Usually not included"],
  ["QR code start", "Included", "Usually not included"],
  ["Payment handling", "Included", "Usually manual"],
  ["Usage tracking", "Included", "Usually not available"],
  ["Remote control", "Included", "Usually not available"],
  ["Public listing on app", "Available", "Usually not available"],
  ["Host earning support", "Included", "Usually not available"],
  ["RCBO protection", "Included", "Often charged separately"],
  ["MBO protection", "Included", "Often charged separately"],
  ["Overvoltage protection", "Included", "Often charged separately"],
  ["Surge protection", "Included", "Often charged separately"],
  ["Standard installation", "Free", "Usually charged separately"],
  ["Earthing", "Charged only if needed", "Often charged separately or unclear"],
  ["Warranty", "2 year local warranty", "Often limited or unclear"],
  ["Local support", "Included", "Often limited"],
];

const installationItems = [
  ["Standard installation", "Free"],
  ["Charger setup", "Free"],
  ["App and dashboard setup", "Free"],
  ["Safety setup", "Included"],
  ["Earthing work", "Charged only if needed"],
];

const setupSteps = [
  ["1. Share your details", "Tell us where you want the charger"],
  ["2. Site check", "We check space, power, and earthing needs"],
  ["3. Installation", "We install the charger"],
  ["4. Software setup", "We connect the app and dashboard"],
  ["5. Go live", "You use it privately, share it, or open it to the public"],
];

const compareChargers = [
  ["3kW charger", "Homes, bikes, scooters, small spaces", "3kW"],
  ["7kW charger", "Homes, offices, apartments, daily use locations", "7kW"],
  ["22kW charger", "Busy commercial spaces and high traffic locations", "22kW"],
];

const useTypes = [
  ["Private", "Use it only for your own EV"],
  ["Shared", "Allow family, tenants, staff, or selected users"],
  ["Public", "Open it on the Zvolta app so nearby EV users can find it"],
];

const installOptions = [
  ["Vertical wall mount", "Homes, apartments, offices"],
  ["Horizontal wall mount", "Tight wall spaces"],
  ["Square wall layout", "Clean and compact setups"],
  ["Vertical standing setup", "Parking spaces without a good wall"],
  ["Horizontal hanging setup", "Covered parking areas"],
  [
    "Vertical hanging setup",
    "Custom spaces where wall or floor mounting is not ideal",
  ],
];

export const chargerSpecs = {
  "3kw": {
    power: "3kW",
    pageId: "3kw-charger",
    path: "/3kw-charger",
    seoTitle: "3kW EV Charger in Pakistan | Zvolta Smart AC Charger",
    seoDescription:
      "Install a Zvolta 3kW smart EV charger for homes, EV bikes, scooters, apartments, small offices, and low use locations. Includes smart software, app control, free standard installation, built-in safety features, 1 year local warranty, and 0% installment options.",
    heroTitle: "3kW smart EV charger for homes, bikes, and smaller spaces",
    heroBody:
      "The Zvolta 3kW charger is a safe and simple AC charger for homes, apartments, EV bikes, scooters, small offices, and low use locations.",
    heroSupport:
      "Use it for yourself, share it with selected people, or open it to the public and earn from charging sessions.",
    heroBullets: [
      "PKR 75,000 full price",
      "0% interest installment plan available for 12 months",
      "Free standard installation included",
      "Earthing cost only applies if your site needs earthing work",
    ],
    quickDetails: [
      ["Best for", "Homes, apartments, EV bikes, scooters, small offices"],
      ["Charger type", "Smart AC charger"],
      ["Power", "3kW"],
      ["Price", "PKR 75,000"],
      ["Installation", "Free standard installation"],
      ["Earthing", "Charged only if needed"],
      ["Warranty", "1 year local warranty"],
      ["Software", "Zvolta app and dashboard included"],
      ["Payments", "App based payments included"],
      ["Use type", "Private, shared, or public"],
      ["Revenue sharing", "No revenue sharing with Zvolta"],
    ],
    whoTitle: "Who should choose this charger",
    whoBody:
      "The 3kW charger is best for places where vehicles can stay parked for some time. It is a good fit for smaller spaces, daily charging, and lower traffic locations.",
    bestFor: [
      "Homes",
      "Apartment buildings",
      "EV bike parking",
      "Scooter charging",
      "Small offices",
      "Small shops",
      "Cafes",
      "Residential properties",
      "Low traffic parking spaces",
      "Sites with solar installed",
    ],
    recommendationCta: "Check if 3kW is right for you",
    useTypes,
    useSupport:
      "You can keep it private most of the time and open it to public users whenever you want.",
    softwareIntro:
      "This is not just a basic charger. The 3kW charger comes with Zvolta software, so you can manage charging, users, pricing, payments, and usage from the app or dashboard.",
    installationOptions: installOptions,
    technicalSpecs: [
      ["Product", "Zvolta 3kW Smart AC Charger"],
      ["Rated power", "3kW"],
      ["Charger type", "AC charger"],
      ["Best use", "Homes, apartments, EV bikes, scooters, small offices"],
      ["Power support", "Single phase"],
      ["Connector", "Type 2 compatible charging standard"],
      ["Software", "Zvolta app and dashboard"],
      ["QR code start", "Yes"],
      ["App based payments", "Yes"],
      ["Remote management", "Yes"],
      ["Usage tracking", "Yes"],
      ["Price control", "Yes"],
      ["Timing control", "Yes"],
      ["Access control", "Private, shared, or public"],
      ["Safety protection", "RCBO, MBO, overvoltage protection"],
      ["Warranty", "1 year local warranty"],
      ["Installation", "Free standard installation"],
      ["Earthing", "Charged only if needed"],
      ["Add on modules", "Available at 50% of charger price"],
      ["Support", "Local Zvolta support"],
    ],
    safetyFeatures: [
      [
        "RCBO protection",
        "Helps prevent current leakage and electric shock, even in rain",
      ],
      ["MBO protection", "Helps protect the charger from overload issues"],
      [
        "Overvoltage protection",
        "Helps protect the charger when voltage goes too high",
      ],
      ["Safe AC charging", "Reliable charging for daily use"],
      ["1 year local warranty", "Local support in Pakistan"],
    ],
    importedComparisonRows: [
      ["Smart software", "Included", "Usually not included"],
      ["App based charging", "Included", "Usually not included"],
      ["QR code start", "Included", "Usually not included"],
      ["Payment handling", "Included", "Usually manual"],
      ["Usage tracking", "Included", "Usually not available"],
      ["Remote control", "Included", "Usually not available"],
      ["Public listing on app", "Available", "Usually not available"],
      ["Host earning support", "Included", "Usually not available"],
      ["RCBO protection", "Included", "Often charged separately"],
      ["MBO protection", "Included", "Often charged separately"],
      ["Overvoltage protection", "Included", "Often charged separately"],
      ["Standard installation", "Free", "Usually charged separately"],
      ["Earthing", "Charged only if needed", "Often charged separately or unclear"],
      ["Warranty", "1 year local warranty", "Often limited or unclear"],
      ["Local support", "Included", "Often limited"],
    ],
    pricing: [
      ["3kW charger", "PKR 75,000"],
      ["Standard installation", "Free"],
      ["Built-in safety features", "Free"],
      ["Zvolta software", "Included"],
      ["App and dashboard setup", "Included"],
      ["Add on module", "50% of charger price"],
      ["Earthing", "Only if required"],
      ["Installment plan", "0% interest for 12 months"],
    ],
    goodFor: [
      [
        "Good for home users",
        "Use the charger for your own EV and track your charging. You can also open it to public users through the Zvolta app during selected hours.",
        "Get a home setup",
      ],
      [
        "Good for small businesses",
        "Use the charger as a service for visitors, customers, staff, or tenants. Good for cafes, offices, small shops, apartments, and coworking spaces.",
        "Get a business setup",
      ],
      [
        "Good for solar powered sites",
        "If your site has solar, the 3kW charger can help you use your available power better.",
        "Talk to our team",
      ],
    ],
    leadTitle: "Not sure if 3kW is enough?",
    leadSiteTypes: [
      "Home",
      "Apartment",
      "Office",
      "Shop or cafe",
      "Parking space",
      "Other",
    ],
    faqs: [
      [
        "What is a 3kW EV charger?",
        "A 3kW EV charger is a small AC charger for daily EV charging. It is good for homes, EV bikes, scooters, apartments, and low use locations.",
      ],
      [
        "Is the 3kW charger good for EV bikes?",
        "Yes. It is a good option for EV bikes, scooters, and smaller EVs.",
      ],
      [
        "Can I install it at home?",
        "Yes. You can install it at home and use it privately.",
      ],
      [
        "Can I earn from my home charger?",
        "Yes. You can open your charger to public users through the Zvolta app whenever you want.",
      ],
      [
        "Can I keep it private?",
        "Yes. You can keep it private, share it with selected users, or open it to the public.",
      ],
      [
        "Is standard installation free?",
        "Yes. Standard installation is free. If your site needs earthing work, only the earthing cost will apply.",
      ],
      [
        "What is earthing?",
        "Earthing is a safety setup that sends extra current safely into the ground. It helps protect people and equipment.",
      ],
      [
        "Does the charger have safety protection?",
        "Yes. It includes RCBO, MBO, and overvoltage protection.",
      ],
      [
        "Do I have to pay extra for safety features?",
        "No. Zvolta includes these safety features in the charger price.",
      ],
      [
        "Does the charger come with software?",
        "Yes. The charger comes with Zvolta app and dashboard support.",
      ],
      [
        "Can users pay through the app?",
        "Yes. Users can pay through the Zvolta app.",
      ],
      ["Can I set my own price?", "Yes. You can set your own charging price."],
      [
        "Can I choose charger timings?",
        "Yes. You can choose when the charger is available.",
      ],
      [
        "Does Zvolta take revenue sharing?",
        "No. You keep 100% of your earnings. There is no revenue sharing with Zvolta.",
      ],
      [
        "Can I add more chargers later?",
        "Yes. You can add more chargers or connect add on modules when demand grows.",
      ],
      [
        "What is included in PKR 75,000?",
        "The 3kW charger, built-in safety features, Zvolta software, app support, dashboard support, and free standard installation are included. Earthing is charged only if needed.",
      ],
    ],
    finalTitle: "Start with a 3kW smart charger.",
    finalBody:
      "Use it for yourself, share it with selected people, or open it for public charging and earn from your space.",
  },
  "7kw": {
    power: "7kW",
    pageId: "7kw-charger",
    path: "/7kw-charger",
    seoTitle:
      "7kW EV Charger in Pakistan | Zvolta Smart AC Charger for Homes, Offices and Apartments",
    seoDescription:
      "Install a Zvolta 7kW smart EV charger in Pakistan for homes, apartments, offices, cafes, coworking spaces, and daily use locations. Includes smart software, app control, free standard installation, built-in safety features, 2 year local warranty, and 0% installment options.",
    heroTitle:
      "7kW smart EV charger for homes, offices, and daily use locations",
    heroBody:
      "The Zvolta 7kW charger is a safe and smart AC charger for places that need steady everyday charging.",
    heroSupport:
      "It is a strong fit for homes, offices, apartments, coworking spaces, cafes, small commercial sites, and locations where people park for some time.",
    heroBullets: [
      "0% interest installment plan available for 12 months",
      "Free standard installation included",
      "Earthing cost only applies if your site needs earthing work",
      "Works on single phase power",
    ],
    quickDetails: [
      [
        "Best for",
        "Homes, offices, apartments, cafes, coworking spaces, daily use locations",
      ],
      ["Charger type", "Smart AC charger"],
      ["Power", "7kW"],
      ["Power support", "Single phase"],
      ["Installation", "Free standard installation"],
      ["Earthing", "Charged only if needed"],
      ["Warranty", "2 year local warranty"],
      ["Software", "Zvolta app and dashboard included"],
      ["Payments", "App based payments included"],
      ["Use type", "Private, shared, or public"],
      ["Revenue sharing", "No revenue sharing with Zvolta"],
    ],
    whoTitle: "Who should choose this charger",
    whoBody:
      "The 7kW charger is best if you want more charging power than 3kW, but do not need a large commercial setup. It is a good middle option for daily charging and regular use.",
    bestFor: [
      "Homes with cars",
      "Apartment buildings",
      "Office parking",
      "Coworking spaces",
      "Cafes and restaurants",
      "Small commercial properties",
      "Showrooms",
      "Employee parking",
      "Customer parking",
      "Sites with solar installed",
    ],
    recommendationCta: "Check if 7kW is right for you",
    balanceTitle: "What makes 7kW a good balance",
    balanceBody:
      "The 7kW charger is made for people who want a stronger charger without making the setup too complicated. It works on single phase power, which makes it easier to install in many homes, offices, and small commercial spaces.",
    useTypes,
    useSupport:
      "You can keep it private during some hours and make it public during other hours.",
    softwareIntro:
      "The Zvolta 7kW charger comes with Zvolta software, so you can control charging, users, pricing, payments, timing, and usage from the app or dashboard.",
    installationOptions: installOptions.map((row) =>
      row[0] === "Vertical wall mount"
        ? ["Vertical wall mount", "Homes, offices, apartments"]
        : row,
    ),
    technicalSpecs: [
      ["Product", "Zvolta 7kW Smart AC Charger"],
      ["Rated power", "7kW"],
      ["Charger type", "AC charger"],
      [
        "Best use",
        "Homes, offices, apartments, cafes, coworking spaces, daily use locations",
      ],
      ["Power support", "Single phase"],
      ["Connector", "Type 2 compatible charging standard"],
      ["Software", "Zvolta app and dashboard"],
      ["QR code start", "Yes"],
      ["App based payments", "Yes"],
      ["Remote management", "Yes"],
      ["Usage tracking", "Yes"],
      ["Price control", "Yes"],
      ["Timing control", "Yes"],
      ["Access control", "Private, shared, or public"],
      ["Safety protection", "RCBO, MBO, overvoltage, surge protection"],
      ["Warranty", "2 year local warranty"],
      ["Installation", "Free standard installation"],
      ["Earthing", "Charged only if needed"],
      ["Add on modules", "Available at 50% of charger price"],
      ["Support", "Local Zvolta support"],
    ],
    pricing: [
      ["7kW charger", "Contact Zvolta for latest price"],
      ["Standard installation", "Free"],
      ["Built-in safety features", "Free"],
      ["Zvolta software", "Included"],
      ["App and dashboard setup", "Included"],
      ["Add on module", "50% of charger price"],
      ["Earthing", "Only if required"],
      ["Installment plan", "0% interest for 12 months"],
    ],
    goodFor: [
      [
        "Good for home users",
        "Use the 7kW charger for your own EV car, bike, or scooter. You can track your charging and manage everything from the app.",
        "Get a home setup",
      ],
      [
        "Good for apartments",
        "The dashboard helps apartment buildings track usage, earnings, access, and charger status for residents and visitors.",
        "Get an apartment setup",
      ],
      [
        "Good for offices and coworking spaces",
        "Use it as an employee benefit, a paid service, or a useful feature for visitors.",
        "Get an office setup",
      ],
      [
        "Good for cafes, shops, and small businesses",
        "If people already spend time at your location, a 7kW charger can give them one more reason to visit and stay.",
        "Get a business setup",
      ],
      [
        "Good for solar powered sites",
        "If your site has solar, the 7kW charger can help you use your available power better.",
        "Talk to our team",
      ],
    ],
    leadTitle: "Not sure if 7kW is right for you?",
    leadSiteTypes: [
      "Home",
      "Apartment",
      "Office",
      "Coworking space",
      "Cafe or restaurant",
      "Parking space",
      "Other",
    ],
    faqs: [
      [
        "What is a 7kW EV charger?",
        "A 7kW EV charger is an AC charger for daily EV charging. It is stronger than a 3kW charger and works well for homes, offices, apartments, cafes, and regular use locations.",
      ],
      [
        "Is the 7kW charger good for EV cars?",
        "Yes. It is a good option for daily EV car charging.",
      ],
      [
        "Does the 7kW charger work on single phase?",
        "Yes. The Zvolta 7kW charger can work on single phase power.",
      ],
      [
        "Can I install it at home?",
        "Yes. You can install it at home and use it privately.",
      ],
      [
        "Can I install it at an office or apartment building?",
        "Yes. It is a good option for offices, apartments, coworking spaces, and shared parking areas.",
      ],
      [
        "Can I earn from this charger?",
        "Yes. You can open your charger to public users through the Zvolta app whenever you want.",
      ],
      [
        "Can I keep it private?",
        "Yes. You can keep it private, share it with selected users, or open it to the public.",
      ],
      [
        "Is standard installation free?",
        "Yes. Standard installation is free. If your site needs earthing work, only the earthing cost will apply.",
      ],
      [
        "What is earthing?",
        "Earthing is a safety setup that sends extra current safely into the ground. It helps protect people and equipment.",
      ],
      [
        "Does the charger have safety protection?",
        "Yes. It includes RCBO, MBO, overvoltage, and surge protection.",
      ],
      [
        "Do I have to pay extra for safety features?",
        "No. Zvolta includes these safety features in the charger price.",
      ],
      [
        "Does the charger come with software?",
        "Yes. The charger comes with Zvolta app and dashboard support.",
      ],
      [
        "Can users pay through the app?",
        "Yes. Users can pay through the Zvolta app.",
      ],
      ["Can I set my own price?", "Yes. You can set your own charging price."],
      [
        "Can I choose charger timings?",
        "Yes. You can choose when the charger is available.",
      ],
      [
        "Does Zvolta take revenue sharing?",
        "No. You keep 100% of your earnings. There is no revenue sharing with Zvolta.",
      ],
      [
        "Can I add more chargers later?",
        "Yes. You can add more chargers or connect add on modules when demand grows.",
      ],
      [
        "What is included with the 7kW charger?",
        "The 7kW charger, built-in safety features, Zvolta software, app support, dashboard support, and free standard installation are included. Earthing is charged only if needed.",
      ],
    ],
    finalTitle: "Start with a 7kW smart charger.",
    finalBody:
      "Use it for yourself, offer it to people at your location, or open it for public charging and earn from your space.",
  },
  "22kw": {
    power: "22kW",
    pageId: "22kw-charger",
    path: "/22kw-charger",
    seoTitle:
      "22kW EV Charger in Pakistan | Zvolta Smart AC Charger for Commercial Locations",
    seoDescription:
      "Install a Zvolta 22kW smart EV charger in Pakistan for malls, parking lots, restaurants, universities, hospitals, offices, commercial properties, and high traffic locations. Includes smart software, app control, free standard installation, built-in safety features, 2 year local warranty, and 0% installment options.",
    heroTitle:
      "22kW smart EV charger for commercial and high traffic locations",
    heroBody:
      "The Zvolta 22kW charger is a safe and smart AC charger for places that need stronger charging and higher daily usage.",
    heroSupport:
      "It is a strong fit for malls, parking lots, restaurants, universities, hospitals, offices, commercial properties, and locations where many people park every day.",
    heroBullets: [
      "0% interest installment plan available for 12 months",
      "Free standard installation included",
      "Earthing cost only applies if your site needs earthing work",
      "Best for high usage locations",
    ],
    quickDetails: [
      [
        "Best for",
        "Malls, parking lots, restaurants, universities, hospitals, offices, commercial sites",
      ],
      ["Charger type", "Smart AC charger"],
      ["Power", "22kW"],
      ["Power support", "Site assessment required"],
      ["Installation", "Free standard installation"],
      ["Earthing", "Charged only if needed"],
      ["Warranty", "2 year local warranty"],
      ["Software", "Zvolta app and dashboard included"],
      ["Payments", "App based payments included"],
      ["Use type", "Private, shared, or public"],
      ["Revenue sharing", "No revenue sharing with Zvolta"],
    ],
    whoTitle: "Who should choose this charger",
    whoBody:
      "The 22kW charger is best if your location has regular visitors, higher parking traffic, or more demand for EV charging. It is a good option for commercial locations and public charging points.",
    bestFor: [
      "Malls",
      "Parking lots",
      "Restaurants",
      "Cafes",
      "Universities and colleges",
      "Hospitals",
      "Office buildings",
      "Commercial properties",
      "Showrooms",
      "Fleet parking",
      "Sites with solar installed",
    ],
    recommendationCta: "Check if 22kW is right for you",
    balanceTitle: "What makes 22kW a good commercial option",
    balanceBody:
      "The 22kW charger is made for locations where more people may need to charge in a day. It gives stronger charging than 3kW and 7kW options, so it works better for busier spaces and public use.",
    useTypes: [
      ["Private", "Use it only for your own EV or company vehicles"],
      ["Shared", "Allow staff, tenants, fleet users, or selected users"],
      ["Public", "Open it on the Zvolta app so nearby EV users can find it"],
    ],
    useSupport:
      "You can keep it private during some hours and make it public during other hours.",
    softwareIntro:
      "The Zvolta 22kW charger comes with Zvolta software, so you can control charging, users, pricing, payments, timing, and usage from the app or dashboard.",
    installationOptions: installOptions.map((row) =>
      row[0] === "Vertical wall mount"
        ? ["Vertical wall mount", "Offices, commercial sites, parking areas"]
        : row[0] === "Vertical standing setup"
          ? ["Vertical standing setup", "Parking lots and open parking spaces"]
          : row,
    ),
    technicalSpecs: [
      ["Product", "Zvolta 22kW Smart AC Charger"],
      ["Rated power", "22kW"],
      ["Charger type", "AC charger"],
      [
        "Best use",
        "Malls, parking lots, restaurants, universities, hospitals, offices, commercial sites",
      ],
      ["Power support", "Site assessment required"],
      ["Connector", "Type 2 compatible charging standard"],
      ["Software", "Zvolta app and dashboard"],
      ["QR code start", "Yes"],
      ["App based payments", "Yes"],
      ["Remote management", "Yes"],
      ["Usage tracking", "Yes"],
      ["Price control", "Yes"],
      ["Timing control", "Yes"],
      ["Access control", "Private, shared, or public"],
      ["Safety protection", "RCBO, MBO, overvoltage, surge protection"],
      ["Warranty", "2 year local warranty"],
      ["Installation", "Free standard installation"],
      ["Earthing", "Charged only if needed"],
      ["Add on modules", "Available at 50% of charger price"],
      ["Support", "Local Zvolta support"],
    ],
    pricing: [
      ["22kW charger", "Contact Zvolta for latest price"],
      ["Standard installation", "Free"],
      ["Built-in safety features", "Free"],
      ["Zvolta software", "Included"],
      ["App and dashboard setup", "Included"],
      ["Add on module", "50% of charger price"],
      ["Earthing", "Only if required"],
      ["Installment plan", "0% interest for 12 months"],
    ],
    goodFor: [
      [
        "Good for commercial locations",
        "Use the 22kW charger at locations where many people visit, park, or spend time.",
        "Get a commercial setup",
      ],
      [
        "Good for parking lots and malls",
        "EV users can charge while they shop, eat, work, or wait. The dashboard helps track usage, earnings, access, and charger status.",
        "Get a parking setup",
      ],
      [
        "Good for offices, universities, and hospitals",
        "The 22kW charger can be used by staff, students, visitors, patients, or selected users.",
        "Get a site setup",
      ],
      [
        "Good for restaurants, cafes, and showrooms",
        "If people already spend time at your location, a 22kW charger can give them one more reason to visit and stay.",
        "Get a business setup",
      ],
      [
        "Good for solar powered sites",
        "If your site has solar, the 22kW charger can help you use your available power better.",
        "Talk to our team",
      ],
    ],
    leadTitle: "Not sure if 22kW is right for you?",
    leadSiteTypes: [
      "Mall",
      "Parking lot",
      "Restaurant or cafe",
      "University or college",
      "Hospital",
      "Office building",
      "Commercial property",
      "Other",
    ],
    faqs: [
      [
        "What is a 22kW EV charger?",
        "A 22kW EV charger is a stronger AC charger for regular and higher usage EV charging. It is good for commercial locations, public parking, malls, universities, hospitals, offices, and busy sites.",
      ],
      [
        "Is the 22kW charger good for public charging?",
        "Yes. It is a strong option for public charging locations and high traffic sites.",
      ],
      [
        "Is the 22kW charger faster than 3kW and 7kW?",
        "Yes. It gives more charging power than 3kW and 7kW chargers, depending on the vehicle and site power setup.",
      ],
      [
        "Can I install it at a commercial site?",
        "Yes. It is made for commercial spaces, parking lots, offices, malls, restaurants, hospitals, universities, and similar locations.",
      ],
      [
        "Can I earn from this charger?",
        "Yes. You can open your charger to public users through the Zvolta app whenever you want.",
      ],
      [
        "Can I keep it private?",
        "Yes. You can keep it private, share it with selected users, or open it to the public.",
      ],
      [
        "Is standard installation free?",
        "Yes. Standard installation is free. If your site needs earthing work, only the earthing cost will apply.",
      ],
      [
        "What is earthing?",
        "Earthing is a safety setup that sends extra current safely into the ground. It helps protect people and equipment.",
      ],
      [
        "Does the charger have safety protection?",
        "Yes. It includes RCBO, MBO, overvoltage, and surge protection.",
      ],
      [
        "Do I have to pay extra for safety features?",
        "No. Zvolta includes these safety features in the charger price.",
      ],
      [
        "Does the charger come with software?",
        "Yes. The charger comes with Zvolta app and dashboard support.",
      ],
      [
        "Can users pay through the app?",
        "Yes. Users can pay through the Zvolta app.",
      ],
      ["Can I set my own price?", "Yes. You can set your own charging price."],
      [
        "Can I choose charger timings?",
        "Yes. You can choose when the charger is available.",
      ],
      [
        "Does Zvolta take revenue sharing?",
        "No. You keep 100% of your earnings. There is no revenue sharing with Zvolta.",
      ],
      [
        "Can I add more chargers later?",
        "Yes. You can add more chargers or connect add on modules when demand grows.",
      ],
      [
        "What is included with the 22kW charger?",
        "The 22kW charger, built-in safety features, Zvolta software, app support, dashboard support, and free standard installation are included. Earthing is charged only if needed.",
      ],
    ],
    finalTitle: "Start with a 22kW smart charger.",
    finalBody:
      "Use it at your commercial site, offer it to people at your location, or open it for public charging and earn from your space.",
  },
};

export const chargerSpecCommon = {
  softwareFeatures: commonSoftwareFeatures,
  safetyFeatures,
  importedComparisonRows,
  installationItems,
  setupSteps,
  compareChargers,
};
