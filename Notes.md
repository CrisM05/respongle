# Notes
Hopefully this won't be as bad of a project as pear.

### Day 1:
Found a nice color palette from the site that Ralfi recommended.
It's in the styles directory in the src directory in the frontend.
But I need either a good wire frame, a good reference, or help from Soren to make it look good.
But it is written in sass, so it does make 2 additional files per sass file.

I'm thinking for a reference to a website, i'll base it off, because I want it to be a tracking site, notion or obsidian.

Need to figure out a way to nicely render the information.
For database, since I don't know how to run postgres off the server (ubuntu based), I'll just use sqlite3.
Goated.

Need a font.

## Frontend notes
Should there be a nav bar? I think so, actually I don't think so.
There's not much functionality.
 This is technically a full stack application because I need a frontend, a backend to process data, and a database to make sure I can store data prolonged.


## ERD
To figure out what I need for an ERD, then I need to think of the functionalities I want to be able to use. *Crazy that the things taught at Marcy are coming into play.*

- Log the different point system items we came up with
- Display who's in the lead
- Display previous data
  - Previous times (days, weeks, months)
  - Previous winners
  - Previous individuals info
  - What they wanted to get as reward
- Make it so only one person can log the data

This might need the different tables for each of the people involved. 
For a stretch feature, I might make it so the tables are made via frontend. 
But that can lead a whole bunch of vulnerabilities out. 
That could be remedied by making it like one of Carm's projects on her github, make it to be compiled on a singular machine, with limited outside calls, if any

### Tables
- One per user to be tracked
  - Column per responsibility
  - Date that the data corresponds to
  - Date logged, for backend reasons (I like data)
- Admin
  - Username
  - Password (hashed)