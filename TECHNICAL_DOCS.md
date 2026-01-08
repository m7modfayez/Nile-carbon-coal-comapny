# 🛠️ Technical Documentation

## Architecture Overview

### Technology Stack
```
Frontend:
  ├── Next.js 15+ (React Framework)
  ├── TypeScript (Type Safety)
  ├── Tailwind CSS (Styling)
  ├── Radix UI (Component Library)
  └── React Hooks (State Management)

Backend:
  ├── Next.js API Routes (Serverless Functions)
  ├── In-Memory Storage (Development)
  └── RESTful API Design

Deployment:
  ├── Vercel (Recommended)
  ├── Node.js Compatible Hosting
  └── Environment Variables for Config
```

---

## Project Structure

### Core Directories

#### `/app` - Next.js App Router
```
app/
├── api/
│   └── products/
│       └── route.ts ............... API endpoints (GET, POST, PUT, DELETE)
│
├── dashboard/
│   └── page.tsx ................... Admin dashboard page
│
├── products/
│   └── page.tsx ................... Public products display page
│
├── layout.tsx ..................... Root layout wrapper
├── page.tsx ....................... Home page
└── globals.css .................... Global styles
```

#### `/components` - React Components
```
components/
├── ProductForm.tsx ................ Form for adding products
├── Products.tsx ................... Home page products section
├── Header.tsx ..................... Navigation header
├── Footer.tsx, About.tsx, etc. .... Other page sections
│
└── /ui ............................ Radix UI Components
    ├── button.tsx
    ├── input.tsx
    ├── textarea.tsx
    ├── card.tsx
    └── ... (other UI components)
```

#### `/lib` - Utilities & Storage
```
lib/
├── storage.ts ..................... Data management interface
│   ├── Product interface definition
│   ├── getProducts()
│   ├── addProduct()
│   ├── deleteProduct()
│   └── updateProduct()
│
└── utils.ts ....................... Helper functions
```

---

## API Specification

### Base URL
```
/api/products
```

### Endpoints

#### 1. GET /api/products
**Get all products**

```typescript
// Request
GET /api/products

// Response (200)
[
  {
    id: "1704716400000",
    title: "فحم مميز",
    englishTitle: "Premium Coal",
    description: "منتج عالي الجودة",
    price: 2500,
    image: "data:image/jpeg;base64,...",
    specs: ["نقي", "جاف", "مصدر"],
    createdAt: "2026-01-08T10:00:00.000Z"
  }
]
```

#### 2. POST /api/products
**Create new product**

```typescript
// Request
POST /api/products
Content-Type: application/json

{
  title: "فحم مميز",
  englishTitle: "Premium Coal",
  description: "منتج عالي الجودة",
  price: 2500,
  image: "data:image/jpeg;base64,...",
  specs: ["نقي", "جاف", "مصدر"]
}

// Response (201)
{
  id: "1704716400000",
  title: "فحم مميز",
  englishTitle: "Premium Coal",
  description: "منتج عالي الجودة",
  price: 2500,
  image: "data:image/jpeg;base64,...",
  specs: ["نقي", "جاف", "مصدر"],
  createdAt: "2026-01-08T10:00:00.000Z"
}

// Error Responses
400: { error: "Missing required fields" }
500: { error: "Failed to create product" }
```

#### 3. DELETE /api/products
**Delete product by ID**

```typescript
// Request
DELETE /api/products?id=1704716400000

// Response (200)
{ success: true }

// Error Responses
400: { error: "Product ID required" }
404: { error: "Product not found" }
500: { error: "Failed to delete product" }
```

#### 4. PUT /api/products
**Update product by ID**

```typescript
// Request
PUT /api/products?id=1704716400000
Content-Type: application/json

{
  title: "فحم محدث",
  price: 3000
}

// Response (200)
{
  id: "1704716400000",
  title: "فحم محدث",
  englishTitle: "Premium Coal",
  description: "منتج عالي الجودة",
  price: 3000,
  image: "data:image/jpeg;base64,...",
  specs: ["نقي", "جاف", "مصدر"],
  createdAt: "2026-01-08T10:00:00.000Z"
}

// Error Responses
400: { error: "Product ID required" }
404: { error: "Product not found" }
500: { error: "Failed to update product" }
```

---

## Component Documentation

### ProductForm Component

**Location**: `components/ProductForm.tsx`

**Props**:
```typescript
interface ProductFormProps {
  onSubmit: (data: ProductFormData) => Promise<void>;
  isLoading?: boolean;
}
```

