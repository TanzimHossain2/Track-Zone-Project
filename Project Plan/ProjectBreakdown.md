# Track Zone

## Track Zone Project Overview

---

- User can set their own time and timezone
- User can create as many clock as they want
    - Each clock has their own title  or name
    - Own Timezone
    - Simple Events with time
    - Time difference between users timezone and clock timezone in hours and minute
- User can edit or delete a clock
- Timezone could be UTC (standard) , GMT, PST, EST
- only date-fns library is allowed for this project rest of the logic should write by yourself

What to submit?

- A proper breakdown of the requirements
- Component Tree and Data Flow
- Finally, Proper use of components and custom hooks

## Requirements Breakdown

---

We will have a local clock and a list of clocks

We will create the initials clock from users timezone

Clock Object will look like

- Title
- Id
- timezone
    - type (UTC,GMt,PST,EST)
    - offset
- events  [ ]

Even Objects will look like

- Id
- clockId
- text
- startTime
- Timezone

We will use a clock object for local clock.

And use an array of clocks for other clocks.

We will use event to create events inside clock.

Clock Feature

- properties
- update clock
- delete clock
- calculate difference
- update events

Event Features

- *properties*
- *create event*
- *delete event*
- *update event*
- *fill events by clock*
- *get event by id*
- *get events by*