# Loader Components Usage Guide

This guide explains how to use the various loader components available in your Solvix Core application.

## Available Loaders

### 1. **Preloader** (Automatic Initial Load)
- **Location**: `/components/loaders/preloader.tsx`
- **Used**: Automatically on app initialization
- **Features**: Animated rings, floating background, loading dots
- **Duration**: Displays until the splash screen completes

### 2. **Splash Screen** (Auto Managed)
- **Location**: `/components/loaders/splash-screen.tsx`
- **Used**: Automatically on first app load in root layout
- **Duration**: 3 seconds
- **Features**: Logo with glow effect, brand name, animated background circles

### 3. **Page Loader** (Manual Use)
- **Location**: `/components/loaders/page-loader.tsx`
- **Usage**: When loading page content

```typescript
import { PageLoader } from '@/components/loaders';

export default function MyPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <PageLoader isVisible={isLoading} message="Loading page content..." />
      {/* Your page content */}
    </>
  );
}
```

### 4. **Route Transition Loader** (Auto Managed)
- **Location**: `/components/loaders/route-transition-loader.tsx`
- **Used**: Automatically when navigating between routes
- **Duration**: 1 second
- **Managed**: Via `RootClientWrapper` component

### 5. **Fullscreen Loader with Progress** (Most Recommended for Forms)
- **Location**: `/components/loaders/fullscreen-loader.tsx`
- **Usage**: For long-running operations, form submissions, file uploads

#### Using the `useLoader` Hook (Recommended):

```typescript
'use client';

import { useLoader } from '@/hooks/use-loader';

export default function MyComponent() {
  const { show, hide, setProgress, updateMessage, Loader } = useLoader();

  const handleSubmit = async () => {
    // Show loader with message
    show('Processing your request...');

    try {
      // Simulate progress updates
      setProgress(25);
      await new Promise(r => setTimeout(r, 500));
      
      updateMessage('Validating data...');
      setProgress(50);
      await new Promise(r => setTimeout(r, 500));
      
      updateMessage('Saving to database...');
      setProgress(75);
      await new Promise(r => setTimeout(r, 500));
      
      setProgress(100);
      await new Promise(r => setTimeout(r, 300));
      
      // Hide loader when done
      hide();
    } catch (error) {
      hide();
    }
  };

  return (
    <>
      <button onClick={handleSubmit}>Submit</button>
      <Loader />
    </>
  );
}
```

#### Direct Usage:

```typescript
import { FullscreenLoader } from '@/components/loaders';

export default function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <FullscreenLoader 
        isVisible={isLoading}
        message="Processing your inquiry..."
        progress={progress}
      />
    </>
  );
}
```

## Hook: `useLoader()`

The `useLoader` hook simplifies loader management with these methods:

```typescript
const {
  show,              // (message?: string, progress?: number) => void
  hide,              // () => void
  setProgress,       // (value: number) => void
  updateMessage,     // (message: string) => void
  isLoading,         // boolean
  Loader,            // React Component
} = useLoader();
```

## Examples

### Example 1: Form Submission with Loader (Contact Page)

```typescript
'use client';

import { useLoader } from '@/hooks/use-loader';

export default function ContactForm() {
  const { show, hide, Loader } = useLoader();
  const [formData, setFormData] = useState({...});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    show('Submitting your inquiry...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        hide();
        toast.success('Submitted successfully!');
      }
    } finally {
      hide();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
      <Loader />
    </>
  );
}
```

### Example 2: File Upload with Progress

```typescript
'use client';

import { useLoader } from '@/hooks/use-loader';

export default function FileUpload() {
  const { show, hide, setProgress, updateMessage, Loader } = useLoader();

  const handleUpload = async (file: File) => {
    show('Starting upload...');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        const percentComplete = (e.loaded / e.total) * 100;
        setProgress(percentComplete);
        updateMessage(`Uploading... ${Math.round(percentComplete)}%`);
      });

      await new Promise((resolve, reject) => {
        xhr.addEventListener('load', resolve);
        xhr.addEventListener('error', reject);
        xhr.open('POST', '/api/upload');
        xhr.send(formData);
      });

      hide();
    } catch (error) {
      hide();
    }
  };

  return (
    <>
      <input 
        type="file" 
        onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
      />
      <Loader />
    </>
  );
}
```

### Example 3: Data Fetching with Multiple Stages

```typescript
'use client';

import { useLoader } from '@/hooks/use-loader';

export default function ComplexOperation() {
  const { show, hide, setProgress, updateMessage, Loader } = useLoader();

  const performComplexOperation = async () => {
    show('Starting complex operation...');

    try {
      // Stage 1: Fetch data
      updateMessage('Fetching data from server...');
      setProgress(20);
      await fetch('/api/data');

      // Stage 2: Process data
      updateMessage('Processing data...');
      setProgress(50);
      await new Promise(r => setTimeout(r, 1000));

      // Stage 3: Save results
      updateMessage('Saving results...');
      setProgress(80);
      await fetch('/api/save', { method: 'POST' });

      // Stage 4: Finalize
      updateMessage('Finalizing...');
      setProgress(100);
      await new Promise(r => setTimeout(r, 300));

      hide();
    } catch (error) {
      hide();
    }
  };

  return (
    <>
      <button onClick={performComplexOperation}>Start</button>
      <Loader />
    </>
  );
}
```

## Styling & Customization

All loaders use Tailwind CSS classes and support your app's theme system (light/dark mode).

### Z-index Layers (in order):
- **Preloader**: 10000 (behind everything on init)
- **Fullscreen Loader**: 9999 (topmost for important operations)
- **Page Loader**: 9998 (for page content loading)
- **Route Transition Loader**: 9997 (for route changes)

## Best Practices

1. **Always show loader during async operations** to prevent multiple submissions
2. **Update message and progress** to keep users informed
3. **Hide loader on completion or error** to ensure it doesn't stay stuck
4. **Use useLoader hook** for simpler, cleaner code
5. **Combine with toast notifications** for user feedback
6. **Test on slow networks** to ensure loaders display correctly

## Integration Points

- ✅ **Contact Form**: Uses fullscreen loader with submission status
- ✅ **Route Navigation**: Uses route transition loader automatically
- ✅ **App Initialization**: Uses splash screen automatically
- ✅ **Available Everywhere**: Can be imported and used in any client component
