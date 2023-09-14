
run all this in node-server folder

npm install express

npm i cors

npm i -g nodemon

npm install mongoose







install mongo db
The error message you're encountering suggests that the mongod command is not recognized in your PowerShell environment. This typically happens when the MongoDB executable is not in your system's PATH, which means PowerShell doesn't know where to find it.

To resolve this issue, you can take the following steps:

Add MongoDB Bin Directory to PATH:

You need to add the MongoDB bin directory to your system's PATH so that PowerShell can locate the mongod executable.

First, determine the location of your MongoDB installation's "bin" directory. It's typically located in the MongoDB installation directory.

Next, you need to add this directory to your system's PATH. You can do this by following these steps:

Press Win + S to open the Windows search bar.
Type "Environment Variables" and select "Edit the system environment variables."
In the System Properties window, click the "Environment Variables..." button.
In the "System Variables" section, scroll down to find the "Path" variable and select it.
Click the "Edit..." button.
Click the "New" button, and then add the path to your MongoDB bin directory.
Click "OK" to close all the windows.
Restart PowerShell:

After adding the MongoDB bin directory to your PATH, you should restart PowerShell to apply the changes. Close and reopen your PowerShell terminal or restart your computer.

Test mongod Again:

Once you've added the bin directory to your PATH and restarted PowerShell, you can try running the mongod command again:

powershell
Copy code
mongod --dbpath ./data
It should now be recognized, and MongoDB should start without issues.

Remember that the exact steps to set the PATH variable may vary depending on your Windows version, so if you encounter any difficulties, you can consult the official MongoDB documentation or your Windows documentation for specific instructions.