**Features**:
- Image file input with base64 conversion
- Real-time image preview
- Dynamic specification fields (3)
- Bilingual support (Arabic/English)
- Form validation
- Error/success messaging

**Usage**:
```tsx
<ProductForm 
  onSubmit={handleAddProduct}
  isLoading={isLoading}
/>
```

### Dashboard Page

**Location**: `app/dashboard/page.tsx`

**Features**:
- Tabbed interface (Add / View)
- Form submission handling
- Product listing with delete
- Error handling
- Loading states

**Key Functions**:
```typescript
fetchProducts()        // Fetch all products from API
handleAddProduct()     // Submit new product to API
handleDeleteProduct()  // Remove product via API
```

### Products Page

**Location**: `app/products/page.tsx`

**Features**:
- Dynamic product fetching
- Responsive grid layout
- Product cards with images
- Price display
- Specifications list
- Contact CTA button

---

## Data Models

### Product Interface

```typescript
interface Product {
  id: string;                    // Auto-generated timestamp
  title: string;                 // Arabic product name
  englishTitle: string;          // English product name
  description: string;           // Product details
  price: number;                 // Price value
  image: string;                 // Base64 image data
  specs: string[];               // Array of specifications
  createdAt: Date;               // Creation timestamp
}

interface ProductFormData {
  title: string;
  englishTitle: string;
  description: string;
  price: string;                 // String in form, converted to number
  image: string;                 // Base64 or URL
  specs: string[];
}
```

---

## Storage System

### Current Implementation (In-Memory)

**File**: `lib/storage.ts`

**Features**:
- Simple in-memory array
- CRUD operations
- Type-safe with TypeScript
- Easy to swap for database

**Functions**:

```typescript
// Get all products
getProducts(): Promise<Product[]>

// Add new product
addProduct(product: Omit<Product, 'id' | 'createdAt'>): Promise<Product>

// Delete product by ID
deleteProduct(id: string): Promise<boolean>

// Update product
updateProduct(id: string, updates: Partial<...>): Promise<Product | null>
```

### Upgrade Paths

#### MongoDB + Mongoose
```typescript
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  englishTitle: String,
  description: String,
  price: Number,
  image: String,
  specs: [String],
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

export async function getProducts() {
  return await Product.find();
}
```

#### PostgreSQL + Prisma
```typescript
// schema.prisma
model Product {
  id        String   @id @default(cuid())
  title     String
  englishTitle String
  description String
  price     Float
  image     String   @db.Text
  specs     String[]
  createdAt DateTime @default(now())
}

// Usage
import { prisma } from '@/lib/prisma';

export async function getProducts() {
  return await prisma.product.findMany();
}
```

#### Supabase (PostgreSQL + REST API)
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');
  
  if (error) throw error;
  return data;
}
```

---

## Client-Side Implementation

### Form Handling (ProductForm.tsx)

```typescript
// Image conversion to Base64
const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setFormData(prev => ({ ...prev, image: base64 }));
      setPreview(base64);
    };
    reader.readAsDataURL(file);
  }
};

// Form validation
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  
  if (!formData.title || !formData.englishTitle || 
      !formData.price || !formData.image) {
    setError('Please fill in all required fields');
    return;
  }
  
  onSubmit(formData);
};
```

### Data Fetching (Dashboard & Products Pages)

```typescript
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };
  
  fetchProducts();
}, []);
```

### Delete Product

```typescript
const handleDeleteProduct = async (id: string) => {
  if (!confirm('Are you sure?')) return;
  
  try {
    const response = await fetch(`/api/products?id=${id}`, {
      method: 'DELETE',
    });
    
    if (response.ok) {
      // Refresh product list
      fetchProducts();
    }
  } catch (error) {
    console.error('Failed to delete:', error);
  }
};
```

---

## Server-Side Implementation

### API Route Handler (route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getProducts, addProduct, deleteProduct } from '@/lib/storage';

// GET all products
export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST new product
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.englishTitle || !data.price || !data.image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const product = await addProduct({
      title: data.title,
      englishTitle: data.englishTitle,
      description: data.description || '',
      price: parseFloat(data.price),
      image: data.image,
      specs: Array.isArray(data.specs) ? data.specs : [],
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
```

---

## Styling System

### Tailwind CSS Configuration

**File**: `tailwind.config.ts`

