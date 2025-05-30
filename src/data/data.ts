
import uuid from "react-uuid";
import { ICategory, IFormInput, IProduct } from "../Interfaces/interface";

export const ProductList:IProduct[] = [

    {
        "id": 1,
        "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
        "price": '773',
        "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "audio",
            "imageUrl": "https://example.com/images/audio.jpg"
        },
      },
      {
        "id": 2,
        "title": "Microsoft Xbox X/S Wireless Controller Robot White",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
        "price": '57',
        "description": "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "gaming",
            "imageUrl": "https://example.com/images/gaming.jpg"
        },
      },
      {
        "id": 3,
        "title": "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
        "price": '384',
        "description": "Total freedom with up to 20 m wireless range and LIGHTSPEED wireless audio transmission. Keep playing for up to 29 hours of battery life. 1 Play in stereo on PlayStation(R) 4.\r\nPersonalize your headset lighting across the full spectrum, 16. 8M colors. Play in colors with front-facing, dual-zone LIGHTSYNC RGB lighting and choose from preset animations or create your own with G HUB software.\r\nColorful, reversible suspension headbands are designed for comfort during long play sessions.\r\nAdvanced mic filters that make your voice sound richer, cleaner, and more professional. Customize with G HUB and find your sound.\r\nHear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.\r\nSoft dual-layer memory foam that conforms to your head and reduces stress points for long-lasting comfort.\r\nG733 weighs only 278 g for long-lasting comfort.",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "gaming",
            "imageUrl": "https://example.com/images/gaming.jpg"
        },
      },
      {
        "id": 4,
        "title": "Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 30Hr Battery, 3 Min Quick Charge = 3 Hours Playback, Multi Point Connectivity, Alexa-Silver",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
        "price": '362',
        "description": "Industry Leading noise cancellation-two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise cancelling is automatically optimized based on your wearing conditions and environment.\r\nIndustry-leading call quality with our Precise Voice Pickup Technology uses four beamforming microphones and an AI-based noise reduction algorithm\r\nMagnificent Sound, engineered to perfection with the new Integrated Processor V1\r\nCrystal clear hands-free calling with 4 beamforming microphones, precise voice pickup, and advanced audio signal processing.",
        "color":["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "audio",
            "imageUrl": "https://example.com/images/audio.jpg"
        },
      },
      {
        "id": 5,
        "title": "Urbanista Los Angeles Sand Gold - World’s 1st Solar Powered Hybrid Active Noise Cancelling with Mic Premium Wireless Headphones, Unlimited Playtime",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
        "price": '265',
        "description": "Welcome to the dawn of a new era with URBANISTA LOS ANGELES, the world’s first solar-charging premium wireless headphoneS powered by Powerfoyle solar cell material. Using ADVANCED GREEN TECHNOLOGY, Los Angeles converts all light, outdoor and indoor, into energy to deliver virtually infinite playtime. Los Angeles never stops charging when exposed to light, providing you with a nonstop audio experience. With Los Angeles, you’re always in complete control of your audio experience. Just the press of a button activates advanced hybrid Active Noise Cancelling, instantly reducing unwanted background noise, or switches on Ambient Sound Mode so you can stay aware of important surrounding sounds.",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "audio",
            "imageUrl": "https://example.com/images/audio.jpg"
        },
      },
      {
        "id": 6,
        "title": "Xiaomi Wired in-Ear Earphones with Mic, Ultra Deep Bass & Metal Sound Chamber (Blue)",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
        "price": '5',
        "description": "Ergonomically angled to fit perfectly in your ear canal that provides long lasting comfort for every day usage.\r\nFeatures 1.25 meter long cable & L-shaped 3.5mm jack to connect with your phone. Due to the L-shape, the connector will deliver a strong & durable life. Earphones are compatible with Android, iOS & Windows devices with jack.\r\nPowerful 10 mm drivers & aluminum sound chamber for super extra bass and clear sound for the best music & calling experience.\r\nHigh-quality silicone earbuds, which are gentle on skin without compromising the comfortable fit on the ears.\r\nIn-line microphone with a durable multi-function button to play/pause your music, and answer/end your calls, all with just one tap.",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "audio",
            "imageUrl": "https://example.com/images/audio.jpg"
        }
      },
      {
        "id": 7,
        "title": "boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0, with Mic (Buoyant Black)",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
        "price": '12',
        "description": "Rockerz 370 come equipped with latest Bluetooth v5.0 for instant wireless connectivity\r\nThe powerful 300mAh battery provides up to 8 Hours of audio bliss\r\n40mm Dynamic Drivers supply immersive High Definition sound\r\nThe headset has padded earcups for a comfortable experience\r\nThe headphone has been ergonomically and aesthetically designed for a seamless experience\r\nOne can connect to Rockerz 370 via dual modes for connectivity in the form of Bluetooth and AUX\r\n1 year warranty from the date of purchase.",
        
        "color":["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "audio",
            "imageUrl": "https://example.com/images/audio.jpg"
        }
      },
      {
        "id": 9,
        "title": "Amkette EvoFox Elite Ops Wireless Gamepad for Android TV | Google TV | 8+ Hours of Play Time | Zero Lag Connectivity Upto 12 Feets | USB Extender for TV Included | - Dusk Grey",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg",
        "price": '18',
        "description": "The EvoFox Elite Ops Wireless Gamepad with Type C Charging is the ideal Android TV Gamepad. With all Android TVs supporting at least basic Gaming, a Gamepad at home is a must. Use the provided USB Extender Cable on your TV to ensure optimal wireless performance.\r\nThis Wireless Controller also supports Windows with X input and D input modes, and PS3s. It automatically detects and changes the gamepad mode based on your system. Simply Plug and Play!\r\nThe Elite Ops features Digital Triggers (not Analog), Accurate 360 degree concave thumbsticks, a Precise 8 way floating D-Pad. The gamepad also features dual rumble Vibration motors (for PC and PS3 only) and an easy to use Turbo Mode.\r\nThe gamepad comes with a Type C charging port and the 400mAh Rechargeable battery ensures 8 hours of non stop gameplay. The ergonomic and robust design with anti-sweat matte finish makes it easy on your hands, but tough on your enemies.",
        "color":["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "gaming",
            "imageUrl": "https://example.com/images/gaming.jpg"
        },
      },
      {
        "id": 10,
        "title": "Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy S22 5G.jpg",
        "price": '760',
        "description": "Pro-grade Camera that lets you make your nights epic with Nightography: It’s our brightest innovation yet. The sensor pulls in more light, the Super Clear Glass dials down lens flare, and fast-acting AI delivers near-instant intelligent processing.\r\nVisionBooster outshines the sun: Stunning 120Hz Dynamic AMOLED 2X display is crafted specifically for high outdoor visibility, keeping the view clear in bright daylight.\r\n4nm processor, our fastest chip yet: Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.\r\nSleek design in a range of colors lets you express yourself how you like. The slim bezels flow into a symmetrical polished frame for an expansive, balanced display. Corning Gorilla Glass Victus+ on the screen and back panels.",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "mobile",
            "imageUrl": "https://example.com/images/mobile.jpg"
        },
      },
      {
        "id": 11,
        "title": "Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) ",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074776147-galaxy S22 ultra 5G.jpg",
        "price": '1147',
        "description": "The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text.\r\n5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.\r\nThe Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.* And the 120Hz adaptive refresh rate keeps the scroll smooth, adjusting to what's on screen for an optimized view.",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "mobile",
            "imageUrl": "https://example.com/images/mobile.jpg"
        },
      },
      {
        "id": 12,
        "title": "Poco by Xiaomi F1 Steel Blue, 6GB RAM, 64GB Storage",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078463674-poco f1.jpg",
        "price": '132',
        "description": "2MP+5MP dual camera | 20MP front facing camera\r\n15.69 centimeters (6.18-inch) IPS (in-cell) multi-touch capacitive touchscreen with 2246 x 1080 pixels resolution, 403 ppi pixel density\r\nMemory, Storage & SIM: 6GB RAM, 64GB internal memory expandable up to 128GB | Dual SIM (nano+nano) dual-standby (4G+4G)\r\nAndriod Oreo v8.1 operating system with 2.8GHz Qualcomm Snapdragon 845 octa core processor, 8xKyro cores/10 nm architecture\r\n4000mAH lithium-ion battery with quick charge 3.0 to keep you going all-day long\r\n1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "mobile",
            "imageUrl": "https://example.com/images/mobile.jpg"
        },
      },
      {
        "id": 13,
        "title": "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB Storage)",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075307831-galaxy M14 5G.jpg",
        "price": '187',
        "description": "16.72 centimeters (6.6-inch) LCD, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color\r\n50MP+2MP+2MP Triple camera setup- True 50MP (F1.8) main camera + 2MP (F2.4) + 2MP (F2.4)| 13MP (F2.0) front camera\r\nSuperfast 5G with 13 5G Bands, Powerful Exynos 1330 Octa Core 2.4GH 5nm processor with Letest Android 13,One UI Core 5.0,\r\n6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\r\nGet up to 2 times of Android Updates & 4 times of Security Updates with Samsung Galaxy M14 5G.",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
            "name": "mobile",
            "imageUrl": "https://example.com/images/mobile.jpg"
        },
      },
      {
        "id": 15,
        "title": "Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075831385-iPhone 14 pro max.jpg",
        "price": '1810',
        "description": "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion\r\nDynamic Island, a magical new way to interact with iPhone\r\n48MP Main camera for up to 4x greater resolution\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nAll-day battery life and up to 29 hours of video playback\r\nVital safety technology — Crash Detection can detect a severe car crash and call for help",
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
          "name": "mobile",
          "imageUrl": "https://example.com/images/mobile.jpg"
      },
      },
      {
        "id": 16,
        "title": "Apple iPhone 14 Pro (256 GB) - Gold",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691076020478-iPhone 14 pro.jpg",
        "price": '1546',
        "description": "15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion\r\nDynamic Island, a magical new way to interact with iPhone\r\n48MP Main camera for up to 4x greater resolution\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nAll-day battery life and up to 23 hours of video playback\r\nVital safety technology — Crash Detection calls for help when you can’t",
        
        "color": ["#FF072D","#de8b02","#DE07D8"],
        "category": {
          "name": "mobile",
          "imageUrl": "https://example.com/images/mobile.jpg"
      },
      }
]

