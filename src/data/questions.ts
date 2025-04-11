import { Question } from "../types/quiz";
export const QUESTIONS: Question[] = [
  {
    question:
      "A server administrator has four identical drives to install into a database server. Which of these RAID types would provide both redundancy and the most available storage space?",
    choices: {
      A: "RAID 5",
      B: "RAID 10",
      C: "RAID 0",
      D: "RAID 1",
    },
    answer: "A",
    reason:
      "With RAID 5, three drives would contain user data and the fourth drive would store parity information. This efficient use of space and the included redundancy make RAID 5 the best option.",
  },
  {
    question:
      "A user is attempting to charge their iPhone, but the charging icon does not appear when connecting the charging cable. A working cable from another iPhone exhibits the same symptoms. Which of the following is the MOST likely reason for this issue?",
    choices: {
      A: "The screen is locked",
      B: "An iOS update is pending",
      C: "The iPhone has low signal",
      D: "The Lightning port is damaged",
    },
    answer: "D",
    reason:
      "A damaged Lightning interface would prevent the phone from charging, even while attempting to charge with different cables.",
  },
  {
    question:
      "A user in the marketing department needs an LCD with the best possible color representation. Which of the following would be the BEST choice for this requirement?",
    choices: {
      A: "TN",
      B: "CCFL",
      C: "IPS",
      D: "VA",
    },
    answer: "C",
    reason:
      "An IPS (In Plane Switching) display provides excellent color representation and would be the best choice of the available options.",
  },
  {
    question:
      "A company is receiving an increase in malware delivered to random employees through email attachments. Which of the following would be the BEST way to protect users against this malicious software?",
    choices: {
      A: "Spam gateway",
      B: "DHCP services",
      C: "Syslog",
      D: "VLANs",
    },
    answer: "A",
    reason:
      "A spam gateway acts as a filter for unauthorized or unsolicited email messages. Most spam gateways can scan files for malicious software and filter those messages before delivery to the recipient.",
  },
  {
    question:
      "A user has reported their tablet is not able to retrieve or send mail, browse the Internet, or connect to video conferences. Apps on the device which do not require connectivity are working as expected. Which of these would be the MOST likely cause of this issue?",
    choices: {
      A: "Battery is very low",
      B: "The Wi-Fi network is out of range",
      C: "The touch screen needs calibration",
      D: "The tablet is overheated",
    },
    answer: "B",
    reason:
      "A Wi-Fi network has limited range, and poor connectivity would result in communications issues, application faults, and other networking issues.",
  },
  {
    question:
      "A PC technician has been asked to replace the LCD on a touch-screen laptop computer. Which of the following would be the MOST important component to test after this replacement?",
    choices: {
      A: "Digitizer",
      B: "Keyboard",
      C: "Audio controls",
      D: "System memory",
    },
    answer: "A",
    reason:
      "A digitizer is built into the LCD display, and it would be the most likely component to have a problem after the entire display has been replaced.",
  },
  {
    question:
      "The computers in the shipping department are receiving the message “No connectivity” on their computers. The ipconfig output on one of the computers provides this information:\n    IPv4 Address: 192.168.1.22\n    Subnet Mask: 255.255.255.0\n    Default Gateway: 192.168.1.1\nFrom this device, a technician is able to successfully ping 127.0.0.1 and 192.168.1.22. The technician can also ping other devices in the shipping department, but cannot receive a ping response from servers in the data center or from the 192.168.1.1 address.\nWhich of these would be the MOST likely cause of this issue?",
    choices: {
      A: "The DHCP server is down",
      B: "The wireless network is experiencing interference",
      C: "The local router is down",
      D: "The Internet provider is experiencing an outage",
    },
    answer: "C",
    reason:
      "The default gateway is the local router for the IP subnet. If the default gateway address of 192.168.1.1 is not responding to a ping, then the router may not be operational.",
  },
  {
    question:
      "Which of the following would be the BEST way to activate the screen of a smartphone without physically touching the display?",
    choices: {
      A: "Trackpad",
      B: "Port replicator",
      C: "Smart card reader",
      D: "Touch pen",
    },
    answer: "D",
    reason:
      "A touch pen provides for interaction of a touch screen without physically pressing the display with a fingertip. Touch pens are often referenced as a touchscreen pen, touch screen stylus, or capacitive stylus.",
  },
  {
    question:
      "A graphics designer is working on a computer that powers itself off after about an hour of work. The computer tends to power down when working on complex designs that require extensive CPU utilization. Which of the following would be the MOST likely reason for this issue?",
    choices: {
      A: "The case fans are blocked",
      B: "The hard drive is failing",
      C: "The graphics software is corrupted",
      D: "A device driver is outdated",
    },
    answer: "A",
    reason:
      "Most motherboards are designed to power off automatically if the temperatures become excessive. If the case fans are blocked, the inside of the computer will not be able to efficiently cool the system. Eventually, the heat from the heavily-worked CPU will cause the system to power down.",
  },
  {
    question:
      "Which of these services would be associated with a Windows file transfer?",
    choices: {
      A: "LDAP",
      B: "SMB",
      C: "IMAP",
      D: "SSH",
    },
    answer: "B",
    reason:
      "SMB (Server Message Block) is the protocol used by Microsoft Windows for file sharing, printer sharing, and other Windows services. SMB commonly uses port 445 to provide direct SMB communication between Windows devices.",
  },
  {
    question:
      "A server administrator is configuring a new system for virtualization. Which of the following configurations would provide virtualization support on an Intel CPU?",
    choices: {
      A: "Install a 64-bit operating system",
      B: "Turn on HTT",
      C: "Allocate a larger amount of storage space to the virtualization partition",
      D: "Enable VT in the firmware",
    },
    answer: "D",
    reason:
      "Many Intel processors support VT, or Intel Virtualization Technology. This CPU (Central Processing Unit) feature for virtualization provides hardware support for hypervisors and can make the virtualization process much more efficient than running the virtual machines in a software-only environment.",
  },
  {
    question:
      "A user in the shipping department is printing a single page to your laser printer, but the output includes the printed page with three or four pages stuck together underneath it. Which of these would be the most likely cause of this issue?",
    choices: {
      A: "Duplexer",
      B: "Transfer belt",
      C: "Fuser assembly",
      D: "Separation pad",
      E: "Imaging drum",
    },
    answer: "D",
    reason:
      "The separation pad ensures that the printer will pull a single page from the paper tray at a time. As the separation pad becomes worn, more than one page can inadvertently be pulled through the laser printing process.",
  },
  {
    question:
      "A company is using a cloud-based service that provides a hardware platform and no additional software. Which of these would BEST describe this purchase?",
    choices: {
      A: "SaaS",
      B: "Hybrid",
      C: "Metered",
      D: "IaaS",
    },
    answer: "D",
    reason:
      "IaaS (Infrastructure as a Service) is a model that provides the computing platform, but no additional software. The user will usually configure the platform with the appropriate CPU, memory, and storage options, and the service provider is only responsible for the uptime and availability of the hardware platform. The user is generally responsible for all software administration.",
  },
  {
    question:
      "While working at their desk, a laptop user would like to use a full-size keyboard and external mouse. They would also like to connect to a monitor and wired network without connecting and disconnecting cables each time they leave the desk. Which of these would be the BEST way to provide this functionality?",
    choices: {
      A: "Use separate desktop and laptop computers",
      B: "Install a docking station at the user’s desk",
      C: "Use a wireless access point at the user’s desk",
      D: "Install a USB hub for the laptop",
    },
    answer: "B",
    reason:
      "A docking station provides the laptop with a single connection to video, network, keyboard, mouse, and other peripheral connections on their desk.",
  },
  {
    question:
      "A server administrator needs to store gigabytes of server performance statistics for future analysis. The data needs to be always be available, even if a storage drive fails. Which of the following would be the BEST choice for this data?",
    choices: {
      A: "Optical drive",
      B: "SD",
      C: "RAID",
      D: "CompactFlash",
    },
    answer: "C",
    reason:
      "Most RAID (Redundant Array of Independent Disks) configurations support the use of multiple drives for redundancy, even if a single drive was to fail.",
  },
  {
    question:
      "In which of the following would a cable with a DB-9 connector be used?",
    choices: {
      A: "Attaching a mouse or keyboard to a desktop computer",
      B: "Configuring a router",
      C: "Connecting an external storage device",
      D: "Attaching a video camera to a computer",
    },
    answer: "B",
    reason:
      "A DB-9 connector, or less commonly, DE-9 (D-subminiature size E, 9 pin) is a connector used to send serial signals to another device. A DB-9 connector on a computer is commonly used to connect to the management interface of a switch, router, firewall, or another infrastructure device.",
  },
  {
    question:
      "A workstation administrator is configuring a new system for graphics designers, and the users have requested the fastest possible storage speed for reading and writing data. Which of the following would be the BEST choice for this requirement?",
    choices: {
      A: "10 TB NAS",
      B: "8 TB HDD",
      C: "5 TB SAN",
      D: "2 TB SSD",
    },
    answer: "D",
    reason:
      "The most important requirement for this new system is the speed of reading and writing data. Of the available options, the fastest throughput is an SSD (Solid-State Drive). Although the storage space is the lowest of the available options, the users didn't specify any minimum storage size requirements.",
  },
  {
    question:
      "A user has connected a new laptop to an LCD projector in a conference room. About thirty minutes into the presentation, the projector light turns off but the projector fans continue to run. Which of the following would be the MOST likely reason for this issue?",
    choices: {
      A: "Incorrect laptop cable",
      B: "Poor projector airflow",
      C: "Dead pixels",
      D: "Incorrect resolution setting",
    },
    answer: "B",
    reason:
      "The lamp in an LCD projector can get very hot, and there are often many fans used to keep the lamp cool enough to work properly. If the fans are not working properly or the airflow is blocked, the projector will automatically shut down to prevent any heat damage.",
  },
  {
    question:
      "A marketing manager is printing a document on the company letterhead stored in one of the printer trays. However, the output is instead printed from a tray containing plain paper. Which of the following would be the BEST way to resolve this issue?",
    choices: {
      A: "Select the duplex print option",
      B: "Enable collated output",
      C: "Modify the output tray in the print dialog",
      D: "Change the output orientation",
    },
    answer: "C",
    reason:
      "The printer dialog shown during the print process should provide an option to choose the tray for the print job. If the tray selection is available, the option should be available in the print driver properties.",
  },
  {
    question:
      "A system administrator has noticed that their cloud implementation supports multiple application instances during the busy workday, but only one application instance is available during the slower evening shifts. Which of the following would BEST describe this functionality?",
    choices: {
      A: "Metered utilization",
      B: "Rapid elasticity",
      C: "High availability",
      D: "Shared resources",
      E: "File synchronization",
    },
    answer: "B",
    reason:
      "Rapid elasticity is a cloud characteristic used to increase and decrease the available resources as the application load changes.",
  },
  {
    question:
      "A security administrator would like to ensure that each login attempt from a smartphone is from someone physically located inside the corporate office. Which of the following would provide this functionality?",
    choices: {
      A: "Serial interface",
      B: "GPS",
      C: "iCloud",
      D: "Hotspot",
    },
    answer: "B",
    reason:
      "GPS (Global Positioning System) devices are very useful for mapping travel routes and destinations, and the GPS locations can be used by an application to identify the location of the device.",
  },
  {
    question:
      "A technician is connecting USB interfaces on a computer case to the motherboard. Which of the following would be commonly used for this connectivity?",
    choices: {
      A: "PCIe",
      B: "eSATA",
      C: "TPM",
      D: "Headers",
    },
    answer: "D",
    reason:
      "A header, or pin header, is a group of pins on the motherboard. These pins provide connectivity to different motherboard features, such as power, lights, peripheral connections, and more.",
  },
  {
    question:
      "A manufacturing company uses a specialized printer which connects to a Windows computer over a USB connection. Which of the following would be the BEST way to allow all Windows devices in the company to send print jobs to this printer?",
    choices: {
      A: "Connect using AirPrint",
      B: "Configure Windows Printer Sharing",
      C: "Use Print to File and copy the file to the printer",
      D: "Copy the print jobs to a USB drive",
    },
    answer: "B",
    reason:
      "Windows Printer Sharing allows the Windows computer to act as a print server. All devices on the network can view the printer and send print jobs to the printer using the Printer Sharing feature.",
  },
  {
    question:
      "Which of these would commonly be used to connect to an external storage device?",
    choices: {
      A: "F-connector",
      B: "ST",
      C: "eSATA",
      D: "Molex",
    },
    answer: "C",
    reason:
      "eSATA (External Serial ATA) is the external version of the SATA standard. The connectors for eSATA are slightly different than the internal SATA connectors.",
  },
  {
    question:
      "A company has acquired computers that were previously part of a third- party lease. All of the computers prompt for a password when powering on the system before the operating system will load, but the password was not included with the computers. Which of the following would be the BEST way to resolve this issue?",
    choices: {
      A: "Replace the primary storage drive",
      B: "Boot from the Windows installation media",
      C: "Reset the BIOS using jumpers on the motherboard",
      D: "Disconnect the power cable for ten minutes",
    },
    answer: "C",
    reason:
      "The BIOS (Basic Input Output System) of a computer can often be assigned configuration or management passwords to prevent any changes to the BIOS settings. The BIOS also supports a boot or user password, and the system will not boot until the correct password is entered. This password can often be reset by shorting a jumper on the motherboard and restarting.",
  },
  {
    question:
      "A user has complained that a laptop will not charge the battery past 25% percent, and the laptop only operates for fifteen minutes when on battery power. The battery and the AC adapter have already been replaced. Which of the following components would be the MOST likely cause of this issue?",
    choices: {
      A: "Motherboard",
      B: "Backlight inverter",
      C: "802.11 adapter",
      D: "CPU",
    },
    answer: "A",
    reason:
      "The motherboard on a laptop usually contains all of the major subsystems, including the CPU (Central Processing Unit), memory, video, and power. If the laptop will not charge a battery or power the system, then the entire motherboard will need to be replaced.",
  },
  {
    question:
      "A field engineer is working at a remote site that is under construction, but the site does not have an Ethernet or Wi-Fi Internet connection. Which of the following would be the BEST way to get access to the Internet at this location?",
    choices: {
      A: "Bluetooth",
      B: "Hotspot",
      C: "MAN",
      D: "NFC",
    },
    answer: "B",
    reason:
      "Configuring a mobile phone as a hotspot allows one or more people to use the phone's Internet connection over Wi-Fi. If Internet isn't currently available from another 802.11 wireless network, then using the hotspot feature can provide an option for Internet access.",
  },
  {
    question:
      "Which of these would commonly be used to connect to an external storage device?",
    choices: {
      A: "F-connector",
      B: "ST",
      C: "eSATA",
      D: "Molex",
    },
    answer: "C",
    reason:
      "eSATA (External Serial ATA) is the external version of the SATA standard. The connectors for eSATA are slightly different than the internal SATA connectors.",
  },
  {
    question:
      "A technician is connecting USB interfaces on a computer case to the motherboard. Which of the following would be commonly used for this connectivity?",
    choices: {
      A: "PCIe",
      B: "eSATA",
      C: "TPM",
      D: "Headers",
    },
    answer: "D",
    reason:
      "A header, or pin header, is a group of pins on the motherboard. These pins provide connectivity to different motherboard features, such as power, lights, peripheral connections, and more.",
  },
  {
    question: "Which of the following would be MOST associated with a SAN?",
    choices: {
      A: "Bluetooth",
      B: "RAID",
      C: "APIPA",
      D: "Cellular",
    },
    answer: "B",
    reason:
      "A SAN (Storage Area Network) provides access to a relatively large storage system over the network. RAID (Redundant Array of Independent Disks) is a common method of providing data redundancy for storage systems.",
  },
  {
    question:
      "A network administrator is using a laptop computer to configure a switch over a direct cable connection. Which of the following would BEST describe this connectivity?",
    choices: {
      A: "Bluetooth",
      B: "Thunderbolt",
      C: "Serial",
      D: "Lightning",
    },
    answer: "C",
    reason:
      "Most infrastructure devices provide a management or console interface over a serial link. These have traditionally used DB-9 (D-Subminiature size B - 9 pin) interfaces, but newer devices often use USB (Universal Serial Bus) connections.",
  },
  {
    question:
      "A manager in the accounting department is complaining of slow performance on her computer. Initial troubleshooting shows low utilization of CPU and memory. A network speed test reports normal throughput to the local network devices. Which of the following would be the BEST next step for troubleshooting this issue?",
    choices: {
      A: "Boot to Safe Mode",
      B: "Upgrade the BIOS",
      C: "Replace the memory modules",
      D: "Perform a hard drive diagnostic",
    },
    answer: "D",
    reason:
      "If a slowdown is not associated with CPU, memory, or the network, then the issue may be with some other type of hardware. A diagnostic of the hard drive would identify any issues that may be slowing down the computer.",
  },
  {
    question:
      "A server administrator has moved a database server from a lab to a data center. After installing the server in a data center rack, the system does not power on. None of the system lights are on, and the power supply and cooling fans do not spin up. Which of the following should be the FIRST troubleshooting step for this issue?",
    choices: {
      A: "Replace the power supply",
      B: "Reseat all of the internal components",
      C: "Check the power cable",
      D: "Replace the motherboard",
    },
    answer: "C",
    reason:
      "When troubleshooting, the easiest possible solution should usually be the first one to check. This particular system has already been in use, and the system administrator was the person who moved it from one location to another. Of the available options, checking the power cable should be the first thing to check when power issues arise.",
  },
  {
    question:
      "A user is traveling and has enabled airplane mode on their laptop, but they would still like to use their wireless headset. Which of these settings should be enabled to allow this functionality?",
    choices: {
      A: "Wi-Fi",
      B: "USB",
      C: "Bluetooth",
      D: "Cellular",
    },
    answer: "C",
    reason:
      "Bluetooth networks are PANs (Personal Area Networks) that provide a short-distance connection to local peripherals. For example, it's common to use a Bluetooth link to connect to headsets, wireless mice, keyboards, or speakers.",
  },
  {
    question:
      "A user has submitted a job to a network printer, but the printer will not begin to print until the user has typed their PIN on the printer console. Which of the following would BEST describe this scenario?",
    choices: {
      A: "Badging",
      B: "Secured prints",
      C: "Active Directory",
      D: "ADF",
    },
    answer: "B",
    reason:
      "With secured prints, the user can define a PIN (Personal Identification Number) on their computer, and this PIN must be used on the printer to start the printing process. This process ensures the output is not sitting unattended on the printer.",
  },
  {
    question:
      "A system administrator has been asked to troubleshoot a non-operational print server. The printer displays an error code on the front panel and does not respond to any user input. The system administrator has created a list of four theories that might cause this particular error. Which of the following would be the best NEXT troubleshooting step?",
    choices: {
      A: "Test each theory on a lab system",
      B: "Document the theories in the company knowledgebase",
      C: "Try different theories on the print server until the problem is resolved",
      D: "Replace the print server device",
    },
    answer: "A",
    reason:
      "Before a plan of action can be established, it's important to know which plan to follow. Testing each theory can help determine which guesses might resolve the issue and which theories had no effect.",
  },
  {
    question:
      "Which of these devices sends incoming traffic to every other port on the device?",
    choices: {
      A: "Router",
      B: "Unmanaged switch",
      C: "Cable modem",
      D: "Hub",
    },
    answer: "D",
    reason:
      "A hub does not make any forwarding decisions based on the contents of a network frame. When the frame is received by the hub, it sends a copy of that frame to every other interface on the hub.",
  },
  {
    question:
      "Which of these wireless standards was the first to introduce 54 Mbit/sec throughput on the 2.4 GHz band?",
    choices: {
      A: "802.11g",
      B: "802.11ac",
      C: "802.11n",
      D: "802.11b",
    },
    answer: "A",
    reason:
      "802.11g used the same 2.4 GHz frequencies as the 802.11b standard, but the maximum theoretical throughput was increased from 11 megabits per second to 54 megabits per second.",
  },
  {
    question:
      "An organization has implemented a cloud solution using a third-party data center. Access to the cloud service is available to anyone on the Internet. Which of the following describes this deployment model?",
    choices: {
      A: "Hybrid",
      B: "Public",
      C: "Community",
      D: "Private",
    },
    answer: "B",
    reason:
      "Public cloud deployments are for organizations that would like to provide services to anyone on the Internet. Google Mail is an example of a public cloud service.",
  },
  {
    question:
      "What voltages would be commonly found on a motherboard's power supply connector?",
    choices: {
      A: "120 V AC",
      B: "12 V AC, 5 V AC, 3.3 V AC",
      C: "12 V DC, 5 V DC, 3.3 V DC",
      D: "120 V DC",
    },
    answer: "C",
    reason:
      "A computer's power supply provides direct current (DC) at twelve volts, five volts, and 3.3 volts.",
  },
  {
    question:
      "A user is reporting this message on their Windows computer taskbar icon: 'Limited or No connectivity.' Which of the following would be the best NEXT troubleshooting step?",
    choices: {
      A: "Check the local IP address configuration",
      B: "Restart the computer",
      C: "Ping the default gateway",
      D: "Check the switch VLAN configuration",
      E: "Check for a duplicate IP address",
    },
    answer: "A",
    reason:
      "The message of limited connectivity is usually based on a system with no access to network resources. This is often occurs when a system is unable to contact a DHCP (Dynamic Host Configuration Protocol) server and instead assigns itself an APIPA (Automatic Private IP Addressing) address.",
  },
  {
    question:
      "What kind of device is installed into a computer and directly connects the computer to an Ethernet network?",
    choices: {
      A: "NIC",
      B: "Switch",
      C: "Repeater",
      D: "Bridge",
    },
    answer: "A",
    reason:
      "A NIC (Network Interface Card) is the hardware used to connect a device to a network.",
  },
  {
    question:
      "A network administrator is planning to connect the network of two buildings together with a Category 6A cable.Ten Ethernet cables have been run from a wiring closet, through a conduit, and into a wiring closet on the other side. The network administrator needs to identify the ends of the cables so they can be properly terminated on each side. Which of the following should be used to complete this task?",
    choices: {
      A: "Cable stripper",
      B: "Loopback plug",
      C: "Tone generator",
      D: "Crimper",
    },
    answer: "C",
    reason:
      "A tone generator places an analog audio tone onto the wires of a cable, and an inductive probe is used on the other end to precisely identify the cable with the tone.",
  },
  {
    question:
      "A server administrator has replaced a bad hard drive in a RAID array and has verified the array is operating with full functionality. Which of the following would be the best NEXT troubleshooting step?",
    choices: {
      A: "Run diagnostics on the bad hard drive",
      B: "Replace the RAID controller",
      C: "Create a list of optional troubleshooting steps",
      D: "Document the drive replacement",
    },
    answer: "D",
    reason:
      "After an issue has been resolved, the last step of the troubleshooting process is to document the issue, the solution, and any important details identified during the troubleshooting process.",
  },
  {
    question:
      "An application developer is designing an app which uses three servers running simultaneously as VMs on her desktop. An upgrade to the application will add three additional servers to the list of running VMs. Which of these hardware resources will be the MOST important for this upgrade?",
    choices: {
      A: "Video adapter",
      B: "Network connection",
      C: "RAM",
      D: "CPU",
    },
    answer: "C",
    reason:
      "Without any additional information about the applications, the most critical resource for these new servers will be the amount of RAM required to keep all of the operating systems running simultaneously.",
  },
  {
    question:
      "A company has experienced a significant increase in printing costs over the last few months. Which of the following would provide the best way to track and manage these costs?",
    choices: {
      A: "Audit logs",
      B: "Print spooler uptime",
      C: "Power usage monitor",
      D: "Packet captures",
    },
    answer: "A",
    reason:
      "Audit logs can be used to provide detailed information about print jobs, number of pages printed, the usernames submitting the print jobs, and much more.",
  },
  {
    question:
      "A network engineer is troubleshooting an issue communicating to the Internet over a newly installed DSL connection. A laptop is connected to a DSL router over twisted pair copper. The IP configuration of the laptop is: IP address: 169.254.228.109 Subnet mask: 255.255.0.0 DNS: 9.9.9.9 Which of the following should be the NEXT troubleshooting step?",
    choices: {
      A: "Reset the DSL modem",
      B: "Modify the subnet mask",
      C: "Change the DNS server address",
      D: "Check the status of the DHCP server",
    },
    answer: "D",
    reason:
      "A DHCP (Dynamic Host Configuration Protocol) server automatically distributes IP addresses to new devices connecting to a network. If the DHCP server isn't available, a device will commonly auto-configure itself with an APIPA (Automatic Private IP Addressing) address.",
  },
  {
    question:
      "A user in the accounting department has configured their mobile phone as a hotspot. Which of these would BEST describe this configuration?",
    choices: {
      A: "Use the phone as a method of payment",
      B: "Fast-charge the phone",
      C: "Access the Internet through the phone",
      D: "Connect to external speakers",
    },
    answer: "C",
    reason:
      "Many smartphones include a hotspot feature, allowing a user to turn their phone into an Internet router.",
  },
  {
    question:
      "A user has logged into their laptop using a fingerprint reader on the laptop's keyboard tray. Which of the following would BEST describe this technology?",
    choices: {
      A: "NFC",
      B: "GPS",
      C: "Screen digitizer",
      D: "Biometrics",
    },
    answer: "D",
    reason:
      "Biometrics provide a way to authenticate using something physical about a person. Some common biometric systems will evaluate a fingerprint, face recognition, or other physical trait to complete the authentication process.",
  },
  {
    question:
      "An organization has recently implemented a browser-based email system that requires no additional software on the user devices. Which of the following would describe this type of application?",
    choices: {
      A: "SaaS",
      B: "IaaS",
      C: "HaaS",
      D: "PaaS",
    },
    answer: "A",
    reason:
      "SaaS (Software as a Service) is on-demand software. The client does not maintain a local software installation, and the application support is managed by the service provider.",
  },
  {
    question:
      "What type of power supply can operate across countries using different voltages?",
    choices: {
      A: "High-voltage",
      B: "Primary",
      C: "Modular",
      D: "Auto switching",
    },
    answer: "D",
    reason:
      "An auto switching power supply can automatically detect and use different input voltages without the need to manually select an input voltage.",
  },
  {
    question:
      "A user is reporting after starting their desktop, they receive the message “Windows has detected an IP address conflict.” Which of the following would be the BEST way to resolve this issue?",
    choices: {
      A: "Replace the Ethernet patch cable",
      B: "Enable DHCP on the workstation",
      C: "Bounce the switch port",
      D: "Reboot the default gateway",
    },
    answer: "B",
    reason:
      "If a device is configured for manual addressing, then configuring the device to receive IP addresses via DHCP can avoid possible address duplication.",
  },
  {
    question:
      "Each time a user logs in, they must type their password and a random number from a smartphone app. Which of the following would BEST describe this process?",
    choices: {
      A: "PRL update",
      B: "Bluetooth pairing",
      C: "NFC data transfer",
      D: "Two-factor authentication",
    },
    answer: "D",
    reason:
      "Two-factor authentication requires two separate types of proof during the login process.",
  },
  {
    question:
      "Which of the following would be used to terminate a copper Ethernet patch cable?",
    choices: {
      A: "BNC",
      B: "RS-232",
      C: "RJ45",
      D: "DB-9",
    },
    answer: "C",
    reason:
      "Copper Ethernet cables are commonly terminated with an 8P8C (Eight Position / Eight Conductor) RJ45 (Registered Jack 45) standard connector.",
  },
  {
    question:
      "A technician has replaced a laser printer toner cartridge, but now the output does not appear as dark as the original toner cartridge. Which of the following would be the best way to address this issue?",
    choices: {
      A: "Run a printer calibration",
      B: "Replace the fuser",
      C: "Use a laser printer maintenance kit",
      D: "Clean the OPC drum",
    },
    answer: "A",
    reason:
      "A laser printer calibration allows the user to adjust the amount of toner used for the output.",
  },
  {
    question:
      "A system administrator has just received a laptop previously sent out for repair. However, after powering on the computer, the laptop no longer responds to the stylus. Which of the following is the MOST likely reason for this issue?",
    choices: {
      A: "The GPU requires an updated device driver",
      B: "The display needs a new inverter",
      C: "The display needs to be paired to the laptop motherboard",
      D: "The digitizer is faulty",
    },
    answer: "D",
    reason:
      "The digitizer converts the touch of a finger or a stylus to digital signals used by the computer.",
  },
  {
    question:
      "A graphics designer has noticed that small dots on their screen remain a solid black color, even when the image should display a different color. Which of the following would describe this issue?",
    choices: {
      A: "Burn-in",
      B: "Non-native resolution",
      C: "Incorrect data source",
      D: "Dead pixel",
    },
    answer: "D",
    reason:
      "A dead pixel is a single dot (pixel) on the screen that always remains black and does not change with the image.",
  },
  {
    question:
      "A gaming enthusiast has upgraded his home computer from integrated graphics to a separate video adapter card. The computer operates as expected for web browsing and word processing applications. However, playing a game results in the system shutting down after a few minutes of operation. Which of the following would be the MOST likely component causing this issue?",
    choices: {
      A: "CPU",
      B: "Power supply",
      C: "RAM",
      D: "SSD",
    },
    answer: "B",
    reason:
      "Adding additional components to a computer can often increase the power usage, and video adapter cards are one of the most power-hungry devices you can add to a computer. If a system is displaying errors or shutting down during periods of heavy use, then the issue is commonly related to heat or power.",
  },
  {
    question:
      "A network administrator has just installed a new access point in a downtown office building, but now users are reporting intermittent connectivity to the Internet. Which of the following would be the FIRST thing to check?",
    choices: {
      A: "SSID broadcast option",
      B: "Firmware version",
      C: "MAC filter",
      D: "Channel interference levels",
    },
    answer: "D",
    reason:
      "In areas with many different organizations located near each other, it's possible that the frequencies used on different wireless access points could conflict with each other and cause interference with wireless communication. In busy areas, it's recommended to perform an analysis of the frequencies in use before installing a new access point.",
  },
  {
    question:
      "A company would like to advertise a list of email servers authorized to send messages on their behalf. Which of the following would be the BEST way to provide this information?",
    choices: {
      A: "APIPA",
      B: "Proxy server",
      C: "UTM",
      D: "SPF record",
    },
    answer: "D",
    reason:
      "An SPF (Sender Policy Framework) record is part of a DNS (Domain Name System) server configuration, and it lists all servers authorized to send emails for a particular domain.",
  },
  {
    question:
      "A company assigns IP addresses automatically to each device, and those addresses will remain on the device for a minimum of 8 hours. Which of the following BEST describes this configuration?",
    choices: {
      A: "Subnet mask",
      B: "Lease",
      C: "SDN",
      D: "Reservation",
    },
    answer: "B",
    reason:
      "A lease is used in DHCP (Dynamic Host Configuration Protocol) to automatically associate an IP address configuration with a specific device for a certain amount of time. The device usually has the option to renew the lease to extend the configuration settings for another interval.",
  },
  {
    question:
      "Users in the marketing department are reporting that one network printer is not working. There are many print jobs in the queue, but none of the jobs are printing. A test print from the printer's front panel does not print any pages. What is the MOST likely reason for this printing issue?",
    choices: {
      A: "Printer drivers need to be updated",
      B: "Network is disconnected",
      C: "Printer hardware has failed",
      D: "Print spooler needs to be restarted",
    },
    answer: "C",
    reason:
      "If the printer was operational, then a printer test from the front panel should provide some output. The test print bypasses the network and print spooler and provides a check for print quality. If the local test print isn't working, then the printer itself has some type of hardware failure.",
  },
  {
    question:
      "A member of the accounting department would like to work remotely while attending a conference in another city. Which of these technologies would BEST provide this functionality?",
    choices: {
      A: "VLAN",
      B: "802.11",
      C: "VPN",
      D: "PAN",
    },
    answer: "C",
    reason:
      "A VPN (Virtual Private Network) would allow a remote user to connect to the corporate office over a secure encrypted tunnel.",
  },
  {
    question:
      "In which of the following situations would you be MOST likely to use a network tap?",
    choices: {
      A: "Attach an RJ45 connector to the end of an Ethernet cable",
      B: "Capture packets from a network link",
      C: "Test packet loss on a router interface",
      D: "Locate a specific workstation connection on a punch-down block",
    },
    answer: "B",
    reason:
      "A network tap provides a physical connection for intercepting network traffic. The tap can send a copy of the intercepted traffic to a packet capture device or security tool.",
  },
  {
    question:
      "A digital graphics department has been using a SAN to store their image files. The team now reports that all of the files on the SAN are no longer accessible. Which of the following should be the FIRST thing to check on the SAN?",
    choices: {
      A: "RAID array status",
      B: "CPU utilization",
      C: "Input voltage",
      D: "Cache hits",
    },
    answer: "A",
    reason:
      "A SAN (Storage Area Network) is a network-connected storage array. If the SAN is unavailable, then it's possible that the drive array is having a technical issue. The first thing to check on the SAN is the RAID array health and network connectivity. Once those are verified to be working, the troubleshooting can continue.",
  },
  {
    question:
      "A network administrator is installing a new access point between buildings. Which of the following would determine the usable frequencies and maximum signal strength for this connection?",
    choices: {
      A: "End User License Agreement",
      B: "Type of data transferred",
      C: "Acceptable Use Policy",
      D: "Government regulations",
    },
    answer: "D",
    reason:
      "Most governments will regulate the usable frequencies and maximum power for the wireless spectrum. These regulations can vary depending on location, frequencies, or type of network.",
  },
  {
    question: "What is RAID0 great for?",
    choices: {
      A: "Speed and data redundancy",
      B: "Data redundancy",
      C: "Speed but provides no data redundancy",
      D: "Losing data",
    },
    answer: "C",
    reason: "RAID0 is great for speed but provides no data redundancy.",
  },
  {
    question: "Which RAID level provides full redundancy?",
    choices: {
      A: "RAID0",
      B: "RAID1",
      C: "RAID5",
      D: "RAID6",
    },
    answer: "B",
    reason: "RAID1 provides full redundancy.",
  },
  {
    question: "What is the main benefit of RAID5?",
    choices: {
      A: "Striping with parity, one disk can be lost without losing any data",
      B: "Double striping with parity, two disks can be lost without losing any data",
      C: "Speed without data redundancy",
      D: "Full redundancy",
    },
    answer: "A",
    reason:
      "RAID5 provides striping with parity and one disk can be lost without losing any data.",
  },
  {
    question:
      "Which RAID level allows for two disks to be lost without losing any data?",
    choices: {
      A: "RAID0",
      B: "RAID1",
      C: "RAID5",
      D: "RAID6",
    },
    answer: "D",
    reason:
      "RAID6 provides double striping with parity and two disks can be lost without losing any data.",
  },
  {
    question: "Which RAID level offers both redundancy and performance?",
    choices: {
      A: "RAID0",
      B: "RAID1",
      C: "RAID5",
      D: "RAID 10",
    },
    answer: "D",
    reason: "RAID 10 offers both redundancy and performance.",
  },
  {
    question: "What does hot-swappable mean?",
    choices: {
      A: "Capable of being removed or replaced without disruption or powering off the device",
      B: "Cannot be removed without losing data",
      C: "Requires device shutdown to remove or replace",
      D: "Only applicable to external devices",
    },
    answer: "A",
    reason:
      "Hot-swappable means capable of being removed or replaced without disruption or powering off the device.",
  },
  {
    question:
      "Which interface allows hot-swappable capability with SATA devices?",
    choices: {
      A: "PATA",
      B: "AHCI",
      C: "USB",
      D: "RAID",
    },
    answer: "B",
    reason:
      "Advanced Host Controller Interface (AHCI) is a technical standard developed by Intel that allows hot-swappable capability with SATA devices.",
  },
  {
    question:
      "What is the maximum capacity of the original secure digital (SD) cards?",
    choices: {
      A: "1 GB",
      B: "2 GB",
      C: "4 GB",
      D: "8 GB",
    },
    answer: "B",
    reason:
      "The original secure digital (SD) cards had a maximum capacity of 2 GB.",
  },
  {
    question: "What is a port?",
    choices: {
      A: "A physical connector for plugging in cables",
      B: "A logical communication endpoint that exists on a computer or server",
      C: "A type of firewall",
      D: "A network switch",
    },
    answer: "B",
    reason:
      "A port is a logical communication endpoint that exists on a computer or server.",
  },
  {
    question: "What is an inbound port?",
    choices: {
      A: "A logical communication opening on a client to call out to a server",
      B: "A physical port on a router",
      C: "A logical communication opening on a server that is listening for a connection from a client",
      D: "A port used for outgoing emails",
    },
    answer: "C",
    reason:
      "An inbound port is a logical communication opening on a server that is listening for a connection from a client.",
  },
  {
    question: "What is an outbound port?",
    choices: {
      A: "A port used for sending data to printers",
      B: "A logical communication opening created on a client to call out to a server that is listening for a connection",
      C: "A port that receives data from a server",
      D: "A physical port on a computer",
    },
    answer: "B",
    reason:
      "An outbound port is a logical communication opening created on a client to call out to a server that is listening for a connection.",
  },
  {
    question: "What is the range of well-known ports?",
    choices: {
      A: "0 to 1023",
      B: "1024 to 49151",
      C: "49152 to 65535",
      D: "0 to 65535",
    },
    answer: "A",
    reason:
      "Well-known ports range from 0 to 1023 and are assigned by the Internet Assigned Numbers Authority (IANA).",
  },
  {
    question: "What are registered ports?",
    choices: {
      A: "Ports 0 to 1023",
      B: "Ports 1024 to 49151",
      C: "Ports 49152 to 65535",
      D: "Ports used for proprietary protocols",
    },
    answer: "B",
    reason:
      "Registered ports range from 1024 to 49151 and are usually assigned to proprietary protocols.",
  },
  {
    question: "What are dynamic or private ports?",
    choices: {
      A: "Ports 0 to 1023",
      B: "Ports 1024 to 49151",
      C: "Ports 49152 to 65535",
      D: "Ports used exclusively for email communication",
    },
    answer: "C",
    reason:
      "Dynamic or private ports range from 49152 to 65535 and can be used by any application without being registered with IANA.",
  },
  {
    question:
      "Which port is used by the File Transfer Protocol (FTP) for file transfers?",
    choices: {
      A: "20, 21",
      B: "22",
      C: "23",
      D: "25",
    },
    answer: "A",
    reason:
      "Ports 20 and 21 are used by the File Transfer Protocol (FTP) for insecure file transfers.",
  },
  {
    question:
      "Which port is used for secure remote control using a text-based environment?",
    choices: {
      A: "20",
      B: "21",
      C: "22",
      D: "23",
    },
    answer: "C",
    reason:
      "Port 22 is used by Secure Shell (SSH) for secure remote control of another machine using a text-based environment.",
  },
  {
    question: "Which port is used by the Telnet protocol?",
    choices: {
      A: "20",
      B: "21",
      C: "22",
      D: "23",
    },
    answer: "D",
    reason:
      "Port 23 is used by the Telnet protocol for insecure remote control of another machine using a text-based environment.",
  },
  {
    question:
      "Which port is used by the Simple Mail Transfer Protocol (SMTP) to send emails?",
    choices: {
      A: "20",
      B: "21",
      C: "25",
      D: "53",
    },
    answer: "C",
    reason:
      "Port 25 is used by the Simple Mail Transfer Protocol (SMTP) to send emails over the network.",
  },
  {
    question: "Which port is used by the Domain Name Service (DNS)?",
    choices: {
      A: "25",
      B: "53",
      C: "67, 68",
      D: "80",
    },
    answer: "B",
    reason:
      "Port 53 is used by the Domain Name Service (DNS) to convert domain names to IP addresses, and IP addresses to domain names.",
  },
  {
    question:
      "Which ports are used by the Dynamic Host Control Protocol (DHCP)?",
    choices: {
      A: "53",
      B: "67, 68",
      C: "80",
      D: "110",
    },
    answer: "B",
    reason:
      "Ports 67 and 68 are used by the Dynamic Host Control Protocol (DHCP) to automatically provide network parameters such as assigned IP address, subnet mask, default gateway, and the DNS server.",
  },
  {
    question: "Which port is used by the Hypertext Transfer Protocol (HTTP)?",
    choices: {
      A: "80",
      B: "110",
      C: "143",
      D: "443",
    },
    answer: "A",
    reason:
      "Port 80 is used by the Hypertext Transfer Protocol (HTTP) for insecure web browsing.",
  },
  {
    question:
      "Which port is used by the Post Office Protocol Version Three (POP3) to receive incoming emails?",
    choices: {
      A: "80",
      B: "110",
      C: "143",
      D: "443",
    },
    answer: "B",
    reason:
      "Port 110 is used by the Post Office Protocol Version Three (POP3) to receive incoming emails.",
  },
  {
    question:
      "Which ports are used by the Network Basic Input/Output System (NetBIOS) for file or printer sharing in a Windows network?",
    choices: {
      A: "110",
      B: "137, 139",
      C: "143",
      D: "161, 162",
    },
    answer: "B",
    reason:
      "Ports 137 and 139 are used by the Network Basic Input/Output System (NetBIOS) for file or printer sharing in a Windows network.",
  },
  {
    question:
      "Which port is used by the Internet Mail Application Protocol (IMAP) to retrieve incoming emails?",
    choices: {
      A: "110",
      B: "137, 139",
      C: "143",
      D: "161, 162",
    },
    answer: "C",
    reason:
      "Port 143 is used by the Internet Mail Application Protocol (IMAP) to retrieve incoming emails.",
  },
  {
    question:
      "Which ports are used by the Simple Network Management Protocol (SNMP) to collect data about network devices and monitor their status?",
    choices: {
      A: "110",
      B: "137, 139",
      C: "143",
      D: "161, 162",
    },
    answer: "D",
    reason:
      "Ports 161 and 162 are used by the Simple Network Management Protocol (SNMP) to collect data about network devices and monitor their status.",
  },
  {
    question:
      "Which port is used by the Lightweight Directory Access Protocol (LDAP) to provide directory services to a network?",
    choices: {
      A: "389",
      B: "443",
      C: "445",
      D: "3389",
    },
    answer: "A",
    reason:
      "Port 389 is used by the Lightweight Directory Access Protocol (LDAP) to provide directory services to a network.",
  },
  {
    question:
      "Which port is used by the Hypertext Transfer Protocol – Secure (HTTPS) for secure web browsing?",
    choices: {
      A: "389",
      B: "443",
      C: "445",
      D: "3389",
    },
    answer: "B",
    reason:
      "Port 443 is used by the Hypertext Transfer Protocol – Secure (HTTPS) for secure web browsing.",
  },
  {
    question:
      "Which port is used by the Server Message Block (SMB) for Windows file and printer sharing services?",
    choices: {
      A: "389",
      B: "443",
      C: "445",
      D: "3389",
    },
    answer: "C",
    reason:
      "Port 445 is used by the Server Message Block (SMB) for Windows file and printer sharing services.",
  },
  {
    question:
      "Which port is used by the Remote Desktop Protocol (RDP) to provide graphical remote control of another client or server?",
    choices: {
      A: "389",
      B: "443",
      C: "445",
      D: "3389",
    },
    answer: "D",
    reason:
      "Port 3389 is used by the Remote Desktop Protocol (RDP) to provide graphical remote control of another client or server.",
  },
  // ];

  // const core1QuestionsA = [
  {
    question:
      "The printer in the accounting department has stopped all printing processes. The print queue shows seven jobs in the queue waiting to be printed. Which of the following would be the BEST next troubleshooting step?",
    choices: {
      A: "Send a test job to the printer and move it to the top of the queue",
      B: "Restart the printer's spooler",
      C: "Install an updated version of the printer driver",
      D: "Delete everything in the queue and resend the print jobs",
    },
    answer: "B",
  },
  {
    question:
      "A system administrator has connected an external USB drive to a computer to transfer some documents. When booting the computer, the system tries to boot from the external drive and gives an error message. Which of the following would be the BEST way to prevent the USB drive from booting?",
    choices: {
      A: "Modify the BIOS to boot from the internal hard drive",
      B: "Modify the boot order in Windows Disk Management",
      C: "Rebuild the MBR on the external hard drive",
      D: "Disable the external drive in Device Manager",
    },
    answer: "A",
  },
  {
    question:
      "A user's print jobs to a new multifunction printer produce pages of garbled text, but jobs from other users are printing normally. Which of the following would be the MOST likely reason for this issue?",
    choices: {
      A: "Printer driver specifies secured prints",
      B: "Faulty network cable",
      C: "Print driver is configured for PCL",
      D: "Application is not authorized to print",
    },
    answer: "C",
  },
  {
    question:
      "A network connection in a conference room was installed years ago, and there’s no documentation for the cable run. Connecting a device to the cable results in a successful Ethernet connection, so the other end of the cable should terminate somewhere in the wiring closet. Which of these tools would be the best choice to find the other end of the network connection?",
    choices: {
      A: "Cable tester",
      B: "Tone generator",
      C: "Multimeter",
      D: "Crimper",
    },
    answer: "B",
  },
  {
    question:
      "A network administrator has received a ticket complaining of port flapping on an Ethernet switch. Which of the following would be the MOST likely reason for this issue?",
    choices: {
      A: "Firewall rule is blocking traffic",
      B: "Faulty crimp on an Ethernet connector",
      C: "Excessive jitter measurements",
      D: "Duplex mismatch",
    },
    answer: "D",
  },
  {
    question:
      "A user has powered on their computer and received the message “Operating system not found.” A check of the system shows that the SATA drive cables are properly connected. Which of the following would be the NEXT best troubleshooting step?",
    choices: {
      A: "Boot to Safe Mode",
      B: "Replace the boot drive",
      C: "Restore from a known good backup",
      D: "Check for removable drives",
    },
    answer: "C",
  },
  {
    question:
      "A user is having an issue with a smartphone battery bulging and physically pushing the screen away from the phone. The rest of the phone appears to be operating normally. Which of the following should be the BEST next troubleshooting step?",
    choices: {
      A: "Power off the phone and contact support",
      B: "Upgrade to the latest OS version",
      C: "Replace the screen",
      D: "Perform a factory reset",
    },
    answer: "A",
  },
  {
    question:
      "A client’s laptop appears to boot normally, but nothing ever appears on the LCD. After closer inspection, you notice the output is visible but it's too faint to clearly see anything. What is the MOST likely cause of this issue?",
    choices: {
      A: "Video card",
      B: "Inverter",
      C: "Video driver",
      D: "Power adapter",
    },
    answer: "B",
  },
  {
    question:
      "A graphics designer is experiencing increasing delays when accessing files on her hard drive. The user maintains a daily backup of all data on the drive. Which of these would be the BEST next troubleshooting step for this issue?",
    choices: {
      A: "Reinstall Windows",
      B: "Perform a hard drive diagnostic",
      C: "Restore from the daily backup",
      D: "Boot to Safe Mode",
    },
    answer: "B",
  },
  {
    question:
      "Which of the following would be MOST likely found on an optical disc?",
    choices: {
      A: "Document archive",
      B: "Operating system boot files",
      C: "RAID parity files",
      D: "BIOS configurations",
    },
    answer: "B",
  },
  {
    question:
      "When a user starts their computer, the screen remains blank and the computer beeps twice. Which of these would be the MOST likely cause of this issue?",
    choices: {
      A: "The boot device is not connected",
      B: "The memory is faulty",
      C: "The operating system has become corrupted",
      D: "The PC is infected with malware",
    },
    answer: "B",
  },
  {
    question:
      "A firewall is configured to block email transfers from a remote server. Which of the following ports is the firewall blocking?",
    choices: {
      A: "443",
      B: "22",
      C: "23",
      D: "25",
    },
    answer: "D",
  },
  {
    question:
      "A technician is connecting a laptop to an LCD projector in a conference room. The display on the laptop works properly, but the projector image is constantly flickering and pixelating. The technician has modified the resolution and refresh rates, but the projector image continues to flicker. Which of the following would be the BEST next troubleshooting step?",
    choices: {
      A: "Replace the video cable",
      B: "Disable the laptop display",
      C: "Replace the projector bulb",
      D: "Power cycle the projector",
    },
    answer: "A",
  },
  {
    question:
      "The stylus on a Windows tablet will no longer interact with the user interface. Which of these would be the MOST likely cause of this issue?",
    choices: {
      A: "Digitizer",
      B: "Backlight",
      C: "Contrast",
      D: "Inverter",
    },
    answer: "A",
  },
  {
    question:
      "A user in the accounting department needs to print a form on the laser printer on both sides of the page. Which of the following options should be configured in the accounting software?",
    choices: {
      A: "Collate",
      B: "Orientation",
      C: "Duplex",
      D: "Resolution",
    },
    answer: "C",
  },
  {
    question:
      "A server administrator has received an alert showing one drive in a RAID 1 array has failed. Which of the following would be the best way to resolve this alert?",
    choices: {
      A: "Replace the bad drive and resync the array",
      B: "Replace all drives in the array and resync the array",
      C: "Replace the bad drive and restore from backup",
      D: "Convert the array to RAID 0 and replace the drive",
      E: "Replace all drives in the array and restore from backup",
    },
    answer: "A",
  },
  {
    question:
      "A system administrator is building a server for a data center in another country. The server will manage a print queue and provide a local storage partition for temporary file transfers. Which of the following power supply specifications will be the MOST important for this server?",
    choices: {
      A: "Voltage input options",
      B: "Number of PCIe connectors",
      C: "Modular cabling",
      D: "Fan noise rating",
    },
    answer: "A",
  },
  // {
  //     "question": "Which of the following ports are used for file transfers? (Select TWO)",
  //     "choices": {
  //         "A": "21",
  //         "B": "110",
  //         "C": "25",
  //         "D": "23",
  //         "E": "20",
  //         "F": "53"
  //     },
  //     "answer": ["A", "D"]
  // },
  {
    question:
      "Which of these technologies do not require a backlight to provide a viewable display?",
    choices: {
      A: "LCD",
      B: "IPS",
      C: "OLED",
      D: "LED",
    },
    answer: "C",
  },
  {
    question:
      "A system administrator has tripped over an Ethernet cable and the cable’s RJ45 connector has broken. Which of the following should be used to resolve this issue?",
    choices: {
      A: "Punch-down tool",
      B: "Tone generator and probe",
      C: "Cable tester",
      D: "Crimper",
    },
    answer: "D",
  },
  {
    question:
      'A newly installed MFD provides an option to "scan to SMB." Which of the following would BEST describe this feature?',
    choices: {
      A: "Print jobs can be sent from mobile devices",
      B: "All scans are checked for malware",
      C: "Files are stored on a Microsoft share",
      D: "Documents are scanned from the cloud",
    },
    answer: "C",
  },
  {
    question:
      "What type of device connects multiple computers to the network, but becomes less efficient as network traffic increases?",
    choices: {
      A: "Switch",
      B: "Hub",
      C: "Repeater",
      D: "Router",
    },
    answer: "B",
  },
  {
    question:
      "In which of the following would a Lightning cable MOST likely be used?",
    choices: {
      A: "Connect a server to a display monitor",
      B: "Increase the available memory of a device",
      C: "Remotely control a mobile device",
      D: "Charge a mobile device",
    },
    answer: "D",
  },
  {
    question:
      "A network administrator would like to enable DHCP on a laptop, but they would like the same IP address to be assigned to the laptop each time it starts. Which of the following would provide this functionality?",
    choices: {
      A: "Create an IP reservation on the DHCP server",
      B: "Administratively configure the laptop’s MAC address",
      C: "Use APIPA addressing",
      D: "Assign the laptop to a static IP VLAN",
    },
    answer: "A",
  },
  {
    question:
      "A user is complaining about slow network performance from their workstation. A network technician checks the data closet and finds the wires are not properly seated in the 110 block. Which of the following should the technician use to correct this issue?",
    choices: {
      A: "Crimper",
      B: "Multimeter",
      C: "Punch-down tool",
      D: "Cable tester",
    },
    answer: "C",
  },
  {
    question:
      "A user has just connected to a new wireless network, but they cannot view any Internet web sites. Their network configuration shows the IP address as 169.254.228.109, the subnet mask is 255.255.0.0, and they have not been assigned a default gateway. Which of these is the MOST likely cause of this issue?",
    choices: {
      A: "The subnet mask is not correct",
      B: "The Internet provider is experiencing a temporary outage",
      C: "The DHCP server is down",
      D: "The wireless adapter is not working properly",
    },
    answer: "C",
  },
  {
    question:
      "While configuring a new workstation in the lab, one of the engineers recommends using 255.255.255.0. What part of the configuration is this associated with?",
    choices: {
      A: "Default gateway",
      B: "Subnet mask",
      C: "DNS server",
      D: "IP address",
    },
    answer: "B",
  },
  {
    question: "Which of the following BEST describes a Bluetooth network?",
    choices: {
      A: "PAN",
      B: "WAN",
      C: "LAN",
      D: "MAN",
    },
    answer: "A",
  },
  {
    question:
      "Sam, a user in the accounting department, is migrating from Android to iOS. She would like all of her emails, contact lists, and calendar events to be moved to her new phone. Which of the following would be the BEST way to accomplish this task?",
    choices: {
      A: "Use a Windows-based migration tool",
      B: "Save the Android phone data as a CSV file",
      C: "Connect the new phone to the corporate Microsoft 365 service",
      D: "Use a USB-to-Lightning cable",
    },
    answer: "C",
  },
  {
    question:
      "A user's smartphone shows a black screen and does not respond to any screen taps or button presses. A check of the SIM card shows a red label but no physical damage. Which of the following is the MOST likely reason for these issues?",
    choices: {
      A: "Overheating",
      B: "Digitizer failure",
      C: "Liquid damage",
      D: "Invalid SIM card",
    },
    answer: "C",
  },
  {
    question:
      "A server administrator has been asked to configure the storage requirements for a new database server. The database owner requires the fastest performance and redundancy if a single drive fails. The storage array should support at least 8 TB of available space. Which of the following options would be the BEST choice?",
    choices: {
      A: "RAID 10 with 5,400 RPM, 8 TB drives",
      B: "RAID 5 with 10,000 RPM, 5 TB drives",
      C: "RAID 1 with 7,200 RPM, 8 TB drives",
      D: "RAID 0 with 15,000 RPM, 5 TB drives",
    },
    answer: "C",
  },
  {
    question:
      "A user would like to access email from their Windows 10 laptop using a smartphone’s Internet connection. Which of these technologies needs to be enabled on the laptop?",
    choices: {
      A: "LTE",
      B: "802.11",
      C: "NFC",
      D: "IR",
    },
    answer: "B",
  },
  {
    question:
      "A system administrator needs to upgrade a laptop from a hard drive to an SSD. Which of the following would provide the most efficient method of upgrading this system?",
    choices: {
      A: "Create an image of the hard drive and restore to the SSD",
      B: "Install a new Windows license and application files on the SSD",
      C: "Backup all user documents and copy them to another computer",
      D: "Compress the home directory and upload it to cloud storage",
    },
    answer: "A",
  },
  {
    question:
      "A new employee has been assigned a corporate smartphone, but the camera and the installation of third-party apps have been disabled. Which of the following is the MOST likely reason for these issues?",
    choices: {
      A: "The smartphone is out of storage space",
      B: "The smartphone OS needs to be upgraded",
      C: "An MDM has disabled the features",
      D: "The smartphone hardware is faulty",
    },
    answer: "C",
  },
  {
    question:
      "A system administrator is using a maintenance kit on a network-connected laser printer. Which of the following should be the LAST step when performing this maintenance?",
    choices: {
      A: "Examine the feed rollers",
      B: "Wait until the fuser unit cools down and replace it",
      C: "Reset the page counter",
      D: "Replace the power cord",
    },
    answer: "D",
  },
  {
    question:
      "An application developer needs to test an application across all of the operating systems used by the company. Each operating system will be tested individually in a lab environment. The company would like to minimize any additional hardware purchases for this project. Which of the following would be the BEST way to test this application?",
    choices: {
      A: "Purchase a system that is configured just above the hardware requirements for the highest-end operating system. Create separate VMs for each operating system.",
      B: "Purchase individual test computers that match the hardware requirements for each OS. Install different operating systems on each test computer.",
      C: "Designate existing user workstations to be used as testing systems. Run all application tests during non-working hours.",
      D: "Purchase a system that matches the minimum hardware requirements for the highest-end operating system. Create a system image for each operating system and reimage the computer between tests.",
    },
    answer: "A",
  },
  {
    question:
      "Which wireless standard can operate in the 5 GHz band and provides approximately 10 Gbit/sec of throughput?",
    choices: {
      A: "802.11ac",
      B: "802.11g",
      C: "802.11ax",
      D: "802.11n",
    },
    answer: "C",
  },
  {
    question:
      "A user in the manufacturing department reports that every page printed from the central networked laser printer has a single black line extending from the top of the page to the bottom. Which of the following is the MOST likely cause of this issue?",
    choices: {
      A: "The fuser is damaged",
      B: "The printer language is not properly configured",
      C: "The photosensitive drum is damaged",
      D: "The toner is low",
    },
    answer: "C",
  },
  {
    question:
      "Which mobile device connection is commonly used for making payments at a store checkout?",
    choices: {
      A: "NFC",
      B: "Infrared",
      C: "Cellular",
      D: "Bluetooth",
    },
    answer: "A",
  },
  {
    question:
      "A company hosts a cloud-based application which includes redundant servers located in different data centers around the world. Which of the following cloud computing characteristics would BEST describe this application design?",
    choices: {
      A: "Rapid elasticity",
      B: "High availability",
      C: "Non-metered",
      D: "Desktop as a Service",
    },
    answer: "B",
  },
  {
    question:
      "When printing a document on a laser printer, a user finds that all of the text on the page smears when touched. What is the MOST likely cause of this issue?",
    choices: {
      A: "Fuser is damaged",
      B: "Toner cartridge is low",
      C: "Photosensitive drum has been scratched",
      D: "Incorrect printer driver is installed",
      E: "Printer cleaning process is not working",
    },
    answer: "C",
  },
  {
    question:
      "A manager’s computer is able to connect to Internet sites while in conference rooms or in the building courtyard. When the laptop is brought back to the manager’s desk and placed into the docking station, the Internet access is unavailable but all other features are working. Which of the following should be the FIRST troubleshooting task for this issue?",
    choices: {
      A: "Replace the docking station power supply",
      B: "Upgrade the laptop BIOS",
      C: "Replace the docking station",
      D: "Check the docking station network cable",
    },
    answer: "D",
  },
  {
    question:
      "A company is developing an internal application for smartphones and tablets. Which of the following would improve the security of the application's logon process?",
    choices: {
      A: "Data caps",
      B: "Two-factor authentication",
      C: "Bluetooth pairing",
      D: "NFC",
    },
    answer: "B",
  },
  {
    question:
      "Which of the following would be MOST associated with an IoT device?",
    choices: {
      A: "Multithreading",
      B: "ARM",
      C: "Virtualization support",
      D: "ECC RAM",
    },
    answer: "B",
  },
  {
    question:
      "What is the minimum category of unshielded copper cable for a 10 gigabit per second Ethernet link with a fifteen meter distance?",
    choices: {
      A: "Category 5",
      B: "Category 6",
      C: "Category 5e",
      D: "Category 6A",
    },
    answer: "B",
  },
  {
    question:
      "An engineer has manually configured IP addresses for a small office that uses a cable modem for Internet connectivity. However, none of the devices configured with a manual IP address are able to browse Internet websites. All devices are connected to the cable modem with twisted-pair Ethernet cables. This is the configuration of one device: IP address: 192.168.1.7 Subnet mask: 255.255.255.0 Default gateway: 192.168.1.1 DNS: 192.168.1.7 The engineer can successfully ping the local IP address and the default gateway address. Which of the following should be the NEXT troubleshooting step?",
    choices: {
      A: "Check for duplicate IP addresses",
      B: "Replace the Ethernet cable",
      C: "Check the DNS configuration",
      D: "Replace the cable modem",
    },
    answer: "C",
  },
  {
    question:
      "A user in a remote office is connecting a device using an F-connector. Which of the following would be MOST likely associated with this connection?",
    choices: {
      A: "Cable modem",
      B: "Switch",
      C: "Punchdown block",
      D: "DSL modem",
    },
    answer: "D",
  },
  {
    question:
      "A user in the accounting department has turned on their computer and received the message “Date and Time not set.” Which of the following would be the MOST likely reason for this message?",
    choices: {
      A: "The motherboard battery has discharged",
      B: "Windows update has rebooted the computer",
      C: "Daylight Saving Time occurred during the weekend",
      D: "The BIOS was just upgraded",
    },
    answer: "A",
  },
  {
    question:
      "A system administrator has created a cloud configuration which automatically monitors utilization for usage-based billing. Which of the following describes this cloud computing characteristic?",
    choices: {
      A: "Metered",
      B: "File synchronization",
      C: "Rapid elasticity",
      D: "High availability",
    },
    answer: "A",
  },
  {
    question:
      "A group of wireless laptops in a conference room are reporting intermittent connectivity issues. The wired computers in the room are not experiencing any network problems. A check of the laptops shows that the IP addresses and configurations appear to be correct. Which of the following would be the best NEXT troubleshooting step?",
    choices: {
      A: "Verify the wireless signal strength",
      B: "Check the ARP table on the default gateway",
      C: "Confirm the operation of the DHCP server",
      D: "Perform a wire map on the network drops",
    },
    answer: "C",
  },
  {
    question:
      "A server administrator has been asked to troubleshoot a system that has been slowing down over time. While examining the computer, the administrator can hear a series of clicks from the inside of the case. Which of the following should be the FIRST step to address this issue?",
    choices: {
      A: "Replace the motherboard",
      B: "Power the system off and back on",
      C: "Replace the hard drive",
      D: "Perform a full backup of the server",
      E: "Replace the power supply",
    },
    answer: "C",
  },
  {
    question:
      "When pressing the power button on a desktop computer, the power indicator lights up but the computer does not display any message on the screen. The voltage at the wall outlet has been checked and it appears to be normal. The motherboard power connector voltage was checked, and the 12-volt pin was showing 6 volts. What is the MOST likely cause of this issue?",
    choices: {
      A: "The components that use 12-volt power are faulty",
      B: "The power supply is faulty",
      C: "The wall outlet voltage does not match the power supply",
      D: "The motherboard is faulty",
    },
    answer: "B",
  },
  {
    question:
      "A remote user is visiting their corporate office. They have connected their laptop to the wireless network, but the corporate Internet access is performing much slower than their remote site network. Which of the following would be the most likely reason for this issue?",
    choices: {
      A: "The default gateway is incorrect",
      B: "The laptop has been assigned an APIPA address",
      C: "The user does not have permission to use the wireless network",
      D: "There is interference with the wireless signal",
    },
    answer: "D",
  },
  {
    question:
      "A manager needs to have access to the same files, contacts, and email messages across their MacBook, iPad, and iPhone devices. Which of the following would be the BEST way to provide this synchronization?",
    choices: {
      A: "Authenticate to iCloud on all devices",
      B: "Connect all devices to the MacBook using a Lightning cable",
      C: "Copy all user documents to Google Workspace",
      D: "Configure automatic updates in the App Store",
    },
    answer: "A",
  },
  {
    question:
      "A user is reporting that a shared laser printer in the marketing department is not printing from one particular application. The front panel of the printer shows that the printer is online and ready to receive print jobs. Other users in the department are able to successfully print to the printer. Which of the following would be the BEST next troubleshooting step?",
    choices: {
      A: "Power cycle the printer",
      B: "Restart the print spooler",
      C: "Perform a test print from the printer console",
      D: "Verify the network printer name in the application",
    },
    answer: "D",
  },
  {
    question:
      "A network administrator is connecting four company locations in different countries. Which of the following would BEST describe this configuration?",
    choices: {
      A: "LAN",
      B: "PAN",
      C: "MAN",
      D: "WAN",
    },
    answer: "D",
  },
  {
    question:
      "A system administrator has received a report of customers receiving email messages from the company, but upon further analysis, the messages were not actually sent by the corporation. Which of the following should be implemented to prevent these spoofed email messages?",
    choices: {
      A: "Add multi-factor authentication to all email logins",
      B: "Change the passwords on all email accounts",
      C: "Configure an SPF record in the DNS",
      D: "Modify the firewall rules to prevent outgoing emails",
    },
    answer: "C",
  },
  {
    question:
      "A system administrator has configured a VM for dual processors, 16 GB of RAM, and 120 GB of disk space. Which of the following is required to start this VM?",
    choices: {
      A: "Shared network address",
      B: "Hypervisor",
      C: "Virtual switch",
      D: "Video display",
    },
    answer: "B",
  },
  {
    question:
      "A site manager has noticed her smartphone has a short battery life when used at work, and the battery life is normal when working from home. The work location has limited mobile service reception, but most office services are provided over the local 802.11 Wi-Fi network. The site manager does not enable Bluetooth on her smartphone. Which of the following would be the BEST way to extend the battery life of her mobile device?",
    choices: {
      A: "Disable 802.11 Wi-Fi",
      B: "Disable the cellular radio at work",
      C: "Replace the battery",
      D: "Enable Bluetooth on the mobile device",
    },
    answer: "A",
  },
  {
    question:
      "A desktop computer has just abruptly shut off, and pressing the power button doesn’t restart the system. There are no fans spinning, no lights are on, and no messages appear on the display. Which of these would be the MOST likely cause of this issue?",
    choices: {
      A: "The BIOS is configured with a startup password",
      B: "The LCD display backlight has failed",
      C: "The power supply is faulty",
      D: "The master boot record is corrupted",
      E: "The boot sector is missing",
    },
    answer: "C",
  },
  {
    question:
      "What kind of device is commonly used to filter traffic based on a predefined set of rules?",
    choices: {
      A: "PoE switch",
      B: "Repeater",
      C: "DSL modem",
      D: "Firewall",
    },
    answer: "D",
  },
  {
    question:
      "Which of these connection types use coax to provide Internet data, voice, and video over the same wire?",
    choices: {
      A: "DSL",
      B: "Cable broadband",
      C: "ONT",
      D: "PoE",
    },
    answer: "B",
  },
  {
    question:
      "A desktop administrator has been asked to troubleshoot a laptop computer that beeps during the power-on process while the laptop screen remains dark. Which of the following would be the best NEXT troubleshooting step?",
    choices: {
      A: "Implement a solution",
      B: "Document findings",
      C: "Establish a theory",
      D: "Evaluate results",
    },
    answer: "C",
  },
  {
    question:
      "A user is pairing a Bluetooth headset to their smartphone. What type of security is used during the pairing process to authorize this connection?",
    choices: {
      A: "802.1X",
      B: "Client certificate",
      C: "Pre-shared key",
      D: "PIN",
      E: "Username and password",
    },
    answer: "D",
  },
  {
    question:
      "A company is deploying cloud-hosted virtual desktops for training room classes. The VMs have already been configured in the cloud. Which of the following is required to access these VMs using thin clients in the training room?",
    choices: {
      A: "High-end video cards",
      B: "Separate Internet connection",
      C: "Mouse, keyboard, and monitor",
      D: "Category 6A cabling",
    },
    answer: "C",
  },
  {
    question:
      "A technician has connected a laptop to an LCD. The LCD is displaying the correct information, but all of the content appears to be fuzzy and difficult to read. Which of the following is the MOST likely reason for this issue?",
    choices: {
      A: "The LCD display is faulty",
      B: "The laptop display adapter is incompatible with the LCD display",
      C: "The laptop resolution is incorrect",
      D: "The LCD display cable is faulty",
    },
    answer: "C",
  },
  {
    question:
      "Which of the following security technologies is used to identify individuals before granting them access to a building or restricted area?",
    choices: {
      A: "Biometrics",
      B: "Proximity card",
      C: "CCTV",
      D: "Mantrap",
    },
    answer: "A",
  },
  {
    question:
      "A user in the marketing department would like to use a stylus to provide input through an external digitizer. Which of the following would be the BEST choice for this requirement?",
    choices: {
      A: "LCD touchscreen",
      B: "Port replicator",
      C: "Wireless mouse",
      D: "Drawing pad",
    },
    answer: "D",
  },
  {
    question:
      "A company has designed a platform to scale up when the application use increases during the day, and scale back down at night. Which of the following BEST describes this characteristic of cloud computing?",
    choices: {
      A: "Resource pooling",
      B: "Measured service",
      C: "Hybrid",
      D: "Rapid elasticity",
    },
    answer: "D",
  },
  {
    question:
      "A user’s tablet has stopped responding to any type of finger input on the screen. The clock and other tablet functions appear to be working. Which of the following would be the BEST way to correct this issue?",
    choices: {
      A: "Replace the screen",
      B: "Reset the wireless network",
      C: "Connect to a power source",
      D: "Restart the tablet",
    },
    answer: "D",
  },
  {
    question:
      "A system administrator needs a secure method of storing encryption keys. Which of the following would be the BEST choice for this requirement?",
    choices: {
      A: "BIOS",
      B: "Secure Boot",
      C: "NTFS",
      D: "HSM",
    },
    answer: "D",
  },
  {
    question:
      "A server administrator is upgrading the memory in a web server from 16 GB of non-ECC RAM to 64 GB of ECC RAM. After starting the system with the new memory, the computer beeps and nothing is displayed on the screen. Changing the number and location of new RAM modules results in the same beeping sounds and blank screen. After replacing the original 16 GB modules, the system starts normally. Which of the following is the MOST likely reason for this issue?",
    choices: {
      A: "The new memory is not compatible with the motherboard",
      B: "The new memory is faulty",
      C: "The BIOS needs to be updated",
      D: "The system is overheating during the startup process",
    },
    answer: "A",
  },
  {
    question:
      "A workstation has been assigned an APIPA address. Which of the following would be the MOST likely reason for this assignment?",
    choices: {
      A: "The workstation is not connected to the wireless network",
      B: "The DNS server is misconfigured",
      C: "The network is using public Internet addresses",
      D: "The DHCP server is down",
    },
    answer: "D",
  },
  {
    question:
      "Which of the following can be used to forward traffic based on a destination MAC address?",
    choices: {
      A: "Unmanaged switch",
      B: "Repeater",
      C: "Router",
      D: "Firewall",
    },
    answer: "C",
  },
  {
    question:
      "A system administrator made some BIOS changes to a desktop computer running Windows 10, and now this message appears when starting the computer: “This drive can only boot in UEFI mode.” Which of the following would be the BEST next troubleshooting step?",
    choices: {
      A: "Modify the boot drive sequence",
      B: "Enable Secure Boot",
      C: "Remove the BIOS password",
      D: "Boot the system with the Windows setup media",
    },
    answer: "B",
  },
  {
    question:
      "A Windows user would like to temporarily store information from RAM onto their SSD. Which of the following features should be configured?",
    choices: {
      A: "Multi-channel memory",
      B: "ECC",
      C: "System Protection",
      D: "Virtual Memory",
    },
    answer: "D",
  },
  {
    question:
      "A technician is installing a DSL modem in a data center. Which of the following connectors would be used to connect the DSL modem to the Internet provider line?",
    choices: {
      A: "RS-232",
      B: "RJ11",
      C: "BNC",
      D: "F-connector",
    },
    answer: "B",
  },
  {
    question:
      "Which of the following would be the BEST choice for capturing an image from a printed page and saving it on a computer?",
    choices: {
      A: "QR code reader",
      B: "Optical drive",
      C: "Flatbed scanner",
      D: "Webcam",
    },
    answer: "C",
  },
  // ];

  // const core2QuestionsA = [
  {
    question:
      "A system administrator is installing a new server into the metal racks in a data center. During the installation process, the administrator can feel a faint tingling sensation when mounting the server. Which of the following safety systems should be tested and verified FIRST?",
    choices: {
      A: "Equipment grounding",
      B: "Air filtration",
      C: "Cable management",
      D: "Waste disposal regulations",
    },
    answer: "A",
    reason:
      "Electrical safety is one of the highest priorities because of its association with personal safety. The tingling sensation is likely due to an electrical grounding issue. Grounding should be tested and verified to ensure proper discharge of electrical currents and to prevent serious hazards.",
  },
  {
    question:
      "A user has opened a help desk ticket regarding the battery life on their mobile phone. The battery in the phone held a charge for most of the day prior to connecting to the corporate network. The battery now only lasts about half a day and the back of the phone is warmer than usual. The phone is configured as follows: Storage: 216.2 GB of 512 GB used, Display and Brightness: Automatic, Wi-Fi: Enabled, Auto-lock: Disabled, VPN: Not connected, Low Power Mode: Disabled, Battery Maximum Capacity: 100%. Which of the following changes would have the BEST impact on battery performance?",
    choices: {
      A: "Enable auto-lock",
      B: "Connect to the VPN",
      C: "Increase available storage space",
      D: "Disable Wi-Fi",
    },
    answer: "A",
    reason:
      "The backlight of a mobile phone requires constant battery use, and the phone in an active state will use more battery than one that is locked or in a standby state. Enabling auto-lock would reduce the amount of time the display remains on, thus improving battery life.",
  },

  {
    question:
      "A user in the accounting department has received this error message: 'The print spooler service is not running.' The user contacts the help desk and opens a ticket for assistance. The help desk technician performs some testing and identifies the issue. Which of these would be the best NEXT step?",
    choices: {
      A: "Reinstall all printer drivers",
      B: "Restart the spooler service",
      C: "Reboot the computer",
      D: "Power cycle the printer",
    },
    answer: "B",
    reason:
      "The spooler operates as a background service in Windows. Once the problem is identified and corrected, the spooler service would need to be restarted.",
  },
  {
    question:
      "A student would like to prevent the theft of their laptop while studying at the library. Which of the following security methods would be the BEST choice to protect this laptop?",
    choices: {
      A: "Biometrics",
      B: "Badge reader",
      C: "USB token",
      D: "Cable lock",
    },
    answer: "D",
    reason:
      "A cable lock is portable, it can be installed and uninstalled quickly, and it can be wrapped around an existing table or chair to prevent a computer from theft.",
  },
  {
    question:
      "Rodney, a desktop technician, is cleaning the outside of computers used on a manufacturing assembly line. The assembly line creates sawdust and wood chips, so most of the computers are protected with enclosed computer cases. Which of the following would be the MOST important item for Rodney to include during this cleaning process?",
    choices: {
      A: "Surge suppressor",
      B: "Temperature sensor",
      C: "Face mask",
      D: "ESD mat",
    },
    answer: "C",
    reason:
      "A technician working in an area of dust or debris in the air should use a face mask to prevent any particles in the air from entering their lungs.",
  },
  {
    question:
      "A user is attempting to AirDrop a document to an associate, but they do not see any destination devices in their list of available AirDrop locations. Which of the following would be the MOST likely reason for this issue?",
    choices: {
      A: "Low battery",
      B: "Rotation lock is enabled",
      C: "Low storage space",
      D: "Wi-Fi and Bluetooth are disabled",
    },
    answer: "D",
    reason:
      "An Apple iOS and iPadOS devices uses both Wi-Fi and Bluetooth to provide location and transfer functionality for AirDrop. Both wireless options should be enabled to use the AirDrop feature.",
  },
  {
    question:
      "The motherboard of a server in the corporate data center has started smoking, and flames can be seen inside the computer case. Which of the following would be the BEST way to extinguish this fire?",
    choices: {
      A: "Water-based extinguisher",
      B: "Foam-based extinguisher",
      C: "Disconnect the power",
      D: "Carbon dioxide extinguisher",
    },
    answer: "D",
    reason:
      "For an electrical fire, it's best to use carbon dioxide, FM-200, or other dry chemicals to extinguish any flames.",
  },
  {
    question:
      "Which of these Windows features provides full disk encryption for all data on a storage drive?",
    choices: {
      A: "Domain Services",
      B: "EFS",
      C: "RDP",
      D: "BitLocker",
    },
    answer: "D",
    reason:
      "BitLocker provides full disk encryption (FDE) for Windows operating system volumes.",
  },
  {
    question:
      "A company maintains data retention requirements of five years for all customer names, addresses, and phone numbers. Which of the following would BEST describe this data?",
    choices: {
      A: "Credit card transactions",
      B: "Government-issued information",
      C: "PII",
      D: "Healthcare data",
    },
    answer: "C",
    reason:
      "PII (Personally Identifiable Information) is any data which could be used to identify an individual. A name, address, and phone number would be common examples of PII.",
  },
  {
    question:
      "A user in the accounting department would like to ensure that their mobile device data is always available. If the user's smartphone is damaged or stolen, they would like to replace the device and restore all data as quickly as possible. Which of the following would provide this functionality?",
    choices: {
      A: "Full device encryption",
      B: "Remote backup",
      C: "IoT isolation",
      D: "Remote wipe",
    },
    answer: "B",
    reason:
      "A cloud-based remote backup solution will constantly backup all user data to a remote service. If the device is replaced, all of the user data can be restored directly from this backup in the cloud.",
  },

  {
    question:
      "An office power system occasionally experiences minor voltage spikes during the business day. Which of the following would be the BEST way to address this power issue?",
    choices: {
      A: "Power down when not actively working",
      B: "Confirm that the building has an electrical ground",
      C: "Connect a surge suppressor to each system",
      D: "Maintain an inventory of replacement power supplies",
    },
    answer: "C",
    reason:
      "A surge suppressor can help to even out voltage spikes in an electrical system. It's common to use a surge suppressor at each workstation to limit the effect of these voltage spikes.",
  },
  {
    question:
      "What is the maximum amount of RAM supported by a 32-bit version of an operating system?",
    choices: {
      A: "4 GB",
      B: "8 GB",
      C: "16 GB",
      D: "192 GB",
    },
    answer: "A",
    reason:
      "The limited address space of a 32-bit operating system can only support 4 GB of system memory.",
  },
  {
    question:
      "Daniel, a user, is attempting to start an application on his laptop computer. Each time the application shows the starting graphic, it suddenly disappears and the application icon disappears from the taskbar. A technician would like to get more information about each previous occurrence of the application crash. Which of these choices would provide these details?",
    choices: {
      A: "Event Viewer",
      B: "Task Manager",
      C: "Startup Repair",
      D: "Safe Mode",
    },
    answer: "A",
    reason:
      "Event Viewer contains a consolidated log of all system and application logs. A technician can use Event Viewer to review all past events on the system.",
  },

  {
    question:
      "Each time a user starts a specific corporate application, a page of disclaimers and usage requirements is shown before the login prompt. Which of the following would BEST describe this page?",
    choices: {
      A: "Splash screen",
      B: "Acceptable use policy",
      C: "Standard operating procedures",
      D: "Topology diagram",
    },
    answer: "A",
    reason:
      "A splash screen displays a message, logo, or graphic during the startup process. This screen often contains a legal disclaimer regarding access to the system and information about the data contained in the application.",
  },
  {
    question:
      "A system administrator is troubleshooting an older application on a Windows 10 computer and needs to modify the UAC process. Which of the following options would provide access to these settings?",
    choices: {
      A: "Device Manager",
      B: "System Information",
      C: "Event Viewer",
      D: "User Accounts",
    },
    answer: "D",
    reason:
      "UAC (User Account Control) settings are contained in the Control Panel's User Accounts applet.",
  },
  {
    question:
      "What is the maximum amount of RAM supported by a 32-bit version of an operating system?",
    choices: {
      A: "4 GB",
      B: "8 GB",
      C: "16 GB",
      D: "192 GB",
    },
    answer: "A",
    reason:
      "The limited address space of a 32-bit operating system can only support 4 GB of system memory.",
  },

  {
    question:
      "What is the maximum amount of RAM supported by a 32-bit version of an operating system?",
    choices: {
      A: "4 GB",
      B: "8 GB",
      C: "16 GB",
      D: "192 GB",
    },
    answer: "A",
    reason:
      "The limited address space of a 32-bit operating system can only support 4 GB of system memory.",
  },

  {
    question:
      "An attacker is using every combination of letters, numbers, and special characters in an attempt to discover a user's password. Which of the following would describe this attack type?",
    choices: {
      A: "Spoofing",
      B: "Social engineering",
      C: "Brute force attack",
      D: "DDoS",
    },
    answer: "C",
    reason:
      "A brute force attack attempts to determine a user's password by trying every possible combination of letters, numbers, and special characters until the proper combination is found.",
  },
  {
    question:
      "A system administrator is upgrading an email service in the corporate data center. During the upgrade, an error message appears and the upgrade fails. Subsequent attempts to perform the upgrade also fail. Which of the following processes should the system administrator follow to return the email server to its previous state?",
    choices: {
      A: "Rollback plan",
      B: "Disaster recovery plan",
      C: "Incident response plan",
      D: "Power plan",
    },
    answer: "A",
    reason:
      "Every planned change needs to have a rollback plan to return the environment to its original state.",
  },
  {
    question:
      "When connecting a new USB webcam to Windows 10, a message appears stating 'The controller does not have enough resources for this device.' Which of the following would be the BEST next troubleshooting step?",
    choices: {
      A: "Close all large-memory processes",
      B: "Modify the BCD",
      C: "Move the webcam to a different USB interface",
      D: "Use System Restore to rollback to a previous configuration",
    },
    answer: "C",
    reason:
      "The resources associated with a USB interface can vary based on the interface type and USB controller version. If these resources are exceeded on a USB controller, the system will display a message explaining the lack of resources.",
  },
  {
    question:
      "A system administrator has created a shared folder on a server to store operating system images. Technicians access the shared folder to download the latest images when performing large-scale system installations. Which of the following will be the MOST likely method of accessing this data?",
    choices: {
      A: "Map the shared folder to an available drive letter",
      B: "Download the shared folder through a proxy",
      C: "Link the images to a cloud storage service",
      D: "Access the folder using a remote access client",
    },
    answer: "A",
    reason:
      "The easiest and most efficient way for technicians to access the drive share is to map a drive letter to the share and transfer the files directly.",
  },
  {
    question:
      "A desktop administrator is installing a 64-bit version of Windows 10 Pro on a workstation, but the installation will not start. The workstation configuration is: 1 GHz CPU, 2 GB of RAM, 15 GB of free storage space, 1280 x 720 video resolution. Which of the following would allow this installation to proceed?",
    choices: {
      A: "Increase free storage space to 32 GB",
      B: "Decrease resolution to 800 x 600",
      C: "Upgrade to a faster processor",
      D: "Increase RAM to 4 GB",
    },
    answer: "A",
    reason:
      "The latest version of Windows 10 x64 requires a minimum of 32 GB free storage space.",
  },
  {
    question:
      "A security technician has identified malware running in the OS kernel. Traditional anti-malware scans were not able to identify any problems on the computer. Which of the following would be the BEST description of this malware?",
    choices: {
      A: "Rootkit",
      B: "Worm",
      C: "Botnet",
      D: "Cryptominer",
    },
    answer: "A",
    reason:
      "A rootkit is a type of malware that modifies core system files and can be invisible to the operating system. In this example, malware that runs as part of the kernel and can't be seen by traditional anti-malware is a rootkit.",
  },
  {
    question:
      "A help desk technician has been called to a training room that uses Android tablets as presentation devices. An application used for the training program will not start on any of the tablets. When the application is selected, the splash screen appears for a moment and then completely disappears with no error message. Which of the following would be the best NEXT troubleshooting step?",
    choices: {
      A: "Install all operating system updates",
      B: "Uninstall the application",
      C: "Power cycle the tablets",
      D: "Roll back to the previous application version",
    },
    answer: "C",
    reason:
      "Before making any changes to the operating system or application software, it would be useful to know if power cycling the tablets would have an effect. If the symptom was to disappear after the restart, then no immediate changes would be required.",
  },
  {
    question:
      "A user on the headquarters network has opened a help desk ticket about their Windows desktop. When starting their computer, the login process proceeds normally but the Windows desktop takes fifteen minutes to appear. Yesterday, the desktop would appear in just a few seconds. Which of the following would be the MOST likely reason for this issue?",
    choices: {
      A: "Slow profile load",
      B: "Incorrect boot device order",
      C: "Faulty RAM",
      D: "Incorrect username and password",
    },
    answer: "A",
    reason:
      "A roaming user profile is commonly used on enterprise Windows networks to allow a user's desktop to follow them to any computer. When a user logs in, their profile is downloaded to the local computer. If there is any network latency to the domain controller, the login process could be significantly slower.",
  },
  {
    question:
      "A system administrator has been asked to install a new application on a server, but the application is 64-bit and the server operating system is 32-bit. Which of the following describes the issue associated with this installation?",
    choices: {
      A: "File permissions",
      B: "OS compatibility",
      C: "Installation method",
      D: "Available drive space",
    },
    answer: "B",
    reason:
      "Although 32-bit applications will run on a 64-bit operating system, the reverse is not true. A 64-bit application will require a 64-bit operating system to work.",
  },
  {
    question:
      "A security guard has reported a person was seen passing through a secure door without using a door badge. The intruder slipped through the door by closely following the person in front of them. Which of these would best describe these actions?",
    choices: {
      A: "Dumpster diving",
      B: "Brute force",
      C: "Phishing",
      D: "Tailgating",
    },
    answer: "D",
    reason:
      "Using someone else to gain access to a building or through a locked door is tailgating.",
  },
  {
    question:
      "A Linux administrator needs to modify the configuration text file for a service. Which of the following utilities would provide this functionality?",
    choices: {
      A: "nano",
      B: "chmod",
      C: "df",
      D: "sudo",
    },
    answer: "A",
    reason:
      "The nano utility is a full-screen text editor that can be used from the command line of a Linux device.",
  },
  {
    question:
      "An internal audit has found that a server in the DMZ appears to be infected with malware. The malware does not appear to be part of a file in the OS, and the malware is started each time the system is started. What type of malware would be MOST likely found on this server?",
    choices: {
      A: "Trojan",
      B: "Ransomware",
      C: "Keylogger",
      D: "Spyware",
      E: "Boot sector virus",
    },
    answer: "E",
    reason:
      "A boot sector virus modifies the boot sector of the drive, so the malicious software is started each time the computer is booted.",
  },
  {
    question:
      "A user has delivered a broken laptop to the help desk, and they are visibly upset and quite vocal about the problem they're having. The user is also asking for a very specific repair that doesn't appear to have any relationship to their issue. What's the best way to handle this situation?",
    choices: {
      A: "Repeat your understanding of the issue to the customer and provide an estimate and follow-up time",
      B: "Refuse the repair until the customer calms down",
      C: "Inform the customer of their mistake with the proposed repair",
      D: "Refuse to make any commitments until the computer is examined",
    },
    answer: "A",
    reason:
      "The best response in a stressful situation is to listen, ask questions, and refrain from arguing or acting defensive. The technician should focus on resolving the issue.",
  },
  {
    question:
      "Daniel, a user in the finance department, has purchased a new Android smartphone and installed a number of productivity apps. After a day of use, Daniel finds the phone displaying a large number of advertisements when browsing the Internet. Which of the following tasks should Daniel perform after completing a factory reset?",
    choices: {
      A: "Disable Bluetooth",
      B: "Check app sharing permissions",
      C: "Run a speed test on the cellular connection",
      D: "Verify the source of each app before installation",
    },
    answer: "D",
    reason:
      "It's a best practice to check the legitimacy of each app installed onto a smartphone to avoid installing malware that may display unwanted ads.",
  },
  {
    question:
      "A network administrator has configured all of their wireless access points with WPA3 security. Which of the following technologies would be associated with this configuration?",
    choices: {
      A: "RC4",
      B: "TACACS",
      C: "TKIP",
      D: "GCMP",
    },
    answer: "D",
    reason: "WPA3 uses GCMP (Galois/Counter Mode Protocol) for encryption.",
  },
  {
    question:
      "A user has been provided with a username and password to access the corporate VPN. The user has also been provided with a hardware device displaying a six-digit code, and the code changes every 30 seconds. Which of the following would BEST describe the use of this device?",
    choices: {
      A: "ACL",
      B: "Group Policy",
      C: "SMS",
      D: "Least privilege",
      E: "MFA",
    },
    answer: "E",
    reason:
      "MFA (Multi-factor Authentication) adds an additional layer of security, in this case, with a hardware token providing a constantly changing code.",
  },
  {
    question:
      "A user has installed multiple applications over the last week. During the startup process, the computer now takes over fifteen minutes to display the Windows 10 desktop. Which of the following utilities would help the system administrator troubleshoot this issue?",
    choices: {
      A: "defrag",
      B: "Performance Monitor",
      C: "Task Manager",
      D: "robocopy",
    },
    answer: "C",
    reason:
      "Task Manager includes a Startup tab for managing applications that launch during the Windows login process.",
  },
  {
    question:
      "A server administrator is replacing the memory in a database server. Which of the following steps should be followed FIRST?",
    choices: {
      A: "Remove the existing memory modules",
      B: "Wear an air filter mask",
      C: "Disconnect all power sources",
      D: "Connect an ESD strap",
    },
    answer: "C",
    reason:
      "The first step when working inside of a computer or printer is to remove all power sources.",
  },
  {
    question:
      "A technician is dismantling a test lab for a recently completed project, and the lab manager would like to use the existing computers on a new project. However, the security administrator would like to ensure that none of the data from the previous project is accessible on the existing hard drives. Which of the following would be the best way to accomplish this?",
    choices: {
      A: "Quick format",
      B: "Degauss",
      C: "Regular format",
      D: "Reinstall the operating system",
    },
    answer: "C",
    reason:
      "A regular format overwrites each sector of the drive, making the previous data unrecoverable.",
  },
  {
    question:
      "A system administrator needs to view a set of application log files contained in a folder named 'logs.' Which of the following commands should be used to make this folder the current directory?",
    choices: {
      A: "cd logs",
      B: "mv logs",
      C: "dir logs",
      D: "md logs",
    },
    answer: "A",
    reason:
      "The 'cd' command (change directory) is used to navigate to a folder in both Windows and Linux environments.",
  },
  {
    question:
      "A system administrator is configuring a server to use eight bootable partitions on a single SSD. Which of the following partition styles would be the BEST choice for this configuration?",
    choices: {
      A: "MBR",
      B: "NTFS",
      C: "diskpart",
      D: "GPT",
    },
    answer: "D",
    reason:
      "The GPT (GUID Partition Table) partition style allows for up to 128 separate bootable partitions.",
  },
  {
    question:
      "A technician is installing a fresh Windows operating system on a file server. Unfortunately, the drive controller in the system is not recognized during the installation process. Which of the following would be the BEST way to manage this issue?",
    choices: {
      A: "Load third-party drivers",
      B: "Restart the system",
      C: "Use a remote network installation",
      D: "Boot from the recovery partition",
    },
    answer: "A",
    reason:
      "The Windows installation program includes drivers for most hardware devices, but occasionally additional device drivers will need to be added during the installation process.",
  },
  {
    question:
      "A user has noticed their system has been running very slowly over the last few days. They have also noticed files stored on their computer randomly disappear after the files are saved. The user has rebooted the computer, but the same problems continue to occur. Which of the following should the user perform to resolve these issues?",
    choices: {
      A: "Boot to Safe Mode",
      B: "Release and renew the network connection",
      C: "Install anti-malware software",
      D: "Upgrade the system RAM",
    },
    answer: "C",
    reason:
      "A system running slowly and with files randomly disappearing are clear indications of malware. Installing anti-malware software is the best step to identify and remove any existing malware.",
  },
  {
    question:
      "A user in the sales department is attempting to upgrade the operating system of their smartphone, but the smartphone will not start the installation when selected. Which of the following is the MOST likely reason for this issue?",
    choices: {
      A: "Bluetooth is enabled",
      B: "The smartphone storage is nearly full",
      C: "Rotation lock is disabled",
      D: "The phone is connected to a power source",
    },
    answer: "B",
    reason:
      "To upgrade, a smartphone needs enough storage available to download and process the upgrade files. If the storage space is limited, the upgrade will not be processed.",
  },
  {
    question:
      "The hard drive in a macOS desktop has failed and none of the data on the drive was recoverable. A new storage drive has now been installed. Which of the following should be used to restore the data on the computer?",
    choices: {
      A: "Backup and Restore",
      B: "Mission Control",
      C: "Time Machine",
      D: "Disk Utility",
    },
    answer: "C",
    reason:
      "The built-in backup and restore utility in macOS is called Time Machine.",
  },
  {
    question:
      "A user purchased a copy of home tax software and has installed it on their company computer. This morning, the user logs in and finds that the tax software has been automatically removed from the system. Which of the following would be the MOST likely reason for this result?",
    choices: {
      A: "The company per-seat licenses are all in use",
      B: "The software uses an open-source license",
      C: "The user has installed a personal license",
      D: "The software requires a USB key for DRM",
    },
    answer: "C",
    reason:
      "Personally licensed software may not be allowed on company-owned systems if the company has not purchased the license.",
  },
  {
    question:
      "A system administrator is upgrading four workstations from Windows 8.1 to Windows 11. All of the user files and applications are stored on the server, and no documents or settings need to be retained between versions. Which of these installation methods would be the BEST way to provide this upgrade?",
    choices: {
      A: "Factory reset",
      B: "Repair installation",
      C: "Clean install",
      D: "In-place upgrade",
    },
    answer: "C",
    reason:
      "A clean install of Windows 11 will completely delete the previous operating system and install a new version. This is ideal when no documents or settings need to be retained.",
  },
  {
    question:
      "A computer on a manufacturing floor has been identified as a malware-infected system. Which of the following should be the best NEXT step to resolve this issue?",
    choices: {
      A: "Disconnect the network cable",
      B: "Perform a malware scan",
      C: "Disable System Restore",
      D: "Download the latest anti-malware signatures",
    },
    answer: "A",
    reason:
      "The first step is to quarantine the system to prevent any malware from spreading. Disconnecting the network cable is an important step in this process.",
  },
  {
    question:
      "A technician has been called to resolve an issue with a networked laser printer not printing. When the technician arrives on-site, they find the printer will require a hardware replacement. All hardware is managed by a third-party and will take a week before the printer is operational again. Which of the following would be the technician’s best NEXT step?",
    choices: {
      A: "Work on the next ticket in the queue",
      B: "Add a follow-up event for one week later",
      C: "Inform the user of the repair status",
      D: "Order a printer maintenance kit",
    },
    answer: "C",
    reason:
      "Communication is key in situations like these. It's important to inform the user about the repair status and any delays.",
  },
  {
    question:
      "An administrator is upgrading a Windows 8.1 Enterprise x64 computer to Windows 10. The user would like to maintain all applications and files during the upgrade process. Which of the following upgrade options would meet this requirement?",
    choices: {
      A: "Windows 10 Enterprise x86",
      B: "Windows 10 Pro x64",
      C: "Windows 10 Enterprise x64",
      D: "Windows 10 Pro x86",
    },
    answer: "C",
    reason:
      "A Windows upgrade that maintains applications and settings requires the destination version to be the same Windows edition or higher. In this case, Windows 10 Enterprise x64 is the correct choice.",
  },
  {
    question:
      "A user in the marketing department is using an application that randomly shuts down during normal use. When the problem occurs, the application suddenly disappears and no error messages are shown on the screen. Which of the following would provide the system administrator with additional information regarding this issue?",
    choices: {
      A: "System Configuration",
      B: "Event Viewer",
      C: "Device Manager",
      D: "Group Policy Editor",
      E: "SFC",
    },
    answer: "B",
    reason:
      "The Windows Event Viewer can provide extensive logs and information about the system and the applications running in Windows.",
  },
  {
    question:
      "A workstation on a manufacturing floor is taking much longer than normal to boot. Which of the following would be the BEST way to troubleshoot this issue?",
    choices: {
      A: "Replace the CPU",
      B: "Disable the startup applications",
      C: "Upgrade the RAM",
      D: "Install the latest OS patches",
    },
    answer: "B",
    reason:
      "Delays during the boot process can be caused by a single application install creating issues, so disabling startup applications is a straightforward step in troubleshooting.",
  },
  {
    question:
      "A Windows 10 user is installing a new application that also installs a service. Which of the following permissions will be required for this installation?",
    choices: {
      A: "Guest",
      B: "Power User",
      C: "Administrator",
      D: "Standard user",
    },
    answer: "C",
    reason:
      "The Administrator account is the superuser of a Windows device. Installing an application that modifies system files or installs a service requires Administrator access.",
  },
  {
    question:
      "A user working from home is not able to print to a laser printer at the corporate office. Which of the following would be the MOST likely reason for this issue?",
    choices: {
      A: "WPA3 settings",
      B: "Outdated anti-virus signatures",
      C: "Disconnected VPN",
      D: "MDM configuration",
    },
    answer: "C",
    reason:
      "Remote users commonly connect to the corporate office over a VPN. If the VPN link is inactive, the user cannot access resources at the corporate office, including printers.",
  },
  {
    question:
      "An employee has modified the NTFS permissions on a local file share to provide read access to Everyone. However, users connecting from a different computer do not have access to the file. Which of the following is the reason for this issue?",
    choices: {
      A: "The NTFS permissions were not synchronized",
      B: "Share permissions restrict access from remote devices",
      C: "The user is an Administrator",
      D: "Remote users are connecting with Guest accounts",
    },
    answer: "B",
    reason:
      "For users connected over the network, Windows share permissions are used in addition to NTFS permissions to control access. It's likely the share permissions include additional restrictions.",
  },
  {
    question:
      "A healthcare company has replaced some of their desktop computers with laptops and will be disposing of the older computers. The security administrator would like to guarantee none of the existing data on the hard drives could be recovered once the systems are sent to the recycling center. Which of the following methods would meet this requirement?",
    choices: {
      A: "Quick format",
      B: "Reinstall the OS",
      C: "Remove all user folders",
      D: "Shred the drives",
    },
    answer: "D",
    reason:
      "Physically shredding the drives guarantees all data is unrecoverable, which meets the security requirements for disposal.",
  },
  {
    question:
      "A technician has been assigned a support ticket that urgently requests a laptop repair, but there are already many open support tickets ahead of this request. The technician doesn’t recognize the name associated with the ticket. Which of these choices would be the best path to take?",
    choices: {
      A: "Place the ticket into the queue as first-come, first-served",
      B: "Prioritize the support tickets by device type",
      C: "Triage the queue and prioritize the tickets in order of repair complexity",
      D: "Contact the end-user and determine the urgency of the repair",
    },
    answer: "D",
    reason:
      "It's important to evaluate the urgency of the issue. Contacting the end-user to determine the importance of the repair ensures the technician addresses critical issues in a timely manner.",
  },
  {
    question:
      "A user has received a pop-up message on their computer that states applications on their computer are infected with a virus. A technician has determined that the pop-up message is a hoax that needs to be removed from the computer. The technician has disabled System Restore to remove all previous restore points. Which of the following tasks would be the best NEXT step?",
    choices: {
      A: "Update the anti-virus signatures",
      B: "Educate the end-user",
      C: "Schedule anti-virus scans for midnight each day",
      D: "Boot the system with the original installation media",
    },
    answer: "A",
    reason:
      "After disabling System Restore, the next step is remediation. Updating the anti-virus signatures ensures the technician can identify and remove malware with the latest definitions.",
  },
  {
    question:
      "A network administrator needs to manage a switch and firewall in the local data center. Which of the following would be the BEST choice for this requirement?",
    choices: {
      A: "RDP",
      B: "VPN",
      C: "SSH",
      D: "VNC",
    },
    answer: "C",
    reason:
      "SSH (Secure Shell) provides encrypted console communication, making it the best choice for managing network devices like switches and firewalls.",
  },
  {
    question:
      "A user is using a smartphone at their desk, and they occasionally receive a security warning in the browser. After some additional troubleshooting, the technician determines the security warnings are fake. Which of the following should a technician follow to BEST resolve this issue?",
    choices: {
      A: "Put the phone into airplane mode",
      B: "Connect to the corporate network using a VPN connection",
      C: "Run an anti-malware scan on the smartphone",
      D: "Remove any paired Bluetooth devices",
    },
    answer: "C",
    reason:
      "Fake security warnings are a strong indication of malware. Running an anti-malware scan is the best way to identify and resolve this issue.",
  },
  {
    question:
      "Sam, a user on the research and development team, reports that her computer displays the message 'Missing operating system' during boot. A technician runs hardware diagnostics and finds that the RAM, CPU, storage drive, and power supply all pass the tests. The technician then finds that a connected USB flash drive was causing the issue. Which of the following would prevent this issue from occurring in the future?",
    choices: {
      A: "Create a login script",
      B: "Install the latest OS patches",
      C: "Run SFC",
      D: "Modify the BIOS boot order",
    },
    answer: "D",
    reason:
      "If the BIOS is configured to boot from a USB interface prior to the internal storage drive, any bootable flash drive would be used as a boot device. Modifying the BIOS boot order ensures the system boots from the internal drive first.",
  },
  {
    question:
      "Jack, a user, has opened a help desk ticket relating to desktop alerts randomly appearing throughout the day. Most of the alerts contain information about third-party products and services. Which of the following is the MOST likely cause of these messages?",
    choices: {
      A: "On-path attack",
      B: "Corrupted email database",
      C: "OS update failure",
      D: "Adware",
    },
    answer: "D",
    reason:
      "Adware is a type of malware that forces advertisements to appear on a user's desktop. Removing the malware and restoring the system from a known good backup is necessary.",
  },
  {
    question:
      "In which of the following file types would a system administrator expect to see the command, 'cd c:\\source'?",
    choices: {
      A: ".sh",
      B: ".vbs",
      C: ".py",
      D: ".bat",
    },
    answer: "D",
    reason:
      "The .bat file extension refers to Windows batch files. The 'cd' command and reference to the drive letter 'c:' are common in Windows batch files.",
  },
  {
    question:
      "A malware infection has recently been removed from a computer. When starting the operating system, Windows shows errors during the startup process indicating some core operating system files are missing. Which of the following should be used to restore these missing files?",
    choices: {
      A: "gpupdate",
      B: "winver",
      C: "sfc",
      D: "diskpart",
    },
    answer: "C",
    reason:
      "The sfc (System File Checker) command is used to scan and replace any missing or corrupted core operating system files. It is commonly run after removing malware.",
  },
  {
    question:
      "A desktop administrator has determined that an employee in the corporate office has been using their computer to share copyrighted materials on the Internet. Which of the following should be the best NEXT step?",
    choices: {
      A: "Create a firewall rule to block Internet access to this computer",
      B: "Create a hash for each file that was shared",
      C: "Compile a list of licenses for each set of copyrighted materials",
      D: "Retrieve and securely store the computer",
    },
    answer: "D",
    reason:
      "When a security incident occurs, it's important to securely collect and store any evidence. The computer used to share copyrighted materials should be collected and stored until proper authorities can take control of it.",
  },
  {
    question:
      "A system administrator would like to require a specific password complexity for all Active Directory users. Which of the following would be the BEST way to complete this requirement?",
    choices: {
      A: "Login script",
      B: "Folder redirection",
      C: "Port security",
      D: "Group Policy",
    },
    answer: "D",
    reason:
      "Group Policy in Active Directory is the centralized management feature that allows administrators to define desktop and security policies, including password complexity.",
  },
  {
    question:
      "A system administrator is creating a series of shared folders that should not be visible when users browse the network for available resources. What symbol should be added to the end of a share name to provide this functionality?",
    choices: {
      A: ". (period)",
      B: "$ (dollar sign)",
      C: "! (exclamation mark / bang)",
      D: "# (hash sign / number sign)",
    },
    answer: "B",
    reason:
      "Windows shares ending with a dollar sign ($) are hidden from normal browsing but can still be accessed if the user knows the share name.",
  },
  {
    question:
      "Jack, a user, is having problems with the 802.11 wireless connection on his iOS phone. Although there are names appearing in the network list, his phone does not show any connectivity to a wireless network. Jack has confirmed that airplane mode is not enabled, Bluetooth is on, and VPN is not enabled. Which of the following is the MOST likely reason for this lack of wireless connectivity?",
    choices: {
      A: "The phone does not include a data plan",
      B: "The wireless network is disabled",
      C: "The Bluetooth connection is conflicting with the Wi-Fi",
      D: "The Wi-Fi password is incorrect",
      E: "The wireless radio is disabled",
    },
    answer: "D",
    reason:
      "Since wireless network names are visible, but Jack is not connected to a network, it's most likely that the authentication process failed due to an incorrect Wi-Fi password.",
  },
  {
    question:
      "A desktop administrator is upgrading the video adapter in a workstation. Which of the following should the administrator use during this process?",
    choices: {
      A: "Tone generator",
      B: "Anti-static strap",
      C: "Safety goggles",
      D: "Toner vacuum",
    },
    answer: "B",
    reason:
      "An anti-static strap helps prevent electrostatic discharge (ESD), which can damage sensitive components inside the computer when replacing or upgrading hardware.",
  },
  {
    question:
      "A help desk director would like to identify and track computer systems that have been returned for service or moved from one location to another. Which of the following would be the BEST solution for these requirements?",
    choices: {
      A: "Cable labels",
      B: "Asset tags",
      C: "Topology diagrams",
      D: "Login names",
    },
    answer: "B",
    reason:
      "Asset tags are used to track equipment within an organization. They allow the company to manage and track the location of devices as they are moved or serviced.",
  },
  {
    question:
      "A technician is troubleshooting a computer infected with a virus. The user thought they were opening a spreadsheet, but the file was actually a virus executable. Which of the following Windows options were MOST likely associated with this issue?",
    choices: {
      A: "Always show icons, never thumbnails",
      B: "Display the full path in the title bar",
      C: "Always show menus",
      D: "Hide extensions for known file types",
    },
    answer: "D",
    reason:
      "With extensions hidden, it's difficult to know the type of file based only on the filename. A file named 'Monthly Orders' might be a spreadsheet or it could be an executable containing a virus.",
  },
  {
    question:
      "A network consulting firm is upgrading the Internet firewalls for a large corporation. The proposal includes a description of the project and the network topology changes required to support the upgrade. The proposal also describes the risks involved in the process of making this upgrade. Which of the following would be the LAST step in this upgrade?",
    choices: {
      A: "Detailed upgrade plan",
      B: "Backout plan",
      C: "Change control application",
      D: "End-user acceptance",
    },
    answer: "D",
    reason:
      "The last step in the change control process is to get end-user acceptance and sign-off on the changes made.",
  },
  {
    question:
      "An organization has been tasked with increasing the minimum password length. A systems administrator has created a policy to require all passwords to be at least ten characters long for all users. When testing this policy in the lab, a laptop computer allowed the creation of eight-character passwords. Which of the following commands should be used to apply this new policy on the laptop?",
    choices: {
      A: "net use",
      B: "gpupdate",
      C: "sfc",
      D: "tasklist",
    },
    answer: "B",
    reason:
      "The gpupdate command forces centralized updates, such as password policy changes, to be activated on target devices.",
  },
  {
    question:
      "A technician has been tasked with removing malware on a training room laptop. After updating the anti-virus software and removing the malware, the technician creates a backup of the system. After the training class ends, the technician is notified that the malware has returned. Which of the following steps was missed and caused the system to be infected again?",
    choices: {
      A: "Boot to a pre-installation environment",
      B: "Identify malware symptoms",
      C: "Disable System Restore before removal",
      D: "Update to the latest BIOS version",
    },
    answer: "C",
    reason:
      "Disabling System Restore prevents the malware from reinfecting the system through existing restore points.",
  },
  {
    question:
      "A data center manager requires each server to maintain at least fifteen minutes of uptime during a power failure. Which of these would be the BEST choice for this requirement?",
    choices: {
      A: "Cloud-based storage",
      B: "UPS",
      C: "Redundant power supplies",
      D: "Surge suppressor",
    },
    answer: "B",
    reason:
      "A UPS (Uninterruptible Power Supply) provides short-term battery backup during power outages.",
  },
  {
    question:
      "A financial corporation is deploying tablets to their salespeople in the field. The company would like to ensure that the data on the tablets would remain private if the devices were ever stolen or lost. Which of the following would be the BEST way to meet this requirement?",
    choices: {
      A: "Use full device encryption",
      B: "Require multi-factor authentication",
      C: "Install a locator application",
      D: "Use a firewall app",
    },
    answer: "A",
    reason:
      "Full device encryption ensures that all data on the tablet is protected, even if the device is lost or stolen.",
  },
  {
    question:
      "A system administrator is adding an additional drive to a server and extending the size of an existing volume. Which of the following utilities would provide a graphical summary of the existing storage configuration?",
    choices: {
      A: "Disk Management",
      B: "Performance Monitor",
      C: "Event Viewer",
      D: "Task Scheduler",
      E: "Device Manager",
    },
    answer: "A",
    reason:
      "The Disk Management utility provides a graphical overview of the disk configuration, status, and free space.",
  },
  {
    question:
      "While using a laptop during presentations, a company vice president has found her system randomly locks up. While the problem is occurring, the screen continues to display the last presentation slide but none of the mouse or keyboard buttons work. To regain control, the vice president must power down and reboot her computer. Which of the following would be the BEST option for troubleshooting this issue?",
    choices: {
      A: "Examine the Task Manager",
      B: "Install an anti-malware utility",
      C: "Run the presentation software in Safe Mode",
      D: "Check the Event Viewer",
    },
    answer: "D",
    reason:
      "The Event Viewer can provide detailed information about events leading up to the system lock-up, aiding in troubleshooting.",
  },
  {
    question:
      "A system administrator needs to upgrade a training room of twenty systems to the latest Windows version. Which of the following would be the MOST efficient method of performing this upgrade process?",
    choices: {
      A: "Recovery partition",
      B: "Remote network installation",
      C: "Repair installation",
      D: "USB key",
    },
    answer: "B",
    reason:
      "A remote network installation allows for simultaneous upgrades on multiple systems, making it the most efficient method.",
  },
  {
    question:
      "A user has opened a help desk ticket for application slowdowns and unwanted pop-up windows. A technician updates the anti-virus software, scans the computer, and removes the malware. The technician then schedules future scans and creates a new restore point. Which of the following should be the NEXT step in the removal process?",
    choices: {
      A: "Disable System Restore",
      B: "Update the anti-virus signatures",
      C: "Quarantine the system",
      D: "Educate the end user",
    },
    answer: "D",
    reason:
      "After malware has been removed and the system is protected, it is important to educate the end user on preventing future issues and when to seek support.",
  },
  {
    question:
      "A technician is cleaning out a laser printer with a toner spill. Which of the following would be the MOST important for this cleaning process?",
    choices: {
      A: "ESD mat",
      B: "UPS",
      C: "Anti-static bag",
      D: "Air filter mask",
    },
    answer: "D",
    reason:
      "An air filter mask is essential for protecting the lungs from toner particles during the cleaning process.",
  },
  {
    question:
      "Sam, a user in the accounting department, has opened a help desk ticket due to problems accessing the website of the company’s payroll service provider. While testing other website connections on Sam’s computer, the technician finds that many pop-up windows are displayed. Which of the following would be the BEST way for the technician to resolve this issue?",
    choices: {
      A: "Uninstall the browser and reinstall with a different version",
      B: "Restore the workstation from a known good backup",
      C: "Start in Safe Mode and connect to the payroll website",
      D: "Modify the browser’s proxy settings",
    },
    answer: "B",
    reason:
      "Restoring the system from a known good backup ensures that all malware is removed, resolving the pop-up and connectivity issues.",
  },
  {
    question:
      "A business partner in a different country needs to access an internal company server during the very early morning hours. The internal firewall will limit the partner’s access to this single server. Which of these would be the MOST important security task to perform on this server?",
    choices: {
      A: "Install the latest OS patches",
      B: "Remove the server from the Active Directory domain",
      C: "Use only 64-bit applications",
      D: "Run a weekly anti-virus scan",
    },
    answer: "A",
    reason:
      "Keeping the OS patched is critical to prevent vulnerabilities when external access is allowed to the server.",
  },
  {
    question:
      "A Linux administrator has been asked to upgrade the web server software on a device. Which of the following would provide the administrator with the appropriate rights and permissions for this upgrade?",
    choices: {
      A: "chmod",
      B: "apt-get",
      C: "dig",
      D: "sudo",
    },
    answer: "D",
    reason:
      "The sudo command grants the necessary superuser permissions to execute administrative tasks such as upgrading software.",
  },
  {
    question:
      "A user is connecting their laptop to an external monitor and keyboard, but the laptop goes into sleep mode if the laptop screen is shut. Which of the following would modify this configuration to keep the laptop running when the lid is closed?",
    choices: {
      A: "Power Options",
      B: "Device Manager",
      C: "Personalization",
      D: "User Accounts",
    },
    answer: "A",
    reason:
      "The Power Options in the Control Panel allow configuration changes for the behavior when closing the laptop lid.",
  },
  {
    question:
      "A network administrator is configuring a wireless network at a small office. The administrator would like to allow wireless access for all computers but exclude a single kiosk in the lobby. Which of the following configuration settings would meet this requirement?",
    choices: {
      A: "SSID suppression",
      B: "Content filtering",
      C: "Static IP addressing",
      D: "DHCP reservation",
      E: "MAC filtering",
    },
    answer: "E",
    reason:
      "MAC filtering allows or denies network access based on the hardware address of the wireless adapter, making it suitable for excluding specific devices.",
  },
  {
    question:
      "After booting, a laptop computer is showing a black screen instead of the normal Windows login prompt. The logs from the update server show drivers on the laptop were automatically updated overnight. Which of the following would be the BEST way to resolve this issue?",
    choices: {
      A: "Reinstall the operating system",
      B: "Rebuild the User Profile",
      C: "Start in VGA mode and roll back the driver",
      D: "Upgrade the BIOS",
    },
    answer: "C",
    reason:
      "Starting in VGA mode allows access to the system, where the problematic video driver can be rolled back.",
  },
  {
    question:
      "A security administrator has received an alert that a user’s workstation in the shipping department has attempted to communicate to a command and control server for a well-known botnet. The logs on the workstation show that the user manually installed a new Internet browser the previous day. Which of the following would be the BEST next step for troubleshooting this issue?",
    choices: {
      A: "Uninstall the new browser",
      B: "Backup the user's documents",
      C: "Roll back to a previous restore point",
      D: "Disable the user's account",
    },
    answer: "D",
    reason:
      "The user's account should be disabled to quarantine the system and prevent further network access until the issue is resolved.",
  },
  {
    question:
      "A technician is installing a new wireless network in a small remote office. Which of the following should the technician choose to provide the highest level of security on the network?",
    choices: {
      A: "WPA3",
      B: "MAC filtering",
      C: "Static IP addressing",
      D: "SSID suppression",
    },
    answer: "A",
    reason:
      "WPA3 provides the highest level of wireless encryption and is considered the most secure method for protecting data over the network.",
  },
  {
    question:
      "A technician is troubleshooting a computer infected with a virus. The user thought they were opening a spreadsheet, but the file was actually a virus executable. Which of the following Windows options were MOST likely associated with this issue?",
    choices: {
      A: "Always show icons, never thumbnails",
      B: "Display the full path in the title bar",
      C: "Always show menus",
      D: "Hide extensions for known file types",
    },
    answer: "D",
    reason:
      "With extensions hidden, it's difficult to know the type of file based only on the filename. A file named 'Monthly Orders' might be a spreadsheet or it could be an executable containing a virus.",
  },

  {
    question:
      "A network consulting firm is upgrading the Internet firewalls for a large corporation. The proposal includes a description of the project and the network topology changes required to support the upgrade. The proposal also describes the risks involved in the process of making this upgrade. Which of the following would be the LAST step in this upgrade?",
    choices: {
      A: "Detailed upgrade plan",
      B: "Backout plan",
      C: "Change control application",
      D: "End-user acceptance",
    },
    answer: "D",
    reason:
      "The last step in the change control process is to get end-user acceptance and sign-off on the changes made.",
  },
  {
    question:
      "An organization has been tasked with increasing the minimum password length. A systems administrator has created a policy to require all passwords to be at least ten characters long for all users. When testing this policy in the lab, a laptop computer allowed the creation of eight-character passwords. Which of the following commands should be used to apply this new policy on the laptop?",
    choices: {
      A: "net use",
      B: "gpupdate",
      C: "sfc",
      D: "tasklist",
    },
    answer: "B",
    reason:
      "The gpupdate command forces centralized updates, such as password policy changes, to be activated on target devices.",
  },
  {
    question:
      "A technician has been tasked with removing malware on a training room laptop. After updating the anti-virus software and removing the malware, the technician creates a backup of the system. After the training class ends, the technician is notified that the malware has returned. Which of the following steps was missed and caused the system to be infected again?",
    choices: {
      A: "Boot to a pre-installation environment",
      B: "Identify malware symptoms",
      C: "Disable System Restore before removal",
      D: "Update to the latest BIOS version",
    },
    answer: "C",
    reason:
      "Disabling System Restore prevents the malware from reinfecting the system through existing restore points.",
  },
  {
    question:
      "A data center manager requires each server to maintain at least fifteen minutes of uptime during a power failure. Which of these would be the BEST choice for this requirement?",
    choices: {
      A: "Cloud-based storage",
      B: "UPS",
      C: "Redundant power supplies",
      D: "Surge suppressor",
    },
    answer: "B",
    reason:
      "A UPS (Uninterruptible Power Supply) provides short-term battery backup during power outages.",
  },
  {
    question:
      "A financial corporation is deploying tablets to their salespeople in the field. The company would like to ensure that the data on the tablets would remain private if the devices were ever stolen or lost. Which of the following would be the BEST way to meet this requirement?",
    choices: {
      A: "Use full device encryption",
      B: "Require multi-factor authentication",
      C: "Install a locator application",
      D: "Use a firewall app",
    },
    answer: "A",
    reason:
      "Full device encryption ensures that all data on the tablet is protected, even if the device is lost or stolen.",
  },
  {
    question:
      "A system administrator is adding an additional drive to a server and extending the size of an existing volume. Which of the following utilities would provide a graphical summary of the existing storage configuration?",
    choices: {
      A: "Disk Management",
      B: "Performance Monitor",
      C: "Event Viewer",
      D: "Task Scheduler",
      E: "Device Manager",
    },
    answer: "A",
    reason:
      "The Disk Management utility provides a graphical overview of the disk configuration, status, and free space.",
  },
  {
    question:
      "While using a laptop during presentations, a company vice president has found her system randomly locks up. While the problem is occurring, the screen continues to display the last presentation slide but none of the mouse or keyboard buttons work. To regain control, the vice president must power down and reboot her computer. Which of the following would be the BEST option for troubleshooting this issue?",
    choices: {
      A: "Examine the Task Manager",
      B: "Install an anti-malware utility",
      C: "Run the presentation software in Safe Mode",
      D: "Check the Event Viewer",
    },
    answer: "D",
    reason:
      "The Event Viewer can provide detailed information about events leading up to the system lock-up, aiding in troubleshooting.",
  },
  {
    question:
      "A system administrator needs to upgrade a training room of twenty systems to the latest Windows version. Which of the following would be the MOST efficient method of performing this upgrade process?",
    choices: {
      A: "Recovery partition",
      B: "Remote network installation",
      C: "Repair installation",
      D: "USB key",
    },
    answer: "B",
    reason:
      "A remote network installation allows for simultaneous upgrades on multiple systems, making it the most efficient method.",
  },
  {
    question:
      "A user has opened a help desk ticket for application slowdowns and unwanted pop-up windows. A technician updates the anti-virus software, scans the computer, and removes the malware. The technician then schedules future scans and creates a new restore point. Which of the following should be the NEXT step in the removal process?",
    choices: {
      A: "Disable System Restore",
      B: "Update the anti-virus signatures",
      C: "Quarantine the system",
      D: "Educate the end user",
    },
    answer: "D",
    reason:
      "After malware has been removed and the system is protected, it is important to educate the end user on preventing future issues and when to seek support.",
  },
  {
    question:
      "A technician is cleaning out a laser printer with a toner spill. Which of the following would be the MOST important for this cleaning process?",
    choices: {
      A: "ESD mat",
      B: "UPS",
      C: "Anti-static bag",
      D: "Air filter mask",
    },
    answer: "D",
    reason:
      "An air filter mask is essential for protecting the lungs from toner particles during the cleaning process.",
  },
  {
    question:
      "Sam, a user in the accounting department, has opened a help desk ticket due to problems accessing the website of the company’s payroll service provider. While testing other website connections on Sam’s computer, the technician finds that many pop-up windows are displayed. Which of the following would be the BEST way for the technician to resolve this issue?",
    choices: {
      A: "Uninstall the browser and reinstall with a different version",
      B: "Restore the workstation from a known good backup",
      C: "Start in Safe Mode and connect to the payroll website",
      D: "Modify the browser’s proxy settings",
    },
    answer: "B",
    reason:
      "Restoring the system from a known good backup ensures that all malware is removed, resolving the pop-up and connectivity issues.",
  },
  {
    question:
      "A business partner in a different country needs to access an internal company server during the very early morning hours. The internal firewall will limit the partner’s access to this single server. Which of these would be the MOST important security task to perform on this server?",
    choices: {
      A: "Install the latest OS patches",
      B: "Remove the server from the Active Directory domain",
      C: "Use only 64-bit applications",
      D: "Run a weekly anti-virus scan",
    },
    answer: "A",
    reason:
      "Keeping the OS patched is critical to prevent vulnerabilities when external access is allowed to the server.",
  },
  {
    question:
      "A Linux administrator has been asked to upgrade the web server software on a device. Which of the following would provide the administrator with the appropriate rights and permissions for this upgrade?",
    choices: {
      A: "chmod",
      B: "apt-get",
      C: "dig",
      D: "sudo",
    },
    answer: "D",
    reason:
      "The sudo command grants the necessary superuser permissions to execute administrative tasks such as upgrading software.",
  },
  {
    question:
      "A user is connecting their laptop to an external monitor and keyboard, but the laptop goes into sleep mode if the laptop screen is shut. Which of the following would modify this configuration to keep the laptop running when the lid is closed?",
    choices: {
      A: "Power Options",
      B: "Device Manager",
      C: "Personalization",
      D: "User Accounts",
    },
    answer: "A",
    reason:
      "The Power Options in the Control Panel allow configuration changes for the behavior when closing the laptop lid.",
  },
  {
    question:
      "A network administrator is configuring a wireless network at a small office. The administrator would like to allow wireless access for all computers but exclude a single kiosk in the lobby. Which of the following configuration settings would meet this requirement?",
    choices: {
      A: "SSID suppression",
      B: "Content filtering",
      C: "Static IP addressing",
      D: "DHCP reservation",
      E: "MAC filtering",
    },
    answer: "E",
    reason:
      "MAC filtering allows or denies network access based on the hardware address of the wireless adapter, making it suitable for excluding specific devices.",
  },
  {
    question:
      "After booting, a laptop computer is showing a black screen instead of the normal Windows login prompt. The logs from the update server show drivers on the laptop were automatically updated overnight. Which of the following would be the BEST way to resolve this issue?",
    choices: {
      A: "Reinstall the operating system",
      B: "Rebuild the User Profile",
      C: "Start in VGA mode and roll back the driver",
      D: "Upgrade the BIOS",
    },
    answer: "C",
    reason:
      "Starting in VGA mode allows access to the system, where the problematic video driver can be rolled back.",
  },
  {
    question:
      "A security administrator has received an alert that a user’s workstation in the shipping department has attempted to communicate to a command and control server for a well-known botnet. The logs on the workstation show that the user manually installed a new Internet browser the previous day. Which of the following would be the BEST next step for troubleshooting this issue?",
    choices: {
      A: "Uninstall the new browser",
      B: "Backup the user's documents",
      C: "Roll back to a previous restore point",
      D: "Disable the user's account",
    },
    answer: "D",
    reason:
      "The user's account should be disabled to quarantine the system and prevent further network access until the issue is resolved.",
  },
  {
    question:
      "A technician is installing a new wireless network in a small remote office. Which of the following should the technician choose to provide the highest level of security on the network?",
    choices: {
      A: "WPA3",
      B: "MAC filtering",
      C: "Static IP addressing",
      D: "SSID suppression",
    },
    answer: "A",
    reason:
      "WPA3 provides the highest level of wireless encryption and is considered the most secure method for protecting data over the network.",
  },
  // ];

  // const core2QuestionsB = [
  {
    question:
      "A technician is delivering a new laptop to a user and moving the older laptop to a different user. Which of the following would allow the existing hard drive to be used but prevent recovery of any of the previous user’s data?",
    choices: {
      A: "Regular format",
      B: "Run a defragmentation",
      C: "Connect the laptop to the Windows Domain",
      D: "Delete the \\Users folder",
    },
    answer: "A",
    reason:
      "A regular format in Windows will overwrite each sector with zeros, preventing data recovery.",
  },
  {
    question:
      "A company has just performed annual laser printer maintenance and has accumulated hundreds of used toner cartridges. Which of the following would be the BEST way to dispose of the old cartridges?",
    choices: {
      A: "Take to a hazardous waste facility",
      B: "Return to the manufacturer",
      C: "Separate the parts and dispose of normally",
      D: "Contract with an incineration company",
    },
    answer: "A",
    reason:
      "The toner in laser printer cartridges can be harmful, so it's important to dispose of the cartridges at a local hazardous waste facility.",
  },
  {
    question:
      "A user needs to modify a spreadsheet for an upcoming meeting. The spreadsheet is currently stored on a remote computer in a shared drive. The user would like to access the shared drive as a drive letter inside of Windows File Explorer. Which of the following command line options would provide this functionality?",
    choices: {
      A: "tasklist",
      B: "net use",
      C: "diskpart",
      D: "netstat",
    },
    answer: "B",
    reason:
      "The net use command will assign a local drive letter to a network share.",
  },
  {
    question:
      "A macOS server administrator needs a backup system to allow the recovery of data from any point in the last thirty days. Which of the following should be used for this requirement?",
    choices: {
      A: "Backup and Restore",
      B: "Remote Disc",
      C: "Spaces",
      D: "Time Machine",
    },
    answer: "D",
    reason:
      "Time Machine is the backup utility included with macOS and creates backups automatically.",
  },
  {
    question: "Why would a technician use an ESD strap?",
    choices: {
      A: "Protect electronic parts from extreme heat",
      B: "Keep electronic parts dry and free from moisture",
      C: "Prevent damage from static electricity",
      D: "Protect computer parts from dust",
    },
    answer: "C",
    reason:
      "An ESD strap prevents damage from static electricity by grounding the user to the equipment.",
  },
  {
    question:
      "A desktop administrator is upgrading an older computer to support the 64-bit version of Windows 10 Pro. The computer currently has: 1 GHz CPU, 1 GB of RAM, 50 GB of free storage space, and 1024 x 768 video resolution. Which of the following should be upgraded to support the Windows 10 installation?",
    choices: {
      A: "CPU",
      B: "RAM",
      C: "Storage space",
      D: "Video resolution",
    },
    answer: "B",
    reason:
      "The 64-bit version of Windows 10 requires a minimum of 2 GB of system memory. Since this system only has 1 GB of RAM, it will need an upgrade to install Windows 10 x64.",
  },
  {
    question:
      "Jack, a technician, is scheduled to replace a faulty motherboard today, but the motherboard delivery has been delayed and will not arrive until tomorrow. The new motherboard will repair a laptop used by a company executive. Which of the following would be the BEST way to handle these events?",
    choices: {
      A: "Move the installation to the next business day",
      B: "Schedule another repair into today's newly opened time slot",
      C: "Ask the delivery company for a refund on the shipping charges",
      D: "Contact the end user and inform them of the shipping issue",
    },
    answer: "D",
    reason:
      "It's important to keep an open line of communication with the end user, especially if delays occur. This allows the user to make alternate plans if needed.",
  },
  {
    question:
      "A system administrator has been tasked with locating all of the log files contained within an application folder. The folder currently contains over a thousand files, and only a portion of them have a .log extension. Which of these Windows commands would be the BEST way to find these files?",
    choices: {
      A: "sfc",
      B: "diskpart",
      C: "robocopy",
      D: "dir",
    },
    answer: "D",
    reason:
      "The dir command lists files from the command line, and it includes filtering options like 'dir *.log' to find files with a specific extension.",
  },
  {
    question:
      "A user runs a corporate app on their smartphone that downloads a database each time the app is started. This download process normally takes a few seconds, but today the download is taking minutes to complete. Which of the following should a technician follow as the best NEXT troubleshooting step?",
    choices: {
      A: "Disable Bluetooth",
      B: "Run a network speed check",
      C: "Charge the smartphone battery",
      D: "Check the cloud storage resource usage",
    },
    answer: "B",
    reason:
      "A slow download usually indicates a network issue, so running a network speed check would provide insight into the connectivity problem.",
  },
  {
    question:
      "A system administrator is analyzing a problem with a USB flash drive on a Windows 10 computer. When the flash drive is inserted, the CPU utilization increases to 100%. The administrator would like to disable one of the computer’s USB controllers for troubleshooting. Which of the following would provide this functionality?",
    choices: {
      A: "Services",
      B: "Performance Monitor",
      C: "Event Viewer",
      D: "Device Manager",
    },
    answer: "D",
    reason:
      "The Device Manager allows administrators to enable, disable, and manage hardware drivers, including USB controllers.",
  },
  {
    question:
      "A user is reporting some apps launched on their mobile phone will show an error message and then disappear without starting. This problem occurs with a group of apps normally used during the work day. Which of the following tasks would be the FIRST step for troubleshooting this issue?",
    choices: {
      A: "Install the previous version of the apps",
      B: "Connect the phone to a power source",
      C: "Power cycle the phone",
      D: "Disable the GPS radio",
    },
    answer: "C",
    reason:
      "Power cycling the phone is a non-invasive first troubleshooting step that resets the operating system, which may resolve the issue before making any configuration or app changes.",
  },
  {
    question:
      "A technician has been asked to power down and store a server that has been exploited by an external attacker. The legal department will be performing tests and gathering information from this server. Which of the following would be MOST important to ensure the integrity of the server data?",
    choices: {
      A: "Report the server location to the proper channels",
      B: "Compile all support tickets associated with the server",
      C: "Maintain a chain of custody",
      D: "Take photos of the server in the storage room",
    },
    answer: "C",
    reason:
      "Maintaining a chain of custody ensures that the data is not tampered with or altered, which is critical for legal investigations and data integrity.",
  },
  {
    question:
      "Jack, a user, has opened a help desk ticket to remove malware from his laptop. A previous removal occurred two weeks earlier with a similar malware infection. Which of the following was missed during the first malware removal?",
    choices: {
      A: "Restart the computer",
      B: "Educate the end-user",
      C: "Enable System Protection",
      D: "Quarantine infected systems",
    },
    answer: "B",
    reason:
      "Educating the end-user on best practices to avoid malware could prevent future infections. This is often a crucial step in malware removal that may have been missed.",
  },
  {
    question:
      "Which of the following features would be found in Windows 10 Pro but not in Windows 10 Home?",
    choices: {
      A: "32-bit and 64-bit versions",
      B: "Domain access",
      C: "RDP client",
      D: "Windows Workgroup",
    },
    answer: "B",
    reason:
      "Domain access is only available in Windows 10 Pro, allowing devices to be connected to a corporate network domain.",
  },
  {
    question:
      "A medical research company is using laptop computers when visiting testing centers. The IT security team is concerned about a data breach if a laptop is lost or stolen. Which of the following would be the BEST way to manage this issue?",
    choices: {
      A: "BIOS password",
      B: "Authenticator application",
      C: "Full disk encryption",
      D: "Biometric authentication",
      E: "Cable lock",
    },
    answer: "C",
    reason:
      "Full disk encryption ensures that all data on the laptop is protected, making it inaccessible even if the laptop is lost or stolen.",
  },
  {
    question:
      "A user would like to encrypt a small group of files in a shared folder without modifying other files on the drive. Which of the following would be the BEST way to accomplish this?",
    choices: {
      A: "EFS",
      B: "Save the files 'as Administrator'",
      C: "BitLocker",
      D: "Save the files with a dollar sign at the end of the filename",
    },
    answer: "A",
    reason:
      "EFS (Encrypting File System) allows users to encrypt individual files or groups of files without encrypting the entire drive.",
  },
  {
    question:
      "A mobile user is using apps on their smartphone for all business tasks. To ensure that no data will be lost, the smartphone will need to have multiple backups each day. The user travels most of the time and rarely visits the home office. Which of the following would be the best way to provide these backups?",
    choices: {
      A: "Connect an external USB drive",
      B: "Use incremental backups each night",
      C: "Connect the smartphone to a laptop",
      D: "Use a cloud backup service",
    },
    answer: "D",
    reason:
      "A cloud backup service provides automatic backups throughout the day, ideal for a user who travels frequently.",
  },
  {
    question:
      "A desktop administrator is moving an SSD from one laptop to another. Which of the following should be used to protect the SSD during the move?",
    choices: {
      A: "Padded envelope",
      B: "Anti-static bag",
      C: "Box with foam filler",
      D: "Cloth wrap",
    },
    answer: "B",
    reason:
      "An anti-static bag protects the SSD from electrostatic discharge during transport.",
  },
  {
    question:
      "A user is performing a series of Google searches, but the results pages are displaying links and advertisements from a different website. This issue occurs each time a Google search is performed. The same Google search on a different computer results in a normal Google results page. Which of the following would resolve this issue?",
    choices: {
      A: "Run the search from Safe Mode",
      B: "Install the latest operating system patches",
      C: "Run a malware removal utility",
      D: "Login as a different user",
    },
    answer: "C",
    reason:
      "A browser hijack is likely caused by malware. Running a malware removal utility can resolve the issue.",
  },
  {
    question:
      "Jack, a user in the accounting department, is having an issue with his smartphone reaching websites and retrieving mail when working from home. Inside the office, the phone appears to work normally. Which of the following would be the best NEXT step for troubleshooting this issue?",
    choices: {
      A: "Verify the network configuration at home",
      B: "Install the latest operating system updates",
      C: "Connect the phone to power when working at home",
      D: "Restart the smartphone after arriving at home",
    },
    answer: "A",
    reason:
      "Since the phone works fine at the office, the issue likely lies with the user's home network configuration.",
  },
  {
    question:
      "A security administrator has been asked to reinstall Windows on a web server diagnosed with a rootkit infection. Which of the following installation methods would be the BEST choice for this server?",
    choices: {
      A: "In-place upgrade",
      B: "Remote network installation",
      C: "Clean install",
      D: "Repair installation",
    },
    answer: "C",
    reason:
      "A clean install ensures that all malware, including rootkits, is completely removed by reinstalling the operating system from scratch.",
  },
  {
    question:
      "A local coffee shop has a public wireless network for customers and a private wireless network for company devices. The shop owner wants to be sure that customers can never connect to the company network. Which of the following should be configured on this network?",
    choices: {
      A: "Install a new access point for company devices",
      B: "Configure WPA3 on the company network",
      C: "Require static IP addresses on the customer network",
      D: "Assign MAC filters to the company network",
      E: "Use a firewall between the customer and corporate network",
    },
    answer: "B",
    reason:
      "WPA3 adds password protection to ensure that only authorized users can connect to the company's network.",
  },
  {
    question:
      "A user in the shipping department has logged into the Windows domain. However, the desktop does not show the user’s normal wallpaper and all of the user’s spreadsheets and documents in the 'My Documents' folder are missing. Which of these would be the BEST way to restore the user’s normal work environment?",
    choices: {
      A: "Rename the user’s folder and delete their profile in the registry",
      B: "Boot into Safe Mode and disable all startup applications",
      C: "Add the user to the Administrator group",
      D: "Update to the latest operating system version",
    },
    answer: "A",
    reason:
      "Renaming the user's folder and deleting their profile from the registry will reset the profile and resolve the issue caused by a corrupted user profile.",
  },
  {
    question:
      "A company’s shipping department maintains ten different computers to print shipping labels and track outgoing shipments. All of the systems are displaying an error when they access a third-party shipping management website over a secure connection. Which of the following would be the MOST likely reason for this issue?",
    choices: {
      A: "The computers have not been updated with the latest OS patches",
      B: "The website certificate has expired",
      C: "The local computer storage drives are not encrypted",
      D: "The systems are infected with malware",
    },
    answer: "B",
    reason:
      "An expired website certificate is the most likely reason for all systems being unable to connect securely to the third-party website.",
  },
  {
    question:
      "A manufacturing company performs a third-party audit of their accounting records each year. The auditors use laptops provided by the company to access internal resources. When the audit is complete, the auditors should be prevented from logging on until the following audit process begins. Which of the following would be the BEST way to accomplish this?",
    choices: {
      A: "Uninstall the audit software",
      B: "Disable the user accounts between audits",
      C: "Remove the auditor accounts from all Windows groups",
      D: "Require two-factor authentication for the auditor accounts",
    },
    answer: "B",
    reason:
      "Disabling the auditor accounts between audits prevents them from logging into the system when they are not needed.",
  },
  {
    question:
      "A manufacturing company is donating some older computers to a local charity. Which of the following should be done to ensure that the existing hard drives could still be used but none of the existing data would be recoverable?",
    choices: {
      A: "Degaussing",
      B: "Regular format",
      C: "Shredder",
      D: "Quick format",
    },
    answer: "B",
    reason:
      "A regular format will overwrite every sector with zeros, ensuring that recovery software cannot restore any data on the drive.",
  },
  {
    question:
      "A user's video editing workstation often performs an overnight rendering process. On some mornings, the user is presented with a login screen instead of the rendering completion page. A technician finds the building occasionally loses power overnight. Which of the following should be used to avoid these issues with the video editing workstation?",
    choices: {
      A: "Use a surge suppressor",
      B: "Save the rendered file to an external storage drive",
      C: "Create a separate partition for user documents",
      D: "Install a UPS",
    },
    answer: "D",
    reason:
      "A UPS (Uninterruptible Power Supply) protects the workstation from power outages and allows continued operation during brief power interruptions.",
  },
  {
    question:
      "A desktop administrator is troubleshooting an older computer that has been slowing down as more applications and files are stored on the hard drive. Which of the following commands would be the BEST choice for increasing the performance of this computer?",
    choices: {
      A: "defrag",
      B: "format",
      C: "sfc",
      D: "xcopy",
      E: "winver",
    },
    answer: "A",
    reason:
      "The defragmentation utility reorganizes fragmented files, improving the overall read and write times on the hard drive.",
  },
  {
    question:
      "A user is receiving alerts on their desktop computer stating, 'Access to this PC has been blocked for security reasons.' A technician has determined this message was not created by the company's security software. Which of the following would be the best NEXT step in this troubleshooting process?",
    choices: {
      A: "Update the desktop computer operating system",
      B: "Check the certificate of the corporate web server",
      C: "Restart the desktop computer",
      D: "Run an anti-malware utility",
    },
    answer: "D",
    reason:
      "Running an anti-malware utility is the best next step to determine if malware is causing the false security alert.",
  },
  {
    question:
      "A system administrator has inadvertently installed a Trojan horse that has deleted a number of files across many Windows file shares. The Trojan also had access to user documents and login credentials and transmitted numerous documents to an off-site file storage system. Which of the following would limit the scope of future exploits?",
    choices: {
      A: "Require multi-factor authentication",
      B: "Disable all guest accounts",
      C: "Modify the default permissions",
      D: "Configure full disk encryption",
      E: "Require complex passwords",
      F: "Require a screensaver lock",
    },
    answer: "C",
    reason:
      "Modifying the default permissions limits the access a Trojan horse would have if it compromises a user's account, reducing the potential damage.",
  },
  {
    question:
      "A technician has created a Windows image that can be used across all of the computers in a test lab. Which of the following would be the best way to deploy these images?",
    choices: {
      A: "Clean install",
      B: "Remote network installation",
      C: "Repair installation",
      D: "Remote Disc",
    },
    answer: "B",
    reason:
      "Using a remote network installation allows multiple systems to be imaged simultaneously without requiring separate installation media, making it an efficient deployment method.",
  },
  {
    question:
      "Which of the following Windows Share permissions has the priority when assigning access on a mapped drive?",
    choices: {
      A: "Allow",
      B: "Full control",
      C: "List folder contents",
      D: "Deny",
    },
    answer: "D",
    reason:
      "In Windows, the 'Deny' permission takes priority over all other permissions. If a user is denied access, it will override any 'Allow' permissions that may be set.",
  },
  {
    question:
      "A data center manager would like to ensure that a power fault on a server would not be harmful to employees. Which of the following would be the BEST choice for this requirement?",
    choices: {
      A: "Electrical ground",
      B: "Battery backup",
      C: "Air filter mask",
      D: "ESD mat",
    },
    answer: "A",
    reason:
      "An electrical ground safely diverts electrical faults away from people, protecting them from electrical hazards.",
  },
  {
    question:
      "A user in the shipping department has received a call from someone claiming to be from the IT Help Desk. The caller asks the user to disclose their location, employee ID, and login credentials. Which of the following would describe this situation?",
    choices: {
      A: "Denial of service",
      B: "Social engineering",
      C: "Brute force",
      D: "Shoulder surfing",
    },
    answer: "B",
    reason:
      "The caller is using social engineering techniques to deceive the user into revealing sensitive information.",
  },
  {
    question:
      "A desktop administrator has just removed malware from a user’s desktop computer and has configured the system to automatically update anti-virus signatures and perform a scan each night. Which of the following should be the NEXT step in the removal process?",
    choices: {
      A: "Enable System Protection",
      B: "Educate the end-user",
      C: "Quarantine the computer",
      D: "Boot to Safe Mode",
    },
    answer: "A",
    reason:
      "After malware removal, System Protection should be re-enabled to allow the creation of restore points, which had been disabled during the cleanup process.",
  },
  {
    question:
      "A security administrator is installing a new VPN connection for remote users. The administrator would like all users to authenticate with their Windows Active Directory credentials. Which of the following technologies would provide this functionality?",
    choices: {
      A: "RADIUS",
      B: "WPA3",
      C: "TKIP",
      D: "AES",
    },
    answer: "A",
    reason:
      "RADIUS is commonly used to authenticate remote users with a centralized database like Active Directory, providing secure access via VPN.",
  },
  {
    question:
      "Which of the following partition types limit a Windows installation to a maximum partition size of 2 TB?",
    choices: {
      A: "FAT32",
      B: "GPT",
      C: "APFS",
      D: "MBR",
    },
    answer: "D",
    reason:
      "MBR is an older partition style that limits partitions to a maximum size of 2 TB.",
  },
  {
    question:
      "A system administrator has just updated fifty servers to the latest version of an application, and the updated software has been working as expected for the last three days. Which of the following change management steps should be followed NEXT?",
    choices: {
      A: "Create a backout plan",
      B: "Determine the scope of the changes",
      C: "Document the changes",
      D: "Determine the risk for the upgrade process",
    },
    answer: "C",
    reason:
      "After successfully deploying the changes, the next step in change management is to document the updates for future reference and to ensure proper record keeping.",
  },
  {
    question:
      "A help desk technician has been tasked with rebuilding an email server that recently crashed. Which of the following would be the BEST source for this information?",
    choices: {
      A: "Compliance report",
      B: "Acceptable use policies",
      C: "Network topology map",
      D: "Knowledge base",
    },
    answer: "D",
    reason:
      "A knowledge base typically contains technical documentation and procedures that would assist with rebuilding the email server.",
  },
  {
    question:
      "A server administrator is installing a 4 TB drive in a database server and would like to use all free space as a single partition. Which of the following technologies should be used with this drive?",
    choices: {
      A: "FAT32",
      B: "MBR",
      C: "Active Directory",
      D: "GPT",
    },
    answer: "D",
    reason:
      "GPT is a partition style that supports larger volumes and would allow the creation of a 4 TB partition, whereas MBR and FAT32 have limitations on partition size.",
  },
  {
    question:
      "A user has called the help desk to get assistance with random blue screens on their Windows 10 laptop. The technician finds CPU utilization is constantly high, and many network sites are unavailable or only load half of the site content. The user mentions some random pop-up messages have appeared on the desktop during the workday. Which of the following would be the MOST likely reason for these issues?",
    choices: {
      A: "Storage drive is failing",
      B: "Network proxy settings are incorrect",
      C: "Operating system needs to be updated",
      D: "Laptop has a malware infection",
      E: "Video subsystem is faulty",
    },
    answer: "D",
    reason:
      "High CPU usage, random pop-ups, and intermittent network issues are clear indicators of a malware infection.",
  },
  {
    question:
      "A technician is troubleshooting an issue with an iOS tablet randomly restarting during normal use. A check of the device shows no significant application updates and the operating system was upgraded to a new version three days ago. The user states the tablet was working normally last week. Which of the following would be the MOST likely reason for these random reboots?",
    choices: {
      A: "Faulty OS upgrade",
      B: "Invalid device certificate",
      C: "Malware infection",
      D: "Faulty battery",
      E: "Incorrect network settings",
    },
    answer: "A",
    reason:
      "Since the OS upgrade was the most recent change and the tablet worked fine before, a faulty OS upgrade is the most likely cause.",
  },
  {
    question:
      "A system administrator needs to modify a file in the \\Windows\\Installer directory, but the folder doesn’t appear in the file list. Which of these options would help the system administrator with this task?",
    choices: {
      A: "Safe Mode",
      B: "File Explorer Options",
      C: "User Accounts",
      D: "Internet Options",
    },
    answer: "B",
    reason:
      "File Explorer hides certain system files by default. Adjusting the 'File Explorer Options' to show hidden files would make the directory visible.",
  },
  {
    question:
      "A Linux administrator is modifying a log file and needs to rename the file. Which of the following should be used to make this change?",
    choices: {
      A: "rm",
      B: "mv",
      C: "mkdir",
      D: "pwd",
    },
    answer: "B",
    reason:
      "The 'mv' command in Linux is used to move or rename files, making it the best option for renaming the log file.",
  },
  {
    question:
      "A desktop administrator is troubleshooting poor performance on a user’s laptop computer. The system takes an excessive amount of time during the boot process, and pop-up messages appear while using the word processor and spreadsheet applications. Which of the following steps should the technician do NEXT?",
    choices: {
      A: "Educate the end-user",
      B: "Schedule periodic anti-virus scans",
      C: "Enable System Protection",
      D: "Disconnect the laptop from the network",
    },
    answer: "D",
    reason:
      "Disconnecting the laptop from the network is the first step to quarantine the system and prevent the malware from spreading.",
  },
  {
    question:
      "Jack, an executive, has a laptop that runs very slowly after login and continues running slowly throughout the day. Jack has complained that certain applications cannot be started and others will randomly crash. A check of the laptop shows that the memory utilization is very close to 100%. Which of the following would provide a short-term fix for this issue?",
    choices: {
      A: "Disable startup items",
      B: "Update to the latest OS patches",
      C: "Defragment the hard drive",
      D: "Reboot the computer",
    },
    answer: "A",
    reason:
      "Disabling startup items will help reduce the memory utilization and improve system performance until a more permanent solution is implemented.",
  },
  {
    question:
      "A help desk technician needs to view and control the desktop of a Windows computer at a remote location. Which of the following would be the BEST choice for this task?",
    choices: {
      A: "VPN",
      B: "VNC",
      C: "SSH",
      D: "RDP",
    },
    answer: "D",
    reason:
      "RDP (Remote Desktop Protocol) is integrated into Windows and allows for full control of a remote desktop.",
  },
  {
    question:
      "A technician would like to modify a configuration in a user's UEFI BIOS, but the system will not provide a BIOS configuration hotkey after shutting down and powering on the computer. Which of the following would be the BEST way to address this issue?",
    choices: {
      A: "Change the File Explorer Options",
      B: "Modify the Indexing Options",
      C: "Turn off Fast Startup",
      D: "Start the computer in Safe Mode",
      E: "Modify the Ease of Access settings",
    },
    answer: "C",
    reason:
      "Turning off Fast Startup in the Control Panel Power options allows the technician to regain access to BIOS startup hotkeys.",
  },
  {
    question:
      "A user has noticed their mouse arrow has been moving around the screen without any user intervention. The user has watched the mouse opening applications and changing settings in the Control Panel. Which of the following would be the BEST way for an administrator to resolve this issue?",
    choices: {
      A: "Turn the firewall off and back on again",
      B: "Run an anti-virus scan",
      C: "Remove all recently installed applications",
      D: "Upgrade to the latest OS patches",
    },
    answer: "B",
    reason:
      "The random movement and application opening are clear signs of a malware infection. Running an anti-virus scan is the best step to detect and remove malware.",
  },
  {
    question:
      "A server administrator has been planning an operating system upgrade for a group of important services. The administrator has provided a detailed scope and risk assessment of the change, and the plan has been documented. However, the risk analysis wasn't completed until Friday afternoon, so the change cannot occur over the weekend. Which of the following is preventing the upgrade from occurring?",
    choices: {
      A: "Upgrade file availability",
      B: "Change board approval",
      C: "Not enough time to complete the upgrade",
      D: "Need more people for the upgrade process",
    },
    answer: "B",
    reason:
      "The change board must evaluate and approve the proposed change before it can be implemented. Since the risk analysis was completed late, the change board couldn't approve the upgrade in time.",
  },
  {
    question:
      "A user receives a browser security alert on his laptop when visiting any website that uses HTTPS. If he uses his smartphone, he does not receive any error messages. Which of the following would BEST describe this situation?",
    choices: {
      A: "The date and time on the laptop is incorrect",
      B: "The smartphone is not updated with the latest OS version",
      C: "The laptop has an incorrect subnet mask",
      D: "The laptop does not have the latest anti-virus signatures",
    },
    answer: "A",
    reason:
      "If the date and time on the laptop is incorrect, encryption certificates may appear expired, causing HTTPS security alerts.",
  },

  {
    question:
      "A system administrator would like to perform a Windows installation while users are away from their desks. Which of the following would be the BEST option for this installation?",
    choices: {
      A: "Remote network installation",
      B: "Recovery partition installation",
      C: "Repair installation",
      D: "In-place upgrade",
    },
    answer: "A",
    reason:
      "A remote network installation allows for unattended installations while users are away from their desks, making it the best choice.",
  },
  {
    question:
      "A user in the accounting department has installed a new application for the upcoming tax year. Although the current application worked perfectly, the newer application runs significantly slower. Which of the following should be the FIRST troubleshooting step?",
    choices: {
      A: "Roll back to the previous application",
      B: "Run a repair installation",
      C: "Verify the requirements for the new application",
      D: "Perform a system file check",
    },
    answer: "C",
    reason:
      "The first step in troubleshooting would be to check if the system meets the requirements of the new application, as it may require more resources.",
  },
  {
    question:
      "A macOS user needs encrypt all of the information on their laptop. Which of the following would be the BEST choice for this requirement?",
    choices: {
      A: "Spaces",
      B: "Remote Disc",
      C: "FileVault",
      D: "Keychain",
    },
    answer: "C",
    reason:
      "FileVault provides full disk encryption for macOS devices, ensuring all data on the laptop is secure.",
  },

  {
    question:
      "A user has opened a help desk ticket regarding the battery life in her three-year-old smartphone. If a power source is not available, the phone battery is usually depleted by the middle of the workday. She uses the smartphone to access resources across the VPN, send and receive email, and run company-related apps. Her average screen time during the day usually exceeds six hours. Which of the following would be the MOST likely reason for this battery issue?",
    choices: {
      A: "The phone is consuming more power than usual",
      B: "The battery capacity is decreased",
      C: "The company apps need to be updated",
      D: "The LCD screen is faulty",
    },
    answer: "B",
    reason:
      "Smartphone batteries degrade over time, and after three years, the battery capacity has likely decreased, leading to shorter battery life.",
  },
  {
    question:
      "An administrator has identified and removed malware on a corporate desktop computer. Which of the following malware removal steps should be performed NEXT?",
    choices: {
      A: "Disconnect the computer from the corporate network",
      B: "Educate the end-user",
      C: "Schedule periodic anti-virus scans",
      D: "Disable System Restore",
    },
    answer: "C",
    reason:
      "After removing malware, scheduling periodic anti-virus scans helps ensure the system stays protected and identifies future threats.",
  },
  {
    question:
      "A graphics designer has been editing image files that have become increasingly large over the last few months. The designer is now receiving error messages from their graphics application complaining of low temporary file cache space. Which of the following would be the best NEXT step?",
    choices: {
      A: "Replace all system RAM",
      B: "Increase available storage space",
      C: "Roll back to a previous restore point",
      D: "Rebuild the user's profile",
    },
    answer: "B",
    reason:
      "Increasing the available storage space is the best solution to resolve temporary file cache space issues caused by large graphic files.",
  },

  {
    question:
      "An administrator is troubleshooting an error message that appears each time an application is started. The administrator has uninstalled and reinstalled the application, but the error message still appears. Which of the following would be the BEST next troubleshooting step?",
    choices: {
      A: "Use Performance Manager to monitor the system",
      B: "Check the Event Viewer logs",
      C: "View the hardware settings in Device Manager",
      D: "Disable unneeded background processes in Services",
    },
    answer: "B",
    reason:
      "The Event Viewer logs contain detailed information on system and application errors, making it the best next step in troubleshooting.",
  },
  {
    question:
      "A user in the accounting department has received an email asking for payment of an outstanding invoice and a link to a third-party payment site. The email contains purchase information that appears to be correct, but additional research shows that the invoice number is not valid. Which of the following would BEST describe this attack type?",
    choices: {
      A: "Phishing",
      B: "Denial of service",
      C: "Shoulder surfing",
      D: "Evil twin",
    },
    answer: "A",
    reason:
      "This is a classic phishing attack, where the attacker tries to deceive the user into providing sensitive information through a fake payment site.",
  },
  {
    question:
      "A user has dropped off their laptop at the repair desk. A message taped to the laptop states: 'Doesn't work.' Which of the following would be the BEST next step?",
    choices: {
      A: "Start the laptop and look for any issues",
      B: "Call the customer and ask for more information",
      C: "Replace the power adapter and try booting the laptop",
      D: "Use a diagnostics boot CD to run hardware tests",
    },
    answer: "B",
    reason:
      "Contacting the customer for more details helps clarify the issue, allowing for more focused and efficient troubleshooting.",
  },
  {
    question: "Which of these describes a free, open-source operating system?",
    choices: {
      A: "macOS",
      B: "Linux",
      C: "Windows",
      D: "iOS",
    },
    answer: "B",
    reason:
      "Linux is a free and open-source operating system developed by a community of contributors, unlike the proprietary systems listed.",
  },
  {
    question:
      "An IT manager would like to provide users with the option to recover daily versions of documents and spreadsheets. A user will have the option to roll back to any daily version in the last month. Which of the following would be the BEST way to implement this feature?",
    choices: {
      A: "Create a file-level backup each day",
      B: "Maintain a monthly image level backup",
      C: "Store full backup tapes at an off-site facility",
      D: "Assign each user a USB flash drive",
    },
    answer: "A",
    reason:
      "A daily file-level backup provides users with the option to recover previous versions of their documents as needed.",
  },
  {
    question:
      "A network administrator has a report showing a single user with numerous visits to a website. This website is known to violate the company’s AUP. Which of the following should the administrator do NEXT?",
    choices: {
      A: "Create a firewall filter to block the website",
      B: "Scan all computers with the latest anti-malware signatures",
      C: "Contact the company’s security officer",
      D: "Change the user’s password",
    },
    answer: "C",
    reason:
      "Violations of the Acceptable Use Policy (AUP) should be escalated to the company's security officer to handle any necessary actions or investigations.",
  },
  {
    question:
      "Which of the following script extensions would commonly be used inside of a Microsoft Office application?",
    choices: {
      A: ".vbs",
      B: ".py",
      C: ".bat",
      D: ".js",
    },
    answer: "A",
    reason:
      "Microsoft Visual Basic Scripting (.vbs) is commonly used for automating tasks within Microsoft Office applications.",
  },
  {
    question:
      "A system administrator has installed a SOHO network of five Windows computers. The administrator would like to provide a method of sharing documents and spreadsheets between all of the office computers. Which of the following would be the BEST way to provide this functionality?",
    choices: {
      A: "Domain",
      B: "Proxy server",
      C: "Workgroup",
      D: "Remote Desktop",
    },
    answer: "C",
    reason:
      "A Windows Workgroup allows for file sharing between computers in a small network, which is ideal for a small office home office (SOHO) setup.",
  },
  {
    question:
      "An employee used their tablet to take pictures of the company's newest product. Those pictures were posted on an industry rumor website the following week. Which of the following should be evaluated as the MOST likely security concern?",
    choices: {
      A: "Cloud storage",
      B: "USB flash drive use",
      C: "Application updates",
      D: "Deleted email messages",
    },
    answer: "A",
    reason:
      "The most likely security concern is that cloud storage services may have inadvertently made the product photos accessible to unauthorized users.",
  },
  {
    question:
      "A manufacturing company in the United States sells monthly subscriptions from their website. Which of the following regulated data types would be the MOST important to manage?",
    choices: {
      A: "Personal government-issued information",
      B: "Credit card transactions",
      C: "Healthcare data",
      D: "Software license terms",
    },
    answer: "B",
    reason:
      "Managing credit card transactions is critical due to the strict regulations and standards for payment card information in the Payment Card Industry Data Security Standard (PCI DSS).",
  },
  {
    question:
      "A user is traveling to a conference, and they would like to be sure that any messages sent from their phone during the event remain private while using the event’s wireless network. Which of the following should be configured on this user’s phone?",
    choices: {
      A: "VPN",
      B: "Strong password",
      C: "Network-based firewall",
      D: "Multi-factor authentication",
    },
    answer: "A",
    reason:
      "Configuring a VPN ensures that any communication from the user's phone is encrypted, maintaining the privacy of messages sent over the wireless network.",
  },
  {
    question:
      "A company is installing a new wireless access point in a conference room. Which of the following would provide the BEST security for this network?",
    choices: {
      A: "SSID",
      B: "WPA3",
      C: "TKIP",
      D: "Kerberos",
    },
    answer: "B",
    reason:
      "WPA3 is the most secure encryption standard for wireless networks, offering the best security for the new access point.",
  },
  {
    question:
      "A server administrator has configured an automated process to backup VM snapshots each evening during non-working hours. The backups will be stored on a series of high-density tape drives. How can the administrator confirm that these backups will be useful when a server recovery is needed?",
    choices: {
      A: "Send the backups to an off-site facility",
      B: "Connect the tape drives to a battery backup",
      C: "Create separate file-level backups",
      D: "Perform occasional recovery tests",
    },
    answer: "D",
    reason:
      "Performing occasional recovery tests ensures that the backup data can be successfully restored and confirms the reliability of the backup process.",
  },
  {
    question:
      "A system administrator needs to configure a laptop to support inbound Remote Desktop services for the help desk team. Which of these Control Panel features provides access to these settings?",
    choices: {
      A: "Internet Options",
      B: "Devices and Printers",
      C: "Network and Sharing Center",
      D: "System",
    },
    answer: "D",
    reason:
      "The System utility in Control Panel includes settings for configuring Remote Desktop access, making it the correct feature to use.",
  },
  {
    question:
      "A user has dropped off a laptop to the help desk and states the laptop is experiencing a problem during the boot process. Which of these options would be the best path to resolve this issue?",
    choices: {
      A: "When the customer provides enough information, stop them and let them know when they can pick up the laptop",
      B: "Take the laptop and tell the customer to return tomorrow",
      C: "Repeat an understanding of the issue back to the customer for verification",
      D: "Provide recommendations to the customer with proper technical IT explanations",
    },
    answer: "C",
    reason:
      "Repeating an understanding of the issue back to the customer ensures that the problem is correctly documented and helps verify the details before proceeding with troubleshooting.",
  },
  {
    question:
      "A technician is upgrading the motherboard in a server. Which of the following should be the FIRST task when beginning this upgrade?",
    choices: {
      A: "Wear safety goggles",
      B: "Connect an ESD strap",
      C: "Remove any motherboard batteries",
      D: "Disconnect from all power sources",
    },
    answer: "D",
    reason:
      "The first step in working inside a computer should always be to disconnect the system from the power source to ensure safety.",
  },
  {
    question:
      "A system administrator is installing a new video editing application on a user’s workstation from an installation USB flash drive. However, the installation process fails due to lack of available drive space. Which of the following would be the BEST way to complete the installation process?",
    choices: {
      A: "Use a share drive for the installation source",
      B: "Compress the installation files",
      C: "Install the application to a network share",
      D: "Manually copy the installation files to the application directory",
    },
    answer: "C",
    reason:
      "Installing the application to a network share can bypass the local storage limitations, allowing the installation to complete successfully.",
  },
  {
    question:
      "A user would like to install an image and photo editing program on their home computer, but they would prefer an application without a monthly subscription. Which of the following would be the BEST licensing option for this requirement?",
    choices: {
      A: "Open-source",
      B: "Corporate",
      C: "Personal",
      D: "DRM",
    },
    answer: "A",
    reason:
      "Open-source software is typically free and doesn't require a monthly subscription, making it the best choice for the user.",
  },
  {
    question:
      "A system administrator is troubleshooting an application issue. The application uses an increasing amount of memory until all available RAM is eventually depleted. The computer must be rebooted every few days when this memory issue occurs. Which of the following utilities would show how much RAM is used by this application?",
    choices: {
      A: "Event Viewer",
      B: "Device Manager",
      C: "Task Manager",
      D: "Programs and Features",
    },
    answer: "C",
    reason:
      "Task Manager provides real-time information on memory usage, making it the best tool for identifying applications using excessive RAM.",
  },
  {
    question:
      "An administrator is troubleshooting a desktop computer experiencing a reboot issue. Before the Windows login screen appears, the system reboots in a continuous loop. Which of the following would be the BEST way to address this issue?",
    choices: {
      A: "Start Safe Mode and perform a defragmentation",
      B: "Reinstall the operating system from the original media",
      C: "Update the boot order from the system BIOS",
      D: "Run Startup Repair from the Advanced Boot Options",
    },
    answer: "D",
    reason:
      "Running Startup Repair from the Advanced Boot Options can resolve issues that cause reboot loops, without requiring a full reinstall.",
  },
  {
    question:
      "A user has downloaded a browser add-on that assists with new car purchases. During the installation, the Windows UAC is requesting administrative permissions to continue with the install. Which of these is the MOST likely situation?",
    choices: {
      A: "The operating system requires an update",
      B: "The software is a Trojan horse",
      C: "The workstation is already part of a botnet",
      D: "A worm will be downloaded and installed",
    },
    answer: "B",
    reason:
      "A simple browser add-on shouldn't require administrative permissions. The UAC prompt indicates that the software may be a Trojan horse attempting to make significant changes to the system.",
  },
  {
    question:
      "An organization has distributed new laptops to all of their home-office employees. Although the users at home can successfully connect through the Internet to resources at the corporate office, there have been complaints that printers and shared drives at home are not accessible. Which of the following would explain this issue?",
    choices: {
      A: "Incorrect login credentials",
      B: "Port security is turned on",
      C: "The corporate VPN is enabled",
      D: "Blocked by DLP",
    },
    answer: "C",
    reason:
      "When the corporate VPN is enabled and all traffic is routed through it, users may lose access to local home resources such as printers and shared drives.",
  },
  {
    question:
      "A user on the marketing team is experiencing slower load times and ongoing sluggishness with applications on their laptop. A technician examines the Windows Update logs and finds the monthly updates are failing. Which of the following should be the best NEXT step for resolving this issue?",
    choices: {
      A: "Perform an anti-malware scan",
      B: "Install the Windows Updates manually",
      C: "Increase the amount of RAM in the laptop",
      D: "Re-install the applications",
    },
    answer: "A",
    reason:
      "Slower load times, application sluggishness, and failed updates are common symptoms of a malware infection, making an anti-malware scan the best next step.",
  },
  {
    question:
      "A desktop administrator is troubleshooting an error that randomly causes a workstation to spike to 100% utilization. Which of these utilities would help the administrator track and report on system utilization over a 24-hour period?",
    choices: {
      A: "Performance Monitor",
      B: "Device Manager",
      C: "Services",
      D: "Task Scheduler",
    },
    answer: "A",
    reason:
      "Performance Monitor tracks system utilization over time, including CPU, memory, and network performance, making it the best tool to track spikes in system usage.",
  },
  {
    question:
      "Which of these would be the BEST way to prevent an attacker from modifying default routes on a SOHO wireless network?",
    choices: {
      A: "Configure MAC address filtering",
      B: "Enable WPS connectivity",
      C: "Change the router's default password",
      D: "Disable unneeded interfaces",
    },
    answer: "C",
    reason:
      "Changing the default password on a router prevents unauthorized users from accessing and modifying the router’s configuration, such as default routes.",
  },
];
