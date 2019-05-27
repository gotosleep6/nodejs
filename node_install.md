### Debian and Ubuntu based distributions

## Available architectures:

## NodeSource will continue to maintain the following architectures and may add additional ones in the future.

    i386 (32-bit)—not available for Node.js 10 and later
    amd64 (64-bit)
    armhf (ARM 32-bit hard-float, ARMv7 and up: arm-linux-gnueabihf)
    arm64 (ARM 64-bit, ARMv8 and up: aarch64-linux-gnu)

## Supported Ubuntu versions:

## NodeSource will maintain Ubuntu distributions in active support by Canonical, including LTS and the intermediate releases.

    Ubuntu 14.04 LTS (Trusty Tahr) - not available for Node.js 10 and later
    Ubuntu 16.04 LTS (Xenial Xerus)
    Ubuntu 18.04 LTS (Bionic Beaver)
    Ubuntu 18.10 (Cosmic Cuttlefish)
    Ubuntu 19.04 (Disco Dingo)

## Supported Debian versions:

## NodeSource will maintain support for stable, testing and unstable releases of Debian, due to the long release cycle a considerable number of users are running unstable.

    Debian 8 / oldstable (Jessie)
    Debian 9 / stable (Stretch)
    Debian 10 / testing (Buster)
    Debian unstable (Sid)

## Supported Linux Mint versions:

    Linux Mint 17 "Qiana" (via Ubuntu 14.04 LTS) - not available for Node.js 10 and later
    Linux Mint 17.1 "Rebecca" (via Ubuntu 14.04 LTS) - not available for Node.js 10 and later
    Linux Mint 17.2 "Rafaela" (via Ubuntu 14.04 LTS) - not available for Node.js 10 and later
    Linux Mint 18 "Sarah" (via Ubuntu 16.04 LTS)
    Linux Mint 18.1 "Serena" (via Ubuntu 16.04 LTS)
    Linux Mint 18.2 "Sonya" (via Ubuntu 16.04 LTS)
    Linux Mint 18.3 "Sylvia" (via Ubuntu 16.04 LTS)
    Linux Mint Debian Edition (LMDE) 2 "Betsy" (via Debian 8)
    Linux Mint 19 "Tara" (via Ubuntu 18.04 LTS)

## Supported Devuan versions:

    Jessie (via Debian 8)
    Ascii (via Debian 9)
    Ceres (via Debian unstable)

## Supported elementary OS versions:

    elementary OS Freya (via Ubuntu 14.04 LTS) - not available for Node.js 10 and later
    elementary OS Loki (via Ubuntu 16.04 LTS)
    elementary OS Juno (via Ubuntu 18.04 LTS)

## Supported Trisquel versions:

    Trisquel 7 "Belenos" (via Ubuntu 14.04 LTS) - not available for Node.js 10 and later
    Trisquel 8 "Flidas" (via Ubuntu 16.04 LTS)

## Supported BOSS versions:

    BOSS 5.0 "Anokha" (via Debian 7) - not available for Node.js 10 and later
    BOSS 6.0 "Anoop" (via Debian 8)

## Supported BunsenLabs versions:

    Hydrogen (via Debian 8)
    Helium (via Debian 9)

### Installation instructions

## Node.js v12.x:

*Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

*Using Debian, as root
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs

## Node.js v11.x:

*Using Ubuntu
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs

*Using Debian, as root
curl -sL https://deb.nodesource.com/setup_11.x | bash -
apt-get install -y nodejs

## Node.js v10.x:

*Using Ubuntu
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

*Using Debian, as root
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs

## Node.js v8.x:

* Using Ubuntu
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

 *Using Debian, as root
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get install -y nodejs

## Node.js v6.x:

* Using Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

*Using Debian, as root
curl -sL https://deb.nodesource.com/setup_6.x | bash -
apt-get install -y nodejs

Optional: install build tools

To compile and install native addons from npm you may also need to install build tools:

# use `sudo` on Ubuntu or run this as root on debian
apt-get install -y build-essential