export const FormModal:IFormInput[] = [
  {
    id:"title",
    name:"title",
    label:"Product Title",
    type:"text",
  },
  {
    id:"description",
    name:"description",
    label:"Product Description",
    type:"text",
  },
  {
    id:"image",
    name:"image",
    label:"Product Image URL",
    type:"text",
  },
  {
    id:"price",
    name:"price",
    label:"Product price",
    type:"text",
  },
]

export const Colors :string[] = [
  "#DE1507",
  "#DE07D8",
  "#DE6007",
  "#07A4DE",
  "#071DDE",
  "#07DE89",
  "#cbb394",
  "#de8b02",
  "#122e44",
  "#f08873",
  "#b6b7c9",
  "#367588",
  "#794f47",
  "#f7c5bb",
  "#3d2b1f"
  
];
export const Categories:ICategory[] = [
  {
    "id": uuid(),
    "name": "Nike",
    "imageUrl": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
  },
  {
    "id": uuid(),
    "name": "Adidas",
    "imageUrl": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",

  },

  {
    "id": uuid(),
    "name": "Gaming Headset",
    "imageUrl": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",

  },
  {
    "id":uuid(),
    "name": "Webcam",
    "imageUrl": "https://example.com/images/1080pwebcam.jpg",
  },
  {
    "id": uuid(),
    "name": "Laptop Stand",
    "imageUrl": "https://example.com/images/laptopstand.jpg",
  },
  {
    "id":uuid(),
    "name": "USB Hub",
    "imageUrl": "https://example.com/images/usbhub.jpg",

  },
  {
    "id":uuid(),
    "name": "SSD",
    "imageUrl": "https://example.com/images/portablesdd.jpg",
  },
  
];