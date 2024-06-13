# Read Password String JavaScript Practice

This project demonstrates how to read data from a `password.txt` file and display specific information in a structured format using JavaScript.

## Functionality

- Read data from the `password.txt` file.
- Display `User` and `Command Interpreter` in the following format:

    ```
    User: root, Command interpreter: /run/current-system/sw/bin/bash
    User: messagebus, Command interpreter: /run/current-system/sw/bin/nologin
    User: polkituser, Command interpreter: /run/current-system/sw/bin/nologin
    User: rtkit, Command interpreter: /run/current-system/sw/bin/nologin
    User: lightdm, Command interpreter: /run/current-system/sw/bin/bash
    User: systemd-journal-gateway, Command interpreter: /run/current-system/sw/bin/nologin
    User: systemd-coredump, Command interpreter: /run/current-system/sw/bin/nologin
    User: systemd-network, Command interpreter: /run/current-system/sw/bin/nologin
    User: systemd-resolve, Command interpreter: /run/current-system/sw/bin/nologin
    User: systemd-timesync, Command interpreter: /run/current-system/sw/bin/nologin
    User: nm-openvpn, Command interpreter: /run/current-system/sw/bin/nologin
    ```

- For example, given the entry `polkituser:x:28:999:PolKit daemon:/var/empty:/run/current-system/sw/bin/nologin` in the `password.txt` file:
    - User: polkituser
    - UserID: 999
    - Command Interpreter: /run/current-system/sw/bin/nologin

### Bonus Point

- Only display records if `userId` is greater than 500.

## Usage

1. Ensure you have Node.js installed on your machine.


# Daily task - 2

 - You have to create a function called mergingArray, it will merge 2 arrays the thing is that the return array should not contain duplicate values and values should be in ascending order

 - input 
    arr1 = [2,4,3,5,4,6]
    arr2 = [1,2,6,5,4,6]

 - output
    finalArr = [1,2,3,4,5,6]




