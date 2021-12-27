const DATA = [
    {
        id: 1,
        title: 'Apple iPhone 8, 64GB, Space Gray - Fully Unlocked (Renewed)',
        price: 799,
        rating: '4.4 out of 5',
        desc: 'Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).\n' +
          'The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic, in which case it will be UL or Mfi (“Made for iPhone”) Certified.\n' +
          'Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm’s length.\n' +
          'Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.\n' +
          'Tested for battery health and guaranteed to have a minimum battery capacity of 80%.',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81F-QC1N5WL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Apple-iPhone-GSM-Unlocked-64GB/dp/B0775MV9K2/ref=lp_7072561011_1_1'
      },
      {
        id: 2,
        title: 'Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black',
        price: 499,
        rating: '4.7 out of 5',
        desc: 'New, unlocked Android phone gives you the flexibility to change carriers and choose your own data plan; works with Verizon, T-Mobile, Sprint, AT&T, and other major carriers\n' +
          'Capture great photos using your cell phone on the 12 MP dual pixel rear camera with features like Live HDR+, Night Sight, and Portrait Mode; share photos directly from the viewfinder of your Pixel camera to Google and popular third party apps\n' +
          'The Adaptive Battery lasts up to 24 hours [1] as it learns your favorite apps and reduces power to the ones you rarely use\n' +
          'HDR+ makes your photos look better by automatically adjusting for color and lighting; Night Sight lets you capture rich detail and color even in the dark; Portrait Mode helps you take beautiful portraits with a DSLR quality look\n' +
          'Get things done with just your voice: Send texts, get directions and reminders, and multitask on the go on your mobile phone with help from Google\n' +
          'The custom made Titan M security chip helps secure the operating system and protect sensitive data, like passwords; automatically receive the latest OS and security updates on your cell phone for at least 3 years. [2]',
        img: 'https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Google-Pixel-4a-Unlocked-Smartphone/dp/B08CFSZLQ4/ref=lp_7072561011_1_2'
      },
      {
        id: 3,
        title: 'Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)',
        price: 399,
        rating: '4.3 out of 5',
        desc: 'Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).\n' +
          'The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic, in which case it will be UL or Mfi (Made for iPhone) Certified.\n' +
          'Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arms length.\n' +
          'Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.\n' +
          'Tested for battery health and guaranteed to have a minimum battery capacity of 80%.',
        img: 'https://images-na.ssl-images-amazon.com/images/I/61gVPTl5N3L._AC_SL1288_.jpg',
        url: 'https://www.amazon.com/Apple-iPhone-Fully-Unlocked-64GB/dp/B077578W38/ref=lp_7072561011_1_3?th=1'
      },
      {
        id: 4,
        title: 'Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy',
        price: 599,
        rating: '4.6 out of 5',
        desc: 'Pro-Grade Camera: The new Samsung Galaxy S20 FE mobile phone features high-powered pro lenses for beautiful portraits, stunning landscapes and crisp close-ups in any light with its 3X optical zoom\n' +
          '30X Space Zoom: Whether you want your cellphone to zoom in close from afar or magnify details of something nearby, 30X Space Zoom gives you the power to get closer\n' +
          'Night Mode: Capture crisp images and vibrant video with Night Mode and create high-quality content in low light — no flash required with this smartphone\n' +
          'Single-Take AI: One tap of the screen captures multiple images and video all at once; Lenses, effects and filters capture the best of every moment, every time\n' +
          'Power of 5G: Get next-level power for everything you love to do with Samsung Galaxy 5G; More sharing, more gaming, more experiences and never miss a beat',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71z2dc%2BXnrL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Samsung-Factory-Unlocked-Smartphone-Pro-Grade/dp/B08FYTSXGQ/ref=lp_7072561011_1_7'
      },
      {
        id: 5,
        title: 'Apple iPhone XR, 64GB, Black - Fully Unlocked (Renewed)',
        price: 380,
        rating: '4.5 out of 5',
        desc: 'Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).\n' +
          'The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic, in which case it will be UL or Mfi (Made for iPhone) Certified.\n' +
          'Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arms length.\n' +
          'Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.\n' +
          'Tested for battery health and guaranteed to have a minimum battery capacity of 80%.',
        img: 'https://images-na.ssl-images-amazon.com/images/I/717KHGCJ6eL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P6Y7954/ref=lp_7072561011_1_4'
      },
      {
        id: 6,
        title: 'Apple iPhone 7, 32GB, Black - Fully Unlocked (Renewed)',
        price: 150,
        rating: '4.1 out of 5',
        desc: 'Fully Unlocked for both GSM carriers (like AT&T and T-Mobile).\n' +
          '12MP rear Camera, optical image stabilization, Quad-LED true Tone Flash, and live Photos LTE Advanced up to 450 Mbps and 802. 11a/b/G/openings/AC Wi-Fi with MIMO iOS 10 and iCloud.\n' +
          '7MP FaceTime HD camera with Retina Flash splash, water, and dust resistant 4K video recording at 30 fps and slo-mo video recording for 1080P at 120 fps.\n' +
          'Apple A10 Fusion chip with embedded M10 motion coprocessor.',
        img: 'https://images-na.ssl-images-amazon.com/images/I/41ZtfBP1C6L._AC_SL1024_.jpg',
        url: 'https://www.amazon.com/Apple-iPhone-Unlocked-Quad-Core-Smartphone/dp/B01N4R20RS/ref=lp_7072561011_1_5'
      },
      {
        id: 7,
        title: 'BLU Studio Mini -5.5HD Smartphone, 32GB+2GB Ram -Black',
        price: 69,
        rating: '4 out of 5',
        desc: '5.5”Hd+ 18:9 Curved Glass Display 720x1440 Resolution.\n' +
          '13MP Main Camera with LED Flash, 8MP Selfie camera with LED Flash.\n' +
          '32GB Internal memory 2GB RAM Micro SD up to 64GB; Octa-Core 1.6GHz processor with ARM Cortex-A55 chipset.\n' +
          '3,000mAh Battery and Android 9 Pie.\n' +
          '4G LTE (2/4/5/12/17) 3G: (850/1700/1900): US compatibility with GSM Networks including, T-Mobile, Metro PCS, and others. (Not compatible with new AT&T or Cricket activations or with CDMA Networks like Verizon, Sprint, and Boost Mobile)',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1gUduSRYZL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/BLU-Studio-5-5HD-Smartphone-Black/dp/B07SSCJHT1/ref=lp_7072561011_1_9'
      },
      {
        id: 8,
        title: 'Apple iPhone XS, 64GB, Space Gray - Fully Unlocked (Renewed)',
        price: 332.00,
        rating: '4.3 out of 5',
        desc: 'Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).\n' +
          'The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic, in which case it will be UL or Mfi (Made for iPhone) Certified.\n' +
          'Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arms length.\n' +
          'Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.\n' +
          'Tested for battery health and guaranteed to have a minimum battery capacity of 80%.',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71XeQzRDyML._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07SC58QBW/ref=lp_7072561011_1_8'
      },
      {
        id: 9,
        title: 'Moto G7 Plus | Unlocked | Made for US by Motorola | 4/64GB | 16MP Camera | 2019 | Black',
        price: 122.99,
        rating: '4.5 out of 5',
        desc: 'No CDMA, No VoLTE, Yes US Warranty\n' +
          'GSM Only - Will not work on CDMA carriers like Sprint and Verizon.\n' +
          '16 MP dual camera with OIS. Get picture-perfect results with a 16 MP dual camera system featuring optical image stabilization (OIS).\n' +
          'All-day battery with 27W TurboPower. Go all day on a single charge, and get 12 hours of power in just 15 minutes.\n' +
          '6.2" Full HD+ Max Vision display. Immerse yourself with ultrawide views on a 6.2" Full HD+ display with a 19:9 aspect ratio.\n' +
          'Dolby Audio tuned stereo speakers. Enjoy loud volume, crystal clear dialogue and realistic surround sound.\n' +
          'Speed. Experience the power of an octa-core Qualcomm Snapdragon processor in everything you do.\n' +
          'Refined 3D glass design. Feel the comfort and premium quality of contoured Corning Gorilla Glass and a water-repellent design.\n' +
          'GSM: B2 (1900), B3 (1800), B5 (850), B8 (900)',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81N4XZjeBvL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Moto-Unlocked-Motorola-Camera-Black/dp/B08GL2HKLT/ref=lp_7072561011_1_11'
      },
      {
        id: 10,
        title: 'Samsung Galaxy S9, 64GB, Midnight Black - Fully Unlocked (Renewed)',
        price: 235.00,
        rating: '4.3 out of 5',
        desc: 'Fully Unlocked: Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.), both domestically and internationally.\n' +
          'The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic.\n' +
          'Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm\'s length.\n' +
          'Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.\n' +
          'Tested for battery health and guaranteed to have a minimum battery capacity of 80%.',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81S%2B5sUvMiL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Samsung-Galaxy-Unlocked-Midnight-Renewed/dp/B07VYTLC6Q/ref=lp_7072561011_1_10'
      },
    
]

export default DATA;