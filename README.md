attendeeconnect/
│
├── index.html                        // Landing page (role selection)
├── assets/                            // Shared landing page assets
│   ├── css/
│   └── js/
│
├── organizer-app/                     // Organizer platform
│   ├── auth/
|   ├──intro.html
│   │   ├── login.html
│   │   └── signup.html
│   │
│   ├── dashboard/
│   │   └── index.html                 // Organizer main shell
│   │
│   ├── events/
│   │   ├── create/
│   │   │   ├── step1-type.html
│   │   │   ├── step2-details.html
│   │   │   ├── step3-location.html
│   │   │   └── step4-sessions.html
│   │   ├── overview.html              // Draft & Published events
│   │   └── sessions.html              // Session management
│   │
│   ├── notifications/
│   │   └── send.html                  // Send notifications to registered attendees
│   │
│   ├── analytics/
│   │   └── analytics.html
│   │
│   ├── settings/
│   │   └── settings.html
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   ├── dashboard.css
│   │   │   ├── events.css
│   │   │   └── analytics.css
│   │   └── js/
│   │       ├── dashboard.js
│   │       ├── events.js
│   │       └── analytics.js
│   │
│   └── organizer.js                  // Central Organizer JS
│
├── attendee-app/                      // Attendee mobile-first web app
|   ├──manifest.json
|   ├──service-worker.js
│   ├── auth/
│   │   ├── login.html
│   │   └── signup.html
│   │   └── register.html              // Event ID registration
│   │
│   ├── onboarding/
│   │   ├── profile.html
│   │   ├── interests.html
│   │   ├── goals.html
│   │   └── privacy.html
│   │
│   ├── home/
│   │   └── dashboard.html             // Registered events, sessions overview
│   │
│   ├── networking/
│   │   ├── browse.html
│   │   ├── matches.html
│   │   └── connections.html
│   │
│   ├── meetings/
│   │   ├── calendar.html
│   │   └── request.html
│   │
│   ├── sessions/
│   │   ├── session.html
│   │   └── live.html
│   │
│   ├── profile/
│   │   └── profile.html
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   ├── onboarding.css
│   │   │   ├── dashboard.css
│   │   │   ├── networking.css
│   │   │   └── sessions.css
│   │   └── js/
│   │       ├── onboarding.js
│   │       ├── dashboard.js
│   │       ├── networking.js
│   │       └── sessions.js
│   │
│   └── attendee.js                   // Central Attendee JS
│
└── shared/                            // Shared utilities & constants
    ├── api/
    │   ├── auth.js
    │   ├── events.js
    │   └── meetings.js
    │
    ├── utils/
    │   ├── form-validation.js
    │   ├── date-utils.js
    │   └── qr-generator.js
    │
    └── constants.js                   // Roles, URLs, status codes, 



EXPANDED ORGANISER FOLDER STRUCTURE

organizer-app/
│
├── auth/
│   ├── login.html                  // Organizer login screen
│   └── signup.html                 // Organizer signup screen (with email verification)
│
├── dashboard/
│   └── index.html                  // Organizer main dashboard shell
│
├── events/
│   ├── create/
│   │   ├── create-event.html         //create event. all creation steps in one page
│   │
│   ├── overview.html               // Master view of all events
│   │   ├── draft-events.html       // Shows all drafts as cards
│   │   ├── upcoming-events.html    // Shows all published events with future dates
│   │   ├── live-events.html        // Shows events that are currently happening
│   │   └── past-events.html        // Shows completed events
│   │
│   ├── sessions/
│   │   ├── session-list.html       // List of sessions for a selected event
│   │   └── session-create.html     // Modal/page to add a new session
│   │
│   └── event-details/
│       ├── draft.html              // Edit draft event
│       ├── published.html          // View event after publishing (locked fields)
│       ├── upcoming.html           // Event scheduled to start (content view)
│       └── live.html               // Event live view (monitor attendees, meetings, sessions)
│
├── notifications/
│   └── send.html                   // Send notifications to registered attendees
│
├── analytics/
│   └── analytics.html              // Charts: growth, engagement, matchmaking
│
├── settings/
│   └── settings.html               // Organizer account & platform settings
│
├── assets/
│   ├── css/
│   │   ├── dashboard.css
│   │   ├── events.css
│   │   ├── sessions.css
│   │   ├── notifications.css
│   │   └── analytics.css
│   │
│   └── js/
│       ├── dashboard.js
│       ├── events.js               // Event lifecycle management, card updates
│       ├── sessions.js             // Session CRUD logic
│       ├── notifications.js        // Notification sending & API calls
│       └── analytics.js
│
└── organizer.js                     // Central JS file for organizer
                                     // Handles auth, dashboard, routing to events, sessions, notifications



EXPANDED ATTENDEE SECION

attendee-app/
│
├── auth/
|   ├──intro.html
│   ├── login.html                  // Mobile-first login
│   ├── signup.html                 // Mobile-first signup
│   └── register.html               // Event registration by special Event ID
│
├── onboarding/
│   ├── profile.html                // Step 1: Name, title, company, profile photo
│   ├── interests.html              // Step 2: Select interests
│   ├── goals.html                  // Step 3: Select goals
│   └── privacy.html                // Step 4: Privacy settings
│
├── home/
│   └── dashboard.html              // Shows all registered events (cards)
│
├── events/                         // Event-specific views for attendees
│   ├── draft/                      // Events registered but not yet live
│   │   └── view-event.html         // "Event not live" view
│   │
│   ├── upcoming/                   // Events soon to start (countdown)
│   │   └── view-event.html         // Countdown, flyers, promo videos, venue info
│   │
│   ├── live/                       // Events currently happening
│   │   └── view-event.html         // Live sessions, networking, announcements
│   │
│   └── past/                       // Completed events
│       └── view-event.html         // Summary, connections, session recordings
│
├── networking/
│   ├── browse.html                 // Browse attendees
│   ├── matches.html                // AI-powered matches
│   └── connections.html            // All accepted connections
│
├── meetings/
│   ├── calendar.html               // Meetings calendar
│   └── request.html                // Request meetings with attendees
│
├── sessions/
│   ├── session.html                // Session details (description, speakers, location/stream)
│   └── live.html                   // Live session: polls, Q&A, reactions
│
├── profile/
│   └── profile.html                // Edit attendee info, privacy, interests, goals
│
├── assets/
│   ├── css/
│   │   ├── onboarding.css
│   │   ├── dashboard.css
│   │   ├── events.css              // Handles draft, upcoming, live, past event views
│   │   ├── networking.css
│   │   ├── meetings.css
│   │   └── sessions.css
│   │
│   └── js/
│       ├── onboarding.js
│       ├── dashboard.js
│       ├── events.js                // Handles event view logic depending on status
│       ├── networking.js
│       ├── meetings.js
│       └── sessions.js
│
└── attendee.js                      // Central JS: routing, auth, global state
