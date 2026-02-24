# BetLink — System Implementation Documentation

## 1. System Overview
BetLink is a broker-controlled house rental platform where:
- Landlords upload properties
- Renters submit requests
- Broker (Admin) controls communication and approvals

No direct communication exists between renter and landlord; the admin mediates contact and approvals.

## 2. System Architecture
Frontend (Client + Admin)
↓
Backend API (NestJS)
↓
Database (PostgreSQL)

## 3. Applications

### 3.1 Client Application (Users)
Purpose: Interface for renters and landlords.

Features (Implemented / To implement):
- Authentication: Register, Login, Logout, Role selection (Renter / Landlord)
- Property Browsing: View property list, filter by price, location, bedrooms, property detail page
- Request System: Submit rental request, view request status
- Landlord Features: Add / Edit / Delete property, view request list for their property
- Profile: Update profile, change password

### 3.2 Admin Dashboard (Broker Panel)
Purpose: Full system control panel for the broker.

Features:
- Property Control: Approve/reject listings, edit property info, remove listings
- Request Management: View all requests, approve/reject requests, add broker notes
- Contact Control (Core Feature): Reveal contacts only after approval; prevent direct communication
- User Management: View all users, block user, verify landlord
- Analytics Dashboard: total properties, total users, pending requests, revenue stats

### 3.3 Backend API (NestJS)
Purpose: Handles business logic, security, and data.

Modules:
- Auth Module: login, register, JWT tokens, password hashing
- Users Module: profile management, role logic, user queries
- Properties Module: create/update/search properties, approval status
- Requests Module: create rental request, change request status, attach broker notes
- Approvals Module: core broker logic (approve listing/request, reveal contacts)
- Admin Module: dashboards, reports, moderation
- Notifications Module: email alerts, request updates, approval notifications
- Payments Module (Optional): listing fee, request fee, commission

## 4. Database Entities
- Users: Stores all system users
- Properties: Stores rental listings
- Requests: Stores renter interest requests
- Approvals: Stores broker decisions
- Audit Logs: Stores system activity

## 5. Security Design
Implemented rules:
- JWT authentication
- Role guards
- DTO validation
- Password hashing
- Hidden contact info
- Admin-only access to private data

## 6. Role Permissions Matrix
Feature | Renter | Landlord | Admin
---|---:|---:|---:
View properties | ✓ | ✓ | ✓
Create property | ✗ | ✓ | ✓
Approve property | ✗ | ✗ | ✓
Send request | ✓ | ✗ | ✗
Approve request | ✗ | ✗ | ✓
View contacts | ✗ | ✗ | ✓

## 7. API Endpoint Overview
Auth
- POST /auth/register
- POST /auth/login

Properties
- GET /properties
- POST /properties
- PATCH /properties/:id

Requests
- POST /requests
- GET /requests/my

Admin
- GET /admin/users
- PATCH /admin/approve-property/:id
- PATCH /admin/approve-request/:id

## 8. Folder Structure Summary
apps/
├ backend
├ admin
└ client
packages/
├ types
├ ui
└ utils

## 9. Development Phases
Phase 1 — Foundation
- ✔ Backend setup
- ✔ Monorepo setup
- ✔ Frontend setup

Phase 2 — Core Features
- Auth
- Property CRUD
- Requests
- Admin approval

Phase 3 — Business Features
- Payments
- Notifications
- Analytics

Phase 4 — Scaling
- caching
- queues
- microservices

## 10. Business Logic Flow
Listing Flow
Landlord → Submit Property → Admin Approves → Visible

Rental Flow
Renter → Send Request → Admin Reviews → Admin Contacts Landlord → Deal

Contact Rule
Contacts only visible if: Admin approved request

## 11. Tech Stack
- Frontend → Next.js
- Backend → NestJS
- Database → PostgreSQL
- ORM → Prisma
- Monorepo → Turborepo + pnpm

## 12. Future Features
Planned upgrades:
- mobile app
- AI price prediction
- map search
- recommendation engine
- SMS verification
- fraud detection

## 13. Deployment Plan
Production stack:
- Nginx
- Docker
- Backend
- Database

## 14. System Status Tracking
Recommended progress board: backlog, in progress, testing, deployed

## 15. Final Architecture Goal
Convert to microservices when scaling: auth service, property service, request service, payment service

## Conclusion
This platform is designed as a broker-controlled marketplace (not peer-to-peer). The admin system is the central authority controlling listings, requests, communication, and transactions. This ensures monetization, trust, fraud prevention, and full platform control.
