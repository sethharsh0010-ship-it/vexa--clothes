/**
 * VEXA - Premium Fashion E-Commerce Platform
 * Master Product Database, Categories, Coupons, Reviews, and Store Config
 * Founder & Creative Director: Harsh
 * Contact: sethharsh0010@gmail.com
 * Brand: VEXA | CLOTHING COLLECTIVE | JAIPUR
 */

const VEXA_DATA = {
  store: {
    name: "VEXA",
    tagline: "CLOTHING COLLECTIVE | JAIPUR",
    founder: "Harsh",
    established: "2026",
    city: "Jaipur, Rajasthan, India",
    address: "Atelier VEXA, C-Scheme, Ashok Nagar, Jaipur, RJ 302001",
    supportEmail: "sethharsh0010@gmail.com",
    supportPhone: "+91 98290 12345",
    supportWhatsapp: "+91 98290 12345",
    currency: "INR",
    currencySymbol: "₹",
    freeShippingThreshold: 1999,
    standardShippingFee: 149,
    priorityShippingFee: 299,
    gstRate: 0.12,
    colors: {
      matteBlack: "#111111",
      deepCharcoal: "#1B1B1B",
      metallicGold: "#C6A15B",
      champagneGold: "#D8C18B",
      offWhite: "#F8F6F1",
      lightGrey: "#EAEAEA"
    }
  },

  announcements: [
    { id: 1, text: "COMPLIMENTARY EXPRESS DELIVERY ON ORDERS OVER ₹1,999", link: "#catalog" },
    { id: 2, text: "ROYAL HERITAGE SPRING/SUMMER '26 DROP IS NOW LIVE | HARSH ATELIER CURATION", link: "#catalog" },
    { id: 3, text: "USE CODE 'JAIPURGOLD' FOR ₹500 OFF ON YOUR FIRST LUXURY ORDER", link: "#coupons" }
  ],

  categories: [
    {
      id: "men",
      name: "Men",
      tagline: "Contemporary Tailoring & Royal Jaipur Heritage",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1200&q=80",
      subcategories: [
        "T-Shirts", "Polo T-Shirts", "Shirts", "Jeans", "Trousers",
        "Hoodies", "Sweatshirts", "Jackets", "Shorts", "Ethnic Wear"
      ]
    },
    {
      id: "women",
      name: "Women",
      tagline: "Sculpted Silhouettes & Artisanal Block-Print Elegance",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      subcategories: [
        "Tops", "T-Shirts", "Dresses", "Jeans", "Trousers",
        "Kurtis", "Co-ord Sets", "Jackets", "Skirts", "Ethnic Wear"
      ]
    },
        {
      id: "footwear",
      name: "Footwear",
      tagline: "Sculpted Sneakers, Italian Calfskin & Royal Heritage Juttis",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
      subcategories: [
        "Sneakers", "Casual Footwear", "Sports Shoes", "Formal Footwear", "Artisanal Loafers"
      ]
    },{
      id: "kids",
      name: "Kids",
      tagline: "Pure Cotton Comfort & Playful Heritage Elegance",
      image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1200&q=80",
      subcategories: [
        "Boys Clothing", "Girls Clothing", "Kids T-Shirts", "Kids Dresses", "Kids Sets"
      ]
    },
    {
      id: "accessories",
      name: "Accessories",
      tagline: "Handcrafted Leather, Silk Scarves & Signature Metals",
      image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=1200&q=80",
      subcategories: [
        "Caps", "Belts", "Bags", "Fashion Accessories"
      ]
    }
  ],

  products: [

    {
        "id":  "vexa-men-001",
        "sku":  "VX-MN-101",
        "name":  "Architectural Heavyweight Giza Tee",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  2672,
        "originalPrice":  3874,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  18,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-002",
        "sku":  "VX-MN-102",
        "name":  "Royal Jaipur Raw Silk Bandhgala",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  2845,
        "originalPrice":  4125,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-003",
        "sku":  "VX-MN-103",
        "name":  "Tailored Oxford Button-Down Shirt",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  3018,
        "originalPrice":  4376,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-004",
        "sku":  "VX-MN-104",
        "name":  "Artisanal Hand-Block Printed Kurta",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  3191,
        "originalPrice":  4627,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-005",
        "sku":  "VX-MN-105",
        "name":  "Minimalist Sartorial Wool Trousers",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  3364,
        "originalPrice":  4878,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-006",
        "sku":  "VX-MN-106",
        "name":  "Single-Breasted Heritage Jodhpuri Suit",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  3537,
        "originalPrice":  5129,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-007",
        "sku":  "VX-MN-107",
        "name":  "Structured Ribbed Egyptian Cotton Polo",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  3710,
        "originalPrice":  5380,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  36,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-008",
        "sku":  "VX-MN-108",
        "name":  "Selvedge Indigo Raw Denim Jeans",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  3883,
        "originalPrice":  5630,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  39,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-009",
        "sku":  "VX-MN-109",
        "name":  "Bespoke Linen Safari Overshirt",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  4056,
        "originalPrice":  5881,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-010",
        "sku":  "VX-MN-110",
        "name":  "Double-Breasted Ivory Dinner Jacket",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  4229,
        "originalPrice":  6132,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  45,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-011",
        "sku":  "VX-MN-111",
        "name":  "Jaipur Royal Silk Kurta Pajama Set",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  4402,
        "originalPrice":  6383,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-012",
        "sku":  "VX-MN-112",
        "name":  "Tailored Relaxed Pleated Trousers",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  4575,
        "originalPrice":  6634,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  51,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-013",
        "sku":  "VX-MN-113",
        "name":  "Supima Cotton Minimal Crewneck",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  4748,
        "originalPrice":  6885,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  54,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-014",
        "sku":  "VX-MN-114",
        "name":  "Structured Mandarin Collar Shirt",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  4921,
        "originalPrice":  7135,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-015",
        "sku":  "VX-MN-115",
        "name":  "Handwoven Pashmina Winter Trench",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  5094,
        "originalPrice":  7386,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-016",
        "sku":  "VX-MN-116",
        "name":  "Signature Gold Monogram Oversized Tee",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  5267,
        "originalPrice":  7637,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  63,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-017",
        "sku":  "VX-MN-117",
        "name":  "Artisanal Silk Sherwani with Stole",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  5440,
        "originalPrice":  7888,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  66,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-018",
        "sku":  "VX-MN-118",
        "name":  "Italian Wool Tailored Waistcoat",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  5613,
        "originalPrice":  8139,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  69,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-019",
        "sku":  "VX-MN-119",
        "name":  "Relaxed Drape Silk-Linen Camp Shirt",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  5786,
        "originalPrice":  8390,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  72,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-020",
        "sku":  "VX-MN-120",
        "name":  "Japanese Raw Selvedge Slim Jeans",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  5959,
        "originalPrice":  8641,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  75,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-021",
        "sku":  "VX-MN-121",
        "name":  "Classic Houndstooth Tailored Overcoat",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  6132,
        "originalPrice":  8891,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  78,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-022",
        "sku":  "VX-MN-122",
        "name":  "Architectural Heavyweight Giza Tee Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  6305,
        "originalPrice":  9142,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  81,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-023",
        "sku":  "VX-MN-123",
        "name":  "Royal Jaipur Raw Silk Bandhgala Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  6478,
        "originalPrice":  9393,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  84,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-024",
        "sku":  "VX-MN-124",
        "name":  "Tailored Oxford Button-Down Shirt Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  6651,
        "originalPrice":  9644,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  17,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-025",
        "sku":  "VX-MN-125",
        "name":  "Artisanal Hand-Block Printed Kurta Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  6824,
        "originalPrice":  9895,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  20,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-026",
        "sku":  "VX-MN-126",
        "name":  "Minimalist Sartorial Wool Trousers Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  6997,
        "originalPrice":  10146,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  23,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-027",
        "sku":  "VX-MN-127",
        "name":  "Single-Breasted Heritage Jodhpuri Suit Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  7170,
        "originalPrice":  10396,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  26,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-028",
        "sku":  "VX-MN-128",
        "name":  "Structured Ribbed Egyptian Cotton Polo Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  7343,
        "originalPrice":  10647,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  29,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-029",
        "sku":  "VX-MN-129",
        "name":  "Selvedge Indigo Raw Denim Jeans Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  7516,
        "originalPrice":  10898,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  32,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-030",
        "sku":  "VX-MN-130",
        "name":  "Bespoke Linen Safari Overshirt Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  7689,
        "originalPrice":  11149,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  35,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-031",
        "sku":  "VX-MN-131",
        "name":  "Double-Breasted Ivory Dinner Jacket Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  7862,
        "originalPrice":  11400,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  38,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-032",
        "sku":  "VX-MN-132",
        "name":  "Jaipur Royal Silk Kurta Pajama Set Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  8035,
        "originalPrice":  11651,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  41,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-033",
        "sku":  "VX-MN-133",
        "name":  "Tailored Relaxed Pleated Trousers Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  8208,
        "originalPrice":  11902,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  44,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-034",
        "sku":  "VX-MN-134",
        "name":  "Supima Cotton Minimal Crewneck Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  8381,
        "originalPrice":  12152,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  47,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-035",
        "sku":  "VX-MN-135",
        "name":  "Structured Mandarin Collar Shirt Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  8554,
        "originalPrice":  12403,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  50,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-036",
        "sku":  "VX-MN-136",
        "name":  "Handwoven Pashmina Winter Trench Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  8727,
        "originalPrice":  12654,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  53,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-037",
        "sku":  "VX-MN-137",
        "name":  "Signature Gold Monogram Oversized Tee Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  8900,
        "originalPrice":  12905,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  56,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-038",
        "sku":  "VX-MN-138",
        "name":  "Artisanal Silk Sherwani with Stole Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  9073,
        "originalPrice":  13156,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  59,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-039",
        "sku":  "VX-MN-139",
        "name":  "Italian Wool Tailored Waistcoat Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  9246,
        "originalPrice":  13407,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  62,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-040",
        "sku":  "VX-MN-140",
        "name":  "Relaxed Drape Silk-Linen Camp Shirt Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  9419,
        "originalPrice":  13658,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  65,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-041",
        "sku":  "VX-MN-141",
        "name":  "Japanese Raw Selvedge Slim Jeans Ed. 2",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  9592,
        "originalPrice":  13908,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  68,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-042",
        "sku":  "VX-MN-142",
        "name":  "Classic Houndstooth Tailored Overcoat Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  9765,
        "originalPrice":  14159,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  71,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-043",
        "sku":  "VX-MN-143",
        "name":  "Architectural Heavyweight Giza Tee Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  9938,
        "originalPrice":  14410,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  74,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-044",
        "sku":  "VX-MN-144",
        "name":  "Royal Jaipur Raw Silk Bandhgala Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  10111,
        "originalPrice":  14661,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  77,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-045",
        "sku":  "VX-MN-145",
        "name":  "Tailored Oxford Button-Down Shirt Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  10284,
        "originalPrice":  14912,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  80,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-046",
        "sku":  "VX-MN-146",
        "name":  "Artisanal Hand-Block Printed Kurta Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  10457,
        "originalPrice":  15163,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  83,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-047",
        "sku":  "VX-MN-147",
        "name":  "Minimalist Sartorial Wool Trousers Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  10630,
        "originalPrice":  15414,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  16,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-048",
        "sku":  "VX-MN-148",
        "name":  "Single-Breasted Heritage Jodhpuri Suit Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  10803,
        "originalPrice":  15664,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  19,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-049",
        "sku":  "VX-MN-149",
        "name":  "Structured Ribbed Egyptian Cotton Polo Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  10976,
        "originalPrice":  15915,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  22,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-050",
        "sku":  "VX-MN-150",
        "name":  "Selvedge Indigo Raw Denim Jeans Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  11149,
        "originalPrice":  16166,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  25,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-051",
        "sku":  "VX-MN-151",
        "name":  "Bespoke Linen Safari Overshirt Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  11322,
        "originalPrice":  16417,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  28,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-052",
        "sku":  "VX-MN-152",
        "name":  "Double-Breasted Ivory Dinner Jacket Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  11495,
        "originalPrice":  16668,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  31,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-053",
        "sku":  "VX-MN-153",
        "name":  "Jaipur Royal Silk Kurta Pajama Set Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  11668,
        "originalPrice":  16919,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  34,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-054",
        "sku":  "VX-MN-154",
        "name":  "Tailored Relaxed Pleated Trousers Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  11841,
        "originalPrice":  17169,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  37,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-055",
        "sku":  "VX-MN-155",
        "name":  "Supima Cotton Minimal Crewneck Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  12014,
        "originalPrice":  17420,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  40,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-056",
        "sku":  "VX-MN-156",
        "name":  "Structured Mandarin Collar Shirt Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  12187,
        "originalPrice":  17671,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  43,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-057",
        "sku":  "VX-MN-157",
        "name":  "Handwoven Pashmina Winter Trench Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  12360,
        "originalPrice":  17922,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  46,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-058",
        "sku":  "VX-MN-158",
        "name":  "Signature Gold Monogram Oversized Tee Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  12533,
        "originalPrice":  18173,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  49,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-059",
        "sku":  "VX-MN-159",
        "name":  "Artisanal Silk Sherwani with Stole Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  12706,
        "originalPrice":  18424,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  52,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-060",
        "sku":  "VX-MN-160",
        "name":  "Italian Wool Tailored Waistcoat Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  12879,
        "originalPrice":  18675,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  55,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-061",
        "sku":  "VX-MN-161",
        "name":  "Relaxed Drape Silk-Linen Camp Shirt Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  13052,
        "originalPrice":  18925,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  58,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-062",
        "sku":  "VX-MN-162",
        "name":  "Japanese Raw Selvedge Slim Jeans Ed. 3",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  13225,
        "originalPrice":  19176,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  61,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-063",
        "sku":  "VX-MN-163",
        "name":  "Classic Houndstooth Tailored Overcoat Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  13398,
        "originalPrice":  19427,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  64,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-064",
        "sku":  "VX-MN-164",
        "name":  "Architectural Heavyweight Giza Tee Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  2571,
        "originalPrice":  3728,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  67,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-065",
        "sku":  "VX-MN-165",
        "name":  "Royal Jaipur Raw Silk Bandhgala Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  2744,
        "originalPrice":  3979,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  70,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-066",
        "sku":  "VX-MN-166",
        "name":  "Tailored Oxford Button-Down Shirt Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  2917,
        "originalPrice":  4230,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  73,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-067",
        "sku":  "VX-MN-167",
        "name":  "Artisanal Hand-Block Printed Kurta Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  3090,
        "originalPrice":  4480,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  76,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-068",
        "sku":  "VX-MN-168",
        "name":  "Minimalist Sartorial Wool Trousers Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  3263,
        "originalPrice":  4731,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  79,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-069",
        "sku":  "VX-MN-169",
        "name":  "Single-Breasted Heritage Jodhpuri Suit Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  3436,
        "originalPrice":  4982,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  82,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-070",
        "sku":  "VX-MN-170",
        "name":  "Structured Ribbed Egyptian Cotton Polo Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  3609,
        "originalPrice":  5233,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  15,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-071",
        "sku":  "VX-MN-171",
        "name":  "Selvedge Indigo Raw Denim Jeans Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  3782,
        "originalPrice":  5484,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  18,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-072",
        "sku":  "VX-MN-172",
        "name":  "Bespoke Linen Safari Overshirt Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  3955,
        "originalPrice":  5735,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  21,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-073",
        "sku":  "VX-MN-173",
        "name":  "Double-Breasted Ivory Dinner Jacket Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  4128,
        "originalPrice":  5986,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-074",
        "sku":  "VX-MN-174",
        "name":  "Jaipur Royal Silk Kurta Pajama Set Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  4301,
        "originalPrice":  6236,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-075",
        "sku":  "VX-MN-175",
        "name":  "Tailored Relaxed Pleated Trousers Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  4474,
        "originalPrice":  6487,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-076",
        "sku":  "VX-MN-176",
        "name":  "Supima Cotton Minimal Crewneck Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  4647,
        "originalPrice":  6738,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  33,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-077",
        "sku":  "VX-MN-177",
        "name":  "Structured Mandarin Collar Shirt Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  4820,
        "originalPrice":  6989,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  36,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-078",
        "sku":  "VX-MN-178",
        "name":  "Handwoven Pashmina Winter Trench Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  4993,
        "originalPrice":  7240,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-079",
        "sku":  "VX-MN-179",
        "name":  "Signature Gold Monogram Oversized Tee Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  5166,
        "originalPrice":  7491,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-080",
        "sku":  "VX-MN-180",
        "name":  "Artisanal Silk Sherwani with Stole Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  5339,
        "originalPrice":  7742,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  45,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-081",
        "sku":  "VX-MN-181",
        "name":  "Italian Wool Tailored Waistcoat Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  5512,
        "originalPrice":  7992,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-082",
        "sku":  "VX-MN-182",
        "name":  "Relaxed Drape Silk-Linen Camp Shirt Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  5685,
        "originalPrice":  8243,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-083",
        "sku":  "VX-MN-183",
        "name":  "Japanese Raw Selvedge Slim Jeans Ed. 4",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  5858,
        "originalPrice":  8494,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  54,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-084",
        "sku":  "VX-MN-184",
        "name":  "Classic Houndstooth Tailored Overcoat Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  6031,
        "originalPrice":  8745,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-085",
        "sku":  "VX-MN-185",
        "name":  "Architectural Heavyweight Giza Tee Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  6204,
        "originalPrice":  8996,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-086",
        "sku":  "VX-MN-186",
        "name":  "Royal Jaipur Raw Silk Bandhgala Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  6377,
        "originalPrice":  9247,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  63,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-087",
        "sku":  "VX-MN-187",
        "name":  "Tailored Oxford Button-Down Shirt Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  6550,
        "originalPrice":  9498,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  66,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-088",
        "sku":  "VX-MN-188",
        "name":  "Artisanal Hand-Block Printed Kurta Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  6723,
        "originalPrice":  9748,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  69,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-089",
        "sku":  "VX-MN-189",
        "name":  "Minimalist Sartorial Wool Trousers Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  6896,
        "originalPrice":  9999,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  72,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-090",
        "sku":  "VX-MN-190",
        "name":  "Single-Breasted Heritage Jodhpuri Suit Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  7069,
        "originalPrice":  10250,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  75,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-091",
        "sku":  "VX-MN-191",
        "name":  "Structured Ribbed Egyptian Cotton Polo Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  7242,
        "originalPrice":  10501,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  78,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-092",
        "sku":  "VX-MN-192",
        "name":  "Selvedge Indigo Raw Denim Jeans Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  7415,
        "originalPrice":  10752,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  81,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-093",
        "sku":  "VX-MN-193",
        "name":  "Bespoke Linen Safari Overshirt Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  7588,
        "originalPrice":  11003,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  84,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-094",
        "sku":  "VX-MN-194",
        "name":  "Double-Breasted Ivory Dinner Jacket Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  7761,
        "originalPrice":  11253,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  17,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-095",
        "sku":  "VX-MN-195",
        "name":  "Jaipur Royal Silk Kurta Pajama Set Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  7934,
        "originalPrice":  11504,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  20,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-096",
        "sku":  "VX-MN-196",
        "name":  "Tailored Relaxed Pleated Trousers Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  8107,
        "originalPrice":  11755,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  23,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-097",
        "sku":  "VX-MN-197",
        "name":  "Supima Cotton Minimal Crewneck Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  8280,
        "originalPrice":  12006,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  26,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-098",
        "sku":  "VX-MN-198",
        "name":  "Structured Mandarin Collar Shirt Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  8453,
        "originalPrice":  12257,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  29,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-099",
        "sku":  "VX-MN-199",
        "name":  "Handwoven Pashmina Winter Trench Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "T-Shirts",
        "gender":  "men",
        "price":  8626,
        "originalPrice":  12508,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  32,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-100",
        "sku":  "VX-MN-200",
        "name":  "Signature Gold Monogram Oversized Tee Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Shirts",
        "gender":  "men",
        "price":  8799,
        "originalPrice":  12759,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  35,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-101",
        "sku":  "VX-MN-201",
        "name":  "Artisanal Silk Sherwani with Stole Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Polo T-Shirts",
        "gender":  "men",
        "price":  8972,
        "originalPrice":  13009,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  38,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-102",
        "sku":  "VX-MN-202",
        "name":  "Italian Wool Tailored Waistcoat Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "men",
        "price":  9145,
        "originalPrice":  13260,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  41,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-103",
        "sku":  "VX-MN-203",
        "name":  "Relaxed Drape Silk-Linen Camp Shirt Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "men",
        "price":  9318,
        "originalPrice":  13511,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  44,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-104",
        "sku":  "VX-MN-204",
        "name":  "Japanese Raw Selvedge Slim Jeans Ed. 5",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "men",
        "price":  9491,
        "originalPrice":  13762,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  47,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-men-105",
        "sku":  "VX-MN-205",
        "name":  "Classic Houndstooth Tailored Overcoat Ed. 6",
        "brand":  "VEXA Atelier",
        "category":  "Jeans",
        "gender":  "men",
        "price":  9664,
        "originalPrice":  14013,
        "discount":  31,
        "totalStock":  100,
        "rating":  4.5,
        "reviewCount":  50,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black",
                           "image":  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#F7F7F5",
                           "name":  "Pearl White",
                           "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "S",
                          "stock":  25
                      },
                      {
                          "size":  "M",
                          "stock":  35
                      },
                      {
                          "size":  "L",
                          "stock":  25
                      },
                      {
                          "size":  "XL",
                          "stock":  15
                      }
                  ],
        "description":  "Architectural menswear silhouette tailored in Jaipur by Harsh. Pure single-origin textile with 100 units available in stock.",
        "specs":  {
                      "fabric":  "100% Egyptian Giza Cotton / Raw Silk",
                      "fit":  "Tailored Sartorial Cut",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-001",
        "sku":  "VX-WM-201",
        "name":  "Sculpted Silk Backless Evening Gown",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  3690,
        "originalPrice":  5535,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-002",
        "sku":  "VX-WM-202",
        "name":  "Artisanal Royal Chanderi Anarkali Suit",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  3881,
        "originalPrice":  5822,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  28,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-003",
        "sku":  "VX-WM-203",
        "name":  "Minimalist Mulberry Silk Slip Dress",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  4072,
        "originalPrice":  6108,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  32,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-004",
        "sku":  "VX-WM-204",
        "name":  "Hand-Embroidered Zardozi Silk Saree",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  4263,
        "originalPrice":  6394,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  36,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-005",
        "sku":  "VX-WM-205",
        "name":  "Tailored Pure Linen Blazer Dress",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  4454,
        "originalPrice":  6681,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  40,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-006",
        "sku":  "VX-WM-206",
        "name":  "Heritage Bandhej Pure Georgette Kurti",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  4645,
        "originalPrice":  6968,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  44,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-007",
        "sku":  "VX-WM-207",
        "name":  "Architectural Draped Cowl-Neck Dress",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  4836,
        "originalPrice":  7254,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-008",
        "sku":  "VX-WM-208",
        "name":  "Pleated Monochrome High-Slit Maxi Gown",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  5027,
        "originalPrice":  7540,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  52,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-009",
        "sku":  "VX-WM-209",
        "name":  "Raw Silk Peplum Top \u0026 Trouser Co-ord",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  5218,
        "originalPrice":  7827,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  56,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-010",
        "sku":  "VX-WM-210",
        "name":  "Bespoke Bridal Velvet Embroidered Lehenga",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  5409,
        "originalPrice":  8114,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-011",
        "sku":  "VX-WM-211",
        "name":  "Artisanal Gold Leaf Block-Print Kurti",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  5600,
        "originalPrice":  8400,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  64,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-012",
        "sku":  "VX-WM-212",
        "name":  "Structured Poplin Wrap Midi Dress",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  5791,
        "originalPrice":  8686,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  68,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-013",
        "sku":  "VX-WM-213",
        "name":  "Tiered Organza Flutter Sleeve Dress",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  5982,
        "originalPrice":  8973,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  72,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-014",
        "sku":  "VX-WM-214",
        "name":  "Double-Breasted Wool Pant Suit Set",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  6173,
        "originalPrice":  9260,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  76,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-015",
        "sku":  "VX-WM-215",
        "name":  "Brocade Silk Tailored Trench Coat",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  6364,
        "originalPrice":  9546,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  80,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-016",
        "sku":  "VX-WM-216",
        "name":  "Minimalist Cutout Ribbed Midi Dress",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  6555,
        "originalPrice":  9832,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  84,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-017",
        "sku":  "VX-WM-217",
        "name":  "Floral Embroidered Royal Silk Kurta Set",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  6746,
        "originalPrice":  10119,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  88,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-018",
        "sku":  "VX-WM-218",
        "name":  "Ethereal Chiffon One-Shoulder Evening Dress",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  6937,
        "originalPrice":  10406,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  92,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-019",
        "sku":  "VX-WM-219",
        "name":  "Handloom Tussar Silk Saree with Blouse",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  7128,
        "originalPrice":  10692,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  96,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-020",
        "sku":  "VX-WM-220",
        "name":  "Tailored Wide-Leg Linen Trouser \u0026 Vest",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  7319,
        "originalPrice":  10978,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  100,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-021",
        "sku":  "VX-WM-221",
        "name":  "Asymmetric Draped Satin Evening Dress",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  7510,
        "originalPrice":  11265,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  104,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-022",
        "sku":  "VX-WM-222",
        "name":  "Sculpted Silk Backless Evening Gown Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  7701,
        "originalPrice":  11552,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  23,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-023",
        "sku":  "VX-WM-223",
        "name":  "Artisanal Royal Chanderi Anarkali Suit Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  7892,
        "originalPrice":  11838,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-024",
        "sku":  "VX-WM-224",
        "name":  "Minimalist Mulberry Silk Slip Dress Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  8083,
        "originalPrice":  12124,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  31,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-025",
        "sku":  "VX-WM-225",
        "name":  "Hand-Embroidered Zardozi Silk Saree Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  8274,
        "originalPrice":  12411,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  35,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-026",
        "sku":  "VX-WM-226",
        "name":  "Tailored Pure Linen Blazer Dress Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  8465,
        "originalPrice":  12698,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-027",
        "sku":  "VX-WM-227",
        "name":  "Heritage Bandhej Pure Georgette Kurti Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  8656,
        "originalPrice":  12984,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  43,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-028",
        "sku":  "VX-WM-228",
        "name":  "Architectural Draped Cowl-Neck Dress Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  8847,
        "originalPrice":  13270,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  47,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-029",
        "sku":  "VX-WM-229",
        "name":  "Pleated Monochrome High-Slit Maxi Gown Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  9038,
        "originalPrice":  13557,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-030",
        "sku":  "VX-WM-230",
        "name":  "Raw Silk Peplum Top \u0026 Trouser Co-ord Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  9229,
        "originalPrice":  13844,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  55,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-031",
        "sku":  "VX-WM-231",
        "name":  "Bespoke Bridal Velvet Embroidered Lehenga Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  9420,
        "originalPrice":  14130,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  59,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-032",
        "sku":  "VX-WM-232",
        "name":  "Artisanal Gold Leaf Block-Print Kurti Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  9611,
        "originalPrice":  14416,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  63,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-033",
        "sku":  "VX-WM-233",
        "name":  "Structured Poplin Wrap Midi Dress Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  9802,
        "originalPrice":  14703,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  67,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-034",
        "sku":  "VX-WM-234",
        "name":  "Tiered Organza Flutter Sleeve Dress Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  9993,
        "originalPrice":  14990,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  71,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-035",
        "sku":  "VX-WM-235",
        "name":  "Double-Breasted Wool Pant Suit Set Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  10184,
        "originalPrice":  15276,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  75,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-036",
        "sku":  "VX-WM-236",
        "name":  "Brocade Silk Tailored Trench Coat Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  10375,
        "originalPrice":  15562,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  79,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-037",
        "sku":  "VX-WM-237",
        "name":  "Minimalist Cutout Ribbed Midi Dress Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  10566,
        "originalPrice":  15849,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  83,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-038",
        "sku":  "VX-WM-238",
        "name":  "Floral Embroidered Royal Silk Kurta Set Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  10757,
        "originalPrice":  16136,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  87,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-039",
        "sku":  "VX-WM-239",
        "name":  "Ethereal Chiffon One-Shoulder Evening Dress Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  10948,
        "originalPrice":  16422,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  91,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-040",
        "sku":  "VX-WM-240",
        "name":  "Handloom Tussar Silk Saree with Blouse Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  11139,
        "originalPrice":  16708,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  95,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-041",
        "sku":  "VX-WM-241",
        "name":  "Tailored Wide-Leg Linen Trouser \u0026 Vest Series 2",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  11330,
        "originalPrice":  16995,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  99,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-042",
        "sku":  "VX-WM-242",
        "name":  "Asymmetric Draped Satin Evening Dress Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  11521,
        "originalPrice":  17282,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  103,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-043",
        "sku":  "VX-WM-243",
        "name":  "Sculpted Silk Backless Evening Gown Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  11712,
        "originalPrice":  17568,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  22,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-044",
        "sku":  "VX-WM-244",
        "name":  "Artisanal Royal Chanderi Anarkali Suit Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  11903,
        "originalPrice":  17854,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  26,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-045",
        "sku":  "VX-WM-245",
        "name":  "Minimalist Mulberry Silk Slip Dress Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  12094,
        "originalPrice":  18141,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  30,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-046",
        "sku":  "VX-WM-246",
        "name":  "Hand-Embroidered Zardozi Silk Saree Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  12285,
        "originalPrice":  18428,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  34,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-047",
        "sku":  "VX-WM-247",
        "name":  "Tailored Pure Linen Blazer Dress Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  12476,
        "originalPrice":  18714,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  38,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-048",
        "sku":  "VX-WM-248",
        "name":  "Heritage Bandhej Pure Georgette Kurti Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  12667,
        "originalPrice":  19000,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  42,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-049",
        "sku":  "VX-WM-249",
        "name":  "Architectural Draped Cowl-Neck Dress Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  12858,
        "originalPrice":  19287,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  46,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-050",
        "sku":  "VX-WM-250",
        "name":  "Pleated Monochrome High-Slit Maxi Gown Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  13049,
        "originalPrice":  19574,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  50,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-051",
        "sku":  "VX-WM-251",
        "name":  "Raw Silk Peplum Top \u0026 Trouser Co-ord Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  13240,
        "originalPrice":  19860,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  54,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-052",
        "sku":  "VX-WM-252",
        "name":  "Bespoke Bridal Velvet Embroidered Lehenga Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  13431,
        "originalPrice":  20146,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  58,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-053",
        "sku":  "VX-WM-253",
        "name":  "Artisanal Gold Leaf Block-Print Kurti Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  13622,
        "originalPrice":  20433,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  62,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-054",
        "sku":  "VX-WM-254",
        "name":  "Structured Poplin Wrap Midi Dress Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  13813,
        "originalPrice":  20720,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  66,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-055",
        "sku":  "VX-WM-255",
        "name":  "Tiered Organza Flutter Sleeve Dress Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  14004,
        "originalPrice":  21006,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  70,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-056",
        "sku":  "VX-WM-256",
        "name":  "Double-Breasted Wool Pant Suit Set Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  14195,
        "originalPrice":  21292,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  74,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-057",
        "sku":  "VX-WM-257",
        "name":  "Brocade Silk Tailored Trench Coat Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  14386,
        "originalPrice":  21579,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  78,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-058",
        "sku":  "VX-WM-258",
        "name":  "Minimalist Cutout Ribbed Midi Dress Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  14577,
        "originalPrice":  21866,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  82,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-059",
        "sku":  "VX-WM-259",
        "name":  "Floral Embroidered Royal Silk Kurta Set Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  14768,
        "originalPrice":  22152,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  86,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-060",
        "sku":  "VX-WM-260",
        "name":  "Ethereal Chiffon One-Shoulder Evening Dress Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  14959,
        "originalPrice":  22438,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  90,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-061",
        "sku":  "VX-WM-261",
        "name":  "Handloom Tussar Silk Saree with Blouse Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  15150,
        "originalPrice":  22725,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  94,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-062",
        "sku":  "VX-WM-262",
        "name":  "Tailored Wide-Leg Linen Trouser \u0026 Vest Series 3",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  15341,
        "originalPrice":  23012,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  98,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-063",
        "sku":  "VX-WM-263",
        "name":  "Asymmetric Draped Satin Evening Dress Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  15532,
        "originalPrice":  23298,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  102,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-064",
        "sku":  "VX-WM-264",
        "name":  "Sculpted Silk Backless Evening Gown Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  15723,
        "originalPrice":  23584,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-065",
        "sku":  "VX-WM-265",
        "name":  "Artisanal Royal Chanderi Anarkali Suit Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  15914,
        "originalPrice":  23871,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  25,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-066",
        "sku":  "VX-WM-266",
        "name":  "Minimalist Mulberry Silk Slip Dress Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  16105,
        "originalPrice":  24158,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  29,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-067",
        "sku":  "VX-WM-267",
        "name":  "Hand-Embroidered Zardozi Silk Saree Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  16296,
        "originalPrice":  24444,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-068",
        "sku":  "VX-WM-268",
        "name":  "Tailored Pure Linen Blazer Dress Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  16487,
        "originalPrice":  24730,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  37,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-069",
        "sku":  "VX-WM-269",
        "name":  "Heritage Bandhej Pure Georgette Kurti Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  16678,
        "originalPrice":  25017,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  41,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-070",
        "sku":  "VX-WM-270",
        "name":  "Architectural Draped Cowl-Neck Dress Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  16869,
        "originalPrice":  25304,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  45,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-071",
        "sku":  "VX-WM-271",
        "name":  "Pleated Monochrome High-Slit Maxi Gown Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  17060,
        "originalPrice":  25590,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  49,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-072",
        "sku":  "VX-WM-272",
        "name":  "Raw Silk Peplum Top \u0026 Trouser Co-ord Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  17251,
        "originalPrice":  25876,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  53,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-073",
        "sku":  "VX-WM-273",
        "name":  "Bespoke Bridal Velvet Embroidered Lehenga Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  17442,
        "originalPrice":  26163,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-074",
        "sku":  "VX-WM-274",
        "name":  "Artisanal Gold Leaf Block-Print Kurti Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  3633,
        "originalPrice":  5450,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  61,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-075",
        "sku":  "VX-WM-275",
        "name":  "Structured Poplin Wrap Midi Dress Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  3824,
        "originalPrice":  5736,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  65,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-076",
        "sku":  "VX-WM-276",
        "name":  "Tiered Organza Flutter Sleeve Dress Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  4015,
        "originalPrice":  6022,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  69,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-077",
        "sku":  "VX-WM-277",
        "name":  "Double-Breasted Wool Pant Suit Set Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  4206,
        "originalPrice":  6309,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  73,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-078",
        "sku":  "VX-WM-278",
        "name":  "Brocade Silk Tailored Trench Coat Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  4397,
        "originalPrice":  6596,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  77,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-079",
        "sku":  "VX-WM-279",
        "name":  "Minimalist Cutout Ribbed Midi Dress Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  4588,
        "originalPrice":  6882,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  81,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-080",
        "sku":  "VX-WM-280",
        "name":  "Floral Embroidered Royal Silk Kurta Set Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  4779,
        "originalPrice":  7168,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  85,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-081",
        "sku":  "VX-WM-281",
        "name":  "Ethereal Chiffon One-Shoulder Evening Dress Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  4970,
        "originalPrice":  7455,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  89,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-082",
        "sku":  "VX-WM-282",
        "name":  "Handloom Tussar Silk Saree with Blouse Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  5161,
        "originalPrice":  7742,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  93,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-083",
        "sku":  "VX-WM-283",
        "name":  "Tailored Wide-Leg Linen Trouser \u0026 Vest Series 4",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  5352,
        "originalPrice":  8028,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  97,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-084",
        "sku":  "VX-WM-284",
        "name":  "Asymmetric Draped Satin Evening Dress Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  5543,
        "originalPrice":  8314,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  101,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-085",
        "sku":  "VX-WM-285",
        "name":  "Sculpted Silk Backless Evening Gown Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  5734,
        "originalPrice":  8601,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  20,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-086",
        "sku":  "VX-WM-286",
        "name":  "Artisanal Royal Chanderi Anarkali Suit Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  5925,
        "originalPrice":  8888,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-087",
        "sku":  "VX-WM-287",
        "name":  "Minimalist Mulberry Silk Slip Dress Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  6116,
        "originalPrice":  9174,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  28,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-088",
        "sku":  "VX-WM-288",
        "name":  "Hand-Embroidered Zardozi Silk Saree Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  6307,
        "originalPrice":  9460,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  32,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-089",
        "sku":  "VX-WM-289",
        "name":  "Tailored Pure Linen Blazer Dress Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  6498,
        "originalPrice":  9747,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  36,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-090",
        "sku":  "VX-WM-290",
        "name":  "Heritage Bandhej Pure Georgette Kurti Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  6689,
        "originalPrice":  10034,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  40,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-091",
        "sku":  "VX-WM-291",
        "name":  "Architectural Draped Cowl-Neck Dress Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  6880,
        "originalPrice":  10320,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  44,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-092",
        "sku":  "VX-WM-292",
        "name":  "Pleated Monochrome High-Slit Maxi Gown Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  7071,
        "originalPrice":  10606,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-093",
        "sku":  "VX-WM-293",
        "name":  "Raw Silk Peplum Top \u0026 Trouser Co-ord Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  7262,
        "originalPrice":  10893,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  52,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-094",
        "sku":  "VX-WM-294",
        "name":  "Bespoke Bridal Velvet Embroidered Lehenga Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  7453,
        "originalPrice":  11180,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  56,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-095",
        "sku":  "VX-WM-295",
        "name":  "Artisanal Gold Leaf Block-Print Kurti Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  7644,
        "originalPrice":  11466,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-096",
        "sku":  "VX-WM-296",
        "name":  "Structured Poplin Wrap Midi Dress Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  7835,
        "originalPrice":  11752,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  64,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-097",
        "sku":  "VX-WM-297",
        "name":  "Tiered Organza Flutter Sleeve Dress Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  8026,
        "originalPrice":  12039,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  68,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-098",
        "sku":  "VX-WM-298",
        "name":  "Double-Breasted Wool Pant Suit Set Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  8217,
        "originalPrice":  12326,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  72,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-099",
        "sku":  "VX-WM-299",
        "name":  "Brocade Silk Tailored Trench Coat Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  8408,
        "originalPrice":  12612,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  76,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-100",
        "sku":  "VX-WM-300",
        "name":  "Minimalist Cutout Ribbed Midi Dress Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Tops",
        "gender":  "women",
        "price":  8599,
        "originalPrice":  12898,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  80,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-101",
        "sku":  "VX-WM-301",
        "name":  "Floral Embroidered Royal Silk Kurta Set Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Trousers",
        "gender":  "women",
        "price":  8790,
        "originalPrice":  13185,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  84,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-102",
        "sku":  "VX-WM-302",
        "name":  "Ethereal Chiffon One-Shoulder Evening Dress Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Jackets",
        "gender":  "women",
        "price":  8981,
        "originalPrice":  13472,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  88,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-103",
        "sku":  "VX-WM-303",
        "name":  "Handloom Tussar Silk Saree with Blouse Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Dresses",
        "gender":  "women",
        "price":  9172,
        "originalPrice":  13758,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  92,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-104",
        "sku":  "VX-WM-304",
        "name":  "Tailored Wide-Leg Linen Trouser \u0026 Vest Series 5",
        "brand":  "VEXA Atelier",
        "category":  "Co-ord Sets",
        "gender":  "women",
        "price":  9363,
        "originalPrice":  14044,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.6,
        "reviewCount":  96,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-women-105",
        "sku":  "VX-WM-305",
        "name":  "Asymmetric Draped Satin Evening Dress Series 6",
        "brand":  "VEXA Atelier",
        "category":  "Ethnic Wear",
        "gender":  "women",
        "price":  9554,
        "originalPrice":  14331,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  100,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#FAF9F6",
                           "name":  "Soft Ivory",
                           "image":  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#E8DFD0",
                           "name":  "Champagne Gold",
                           "image":  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "XS",
                          "stock":  20
                      },
                      {
                          "size":  "S",
                          "stock":  30
                      },
                      {
                          "size":  "M",
                          "stock":  30
                      },
                      {
                          "size":  "L",
                          "stock":  20
                      }
                  ],
        "description":  "Sculptural luxury dress and couture drape handcrafted in Jaipur. 100 units in stock with price guarantee.",
        "specs":  {
                      "fabric":  "100% Pure Mulberry Silk / Handwoven Chanderi",
                      "fit":  "Tailored Sculpted Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-001",
        "sku":  "VX-FW-301",
        "name":  "Minimal Low-Top Italian Calfskin Sneaker",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4222,
        "originalPrice":  6333,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  26,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-002",
        "sku":  "VX-FW-302",
        "name":  "Blake-Stitched Leather Penny Loafer",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4445,
        "originalPrice":  6668,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  28,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-003",
        "sku":  "VX-FW-303",
        "name":  "Belgian Suede Tassel Loafer",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4668,
        "originalPrice":  7002,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-004",
        "sku":  "VX-FW-304",
        "name":  "Handcrafted Royal Leather Mojari Jutti",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4891,
        "originalPrice":  7336,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  32,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-005",
        "sku":  "VX-FW-305",
        "name":  "Wholecut Oxford Hand-Burnished Shoes",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5114,
        "originalPrice":  7671,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  34,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-006",
        "sku":  "VX-FW-306",
        "name":  "Monochrome Leather Chunky Trainer",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5337,
        "originalPrice":  8006,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  36,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-007",
        "sku":  "VX-FW-307",
        "name":  "Suede Chelsea Ankle Boot with Leather Sole",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5560,
        "originalPrice":  8340,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  38,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-008",
        "sku":  "VX-FW-308",
        "name":  "Artisanal Monk Strap Goodyear Welted Shoe",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5783,
        "originalPrice":  8674,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  40,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-009",
        "sku":  "VX-FW-309",
        "name":  "Perforated Minimal Court Tennis Sneaker",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6006,
        "originalPrice":  9009,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-010",
        "sku":  "VX-FW-310",
        "name":  "Horsebit Gold Buckle Velvet Loafer",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6229,
        "originalPrice":  9344,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  44,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-011",
        "sku":  "VX-FW-311",
        "name":  "Full-Grain Leather Chukka Derby Boot",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6452,
        "originalPrice":  9678,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  46,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-012",
        "sku":  "VX-FW-312",
        "name":  "Architectural Platform Luxury Sneaker",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6675,
        "originalPrice":  10012,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  48,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-013",
        "sku":  "VX-FW-313",
        "name":  "Handwoven Leather Slip-On Mule",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6898,
        "originalPrice":  10347,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  50,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-014",
        "sku":  "VX-FW-314",
        "name":  "Artisanal Woven Leather Driving Shoe",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7121,
        "originalPrice":  10682,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  52,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-015",
        "sku":  "VX-FW-315",
        "name":  "Two-Tone Saddle Oxford Brogue",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7344,
        "originalPrice":  11016,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  54,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-016",
        "sku":  "VX-FW-316",
        "name":  "Minimalist Off-White Leather Runner",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7567,
        "originalPrice":  11350,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  56,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-017",
        "sku":  "VX-FW-317",
        "name":  "Raw Suede Handcrafted Desert Boot",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7790,
        "originalPrice":  11685,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  58,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-018",
        "sku":  "VX-FW-318",
        "name":  "Patent Leather Black Tie Tuxedo Shoe",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8013,
        "originalPrice":  12020,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-019",
        "sku":  "VX-FW-319",
        "name":  "Gold-Embroidered Wedding Mojari Jutti",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8236,
        "originalPrice":  12354,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  62,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-020",
        "sku":  "VX-FW-320",
        "name":  "Minimal Retro Gum-Sole Leather Trainer",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8459,
        "originalPrice":  12688,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  64,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-021",
        "sku":  "VX-FW-321",
        "name":  "Hand-Stitched Tassel Belgian Slippers",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8682,
        "originalPrice":  13023,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  66,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-022",
        "sku":  "VX-FW-322",
        "name":  "Minimal Low-Top Italian Calfskin Sneaker Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8905,
        "originalPrice":  13358,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  68,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-023",
        "sku":  "VX-FW-323",
        "name":  "Blake-Stitched Leather Penny Loafer Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9128,
        "originalPrice":  13692,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  70,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-024",
        "sku":  "VX-FW-324",
        "name":  "Belgian Suede Tassel Loafer Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9351,
        "originalPrice":  14026,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  72,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-025",
        "sku":  "VX-FW-325",
        "name":  "Handcrafted Royal Leather Mojari Jutti Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9574,
        "originalPrice":  14361,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  74,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-026",
        "sku":  "VX-FW-326",
        "name":  "Wholecut Oxford Hand-Burnished Shoes Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9797,
        "originalPrice":  14696,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  76,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-027",
        "sku":  "VX-FW-327",
        "name":  "Monochrome Leather Chunky Trainer Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10020,
        "originalPrice":  15030,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  78,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-028",
        "sku":  "VX-FW-328",
        "name":  "Suede Chelsea Ankle Boot with Leather Sole Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10243,
        "originalPrice":  15364,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  80,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-029",
        "sku":  "VX-FW-329",
        "name":  "Artisanal Monk Strap Goodyear Welted Shoe Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10466,
        "originalPrice":  15699,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  82,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-030",
        "sku":  "VX-FW-330",
        "name":  "Perforated Minimal Court Tennis Sneaker Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10689,
        "originalPrice":  16034,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-031",
        "sku":  "VX-FW-331",
        "name":  "Horsebit Gold Buckle Velvet Loafer Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10912,
        "originalPrice":  16368,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  26,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-032",
        "sku":  "VX-FW-332",
        "name":  "Full-Grain Leather Chukka Derby Boot Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11135,
        "originalPrice":  16702,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  28,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-033",
        "sku":  "VX-FW-333",
        "name":  "Architectural Platform Luxury Sneaker Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11358,
        "originalPrice":  17037,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-034",
        "sku":  "VX-FW-334",
        "name":  "Handwoven Leather Slip-On Mule Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11581,
        "originalPrice":  17372,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  32,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-035",
        "sku":  "VX-FW-335",
        "name":  "Artisanal Woven Leather Driving Shoe Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11804,
        "originalPrice":  17706,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  34,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-036",
        "sku":  "VX-FW-336",
        "name":  "Two-Tone Saddle Oxford Brogue Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12027,
        "originalPrice":  18040,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-037",
        "sku":  "VX-FW-337",
        "name":  "Minimalist Off-White Leather Runner Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12250,
        "originalPrice":  18375,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  38,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-038",
        "sku":  "VX-FW-338",
        "name":  "Raw Suede Handcrafted Desert Boot Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12473,
        "originalPrice":  18710,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  40,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-039",
        "sku":  "VX-FW-339",
        "name":  "Patent Leather Black Tie Tuxedo Shoe Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12696,
        "originalPrice":  19044,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-040",
        "sku":  "VX-FW-340",
        "name":  "Gold-Embroidered Wedding Mojari Jutti Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12919,
        "originalPrice":  19378,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  44,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-041",
        "sku":  "VX-FW-341",
        "name":  "Minimal Retro Gum-Sole Leather Trainer Mark 2",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13142,
        "originalPrice":  19713,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  46,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-042",
        "sku":  "VX-FW-342",
        "name":  "Hand-Stitched Tassel Belgian Slippers Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13365,
        "originalPrice":  20048,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-043",
        "sku":  "VX-FW-343",
        "name":  "Minimal Low-Top Italian Calfskin Sneaker Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13588,
        "originalPrice":  20382,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  50,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-044",
        "sku":  "VX-FW-344",
        "name":  "Blake-Stitched Leather Penny Loafer Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13811,
        "originalPrice":  20716,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  52,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-045",
        "sku":  "VX-FW-345",
        "name":  "Belgian Suede Tassel Loafer Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14034,
        "originalPrice":  21051,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  54,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-046",
        "sku":  "VX-FW-346",
        "name":  "Handcrafted Royal Leather Mojari Jutti Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14257,
        "originalPrice":  21386,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  56,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-047",
        "sku":  "VX-FW-347",
        "name":  "Wholecut Oxford Hand-Burnished Shoes Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14480,
        "originalPrice":  21720,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  58,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-048",
        "sku":  "VX-FW-348",
        "name":  "Monochrome Leather Chunky Trainer Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14703,
        "originalPrice":  22054,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  60,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-049",
        "sku":  "VX-FW-349",
        "name":  "Suede Chelsea Ankle Boot with Leather Sole Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14926,
        "originalPrice":  22389,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  62,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-050",
        "sku":  "VX-FW-350",
        "name":  "Artisanal Monk Strap Goodyear Welted Shoe Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4149,
        "originalPrice":  6224,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  64,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-051",
        "sku":  "VX-FW-351",
        "name":  "Perforated Minimal Court Tennis Sneaker Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4372,
        "originalPrice":  6558,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  66,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-052",
        "sku":  "VX-FW-352",
        "name":  "Horsebit Gold Buckle Velvet Loafer Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4595,
        "originalPrice":  6892,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  68,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-053",
        "sku":  "VX-FW-353",
        "name":  "Full-Grain Leather Chukka Derby Boot Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4818,
        "originalPrice":  7227,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  70,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-054",
        "sku":  "VX-FW-354",
        "name":  "Architectural Platform Luxury Sneaker Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5041,
        "originalPrice":  7562,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  72,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-055",
        "sku":  "VX-FW-355",
        "name":  "Handwoven Leather Slip-On Mule Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5264,
        "originalPrice":  7896,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  74,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-056",
        "sku":  "VX-FW-356",
        "name":  "Artisanal Woven Leather Driving Shoe Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5487,
        "originalPrice":  8230,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  76,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-057",
        "sku":  "VX-FW-357",
        "name":  "Two-Tone Saddle Oxford Brogue Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5710,
        "originalPrice":  8565,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  78,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-058",
        "sku":  "VX-FW-358",
        "name":  "Minimalist Off-White Leather Runner Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5933,
        "originalPrice":  8900,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  80,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-059",
        "sku":  "VX-FW-359",
        "name":  "Raw Suede Handcrafted Desert Boot Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6156,
        "originalPrice":  9234,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  82,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-060",
        "sku":  "VX-FW-360",
        "name":  "Patent Leather Black Tie Tuxedo Shoe Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6379,
        "originalPrice":  9568,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  24,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-061",
        "sku":  "VX-FW-361",
        "name":  "Gold-Embroidered Wedding Mojari Jutti Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6602,
        "originalPrice":  9903,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  26,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-062",
        "sku":  "VX-FW-362",
        "name":  "Minimal Retro Gum-Sole Leather Trainer Mark 3",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  6825,
        "originalPrice":  10238,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  28,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-063",
        "sku":  "VX-FW-363",
        "name":  "Hand-Stitched Tassel Belgian Slippers Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7048,
        "originalPrice":  10572,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-064",
        "sku":  "VX-FW-364",
        "name":  "Minimal Low-Top Italian Calfskin Sneaker Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7271,
        "originalPrice":  10906,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  32,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-065",
        "sku":  "VX-FW-365",
        "name":  "Blake-Stitched Leather Penny Loafer Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7494,
        "originalPrice":  11241,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  34,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-066",
        "sku":  "VX-FW-366",
        "name":  "Belgian Suede Tassel Loafer Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7717,
        "originalPrice":  11576,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  36,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-067",
        "sku":  "VX-FW-367",
        "name":  "Handcrafted Royal Leather Mojari Jutti Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  7940,
        "originalPrice":  11910,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  38,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-068",
        "sku":  "VX-FW-368",
        "name":  "Wholecut Oxford Hand-Burnished Shoes Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8163,
        "originalPrice":  12244,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  40,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-069",
        "sku":  "VX-FW-369",
        "name":  "Monochrome Leather Chunky Trainer Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8386,
        "originalPrice":  12579,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-070",
        "sku":  "VX-FW-370",
        "name":  "Suede Chelsea Ankle Boot with Leather Sole Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8609,
        "originalPrice":  12914,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  44,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-071",
        "sku":  "VX-FW-371",
        "name":  "Artisanal Monk Strap Goodyear Welted Shoe Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  8832,
        "originalPrice":  13248,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  46,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-072",
        "sku":  "VX-FW-372",
        "name":  "Perforated Minimal Court Tennis Sneaker Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9055,
        "originalPrice":  13582,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  48,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-073",
        "sku":  "VX-FW-373",
        "name":  "Horsebit Gold Buckle Velvet Loafer Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9278,
        "originalPrice":  13917,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  50,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-074",
        "sku":  "VX-FW-374",
        "name":  "Full-Grain Leather Chukka Derby Boot Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9501,
        "originalPrice":  14252,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  52,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-075",
        "sku":  "VX-FW-375",
        "name":  "Architectural Platform Luxury Sneaker Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9724,
        "originalPrice":  14586,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  54,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-076",
        "sku":  "VX-FW-376",
        "name":  "Handwoven Leather Slip-On Mule Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  9947,
        "originalPrice":  14920,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  56,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-077",
        "sku":  "VX-FW-377",
        "name":  "Artisanal Woven Leather Driving Shoe Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10170,
        "originalPrice":  15255,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  58,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-078",
        "sku":  "VX-FW-378",
        "name":  "Two-Tone Saddle Oxford Brogue Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10393,
        "originalPrice":  15590,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-079",
        "sku":  "VX-FW-379",
        "name":  "Minimalist Off-White Leather Runner Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10616,
        "originalPrice":  15924,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  62,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-080",
        "sku":  "VX-FW-380",
        "name":  "Raw Suede Handcrafted Desert Boot Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  10839,
        "originalPrice":  16258,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  64,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-081",
        "sku":  "VX-FW-381",
        "name":  "Patent Leather Black Tie Tuxedo Shoe Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11062,
        "originalPrice":  16593,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  66,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-082",
        "sku":  "VX-FW-382",
        "name":  "Gold-Embroidered Wedding Mojari Jutti Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11285,
        "originalPrice":  16928,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  68,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-083",
        "sku":  "VX-FW-383",
        "name":  "Minimal Retro Gum-Sole Leather Trainer Mark 4",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11508,
        "originalPrice":  17262,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  70,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-084",
        "sku":  "VX-FW-384",
        "name":  "Hand-Stitched Tassel Belgian Slippers Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11731,
        "originalPrice":  17596,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  72,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-085",
        "sku":  "VX-FW-385",
        "name":  "Minimal Low-Top Italian Calfskin Sneaker Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  11954,
        "originalPrice":  17931,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  74,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-086",
        "sku":  "VX-FW-386",
        "name":  "Blake-Stitched Leather Penny Loafer Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12177,
        "originalPrice":  18266,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  76,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-087",
        "sku":  "VX-FW-387",
        "name":  "Belgian Suede Tassel Loafer Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12400,
        "originalPrice":  18600,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  78,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-088",
        "sku":  "VX-FW-388",
        "name":  "Handcrafted Royal Leather Mojari Jutti Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12623,
        "originalPrice":  18934,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  80,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-089",
        "sku":  "VX-FW-389",
        "name":  "Wholecut Oxford Hand-Burnished Shoes Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  12846,
        "originalPrice":  19269,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  82,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-090",
        "sku":  "VX-FW-390",
        "name":  "Monochrome Leather Chunky Trainer Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13069,
        "originalPrice":  19604,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-091",
        "sku":  "VX-FW-391",
        "name":  "Suede Chelsea Ankle Boot with Leather Sole Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13292,
        "originalPrice":  19938,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  26,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-092",
        "sku":  "VX-FW-392",
        "name":  "Artisanal Monk Strap Goodyear Welted Shoe Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13515,
        "originalPrice":  20272,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  28,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-093",
        "sku":  "VX-FW-393",
        "name":  "Perforated Minimal Court Tennis Sneaker Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13738,
        "originalPrice":  20607,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-094",
        "sku":  "VX-FW-394",
        "name":  "Horsebit Gold Buckle Velvet Loafer Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  13961,
        "originalPrice":  20942,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  32,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-095",
        "sku":  "VX-FW-395",
        "name":  "Full-Grain Leather Chukka Derby Boot Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14184,
        "originalPrice":  21276,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  34,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-096",
        "sku":  "VX-FW-396",
        "name":  "Architectural Platform Luxury Sneaker Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14407,
        "originalPrice":  21610,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-097",
        "sku":  "VX-FW-397",
        "name":  "Handwoven Leather Slip-On Mule Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14630,
        "originalPrice":  21945,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  38,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-098",
        "sku":  "VX-FW-398",
        "name":  "Artisanal Woven Leather Driving Shoe Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  14853,
        "originalPrice":  22280,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  40,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-099",
        "sku":  "VX-FW-399",
        "name":  "Two-Tone Saddle Oxford Brogue Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4076,
        "originalPrice":  6114,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-100",
        "sku":  "VX-FW-400",
        "name":  "Minimalist Off-White Leather Runner Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4299,
        "originalPrice":  6448,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  44,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-101",
        "sku":  "VX-FW-401",
        "name":  "Raw Suede Handcrafted Desert Boot Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Sneakers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4522,
        "originalPrice":  6783,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  46,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-102",
        "sku":  "VX-FW-402",
        "name":  "Patent Leather Black Tie Tuxedo Shoe Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Formal Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4745,
        "originalPrice":  7118,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-103",
        "sku":  "VX-FW-403",
        "name":  "Gold-Embroidered Wedding Mojari Jutti Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Artisanal Loafers",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  4968,
        "originalPrice":  7452,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.8,
        "reviewCount":  50,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-104",
        "sku":  "VX-FW-404",
        "name":  "Minimal Retro Gum-Sole Leather Trainer Mark 5",
        "brand":  "VEXA Atelier",
        "category":  "Casual Footwear",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5191,
        "originalPrice":  7786,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  52,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-footwear-105",
        "sku":  "VX-FW-405",
        "name":  "Hand-Stitched Tassel Belgian Slippers Mark 6",
        "brand":  "VEXA Atelier",
        "category":  "Sports Shoes",
        "gender":  "footwear",
        "isFootwear":  true,
        "price":  5414,
        "originalPrice":  8121,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.7,
        "reviewCount":  54,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#111111",
                           "name":  "Matte Black Calfskin",
                           "image":  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#D8C18B",
                           "name":  "Warm Tan Suede",
                           "image":  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "40",
                          "stock":  20
                      },
                      {
                          "size":  "41",
                          "stock":  25
                      },
                      {
                          "size":  "42",
                          "stock":  30
                      },
                      {
                          "size":  "43",
                          "stock":  15
                      },
                      {
                          "size":  "44",
                          "stock":  10
                      }
                  ],
        "description":  "Handcrafted footwear using Blake-stitched Italian calfskin. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Italian Calfskin / Leather Sole",
                      "fit":  "Ergonomic Luxury Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-001",
        "sku":  "VX-AC-401",
        "name":  "Full-Grain Leather Belt with 24K Gold Buckle",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  1636,
        "originalPrice":  2454,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-002",
        "sku":  "VX-AC-402",
        "name":  "Mulberry Silk Pocket Square Hand-Rolled",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  1773,
        "originalPrice":  2660,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-003",
        "sku":  "VX-AC-403",
        "name":  "Solid Brass Monogram Cufflinks",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  1910,
        "originalPrice":  2865,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-004",
        "sku":  "VX-AC-404",
        "name":  "Structured Vegetable-Tanned Leather Tote",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  2047,
        "originalPrice":  3070,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-005",
        "sku":  "VX-AC-405",
        "name":  "Minimalist Black Leather Cardholder",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  2184,
        "originalPrice":  3276,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-006",
        "sku":  "VX-AC-406",
        "name":  "Japanese Titanium Architectural Sunglasses",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  2321,
        "originalPrice":  3482,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-007",
        "sku":  "VX-AC-407",
        "name":  "Cashmere \u0026 Mulberry Silk Jacquard Scarf",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  2458,
        "originalPrice":  3687,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-008",
        "sku":  "VX-AC-408",
        "name":  "Structured Crossbody Leather Camera Bag",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  2595,
        "originalPrice":  3892,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-009",
        "sku":  "VX-AC-409",
        "name":  "Hand-Polished Brass Lapel Pin Set",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  2732,
        "originalPrice":  4098,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  45,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-010",
        "sku":  "VX-AC-410",
        "name":  "Reversible Smooth Calfskin Dress Belt",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  2869,
        "originalPrice":  4304,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-011",
        "sku":  "VX-AC-411",
        "name":  "Leather Document Folio with Gold Zipper",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  3006,
        "originalPrice":  4509,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-012",
        "sku":  "VX-AC-412",
        "name":  "Acetate Polarized Geometric Sunglasses",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  3143,
        "originalPrice":  4714,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  54,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-013",
        "sku":  "VX-AC-413",
        "name":  "Signature Minimalist Monogram Cap",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  3280,
        "originalPrice":  4920,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-014",
        "sku":  "VX-AC-414",
        "name":  "Braided Leather Luxury Key Fob",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  3417,
        "originalPrice":  5126,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-015",
        "sku":  "VX-AC-415",
        "name":  "Silk Brocade Formal Cummerbund \u0026 Bowtie Set",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  3554,
        "originalPrice":  5331,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  18,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-016",
        "sku":  "VX-AC-416",
        "name":  "Hand-Burnished Leather Travel Duffle",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  3691,
        "originalPrice":  5536,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-017",
        "sku":  "VX-AC-417",
        "name":  "Engraved Stainless Steel Money Clip",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  3828,
        "originalPrice":  5742,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-018",
        "sku":  "VX-AC-418",
        "name":  "Handloom Pashmina Winter Muffler",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  3965,
        "originalPrice":  5948,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-019",
        "sku":  "VX-AC-419",
        "name":  "Classic Acetate Aviator Sunglasses",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  4102,
        "originalPrice":  6153,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-020",
        "sku":  "VX-AC-420",
        "name":  "Saffiano Leather Passport Wallet",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  4239,
        "originalPrice":  6358,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-021",
        "sku":  "VX-AC-421",
        "name":  "Silk Jacquard Evening Necktie",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  4376,
        "originalPrice":  6564,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-022",
        "sku":  "VX-AC-422",
        "name":  "Full-Grain Leather Belt with 24K Gold Buckle Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  4513,
        "originalPrice":  6770,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-023",
        "sku":  "VX-AC-423",
        "name":  "Mulberry Silk Pocket Square Hand-Rolled Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  4650,
        "originalPrice":  6975,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-024",
        "sku":  "VX-AC-424",
        "name":  "Solid Brass Monogram Cufflinks Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  4787,
        "originalPrice":  7180,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  45,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-025",
        "sku":  "VX-AC-425",
        "name":  "Structured Vegetable-Tanned Leather Tote Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  4924,
        "originalPrice":  7386,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-026",
        "sku":  "VX-AC-426",
        "name":  "Minimalist Black Leather Cardholder Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  5061,
        "originalPrice":  7592,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-027",
        "sku":  "VX-AC-427",
        "name":  "Japanese Titanium Architectural Sunglasses Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  5198,
        "originalPrice":  7797,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  54,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-028",
        "sku":  "VX-AC-428",
        "name":  "Cashmere \u0026 Mulberry Silk Jacquard Scarf Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  5335,
        "originalPrice":  8002,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-029",
        "sku":  "VX-AC-429",
        "name":  "Structured Crossbody Leather Camera Bag Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  5472,
        "originalPrice":  8208,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-030",
        "sku":  "VX-AC-430",
        "name":  "Hand-Polished Brass Lapel Pin Set Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  5609,
        "originalPrice":  8414,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  18,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-031",
        "sku":  "VX-AC-431",
        "name":  "Reversible Smooth Calfskin Dress Belt Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  5746,
        "originalPrice":  8619,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-032",
        "sku":  "VX-AC-432",
        "name":  "Leather Document Folio with Gold Zipper Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  5883,
        "originalPrice":  8824,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-033",
        "sku":  "VX-AC-433",
        "name":  "Acetate Polarized Geometric Sunglasses Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  6020,
        "originalPrice":  9030,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-034",
        "sku":  "VX-AC-434",
        "name":  "Signature Minimalist Monogram Cap Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  6157,
        "originalPrice":  9236,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-035",
        "sku":  "VX-AC-435",
        "name":  "Braided Leather Luxury Key Fob Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  6294,
        "originalPrice":  9441,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-036",
        "sku":  "VX-AC-436",
        "name":  "Silk Brocade Formal Cummerbund \u0026 Bowtie Set Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  6431,
        "originalPrice":  9646,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-037",
        "sku":  "VX-AC-437",
        "name":  "Hand-Burnished Leather Travel Duffle Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  6568,
        "originalPrice":  9852,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-038",
        "sku":  "VX-AC-438",
        "name":  "Engraved Stainless Steel Money Clip Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  6705,
        "originalPrice":  10058,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-039",
        "sku":  "VX-AC-439",
        "name":  "Handloom Pashmina Winter Muffler Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  6842,
        "originalPrice":  10263,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  45,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-040",
        "sku":  "VX-AC-440",
        "name":  "Classic Acetate Aviator Sunglasses Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  6979,
        "originalPrice":  10468,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-041",
        "sku":  "VX-AC-441",
        "name":  "Saffiano Leather Passport Wallet Edition 2",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  7116,
        "originalPrice":  10674,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-042",
        "sku":  "VX-AC-442",
        "name":  "Silk Jacquard Evening Necktie Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  7253,
        "originalPrice":  10880,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  54,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-043",
        "sku":  "VX-AC-443",
        "name":  "Full-Grain Leather Belt with 24K Gold Buckle Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  7390,
        "originalPrice":  11085,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-044",
        "sku":  "VX-AC-444",
        "name":  "Mulberry Silk Pocket Square Hand-Rolled Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  7527,
        "originalPrice":  11290,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-045",
        "sku":  "VX-AC-445",
        "name":  "Solid Brass Monogram Cufflinks Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  7664,
        "originalPrice":  11496,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  18,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-046",
        "sku":  "VX-AC-446",
        "name":  "Structured Vegetable-Tanned Leather Tote Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  7801,
        "originalPrice":  11702,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-047",
        "sku":  "VX-AC-447",
        "name":  "Minimalist Black Leather Cardholder Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  7938,
        "originalPrice":  11907,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-048",
        "sku":  "VX-AC-448",
        "name":  "Japanese Titanium Architectural Sunglasses Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  1575,
        "originalPrice":  2362,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-049",
        "sku":  "VX-AC-449",
        "name":  "Cashmere \u0026 Mulberry Silk Jacquard Scarf Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  1712,
        "originalPrice":  2568,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-050",
        "sku":  "VX-AC-450",
        "name":  "Structured Crossbody Leather Camera Bag Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  1849,
        "originalPrice":  2774,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-051",
        "sku":  "VX-AC-451",
        "name":  "Hand-Polished Brass Lapel Pin Set Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  1986,
        "originalPrice":  2979,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-052",
        "sku":  "VX-AC-452",
        "name":  "Reversible Smooth Calfskin Dress Belt Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  2123,
        "originalPrice":  3184,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-053",
        "sku":  "VX-AC-453",
        "name":  "Leather Document Folio with Gold Zipper Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  2260,
        "originalPrice":  3390,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-054",
        "sku":  "VX-AC-454",
        "name":  "Acetate Polarized Geometric Sunglasses Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  2397,
        "originalPrice":  3596,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  45,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-055",
        "sku":  "VX-AC-455",
        "name":  "Signature Minimalist Monogram Cap Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  2534,
        "originalPrice":  3801,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-056",
        "sku":  "VX-AC-456",
        "name":  "Braided Leather Luxury Key Fob Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  2671,
        "originalPrice":  4006,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-057",
        "sku":  "VX-AC-457",
        "name":  "Silk Brocade Formal Cummerbund \u0026 Bowtie Set Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  2808,
        "originalPrice":  4212,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  54,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-058",
        "sku":  "VX-AC-458",
        "name":  "Hand-Burnished Leather Travel Duffle Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  2945,
        "originalPrice":  4418,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-059",
        "sku":  "VX-AC-459",
        "name":  "Engraved Stainless Steel Money Clip Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  3082,
        "originalPrice":  4623,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-060",
        "sku":  "VX-AC-460",
        "name":  "Handloom Pashmina Winter Muffler Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  3219,
        "originalPrice":  4828,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  18,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-061",
        "sku":  "VX-AC-461",
        "name":  "Classic Acetate Aviator Sunglasses Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  3356,
        "originalPrice":  5034,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-062",
        "sku":  "VX-AC-462",
        "name":  "Saffiano Leather Passport Wallet Edition 3",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  3493,
        "originalPrice":  5240,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-063",
        "sku":  "VX-AC-463",
        "name":  "Silk Jacquard Evening Necktie Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  3630,
        "originalPrice":  5445,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-064",
        "sku":  "VX-AC-464",
        "name":  "Full-Grain Leather Belt with 24K Gold Buckle Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  3767,
        "originalPrice":  5650,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-065",
        "sku":  "VX-AC-465",
        "name":  "Mulberry Silk Pocket Square Hand-Rolled Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  3904,
        "originalPrice":  5856,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-066",
        "sku":  "VX-AC-466",
        "name":  "Solid Brass Monogram Cufflinks Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  4041,
        "originalPrice":  6062,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-067",
        "sku":  "VX-AC-467",
        "name":  "Structured Vegetable-Tanned Leather Tote Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  4178,
        "originalPrice":  6267,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-068",
        "sku":  "VX-AC-468",
        "name":  "Minimalist Black Leather Cardholder Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  4315,
        "originalPrice":  6472,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-069",
        "sku":  "VX-AC-469",
        "name":  "Japanese Titanium Architectural Sunglasses Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  4452,
        "originalPrice":  6678,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  45,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-070",
        "sku":  "VX-AC-470",
        "name":  "Cashmere \u0026 Mulberry Silk Jacquard Scarf Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  4589,
        "originalPrice":  6884,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-071",
        "sku":  "VX-AC-471",
        "name":  "Structured Crossbody Leather Camera Bag Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  4726,
        "originalPrice":  7089,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-072",
        "sku":  "VX-AC-472",
        "name":  "Hand-Polished Brass Lapel Pin Set Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  4863,
        "originalPrice":  7294,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  54,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-073",
        "sku":  "VX-AC-473",
        "name":  "Reversible Smooth Calfskin Dress Belt Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  5000,
        "originalPrice":  7500,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-074",
        "sku":  "VX-AC-474",
        "name":  "Leather Document Folio with Gold Zipper Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  5137,
        "originalPrice":  7706,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-075",
        "sku":  "VX-AC-475",
        "name":  "Acetate Polarized Geometric Sunglasses Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  5274,
        "originalPrice":  7911,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  18,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-076",
        "sku":  "VX-AC-476",
        "name":  "Signature Minimalist Monogram Cap Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  5411,
        "originalPrice":  8116,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-077",
        "sku":  "VX-AC-477",
        "name":  "Braided Leather Luxury Key Fob Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  5548,
        "originalPrice":  8322,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-078",
        "sku":  "VX-AC-478",
        "name":  "Silk Brocade Formal Cummerbund \u0026 Bowtie Set Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  5685,
        "originalPrice":  8528,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-079",
        "sku":  "VX-AC-479",
        "name":  "Hand-Burnished Leather Travel Duffle Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  5822,
        "originalPrice":  8733,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-080",
        "sku":  "VX-AC-480",
        "name":  "Engraved Stainless Steel Money Clip Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  5959,
        "originalPrice":  8938,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-081",
        "sku":  "VX-AC-481",
        "name":  "Handloom Pashmina Winter Muffler Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  6096,
        "originalPrice":  9144,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-082",
        "sku":  "VX-AC-482",
        "name":  "Classic Acetate Aviator Sunglasses Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  6233,
        "originalPrice":  9350,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-083",
        "sku":  "VX-AC-483",
        "name":  "Saffiano Leather Passport Wallet Edition 4",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  6370,
        "originalPrice":  9555,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-084",
        "sku":  "VX-AC-484",
        "name":  "Silk Jacquard Evening Necktie Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  6507,
        "originalPrice":  9760,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  45,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-085",
        "sku":  "VX-AC-485",
        "name":  "Full-Grain Leather Belt with 24K Gold Buckle Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  6644,
        "originalPrice":  9966,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-086",
        "sku":  "VX-AC-486",
        "name":  "Mulberry Silk Pocket Square Hand-Rolled Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  6781,
        "originalPrice":  10172,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-087",
        "sku":  "VX-AC-487",
        "name":  "Solid Brass Monogram Cufflinks Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  6918,
        "originalPrice":  10377,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  54,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-088",
        "sku":  "VX-AC-488",
        "name":  "Structured Vegetable-Tanned Leather Tote Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  7055,
        "originalPrice":  10582,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-089",
        "sku":  "VX-AC-489",
        "name":  "Minimalist Black Leather Cardholder Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  7192,
        "originalPrice":  10788,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-090",
        "sku":  "VX-AC-490",
        "name":  "Japanese Titanium Architectural Sunglasses Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  7329,
        "originalPrice":  10994,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  18,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-091",
        "sku":  "VX-AC-491",
        "name":  "Cashmere \u0026 Mulberry Silk Jacquard Scarf Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  7466,
        "originalPrice":  11199,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  21,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-092",
        "sku":  "VX-AC-492",
        "name":  "Structured Crossbody Leather Camera Bag Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  7603,
        "originalPrice":  11404,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  24,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-093",
        "sku":  "VX-AC-493",
        "name":  "Hand-Polished Brass Lapel Pin Set Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  7740,
        "originalPrice":  11610,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  27,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-094",
        "sku":  "VX-AC-494",
        "name":  "Reversible Smooth Calfskin Dress Belt Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  7877,
        "originalPrice":  11816,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  30,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-095",
        "sku":  "VX-AC-495",
        "name":  "Leather Document Folio with Gold Zipper Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  1514,
        "originalPrice":  2271,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  33,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-096",
        "sku":  "VX-AC-496",
        "name":  "Acetate Polarized Geometric Sunglasses Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  1651,
        "originalPrice":  2476,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  36,
        "isNew":  true,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-097",
        "sku":  "VX-AC-497",
        "name":  "Signature Minimalist Monogram Cap Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  1788,
        "originalPrice":  2682,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  39,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-098",
        "sku":  "VX-AC-498",
        "name":  "Braided Leather Luxury Key Fob Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  1925,
        "originalPrice":  2888,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  42,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-099",
        "sku":  "VX-AC-499",
        "name":  "Silk Brocade Formal Cummerbund \u0026 Bowtie Set Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  2062,
        "originalPrice":  3093,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  45,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-100",
        "sku":  "VX-AC-500",
        "name":  "Hand-Burnished Leather Travel Duffle Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  2199,
        "originalPrice":  3298,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  48,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-101",
        "sku":  "VX-AC-501",
        "name":  "Engraved Stainless Steel Money Clip Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Accessories",
        "gender":  "accessories",
        "price":  2336,
        "originalPrice":  3504,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  51,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-102",
        "sku":  "VX-AC-502",
        "name":  "Handloom Pashmina Winter Muffler Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Bags",
        "gender":  "accessories",
        "price":  2473,
        "originalPrice":  3710,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  54,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-103",
        "sku":  "VX-AC-503",
        "name":  "Classic Acetate Aviator Sunglasses Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Belts",
        "gender":  "accessories",
        "price":  2610,
        "originalPrice":  3915,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  57,
        "isNew":  false,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-104",
        "sku":  "VX-AC-504",
        "name":  "Saffiano Leather Passport Wallet Edition 5",
        "brand":  "VEXA Atelier",
        "category":  "Caps",
        "gender":  "accessories",
        "price":  2747,
        "originalPrice":  4120,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  60,
        "isNew":  false,
        "isBestseller":  true,
        "isFeatured":  true,
        "images":  [
                       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    },
    {
        "id":  "vexa-acc-105",
        "sku":  "VX-AC-505",
        "name":  "Silk Jacquard Evening Necktie Edition 6",
        "brand":  "VEXA Atelier",
        "category":  "Fashion Accessories",
        "gender":  "accessories",
        "price":  2884,
        "originalPrice":  4326,
        "discount":  33,
        "totalStock":  100,
        "rating":  4.9,
        "reviewCount":  18,
        "isNew":  true,
        "isBestseller":  false,
        "isFeatured":  false,
        "images":  [
                       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80",
                       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                   ],
        "colors":  [
                       {
                           "hex":  "#C6A15B",
                           "name":  "Matte Gold",
                           "image":  "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       },
                       {
                           "hex":  "#111111",
                           "name":  "Obsidian Black",
                           "image":  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format\u0026fit=crop\u0026w=900\u0026q=80"
                       }
                   ],
        "sizes":  [
                      {
                          "size":  "One Size",
                          "stock":  100
                      }
                  ],
        "description":  "Artisanal luxury accessory designed by Harsh at Jaipur Atelier. 100 units available in stock.",
        "specs":  {
                      "fabric":  "Full-Grain Leather / Mulberry Silk / Brass",
                      "fit":  "Standard Tailored Fit",
                      "origin":  "Jaipur Atelier, Rajasthan"
                  }
    }

  ],
  coupons: [
    { code: "JAIPURGOLD", type: "fixed", discount: 500, minOrder: 1999, active: true, description: "₹500 off on first luxury acquisition" },
    { code: "WELCOME10", type: "percentage", discount: 10, minOrder: 2999, active: true, description: "10% off for verified patrons" },
    { code: "ROYALFREESHIP", type: "shipping", discount: 149, minOrder: 999, active: true, description: "Complimentary express shipping" }
  ],
  reviews: [
    { id: 1, name: "Vikramaditya R.", rating: 5, comment: "The raw silk Bandhgala drape is world-class. Savile Row quality in Jaipur.", product: "Royal Jaipur Raw Silk Bandhgala", verified: true, date: "2 days ago" },
    { id: 2, name: "Ananya M.", rating: 5, comment: "Breathable Giza cotton and minimal silhouettes. Feels so luxurious.", product: "Architectural Heavyweight Giza Tee", verified: true, date: "4 days ago" },
    { id: 3, name: "Rohit K.", rating: 5, comment: "The calfskin loafers require zero break-in period. Exceptional Blake stitch.", product: "Blake-Stitched Leather Penny Loafer", verified: true, date: "1 week ago" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VEXA_DATA;
}