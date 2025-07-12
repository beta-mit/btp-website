# Contributing to Beta Theta Pi Website

Welcome to the Beta Upsilon Chapter website project! This guide will help you understand how to contribute effectively to our codebase.

## 🤝 Getting Started

### Prerequisites

Before contributing, ensure you have:
- Node.js 18.x or higher installed
- Git configured with your name and email
- A code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Setup Development Environment

1. **Fork and Clone**
   ```bash
   git clone <your-fork-url>
   cd btp-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Environment File** (if needed)
   ```bash
   cp .env.example .env.local
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📝 Code Standards

### TypeScript Guidelines

- Use strict TypeScript configuration
- Define proper interfaces for all props and data structures
- Avoid `any` type - use proper typing
- Use meaningful variable and function names

```typescript
// ✅ Good
interface BrotherProfile {
  name: string;
  class: string;
  major: string;
  leadership?: string[];
}

// ❌ Bad
interface Brother {
  data: any;
}
```

### React Component Guidelines

- Use functional components with hooks
- Implement proper error boundaries where needed
- Use React.memo for expensive components
- Keep components focused and single-purpose

```typescript
// ✅ Good
interface BrotherCardProps {
  brother: BrotherProfile;
  onClick?: (id: string) => void;
}

export const BrotherCard: React.FC<BrotherCardProps> = ({ brother, onClick }) => {
  // Component implementation
}

// ❌ Bad
export const BrotherCard = (props: any) => {
  // Component implementation
}
```

### Styling Guidelines

- Use Tailwind CSS classes exclusively
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use CSS custom properties for dynamic values

```tsx
// ✅ Good
<div className="bg-[#002F6C] text-white p-4 md:p-6 lg:p-8">
  <h2 className="text-xl md:text-2xl font-bold">Title</h2>
</div>

// ❌ Bad
<div style={{ backgroundColor: '#002F6C', padding: '16px' }}>
  <h2 style={{ fontSize: '24px' }}>Title</h2>
</div>
```

### File Organization

- Group related components in appropriate directories
- Use clear, descriptive file names
- Keep file lengths reasonable (< 200 lines when possible)
- Separate concerns (logic, UI, styling)

## 🎨 Design System

### Brand Colors

Use these exact color values:

```css
Primary Blue: #002F6C
Light Blue: #69B3E7
Pink Accent: #F99FC9
White: #FFFFFF
Black: #000000
Gray: #6B7280
```

### Typography Scale

```css
/* Headers - Use serif fonts */
font-family: serif;

/* Body text - Use sans-serif */
font-family: sans-serif;

/* Greek letters - Display prominently */
ΒΘΠ (Beta Theta Pi)
```

### Spacing

Follow Tailwind's spacing scale:
- `p-2` = 8px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px

## 🚀 Development Workflow

### Branch Strategy

1. **Main Branch**: Production-ready code
2. **Feature Branches**: `feature/description-of-feature`
3. **Bugfix Branches**: `bugfix/description-of-bug`
4. **Hotfix Branches**: `hotfix/critical-fix`

### Commit Messages

Use conventional commit format:

```
type(scope): description

feat(rush): add rush application form
fix(header): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(button): improve hover animations
```

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-alumni-section
   ```

2. **Make Changes**
   - Write clean, well-documented code
   - Include tests if applicable
   - Update documentation as needed

3. **Test Thoroughly**
   ```bash
   npm run build
   npm run lint
   ```

4. **Submit Pull Request**
   - Use descriptive title and description
   - Link any related issues
   - Request appropriate reviewers

## 🧪 Testing Guidelines

### Component Testing

- Test user interactions
- Verify accessibility features
- Check responsive behavior
- Validate form submissions

### Browser Testing

Test in these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing

- Mobile phones (iOS/Android)
- Tablets
- Desktop computers
- Large displays

## 📱 Content Management

### Adding New Pages

1. Create directory in `app/`
2. Add `page.tsx` file
3. Update navigation in `header.tsx`
4. Add route to sitemap

### Image Guidelines

- Use WebP format when possible
- Optimize for web (compress images)
- Include alt text for accessibility
- Use descriptive file names

### Content Updates

- Keep content current and accurate
- Use professional, appropriate language
- Maintain consistency in tone
- Review content with chapter leadership

## 🔧 Common Tasks

### Adding a New Brother Profile

1. Update the brothers data structure
2. Add profile image to `public/images/brothers/`
3. Update the brothers page component
4. Test responsive layout

### Updating Rush Information

1. Edit `app/rush/page.tsx`
2. Update timeline and requirements
3. Check contact information accuracy
4. Verify form functionality

### Modifying Navigation

1. Edit `components/layout/header.tsx`
2. Update navigation arrays
3. Test mobile menu functionality
4. Verify accessibility

## 🚨 Important Considerations

### Security

- Never commit sensitive information
- Validate all user inputs
- Use environment variables for secrets
- Keep dependencies updated

### Performance

- Optimize images and assets
- Use lazy loading where appropriate
- Minimize bundle size
- Monitor Core Web Vitals

### Accessibility

- Use semantic HTML elements
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Maintain proper color contrast

### SEO

- Include proper meta tags
- Use descriptive page titles
- Implement structured data
- Optimize for page speed

## 📞 Getting Help

### Development Questions

- Check existing documentation first
- Ask in development team chat
- Create GitHub issue for bugs
- Review similar implementations

### Chapter Content Questions

- Contact chapter webmaster
- Verify with chapter leadership
- Check official Beta Theta Pi resources
- Maintain brand consistency

### Technical Issues

- Check browser developer console
- Review build logs
- Test in different environments
- Document reproduction steps

## 🎯 Goals and Vision

Our website should:
- Represent Beta Theta Pi values professionally
- Provide excellent user experience
- Be accessible to all users
- Perform well on all devices
- Support recruitment and alumni engagement

Thank you for contributing to the Beta Upsilon Chapter website! Your work helps showcase our brotherhood and supports our mission.

---

**Questions?** Contact the development team or create an issue on GitHub.
