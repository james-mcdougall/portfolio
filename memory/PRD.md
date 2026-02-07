# James McDougall Portfolio - PRD

## Original Problem Statement
Create a portfolio website for James McDougall highlighting his experience as an iOS developer since 2019. Use provided photo and resume PDF. Make it professional, modern, and fun. Create 5 placeholder project sections with clickable buttons leading to detail pages.

## User Choices
- **Theme**: Dark mode centric - sleek, modern, tech-focused
- **Design**: Apple-inspired with subtle gradients, smooth transitions, following Apple Human Interface Guidelines
- **Projects**: 5 generic iOS project placeholders with hover pop-out effects
- **Contact**: Display info only (no contact form)

## User Personas
- **Primary**: Tech recruiters, hiring managers seeking iOS development talent
- **Secondary**: Potential clients looking for iOS development services
- **Tertiary**: Fellow developers and networking connections

## Core Requirements (Static)
1. Hero section with profile photo and introduction
2. About section with professional summary
3. Skills showcase featuring iOS technologies
4. Work experience timeline
5. 5 Project placeholder cards with hover animations
6. Project detail pages (routed via /project/:id)
7. Contact info display section
8. Smooth scroll navigation

## Architecture
- **Frontend**: React 18, React Router, Framer Motion, Tailwind CSS, Lucide Icons
- **Backend**: FastAPI (Python)
- **Database**: MongoDB (configured but minimal usage for static portfolio)
- **Design System**: Apple Dark theme with iOS Blue (#0A84FF) accent

## What's Been Implemented (Jan 2026)
- [x] Complete React SPA with React Router navigation
- [x] Hero section with floating profile image and animations
- [x] About section with stats grid
- [x] Skills section with categorized skill badges
- [x] Experience timeline with 6 job positions
- [x] 5 Project placeholder cards with Bento grid layout
- [x] Project detail pages with dynamic routing
- [x] Contact info display with glass-morphism cards
- [x] Responsive design (mobile, tablet, desktop)
- [x] Smooth animations via Framer Motion
- [x] Backend API for projects data
- [x] Proxy configuration for API calls

## P0/P1/P2 Features Remaining

### P0 (Critical)
- None - MVP Complete

### P1 (High Priority)
- Add real project content to replace placeholders
- Add resume download button/link
- Add more portfolio images/screenshots

### P2 (Nice to Have)
- Add blog section
- Implement dark/light theme toggle
- Add animation preferences for reduced motion
- Add analytics tracking

## Next Tasks
1. Replace 5 placeholder projects with actual iOS project showcases
2. Add actual app screenshots to project detail pages
3. Consider adding testimonials section
4. Add downloadable resume PDF link
