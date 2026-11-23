# VEXA – Premium Fashion E-Commerce Platform
### Clothing Collective | Jaipur, Rajasthan, India

> **A luxury Indian fashion e-commerce architecture combining Amazon-level shopping functionality, Myntra-style fashion browsing, and Zara-inspired minimal luxury aesthetics.**

---

## Brand Identity & Aesthetic Matrix

| Attribute | Specification |
| :--- | :--- |
| **Brand Name** | **VEXA** |
| **Tagline** | **CLOTHING COLLECTIVE \| JAIPUR** |
| **Aesthetic** | Architectural, minimal, regal, high-fashion |
| **Matte Black** | `#111111` |
| **Deep Charcoal** | `#1B1B1B` |
| **Metallic Gold** | `#C6A15B` |
| **Champagne Gold** | `#D8C18B` |
| **Off White** | `#F8F6F1` |
| **Light Grey** | `#EAEAEA` |
| **Headings** | Cinzel & Playfair Display (Luxury High-Fashion Serif) |
| **Body & Specs** | Montserrat & Plus Jakarta Sans (Clean Modern Sans-Serif) |

---

## System Architecture

```
vexa-fashion/
├── assets/
│   ├── brand/
│   │   ├── favicon.svg               # Brand monogram favicon (Dark & Gold)
│   │   ├── vexa-monogram.svg          # Geometric Faceted V Monogram (Gold)
│   │   ├── vexa-logo-dark.svg         # Monogram + VEXA Wordmark + Tagline (Dark BG)
│   │   └── vexa-logo-light.svg        # Monogram + VEXA Wordmark + Tagline (Light BG)
│   └── images/                       # Local cached editorial photography
├── data/
│   └── db.json                       # Persistent JSON Document Database
├── database/
│   └── schema.sql                    # Production Relational PostgreSQL / Supabase Schema
├── app.js                            # Core Client State & Interactive Application Engine
├── data.js                           # Master Product Catalog, Pincodes, Coupons & Reviews
├── index.html                        # Main Production Web Application Storefront
├── package.json                      # Node.js project manifest & scripts
├── server.js                         # Production Express / Node.js REST API Server
├── server.ps1                        # Native Windows PowerShell Zero-Dependency Web Server
├── styles.css                        # Luxury Design System & Responsive Stylesheet
└── README.md                         # Architecture, Setup & Deployment Guide
```

---

## 1. Quick Start & Local Execution

### Option A: Direct Browser Launch (Zero Installation)
Simply open `index.html` in Chrome, Edge, Brave, Safari, or Firefox. All product catalogs, cart state, wishlist, coupons, checkout, and admin dashboard work directly out-of-the-box using the client-side persistent storage engine.

### Option B: Native Windows PowerShell Server (No Node or Python Required)
```powershell
cd C:\Users\sethh\.gemini\antigravity\scratch\vexa-fashion
powershell -ExecutionPolicy Bypass -File server.ps1
```
Visit: `http://localhost:5050`

### Option C: Node.js & Express REST API Server
```bash
cd vexa-fashion
npm install
npm start
```
Visit: `http://localhost:3000`

---

## 2. Admin Portal Credentials

- **URL:** `#admin` (or click **"Admin Portal"** in header / footer)
- **Email:** `admin@vexa.luxury`
- **Password / Pin:** `vexa2026`
- **Capabilities:**
  - Real-time Sales, Orders & Revenue KPI Analytics
  - Product Catalog Manager (Add New Piece, Edit, Delete, Stock Levels)
  - Order Management & Lifecycle Status Updaters (Confirmed, Packed, Shipped, Out for Delivery, Delivered)
  - Promotional Coupon Generator
  - Brand Assets & Palette Manager

---

## 3. Database Architecture & Setup

### Relational Schema (PostgreSQL / Supabase / Neon / AWS RDS)
The full relational database schema is provided in `database/schema.sql`.

To deploy on Supabase or PostgreSQL:
```bash
psql -h <your-supabase-db-host> -U postgres -d postgres -f database/schema.sql
```

The database includes 13 tables:
1. `users` (Patrons & Administrators with role-based security)
2. `user_addresses` (Multi-address book: Home, Work, Villa with default flags)
3. `categories` & `subcategories` (Men, Women, Kids, Accessories)
4. `products` (SKU, title, slug, prices, discount, fabric specifications, origin)
5. `product_images` (Multiple high-resolution editorial photos per garment)
6. `product_variants` (XS, S, M, L, XL, XXL, 3XL stock matrix per color)
7. `coupons` (Percentage, fixed ₹ amount, and free shipping rules with expiry)
8. `orders` & `order_items` (Tax compliant with 12% apparel GST)
9. `order_timeline` (Audit trail for tracking shipments)
10. `product_reviews` (Verified buyer badges, star ratings, helpful votes)
11. `wishlists` (Patron saved silhouettes)
12. `newsletter_subscribers` (VIP collective list)

---

## 4. Indian Payment Gateway & Razorpay Configuration

VEXA supports instant payments tailored for the Indian market:
- **UPI Instant Pay:** QR Code, Google Pay, PhonePe, Paytm, BHIM (`@upi` handles)
- **Credit / Debit Cards:** Visa, MasterCard, RuPay, American Express
- **Net Banking:** 50+ Indian commercial & private banks
- **Cash on Delivery (COD):** Integrated with pincode serviceability verification
- **Razorpay Integration:**

### Environment Variables for Razorpay (`.env`)
```ini
PORT=3000
NODE_ENV=production

# Razorpay India API Keys (Dashboard -> Settings -> API Keys)
RAZORPAY_KEY_ID=rzp_test_YourKeyHere
RAZORPAY_KEY_SECRET=YourKeySecretHere

# Indian Logistics & Courier Partner (Shiprocket / Delhivery)
SHIPROCKET_API_USER=logistics@vexa.luxury
SHIPROCKET_API_PASSWORD=YourPasswordHere
```

### Signature Verification Workflow
When an order is initiated, `server.js` signs the order with HMAC-SHA256:
```javascript
const generated_signature = crypto
  .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
  .update(order_id + "|" + razorpay_payment_id)
  .digest('hex');
```

---

## 5. Indian Logistics & Pincode Serviceability

VEXA includes a built-in Indian postal serviceability database:
- **Tier-1 Metros (Jaipur, Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad):** Express dispatch within 24-48 hours.
- **National Coverage:** 10,000+ postal codes with automated Cash on Delivery qualification.
- **Carrier Ready:** Automated Air Waybill (AWB) generation compatible with **BlueDart Express** and **Delhivery**.

---

## 6. Production Deployment

### Vercel / Netlify
1. Connect repository to Vercel or Netlify.
2. Build command: None required (or `npm run build` for SSR).
3. Publish directory: `vexa-fashion`.

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 7. Compliance & Standards

- **Taxes:** In compliance with Indian GST laws, all luxury apparel items include 12% GST breakdown on printable invoices.
- **Registered Atelier:** Atelier VEXA, C-Scheme, Ashok Nagar, Jaipur, Rajasthan 302001, India.
