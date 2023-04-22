Client Tests: ![Client tests passing badge](https://github.com/Apple-Seed-Studios/ratrace/actions/workflows/client.web.yml/badge.svg)

Server Tests: ![Server tests passing badge](https://github.com/Apple-Seed-Studios/ratrace/actions/workflows/server.node.yml/badge.svg)

# Rat Race

Rat Race is feature-rich to-do app with task timers, tags, and graphical time-tracking.

## Overview

![Rat Race Splash Page](./docs/images/Rat_Race_Splash_Page.png "Rat Race Splash Page")

## Diagram

![diagram](docs/images/whiteboard.png)
![wireframe](docs/images/wireframe.jpg)

### UI Diagram

![UI Diagram](https://share.balsamiq.com/c/dw9XRTqxQKZSETtBVrWKGJ.png)

## Installation

Clone this repository.

    git clone https://github.com/Apple-Seed-Studios/ratrace.git

Download the dependencies.

    cd server; npm install; cd ..
    cd web-client; npm install; cd ..

Update your env variables in `server/.env` and `web-client/.env`

Add this to `server/.env`

    PORT=3001

Start the server...

    cd server; npm run dev; cd ..

Start the client...

    cd web-client; npm start; cd ..

## Contributions

Sound Effect by <a href="https://pixabay.com/users/studioalivioglobal-28281460/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=123742">StudioAlivioGlobal</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=123742">Pixabay</a>
