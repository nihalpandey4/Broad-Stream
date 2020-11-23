<!-- PROJECT SHIELDS -->
[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<hr>
<p>
  <p align="center">
    <h1>Broad-Stream </h1>
    <p>A service that allows users to broadcast their screen as well as stream other's.</p>
    <a href="https://github.com/nihalpandey4/Live_Video_Broadcasting_Service/issues">Report Bug</a>
    </p>
</p>

<hr>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)

<hr>


<!-- ABOUT THE PROJECT -->
## About The Project

**Broad-Stream** is a Web application that allows users to directly stream video/audio by configuring their OBS to rtmp://localhost/live with the Stream Key equal to the ID of the stream. Features provided in this project can be broadly categorized as - 

### Always available - 
* Seeing all the available Streams
* Surfing live stream

### When the user is Signed In
* CRUD operations on streams

<hr>

## Built using

* [Node.js](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [React-Redux](https://react-redux.js.org/)
* [JSON Sever](https://www.npmjs.com/package/json-server)
* [Node-Media-Server](https://www.npmjs.com/package/node-media-server)

<hr>

## Getting Started

### Prerequisites

1. **Node.js v12 or later**

Run <code> node -v </code> in terminal to check version of node installed. 
If node.js is not installed or version is lower than 12, follow [this](https://nodejs.org/en/download/) link to download the LTS version.

2. **Git**

You can download the latest version of <code>git</code> [here](https://git-scm.com/downloads).

3. **OBS Studio**
You can download the OBS Studio from [here](https://obsproject.com/download).

### Installation

1. Clone the repo

```sh
git clone https://github.com/nihalpandey4/Live_Video_Broadcasting_Service.git
```
2. Install the dependencies

```sh
cd client/
npm install
cd ../rtmpserver/
npm install
cd ../api-server/
npm install
```

<hr>

## Usage

1. Start a new terminal and run client side React App.

```sh
cd Live_Video_Broadcasting_Service/client
npm start
```

2. Start a new terminal and run API server

```sh
cd Live_Video_Broadcasting_Service/api-server
npm start
```
3. Start a new terminal and run RTMP server of the application.

```sh
cd Live_Video_Broadcasting_Service/rtmpserver
npm start
```

After executing above commands your client side React App is running at localhost:3000. API server is running at localhost:3001. And RTMP server is running on port 8000.

4. Now go to localhost:3000 using any browser to access this application. 

5. For starting a stream

* Create Stream by entering Title and Description
* Now start OBS Studio. Go to Settings > Stream
* Choose service as custom, server = rtmp://localhost/live, and stream key as shown in the application and click ok.
* Now click on "Start Streaming" to start your stream.

<hr>

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/nihalpandey4/Live_Video_Broadcasting_Service/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Nihal Pandey : nihalpandey4@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]:	https://img.shields.io/github/issues/nihalpandey4/Live_Video_Broadcasting_Service
[issues-url]: https://github.com/nihalpandey4/Live_Video_Broadcasting_Service/issues
[forks-shield]: https://img.shields.io/github/forks/nihalpandey4/Live_Video_Broadcasting_Service
[forks-url]: https://github.com/nihalpandey4/Live_Video_Broadcasting_Service/network/members
[stars-shield]: https://img.shields.io/github/stars/nihalpandey4/Live_Video_Broadcasting_Service
[stars-url]: https://github.com/nihalpandey4/Live_Video_Broadcasting_Service/stargazers
[license-shield]: https://img.shields.io/github/license/nihalpandey4/Live_Video_Broadcasting_Service
[license-url]: https://github.com/nihalpandey4/Live_Video_Broadcasting_Service/blob/main/LICENSE