**Key Classes Used**:
```css
/* Layout */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
max-w-6xl mx-auto px-4 py-20

/* Colors */
bg-white bg-gray-50 text-gray-900
text-teal-700 bg-teal-700 hover:bg-teal-800

/* Effects */
shadow-lg hover:shadow-2xl
rounded-xl rounded-lg
transition-all duration-300

/* RTL Support */
text-right dir="rtl"
flex-row-reverse (if needed)
```

### Custom Animations

```css
/* In globals.css */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

---

## Performance Optimization

### Current Optimizations
- Client-side form validation (no extra API calls)
- Image preview before upload (user feedback)
- Debounced API calls
- Component lazy loading ready

### Recommended Optimizations

```typescript
// Image Optimization
import Image from 'next/image';

<Image
  src={product.image}
  alt={product.title}
  width={400}
  height={400}
  priority={false}
/>

// API Caching
const cache = new Map();

export async function GET() {
  const cacheKey = 'products-list';
  if (cache.has(cacheKey)) {
    return NextResponse.json(cache.get(cacheKey));
  }
  
  const products = await getProducts();
  cache.set(cacheKey, products);
  
  return NextResponse.json(products);
}

// SWR for data fetching
import useSWR from 'swr';

const { data: products } = useSWR('/api/products', fetcher);
```

---

## Error Handling

### Frontend Error Handling
```typescript
try {
  const response = await fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
} catch (error) {
  setError(error instanceof Error ? error.message : 'Unknown error');
}
```

### Backend Error Handling
```typescript
export async function POST(request: NextRequest) {
  try {
    // Validate input
    if (!data.required_field) {
      return NextResponse.json(
        { error: 'Validation failed' },
        { status: 400 }
      );
    }
    
    // Process request
    const result = await doSomething(data);
    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## Testing

### Unit Test Example (Jest)
```typescript
describe('ProductForm', () => {
  it('should validate required fields', () => {
    const { getByText } = render(
      <ProductForm onSubmit={jest.fn()} />
    );
    
    fireEvent.click(getByText('إضافة المنتج'));
    expect(getByText(/required/i)).toBeInTheDocument();
  });
});
```

### Integration Test Example
```typescript
describe('Product API', () => {
  it('should create and return product', async () => {
    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(testProduct)
    });
    
    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data.id).toBeDefined();
  });
});
```

---

## Deployment

### Vercel (Recommended)
```bash
# Connect GitHub repo to Vercel
# Push to main branch for auto-deploy

# Manual deployment
npm install -g vercel
vercel
```

### Self-Hosted (Node.js)
```bash
# Build
npm run build

# Start
npm start

# Environment variables
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://yourdomain.com
```

### Environment Variables
```bash
# .env.local (development)
NEXT_PUBLIC_APP_NAME=elnile-carboon

# .env.production (production)
NODE_ENV=production
```

---

## Security Considerations

### 1. Input Validation
```typescript
// Always validate on server
if (!data.title || data.title.trim().length === 0) {
  return error('Invalid title');
}

// Use Zod for schema validation
import { z } from 'zod';

const productSchema = z.object({
  title: z.string().min(1),
  price: z.number().positive(),
  image: z.string()
});
```

### 2. Authentication
```typescript
// Protect dashboard routes
import { getSession } from 'next-auth/react';

export async function GET(request: NextRequest) {
  const session = await getSession({ req: request });
  
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  // ... continue with API logic
}
```

### 3. CORS & Rate Limiting
```typescript
// Set CORS headers
export async function GET() {
  return NextResponse.json(
    { data: 'value' },
    {
      headers: {
        'Access-Control-Allow-Origin': 'https://yourdomain.com',
      }
    }
  );
}
```

---

## Monitoring & Logging

### Error Tracking (Sentry)
```typescript
import * as Sentry from "@sentry/nextjs";

try {
  // ... code
} catch (error) {
  Sentry.captureException(error);
}
```

### Analytics (Google Analytics)
```tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  
  useEffect(() => {
    // Track page view
    gtag.pageview({
      page_path: router.pathname,
      page_title: 'Products'
    });
  }, [router]);
}
```

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Products not showing | Clear cache, refresh page |
| Image won't upload | Check file size and format |
| Form validation error | Check required fields are filled |
| API 500 error | Check server logs, database connection |
| Styling looks off | Clear `.next` folder, rebuild |

### Debug Mode
```typescript
// Enable debug logging
const DEBUG = process.env.NODE_ENV === 'development';

if (DEBUG) {
  console.log('Products:', products);
  console.log('API Response:', response);
}
```

---

**Last Updated**: January 8, 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
