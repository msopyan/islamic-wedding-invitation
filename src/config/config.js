// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "D & F Wedding",
    description: "We are getting married and would love for you to be a part of our celebration.",
    ogImage: "/images/og-image.jpg", // OpenGraph image for social media
    favicon: "/images/favicon.ico",
  },

  couple: {
    groomName: "D",
    brideName: "F",
  },

  // Event Details
  event: {
    date: "2025-07-06",
    time: "09:00",
    timezone: "WIB",
    dateTime: "2025-07-06T16:22:47Z", // ISO 8601 format
    name: "Graha Yadika",
    address: "Jl. Example Street No. 123, City Name",
    time: "09:00 - 14:00 WIB",
    phone: "+62 123 4567 890",
    maps_url: "https://maps.app.goo.gl/XYW6sypYyP7QsNkp8",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3033128841253!2d106.70484657499037!3d-6.223678693764379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa1db5298b8f%3A0x72ace077fb5ca954!2sGraha%20Yadika!5e0!3m2!1sid!2sid!4v1740398382642!5m2!1sid!2sid%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
    latitude: -6.2088, // Replace with actual coordinates
    longitude: 106.8456 // Replace with actual coordinates
  },

  eventDetails: [{
    title: "Akad Nikah",
    date: "2025-07-06",
    startTime: "09:0",
    endTime: "10:00",
    timeZone: "Asia/Jakarta",
    location: "Graha Yadika",
    description: "We invite you to join us in celebrating our wedding ceremony."
  }, {
    title: "Resepsi Nikah",
    date: "2025-07-06",
    startTime: "11:00",
    endTime: "14:00",
    timeZone: "Asia/Jakarta",
    location: "Graha Yadika",
    description: "We invite you to join us in celebrating our wedding ceremony."
  }],

  audio: {
    src: "/audio/backsound.mp3",
    title: "Fulfilling Humming",
    artist: "Nasheed",
    autoplay: true,
    loop: true,
    toastDuration: 5000,
    pauseOnInactive: true,
    resumeOnReturn: true,
  },

  bankAccounts: [
    {
      bank: 'Bank Central Asia',
      accountNumber: '1234567890',
      accountName: 'D',
      logo: '/path/to/bca-logo.png'
    },
    {
      bank: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountName: 'F',
      logo: '/path/to/mandiri-logo.png'
    }
  ],
  qris: {
    image: "https://ypp.co.id/site/uploads/qris/5f7c6da47a380-qr-code-dana.jpg"
  }
};

export default config;
