# Dashboard Setup Guide

## Features Added

This project now includes a complete admin dashboard system for managing products:

### 1. **Admin Dashboard** (`/dashboard`)
   - Add new products with:
     - Arabic and English titles
     - Product image upload (with preview)
     - Detailed description
     - Price
     - Product specifications (up to 3)
   - View all products in a grid layout
   - Delete products
   - Edit products (feature ready for implementation)

### 2. **Products Page** (`/products`)
   - Dynamic display of all products added through the dashboard
   - Shows product images, titles, descriptions, prices, and specs
   - Beautiful card layout with hover effects
   - Responsive design for mobile and desktop

### 3. **Updated Navigation**
   - Header now includes "لوحة التحكم" (Dashboard) link
   - Fixed home page link
   - Products link now points to the dedicated products page

## Project Structure

```
app/
  ├── api/
  │   └── products/
  │       └── route.ts          # API endpoints for CRUD operations
  ├── dashboard/
  │   └── page.tsx              # Admin dashboard page
  ├── products/
  │   └── page.tsx              # Products display page
  └── page.tsx                  # Home page

components/
  ├── ProductForm.tsx           # Form component for adding products
  └── Products.tsx              # Home page products section (updated)

lib/
  └── storage.ts                # In-memory product storage (can be replaced with DB)
```

## How to Use

### For Admin Users:

1. **Access Dashboard**: Navigate to `/dashboard`
2. **Add Product**:
   - Click on "إضافة منتج جديد" (Add New Product) tab
   - Upload a product image
   - Fill in Arabic and English titles
   - Enter description and price
   - Add up to 3 specifications
   - Click "إضافة المنتج" (Add Product)
3. **View Products**: Click on "المنتجات" (Products) tab to see all added products
4. **Delete Product**: Click the delete button on any product card

### For Website Visitors:

1. **View Products**: Navigate to `/products` page
2. **See Product Details**: View all products with images, descriptions, prices, and specs
3. **Contact**: Click "استفسر الآن" (Inquire Now) to contact about a product

## API Endpoints

All API endpoints are available at `/api/products`:

- **GET** `/api/products` - Get all products
- **POST** `/api/products` - Create new product
- **DELETE** `/api/products?id={id}` - Delete product by ID
- **PUT** `/api/products?id={id}` - Update product by ID

## Database Setup (Optional)

Currently, the project uses in-memory storage (`lib/storage.ts`). To use a real database:

1. Update `lib/storage.ts` to call your database instead of in-memory array
2. Consider using:
   - **MongoDB** with Mongoose
   - **PostgreSQL** with Prisma
   - **Supabase** (already in package.json)
   - **Firebase**

Example with Supabase (partially set up):
```typescript
// Update lib/storage.ts to use Supabase
import { createClient } from '@supabase/supabase-js';
// ... implementation
```

## Styling

- Uses **Tailwind CSS** for responsive design
- Fully RTL (Right-to-Left) compatible for Arabic
- Mobile responsive
- Custom animations and hover effects
- Teal color scheme matching your branding

## Next Steps

1. ✅ Replace in-memory storage with a real database
2. ✅ Add authentication/admin login
3. ✅ Implement edit functionality (backend ready, UI button added)
4. ✅ Add product categories/filtering
5. ✅ Add product search
6. ✅ Implement order/inquiry tracking

## Running the Project

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Visit `http://localhost:3000` in your browser.

- Dashboard: `http://localhost:3000/dashboard`
- Products: `http://localhost:3000/products`
- Home: `http://localhost:3000`
