From https://github.com/OfficeDev/Office-Add-in-samples/blob/main/Samples/hello-world/outlook-hello-world/README.md

### Configure a localhost web server and run the sample from localhost

If you prefer to configure a web server and host the add-in's web files from your computer, use the following steps.

1. Install a recent version of [npm](https://www.npmjs.com/get-npm) and [Node.js](https://nodejs.org/) on your computer. To verify if you've already installed these tools, run the commands `node -v` and `npm -v` in your terminal.

1. You need http-server to run the local web server. If you haven't installed this yet you can do this with the following command:

   ```console
   npm install --global http-server
   ```

1. You need Office-Addin-dev-certs to generate self-signed certificates to run the local web server. If you haven't installed this yet you can do this with the following command:

   ```console
   npm install --global office-addin-dev-certs
   ```

1. Clone or download this sample to a folder on your computer. Then, go to that folder in a console or terminal window.
1. Run the following command to generate a self-signed certificate to use for the web server.

   ```console
   npx office-addin-dev-certs install
   ```

   This command will display the folder location where it generated the certificate files.

1. Go to the folder location where the certificate files were generated. Copy the **localhost.crt** and **localhost.key** files to the cloned or downloaded sample folder.

1. Run the following command.

   ```console
   http-server -S -C localhost.crt -K localhost.key --cors . -p 3000
   ```

   The http-server will run and host the current folder's files on `localhost:3000`.

1. Now that your localhost web server is running, you can sideload the **manifest.xml** file provided in the **outlook-hello-world** folder. Using the **manifest-localhost.xml** file, follow the steps in [Sideload Outlook add-in on Windows or Mac](https://learn.microsoft.com/office/dev/add-ins/outlook/sideload-outlook-add-ins-for-testing) to sideload and run the add-in.

