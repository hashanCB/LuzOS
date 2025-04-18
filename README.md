# LuzOS - A macOS-Inspired Web Experience 

<img width="1436" alt="Screenshot 2025-04-10 at 19 00 53" src="https://github.com/user-attachments/assets/1d2669ac-fcea-4438-bbf8-685bf4bd151f" />
<img width="1440" alt="Screenshot 2025-04-18 at 04 22 31" src="https://github.com/user-attachments/assets/f878b96b-a37e-40f6-a6ab-a3baf692b484" />

## Overview
LuzOS is a sophisticated web-based macOS clone that replicates the macOS desktop experience using modern web technologies. This project demonstrates advanced frontend development techniques, state management, and UI/UX design principles.

## Core Features

### Desktop Environment
- **Window Management System**
  - Draggable and resizable windows
  - Window state persistence using Redux
  - Z-index management for window layering
  - Minimize/maximize functionality

- **File System Simulation**
  - Interactive folder navigation
  - File preview capabilities
  - Custom file type handlers
  - Directory structure management

- **Application Integration**
  - Built-in photo viewer with lightbox support
  - Video player with custom controls
  - Document viewer
  - About me section

### Technical Implementation

#### State Management
- **Redux Store Architecture**
  ```javascript
  {
    IconSelete: {
      isSeleted: number,
      MinSelected: array,
      zindexClick: string
    },
    VideoSelect: {
      isVideoindex: number,
      MinVideos: object
    },
    PhotoSelect: {
      isPhotosindex: number,
      MinPhotos: object,
      onClickphotos: number
    },
    CurrentTask: {
      file: array,
      video: array
    }
  }
  ```

#### Component Architecture
- **Core Components**
  - `Desktop`: Main container with icon grid
  - `Window`: Base window component with drag/resize
  - `FooterBar`: Dock-like navigation bar
  - `FileViewer`: Generic file viewing interface

- **Feature Components**
  - `PhotoView`: Image viewer with lightbox
  - `VideoPlayer`: Custom video player
  - `Folder`: Directory navigation interface

#### Performance Optimizations
- Next.js Image optimization
- Dynamic component loading
- Efficient state updates
- Optimized animations using Framer Motion

## Tech Stack

### Frontend
- **Framework**: Next.js 14
- **UI Library**: React 18
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Media Handling**: 
  - yet-another-react-lightbox
  - react-resizable

### Development Tools
- **Package Manager**: npm
- **Version Control**: Git
- **CI/CD**: Vercel
- **Containerization**: Docker

### Deployment
- **Production**: Vercel
- **Container**: Docker Hub
  ```bash
  docker pull hashanch/macsoweb:latest
  ```
<img width="1080" alt="Screenshot 2025-04-10 at 18 57 18" src="https://github.com/user-attachments/assets/3a7d0660-3b30-4dd2-8d13-7e5cc94ada7c" />
## Project Structure
```
luzos/
├── app/
│   ├── Data/           # Data management
│   ├── Files/          # File viewers
│   ├── Redex/          # Redux store
│   └── DownBarDesktop/ # Dock implementation
├── components/         # Reusable components
├── public/            # Static assets
└── styles/           # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/luzos.git

# Install dependencies
npm install

# Run development server
npm run dev
```

### Docker Deployment
```bash
# Pull the image
docker pull hashanch/macsoweb:latest

# Run the container
docker run -p 3000:3000 hashanch/macsoweb:latest
```

## Live Demo
🌐 [LuzOS Web Experience](https://luz-os.vercel.app/)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

